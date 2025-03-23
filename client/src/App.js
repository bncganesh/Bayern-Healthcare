import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Home/Homepage';
import Dashboard from './components/Dashboard/Dashboard'
import HealthTopics from './components/Home/HealthTopics'
import Resources from './components/Home/Resources'
import About from './components/Home/About'
import Contact from './components/Home/Contact'
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Profile from './components/Profile/Profile';
import HealthMetrics from './components/HealthMetrics/HealthMetrics';
import Messages from './components/Messages/Messages';

function App() {
  return (<>
{/*<Homepage/>*/}
<Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/health-topics" element={<HealthTopics />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/healthmetrics" element={<HealthMetrics />} />
        <Route path="/messages" element={<Messages />} />
      </Routes>
    </Router>

  </>
  );
}

export default App;
