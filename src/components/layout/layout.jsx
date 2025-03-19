import { Outlet } from "react-router-dom";
import { Footer } from "../footer/footer";
import { NavHeader } from "../nav/nav-header";

export function Layout() {
  return (
    <div>
      <NavHeader />
        <Outlet />
      <Footer />
    </div>
  );
}
