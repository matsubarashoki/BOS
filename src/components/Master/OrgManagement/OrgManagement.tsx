import { Box, Button, Container, useTheme } from "@mui/material";
import { PrimeReactProvider } from "primereact/api";
import { OrganizationChart } from "primereact/organizationchart";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/saga-blue/theme.css";
import { TreeNode } from "primereact/treenode";
import { useState } from "react";

import "./OrgMaster.css";

export default function OrgManagement() {
  const theme = useTheme();

  const [data] = useState<TreeNode[]>([
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
  ]);

  return (
    <PrimeReactProvider>
      <Container maxWidth={false} className="OrgManagement-container">
        <Box className="userManagement-box" sx={{ padding: 2, width: "100%" }}>
          <Box
            className="userManagement-itemBox"
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              padding: 1,
            }}
          >
            <Button
              sx={{
                bgcolor: "#fff",
                borderRadius: "10%",
                border: "solid",
                marginX: 0.5,
              }}
            >
              Add
            </Button>
            <Button
              sx={{
                bgcolor: "#fff",
                borderRadius: "10%",
                border: "solid",
                marginX: 0.5,
              }}
            >
              Edit
            </Button>
            <Button
              sx={{
                bgcolor: "#fff",
                borderRadius: "10%",
                border: "solid",
                marginX: 0.5,
              }}
            >
              Delete
            </Button>
          </Box>

          <div className="card overflow-x-auto">
            <OrganizationChart
              value={data}
              nodeTemplate={(node) => (
                <div>
                  <span>{node.label}</span>
                </div>
              )}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </Box>
      </Container>
    </PrimeReactProvider>
  );
}
