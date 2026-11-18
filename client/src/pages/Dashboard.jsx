
import { Link, Outlet } from "react-router";

function Dashboard() {
  return (
    <div>
      <h1>My Dashboard</h1>

      <nav>
        <Link to="/dashboard/profile">Profile</Link>
        <Link to="/dashboard/settings">Settings</Link>
        <Link to="/dashboard/applications">Applications</Link>
      </nav>

      <Outlet />
    </div>
  );
}

export default Dashboard;
