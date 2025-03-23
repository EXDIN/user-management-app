import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./Routing";
import { Provider } from "react-redux";
import { store } from "./Store";

createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
        <App />
    </Provider>
);
