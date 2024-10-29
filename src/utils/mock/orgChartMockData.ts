export const orgChartMockData = [
    {
      label: "CEO",
      expanded: true,
      children: [
        {
          label: "管理部",
          expanded: true,
          children: [
            {
              label: "総務",
            },
            {
              label: "経理",
            },
          ],
        },
        {
          label: "開発1部",
          expanded: true,
          children: [
            {
              label: "AIチーム",
            },
            {
              label: "HIチーム",
              data: "hr",
            },
          ],
        },
        {
          label: "開発第二部",
          expanded: true,
          data: "fr",
          children: [
            {
              label: "ローコードチーム",
              data: "fr",
            },
            {
              label: "営業システムチーム",
              data: "ma",
            },
          ],
        },
      ],
    },
  ];
