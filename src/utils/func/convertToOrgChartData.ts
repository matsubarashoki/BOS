import { OrgChartNode, OrgRow } from "../type/type";

// `orgRows` を `orgChartMockData` 形式に変換する関数
export function convertToOrgChartData(rows: OrgRow[]): OrgChartNode[] {
  const map = new Map<string, OrgChartNode>();

  // 各ノードをマップに追加し、子ノードを作成する準備
  rows.forEach((row) => {
    map.set(row.orgId, {
      label: row.Name,
      expanded: true, // 最上位レベルは展開
      children: [],
    });
  });

  // `parentId` を基に親子関係を設定
  rows.forEach((row) => {
    const node = map.get(row.orgId);
    if (node && row.parentId !== "000") {
      const parent = map.get(row.parentId);
      if (parent) {
        parent.children = parent.children || [];
        parent.children.push(node);
      }
    }
  });
  // ルートノードを抽出し、ツリー構造を返す
  return Array.from(map.values()).filter((node) => node.label === "本社");
}
