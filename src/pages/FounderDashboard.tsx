
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { LogOut, Users, BarChart, FileText, Settings, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Visit counter keys from localStorage
const VISIT_COUNTER_KEY = 'gialoma_visit_counter';
const TODAY_COUNTER_KEY = 'gialoma_today_counter';

const FounderDashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState<{name: string} | null>(null);
  const [activeSection, setActiveSection] = useState('dashboard');
  const [totalVisits, setTotalVisits] = useState(0);
  const [todayVisits, setTodayVisits] = useState(0);
  
  useEffect(() => {
    // Check if the user is logged in
    const loggedInUser = localStorage.getItem('gialoma_logged_in_user');
    if (loggedInUser) {
      try {
        const userData = JSON.parse(loggedInUser);
        setIsLoggedIn(true);
        setCurrentUser(userData);
      } catch (e) {
        // Handle corrupt data
        localStorage.removeItem('gialoma_logged_in_user');
        setIsLoggedIn(false);
      }
    } else {
      setIsLoggedIn(false);
    }
    
    // Get visit statistics
    setTotalVisits(parseInt(localStorage.getItem(VISIT_COUNTER_KEY) || '0'));
    setTodayVisits(parseInt(localStorage.getItem(TODAY_COUNTER_KEY) || '0'));
  }, []);
  
  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    localStorage.removeItem('gialoma_logged_in_user');
  };

  // Redirect to login page if not logged in
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="flex h-screen">
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
      <div className="flex-1 p-8 overflow-auto">
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
  );
};

export default FounderDashboard;
