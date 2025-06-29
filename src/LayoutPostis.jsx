import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>

      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
