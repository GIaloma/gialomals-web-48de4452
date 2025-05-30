
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { LogIn, Users, BarChart, FileText, Settings, LogOut, Home } from 'lucide-react';

// Demo users for testing - replace with actual authentication in production
const validUsers = [
  { username: 'paloma', password: 'founder123', name: 'Paloma Firgaira' },
  { username: 'gianro', password: 'founder123', name: 'Gianro Compagno' },
];

// Counter storage key in localStorage
const VISIT_COUNTER_KEY = 'gialoma_visit_counter';
const TODAY_COUNTER_KEY = 'gialoma_today_counter';
const LAST_VISIT_DATE_KEY = 'gialoma_last_visit_date';

const FoundersLogin = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [currentUser, setCurrentUser] = useState<{name: string} | null>(null);
  
  // Dashboard states
  const [activeSection, setActiveSection] = useState('dashboard');
  const [totalVisits, setTotalVisits] = useState(0);
  const [todayVisits, setTodayVisits] = useState(0);
  
  // Initialize or increment counter on page load
  useEffect(() => {
    // Check if we've already counted this visit
    const hasVisited = sessionStorage.getItem('counted_visit');
    
    if (!hasVisited) {
      // Mark that we've counted this visit
      sessionStorage.setItem('counted_visit', 'true');
      
      // Get and increment total visits
      const storedVisits = localStorage.getItem(VISIT_COUNTER_KEY) || '0';
      const newTotalVisits = parseInt(storedVisits) + 1;
      localStorage.setItem(VISIT_COUNTER_KEY, newTotalVisits.toString());
      
      // Check if we need to reset today's counter
      const today = new Date().toDateString();
      const lastVisitDate = localStorage.getItem(LAST_VISIT_DATE_KEY);
      
      if (lastVisitDate !== today) {
        // It's a new day, reset the today counter
        localStorage.setItem(TODAY_COUNTER_KEY, '1');
        localStorage.setItem(LAST_VISIT_DATE_KEY, today);
      } else {
        // Same day, increment today's counter
        const storedTodayVisits = localStorage.getItem(TODAY_COUNTER_KEY) || '0';
        const newTodayVisits = parseInt(storedTodayVisits) + 1;
        localStorage.setItem(TODAY_COUNTER_KEY, newTodayVisits.toString());
      }
    }
    
    // Update our state 
    setTotalVisits(parseInt(localStorage.getItem(VISIT_COUNTER_KEY) || '0'));
    setTodayVisits(parseInt(localStorage.getItem(TODAY_COUNTER_KEY) || '0'));
  }, []);
  
  // Check for existing login state on page load
  useEffect(() => {
    const loggedInUser = localStorage.getItem('gialoma_logged_in_user');
    if (loggedInUser) {
      try {
        const userData = JSON.parse(loggedInUser);
        setIsLoggedIn(true);
        setCurrentUser(userData);
      } catch (e) {
        // Handle corrupt data
        localStorage.removeItem('gialoma_logged_in_user');
      }
    }
  }, []);
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple authentication (replace with real auth in production)
    const user = validUsers.find(u => u.username === username && u.password === password);
    
    if (user) {
      setIsLoggedIn(true);
      setCurrentUser(user);
      setErrorMsg('');
      setShowLogin(false);
      
      // Save login state
      localStorage.setItem('gialoma_logged_in_user', JSON.stringify(user));
    } else {
      setErrorMsg('Invalid username or password');
    }
  };
  
  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    localStorage.removeItem('gialoma_logged_in_user');
  };
  
  const toggleLoginForm = () => {
    if (isLoggedIn) {
      // If logged in, go straight to dashboard
      window.location.href = '/founder-dashboard';
    } else {
      // Otherwise show the login form
      setShowLogin(!showLogin);
    }
  };

  if (isLoggedIn) {
    return (
      <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
        <div className="flex h-full">
          {/* Sidebar */}
          <div className="bg-gray-100 w-64 p-6 flex flex-col shadow-md">
            <div className="flex items-center mb-8">
              <img 
                src="/lovable-uploads/d3975bb5-3e96-450e-a77f-7fd8af9e04de.png" 
                alt="Gialoma Logo" 
                className="h-12 mr-2"
              />
              <div>
                <h2 className="text-xl font-semibold text-gialoma-gold">Founders</h2>
                <p className="text-sm text-gray-600">Dashboard</p>
              </div>
            </div>
            
            <nav className="flex-grow">
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => setActiveSection('dashboard')}
                    className={`flex items-center w-full px-4 py-2 rounded-md ${activeSection === 'dashboard' ? 'bg-gialoma-gold text-white' : 'text-gray-700 hover:bg-gray-200'}`}
                  >
                    <Home className="mr-3 h-5 w-5" />
                    Dashboard
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveSection('website-stats')}
                    className={`flex items-center w-full px-4 py-2 rounded-md ${activeSection === 'website-stats' ? 'bg-gialoma-gold text-white' : 'text-gray-700 hover:bg-gray-200'}`}
                  >
                    <BarChart className="mr-3 h-5 w-5" />
                    Website Stats
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveSection('users')}
                    className={`flex items-center w-full px-4 py-2 rounded-md ${activeSection === 'users' ? 'bg-gialoma-gold text-white' : 'text-gray-700 hover:bg-gray-200'}`}
                  >
                    <Users className="mr-3 h-5 w-5" />
                    User Management
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveSection('content')}
                    className={`flex items-center w-full px-4 py-2 rounded-md ${activeSection === 'content' ? 'bg-gialoma-gold text-white' : 'text-gray-700 hover:bg-gray-200'}`}
                  >
                    <FileText className="mr-3 h-5 w-5" />
                    Content Management
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveSection('settings')}
                    className={`flex items-center w-full px-4 py-2 rounded-md ${activeSection === 'settings' ? 'bg-gialoma-gold text-white' : 'text-gray-700 hover:bg-gray-200'}`}
                  >
                    <Settings className="mr-3 h-5 w-5" />
                    Settings
                  </button>
                </li>
              </ul>
            </nav>
            
            <div className="mt-auto pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-2">Logged in as:</p>
              <p className="font-medium text-gray-700 mb-4">{currentUser?.name}</p>
              <Button 
                variant="outline" 
                className="w-full border-red-500 text-red-500 hover:bg-red-500 hover:text-white flex items-center justify-center"
                onClick={handleLogout}
              >
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="flex-1 p-8">
            {activeSection === 'dashboard' && (
              <div>
                <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                    <h3 className="text-lg font-medium text-gray-500 mb-1">Total Visits</h3>
                    <p className="text-3xl font-bold text-gialoma-gold">{totalVisits}</p>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                    <h3 className="text-lg font-medium text-gray-500 mb-1">Today's Visits</h3>
                    <p className="text-3xl font-bold text-gialoma-gold">{todayVisits}</p>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                    <h3 className="text-lg font-medium text-gray-500 mb-1">Active Users</h3>
                    <p className="text-3xl font-bold text-gialoma-gold">1</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 mb-8">
                  <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
                  <p className="text-gray-500 italic">Recent website activity will be shown here.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                    <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
                    <div className="space-y-3">
                      <Button className="w-full justify-start bg-gialoma-gold hover:bg-gialoma-darkgold">
                        Add New Blog Post
                      </Button>
                      <Button variant="outline" className="w-full justify-start border-gialoma-gold text-gialoma-gold hover:bg-gialoma-gold hover:text-white">
                        Update Service Information
                      </Button>
                      <Button variant="outline" className="w-full justify-start border-gialoma-gold text-gialoma-gold hover:bg-gialoma-gold hover:text-white">
                        View Contact Form Submissions
                      </Button>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                    <h2 className="text-xl font-semibold mb-4">System Notifications</h2>
                    <div className="space-y-3">
                      <div className="p-3 bg-green-50 border border-green-100 rounded-md text-green-800">
                        <p className="text-sm font-medium">All systems operational</p>
                      </div>
                      <div className="p-3 bg-blue-50 border border-blue-100 rounded-md text-blue-800">
                        <p className="text-sm font-medium">New version available</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeSection === 'website-stats' && (
              <div>
                <h1 className="text-2xl font-bold mb-6">Website Statistics</h1>
                <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 mb-8">
                  <h2 className="text-xl font-semibold mb-4">Visit Metrics</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium text-gray-700 mb-2">Traffic Overview</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-gray-50 p-4 rounded-md">
                          <p className="text-sm text-gray-500">Total Visits</p>
                          <p className="text-2xl font-bold text-gialoma-gold">{totalVisits}</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-md">
                          <p className="text-sm text-gray-500">Today's Visits</p>
                          <p className="text-2xl font-bold text-gialoma-gold">{todayVisits}</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-md">
                          <p className="text-sm text-gray-500">Unique Visitors</p>
                          <p className="text-2xl font-bold text-gialoma-gold">{Math.floor(totalVisits * 0.7)}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium text-gray-700 mb-2">Most Visited Pages</h3>
                      <div className="border border-gray-200 rounded-md overflow-hidden">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-gray-50">
                            <tr>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Page</th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Visits</th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">% of Total</th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            <tr>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Home</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{Math.floor(totalVisits * 0.4)}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">40%</td>
                            </tr>
                            <tr>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Services</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{Math.floor(totalVisits * 0.25)}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">25%</td>
                            </tr>
                            <tr>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">About</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{Math.floor(totalVisits * 0.20)}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">20%</td>
                            </tr>
                            <tr>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Contact</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{Math.floor(totalVisits * 0.15)}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">15%</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {(activeSection === 'users' || activeSection === 'content' || activeSection === 'settings') && (
              <div>
                <h1 className="text-2xl font-bold mb-6">{activeSection === 'users' ? 'User Management' : 
                                                         activeSection === 'content' ? 'Content Management' : 'Settings'}</h1>
                <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100 flex flex-col items-center justify-center text-center">
                  <p className="text-gray-500 text-lg mb-4">This section is under development.</p>
                  <p className="text-gray-400">Coming soon!</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <button 
        onClick={toggleLoginForm}
        className="flex items-center text-gialoma-gold hover:text-gialoma-darkgold transition-colors"
        aria-label="Founders Login"
      >
        <LogIn size={16} className="mr-1" /> 
        {isLoggedIn ? 'Dashboard' : 'Founders'}
      </button>
      
      {showLogin && (
        <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg overflow-hidden z-20 border border-gray-200">
          <div className="p-4">
            <h3 className="text-lg font-medium text-gialoma-gold mb-2">Founders Login</h3>
            {errorMsg && <p className="text-red-500 text-sm mb-2">{errorMsg}</p>}
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                <input
                  type="text"
                  id="username"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gialoma-gold focus:border-transparent"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gialoma-gold focus:border-transparent"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-gialoma-gold hover:bg-gialoma-darkgold text-white"
              >
                Login
              </Button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default FoundersLogin;
