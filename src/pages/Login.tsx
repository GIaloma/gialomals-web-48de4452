
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { EyeIcon, EyeOffIcon, UserIcon, ShieldIcon } from 'lucide-react';

// Demo users for testing
const validFounders = [
  { email: 'paloma@gialoma.com', password: 'founder123', name: 'Paloma Firgaira' },
  { email: 'gianro@gialoma.com', password: 'founder123', name: 'Gianro Compagno' },
];

const validClients = [
  { email: 'demo@gialoma.com', password: 'password123', name: 'Demo Client' },
];

// Counter storage keys in localStorage
const VISIT_COUNTER_KEY = 'gialoma_visit_counter';
const TODAY_COUNTER_KEY = 'gialoma_today_counter';
const LAST_VISIT_DATE_KEY = 'gialoma_last_visit_date';

const Login = () => {
  const [activeTab, setActiveTab] = useState('client');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');

  // Increment visit counter on page load (only in founder login)
  React.useEffect(() => {
    if (activeTab === 'founder') {
      updateVisitCounters();
    }
  }, [activeTab]);

  const updateVisitCounters = () => {
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
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (activeTab === 'client') {
      // Client authentication
      const client = validClients.find(c => c.email === email && c.password === password);
      
      if (client) {
        // Save login information if "remember me" is checked
        if (rememberMe) {
          localStorage.setItem('gialoma_client_user', JSON.stringify({ name: client.name, type: 'client' }));
        }
        
        // Redirect to client dashboard
        window.location.href = '/client-dashboard';
      } else {
        setError('Invalid email or password. Try using demo@gialoma.com / password123 for demo access.');
      }
    } else {
      // Founder authentication
      const founder = validFounders.find(f => f.email === email && f.password === password);
      
      if (founder) {
        // Save login information if "remember me" is checked
        if (rememberMe) {
          localStorage.setItem('gialoma_logged_in_user', JSON.stringify({ name: founder.name, type: 'founder' }));
        }
        
        // Redirect to founder dashboard
        window.location.href = '/founder-dashboard';
      } else {
        setError('Invalid email or password. Try using paloma@gialoma.com / founder123 for demo access.');
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center bg-gray-50 py-12 px-4">
        <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gialoma-black">Account Login</h2>
            <p className="mt-2 text-gialoma-darkgray">
              Access your personalized dashboard
            </p>
          </div>
          
          <Tabs defaultValue="client" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="client" className="flex items-center justify-center gap-2">
                <UserIcon size={16} />
                <span>Client</span>
              </TabsTrigger>
              <TabsTrigger value="founder" className="flex items-center justify-center gap-2">
                <ShieldIcon size={16} />
                <span>Founder</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="client">
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm mb-4">
                  {error}
                </div>
              )}
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="client-email" className="block text-sm font-medium text-gialoma-darkgray mb-1">
                      Email Address
                    </label>
                    <Input
                      id="client-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="client-password" className="block text-sm font-medium text-gialoma-darkgray mb-1">
                      Password
                    </label>
                    <div className="relative">
                      <Input
                        id="client-password"
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        autoComplete="current-password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full pr-10"
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOffIcon className="h-5 w-5 text-gray-400" />
                        ) : (
                          <EyeIcon className="h-5 w-5 text-gray-400" />
                        )}
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Checkbox
                        id="client-remember-me"
                        checked={rememberMe}
                        onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                        className="mr-2"
                      />
                      <label htmlFor="client-remember-me" className="text-sm text-gialoma-darkgray">
                        Remember me
                      </label>
                    </div>
                    
                    <Link to="/forgot-password" className="text-sm text-gialoma-gold hover:text-gialoma-darkgold">
                      Forgot your password?
                    </Link>
                  </div>
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-gialoma-gold hover:bg-gialoma-darkgold text-white"
                >
                  Sign In as Client
                </Button>
                
                <div className="text-center mt-4">
                  <p className="text-sm text-gialoma-darkgray">
                    Don't have an account?{' '}
                    <Link to="/register" className="text-gialoma-gold hover:text-gialoma-darkgold font-medium">
                      Sign up
                    </Link>
                  </p>
                </div>
              </form>
            </TabsContent>
            
            <TabsContent value="founder">
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm mb-4">
                  {error}
                </div>
              )}
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="founder-email" className="block text-sm font-medium text-gialoma-darkgray mb-1">
                      Email Address
                    </label>
                    <Input
                      id="founder-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="founder-password" className="block text-sm font-medium text-gialoma-darkgray mb-1">
                      Password
                    </label>
                    <div className="relative">
                      <Input
                        id="founder-password"
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        autoComplete="current-password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full pr-10"
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOffIcon className="h-5 w-5 text-gray-400" />
                        ) : (
                          <EyeIcon className="h-5 w-5 text-gray-400" />
                        )}
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Checkbox
                        id="founder-remember-me"
                        checked={rememberMe}
                        onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                        className="mr-2"
                      />
                      <label htmlFor="founder-remember-me" className="text-sm text-gialoma-darkgray">
                        Remember me
                      </label>
                    </div>
                  </div>
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-gialoma-darkgold hover:bg-gialoma-gold text-white"
                >
                  Sign In as Founder
                </Button>
                
                <div className="text-center mt-4 text-sm text-gialoma-darkgray">
                  <p>For demo purposes, use:</p>
                  <p>Email: paloma@gialoma.com</p>
                  <p>Password: founder123</p>
                </div>
              </form>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Login;
