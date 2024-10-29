export const orgChartMockData = [
  {
    label: "本社",
    expanded: true,
    children: [
      {
        label: "営業部",
        expanded: true,
        children: [
          {
            label: "営業一課",
          },
          {
            label: "営業二課",
          },
        ],
      },
      {
        label: "人事部",
        expanded: true,
        children: [
          {
            label: "採用課",
          },
        ],
      },
      {
        label: "技術部",
        expanded: true,
        data: "fr",
        children: [
          {
            label: "技術一課",
            data: "fr",
          },
          {
            label: "技術二課",
            data: "ma",
          },
        ],
      },
      {
        label: "総務部",
        expanded: true,
      },
    ],
  },
];
