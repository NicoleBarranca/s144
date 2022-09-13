import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import BridalHair from "./components/BridalHair";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Homepage from "./components/Homepage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      {/* APP ROUTE */}
      <Route path="/" element={<App />}>
        <Route path="services" element={<Services />} />
        <Route path="bridalhair" element={<BridalHair />} />
        <Route path="contact" element={<Contact />} />
        <Route index element={<Homepage />} />
        <Route
          path="*"
          element={
            <main>
              <p>Oops! Something went wrong!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>
);
