import { createRoot } from "react-dom/client";

import App from "./App";

const app = document.getElementById("root");

if (app !== null) {
    const root = createRoot(app);
    root.render(<App />);
} else {
    console.error("Root element not found");
}
