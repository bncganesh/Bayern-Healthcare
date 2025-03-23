import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';



const Sidebar = () => {
  
  const navigate = useNavigate();
  
  const handleLogout = () => {
    localStorage.removeItem("loggedInUser"); // Clear cache
    sessionStorage.clear(); // Additional cache clearing (optional)

    navigate('/', { replace: true }); // Redirect to Home

    // Prevent navigating back to the dashboard
    window.history.pushState(null, null, window.location.href);
    window.onpopstate = function () {
      navigate('/', { replace: true });
    };
  };

  return (
    <aside className="sidebar">
      <h2>Bayer Health</h2>
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/profile">My Profile</Link></li>
        <li><Link to="/healthmetrics">Health Metrics</Link></li>
        <li><Link to="/messages">Messages</Link></li>
        <li onClick={handleLogout}><Link >Logout</Link></li>
      </ul>
    </aside>
  )
}
export default Sidebar;