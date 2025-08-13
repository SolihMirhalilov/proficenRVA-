import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Main from "./Pages/Main";
import News from "./Pages/News";
import MyAdmin from "./Pages/MyAdmin";
import LayoutPanel from "./Admin/LayoutPanel.jsx";

import Footer from "./components/Footer.jsx";
import LayoutPostis from "./LayoutPostis.jsx";

export default function App() {
  return (
    <Routes>
      {/* Главная часть */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
      </Route>

<Route path="/" element={<LayoutPostis/>}>
    <Route path="posts" element={<News />} />
</Route>     

{/* <Route path="" */}

      <Route path="/myAdmin" element={<MyAdmin />} />



      <Route
        path="/AdminPanel"
        element={
         
            <LayoutPanel />
        
        }
      />
    </Routes>
  );
}
