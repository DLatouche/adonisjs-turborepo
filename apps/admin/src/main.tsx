import ReactDOM from "react-dom/client";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/dropzone/styles.css";
import "@repo/ui/theme.css";
import "./styles/global.css";
import { Button } from "@repo/ui";
import { App } from "./features/app/App";
import { StrictMode } from "react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="p-4 "> Hello World from Admin</div>
    <App />
    <Button appName="web">Click me</Button>
  </StrictMode>
);
