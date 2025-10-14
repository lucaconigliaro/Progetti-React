import { LinkComponent, SocialComponent } from "../utils/links.jsx";
import { VscArrowSmallLeft } from "react-icons/vsc";
import { useGlobalContext } from "../context/useGlobalContext.js";

export default function Sidebar() {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <aside className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
      <div className="sidebar-content">
        <header className="nav-header">
          <div className="nav-brand">
            <h3>Drink Team</h3>
          </div>
          <button className="nav-toggler btn icon-btn" onClick={closeSidebar}>
            <VscArrowSmallLeft className="nav-icon" />
          </button>
        </header>
        <div className="container">
          <LinkComponent classLink="sidebar-links" />
        </div>
        <SocialComponent classSocial="sidebar-social" />
      </div>
    </aside>
  );
}
