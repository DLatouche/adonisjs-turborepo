import React from "react";
import ReactDOM from "react-dom/client";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/dropzone/styles.css";
import "@repo/ui/theme.css";
import "./styles/global.css";
import { Button } from "@repo/ui";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="p-4 "> Hello World from web</div>
    <Button appName="web">Click me</Button>
  </React.StrictMode>
);
