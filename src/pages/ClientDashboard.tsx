
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  BarChart, 
  Users, 
  FileText, 
  MessageSquare, 
  Settings,
  Bell,
  LogOut,
  Menu,
  X,
  ChevronRight,
  Send
} from 'lucide-react';
import { Progress } from '@/components/ui/progress';

// Sample user data
const userData = {
  name: "John Doe",
  email: "john.doe@example.com",
  plan: "Professional",
  nextBilling: "May 15, 2025",
  joinDate: "January 10, 2025",
  avatar: "/placeholder.svg",
  unreadNotifications: 3,
};

// Sample messages for the AI chatbot
const initialMessages = [
  {
    role: 'assistant',
    content: "Hello! I'm your personal AI assistant. How can I help you today?"
  },
  {
    role: 'user',
    content: "Can you help me optimize my team's workflow?"
  },
  {
    role: 'assistant',
    content: "Absolutely! I'd be happy to help with workflow optimization. Let's start by identifying your team's main bottlenecks. Could you tell me a little about your current workflow and where you feel the biggest inefficiencies are?"
  }
];

const ClientDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState('');
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newMessage.trim()) return;
    
    // Add user message
    const userMessage = { role: 'user', content: newMessage };
    setMessages([...messages, userMessage]);
    setNewMessage('');
    
    // Simulate AI response (in a real app, this would be an API call)
    setTimeout(() => {
      const aiResponses = [
        "I understand your concern. Based on what you've shared, I recommend restructuring your team meetings to be more focused and action-oriented. Try implementing a 15-minute daily stand-up meeting where each team member shares what they accomplished yesterday, what they're working on today, and any blockers they're facing.",
        "Looking at your workflow, I notice that your approval process might be creating a bottleneck. Consider implementing a tiered approval system where only certain types of work require senior-level review. This can significantly speed up delivery times while maintaining quality control.",
        "Have you considered using automation for repetitive tasks? I can help you identify processes in your workflow that could be automated, potentially saving your team several hours each week."
      ];
      
      const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
      const assistantMessage = { role: 'assistant', content: randomResponse };
      
      setMessages(prevMessages => [...prevMessages, assistantMessage]);
    }, 1000);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <button 
                className="mr-2 md:hidden"
                onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
              >
                <Menu size={24} />
              </button>
              <Link to="/" className="flex items-center">
                <img src="/logo.svg" alt="Gialoma Life Solutions" className="h-8 w-auto" />
                <span className="ml-2 text-xl font-bold text-gialoma-black hidden md:inline">Gialoma LS</span>
              </Link>
              <button 
                className="ml-4 hidden md:block"
                onClick={toggleSidebar}
              >
                <Menu size={20} />
              </button>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Button variant="ghost" size="icon" className="relative">
                  <Bell size={20} />
                  {userData.unreadNotifications > 0 && (
                    <span className="absolute top-1 right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                      {userData.unreadNotifications}
                    </span>
                  )}
                </Button>
              </div>
              
              <div className="flex items-center">
                <img 
                  src={userData.avatar} 
                  alt={userData.name} 
                  className="h-8 w-8 rounded-full object-cover"
                />
                <span className="ml-2 text-sm font-medium text-gialoma-black hidden md:inline">
                  {userData.name}
                </span>
              </div>
              
              <Button variant="ghost" size="icon">
                <LogOut size={20} />
              </Button>
            </div>
          </div>
        </div>
      </header>
      
      <div className="flex-1 flex">
        {/* Mobile Sidebar */}
        {isMobileSidebarOpen && (
          <div className="fixed inset-0 z-40 md:hidden">
            <div className="absolute inset-0 bg-black/50" onClick={() => setIsMobileSidebarOpen(false)}></div>
            <div className="absolute inset-y-0 left-0 w-64 bg-white shadow-lg">
              <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gialoma-black">Dashboard</h2>
                <Button variant="ghost" size="icon" onClick={() => setIsMobileSidebarOpen(false)}>
                  <X size={20} />
                </Button>
              </div>
              
              <div className="p-4">
                <div className="flex items-center mb-4">
                  <img 
                    src={userData.avatar} 
                    alt={userData.name} 
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gialoma-black">{userData.name}</p>
                    <p className="text-xs text-gialoma-darkgray">{userData.email}</p>
                  </div>
                </div>
                
                <div className="space-y-1">
                  <Button variant="ghost" className="w-full justify-start text-gialoma-darkgray">
                    <BarChart className="mr-2 h-4 w-4" />
                    Dashboard
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-gialoma-darkgray">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    AI Assistant
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-gialoma-darkgray">
                    <FileText className="mr-2 h-4 w-4" />
                    Documents
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-gialoma-darkgray">
                    <Users className="mr-2 h-4 w-4" />
                    Team
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-gialoma-darkgray">
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </Button>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="rounded-md bg-gray-50 p-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gialoma-black">Storage</span>
                      <span className="text-xs text-gialoma-darkgray">70%</span>
                    </div>
                    <Progress value={70} className="h-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Desktop Sidebar */}
        {sidebarOpen && (
          <aside className="hidden md:block w-64 bg-white border-r border-gray-200 pt-5">
            <div className="px-4">
              <div className="flex items-center mb-6">
                <img 
                  src={userData.avatar} 
                  alt={userData.name} 
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gialoma-black">{userData.name}</p>
                  <div className="flex items-center">
                    <span className="text-xs text-gialoma-gold font-medium">{userData.plan} Plan</span>
                    <ChevronRight size={12} className="text-gialoma-darkgray" />
                  </div>
                </div>
              </div>
              
              <div className="space-y-1">
                <Button variant="ghost" className="w-full justify-start text-gialoma-darkgray">
                  <BarChart className="mr-2 h-4 w-4" />
                  Dashboard
                </Button>
                <Button variant="ghost" className="w-full justify-start text-gialoma-darkgray bg-gialoma-gold/10 text-gialoma-gold">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  AI Assistant
                </Button>
                <Button variant="ghost" className="w-full justify-start text-gialoma-darkgray">
                  <FileText className="mr-2 h-4 w-4" />
                  Documents
                </Button>
                <Button variant="ghost" className="w-full justify-start text-gialoma-darkgray">
                  <Users className="mr-2 h-4 w-4" />
                  Team
                </Button>
                <Button variant="ghost" className="w-full justify-start text-gialoma-darkgray">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Button>
              </div>
              
              <div className="mt-10 pt-6 border-t border-gray-200">
                <div className="rounded-md bg-gray-50 p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gialoma-black">Storage</span>
                    <span className="text-xs text-gialoma-darkgray">70%</span>
                  </div>
                  <Progress value={70} className="h-2" />
                </div>
                
                <div className="mt-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gialoma-black">Plan Details</span>
                  </div>
                  <div className="text-xs space-y-1 text-gialoma-darkgray">
                    <div className="flex justify-between">
                      <span>Next billing</span>
                      <span>{userData.nextBilling}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Customer since</span>
                      <span>{userData.joinDate}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-3 text-sm">
                    Manage Subscription
                  </Button>
                </div>
              </div>
            </div>
          </aside>
        )}
        
        {/* Main Content */}
        <main className="flex-1 p-4 md:p-6">
          <Tabs defaultValue="chat">
            <TabsList className="mb-4">
              <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
              <TabsTrigger value="chat">AI Assistant</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
              <TabsTrigger value="team">Team</TabsTrigger>
            </TabsList>
            
            <TabsContent value="dashboard">
              <h1 className="text-2xl font-bold mb-6 text-gialoma-black">Dashboard</h1>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Usage Summary</CardTitle>
                    <CardDescription>Current billing cycle</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm">AI Messages</span>
                          <span className="text-sm">145/500</span>
                        </div>
                        <Progress value={29} className="h-2" />
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm">API Calls</span>
                          <span className="text-sm">278/1000</span>
                        </div>
                        <Progress value={27.8} className="h-2" />
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm">Storage</span>
                          <span className="text-sm">3.5GB/5GB</span>
                        </div>
                        <Progress value={70} className="h-2" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Recent Activity</CardTitle>
                    <CardDescription>Your recent interactions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="text-sm border-b pb-2">
                        <span className="text-gialoma-darkgray block">Yesterday at 2:30 PM</span>
                        <p>Generated AI report for Q1 analysis</p>
                      </li>
                      <li className="text-sm border-b pb-2">
                        <span className="text-gialoma-darkgray block">Apr 15, 2025 at 10:15 AM</span>
                        <p>Created new automation workflow</p>
                      </li>
                      <li className="text-sm">
                        <span className="text-gialoma-darkgray block">Apr 10, 2025 at 4:45 PM</span>
                        <p>Updated team permissions</p>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Quick Stats</CardTitle>
                    <CardDescription>Key metrics this month</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-3 rounded-md">
                        <div className="text-gialoma-darkgray text-sm">Documents</div>
                        <div className="text-2xl font-semibold">24</div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-md">
                        <div className="text-gialoma-darkgray text-sm">Team Members</div>
                        <div className="text-2xl font-semibold">5</div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-md">
                        <div className="text-gialoma-darkgray text-sm">Projects</div>
                        <div className="text-2xl font-semibold">8</div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-md">
                        <div className="text-gialoma-darkgray text-sm">Automations</div>
                        <div className="text-2xl font-semibold">3</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="grid grid-cols-1 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Recommended Actions</CardTitle>
                    <CardDescription>Based on your usage and plan</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium mb-1">Complete Your Profile</h4>
                        <p className="text-sm text-gialoma-darkgray mb-3">
                          Add more information to your profile to get personalized recommendations.
                        </p>
                        <Button variant="outline" size="sm">Complete Now</Button>
                      </div>
                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium mb-1">AI Assistant Tips</h4>
                        <p className="text-sm text-gialoma-darkgray mb-3">
                          Discover advanced prompts to get the most from your AI assistant.
                        </p>
                        <Button variant="outline" size="sm">View Guide</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="chat">
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold text-gialoma-black">AI Assistant</h1>
                <div className="text-sm bg-gialoma-gold/20 text-gialoma-darkgold px-3 py-1 rounded-full">
                  Professional Plan
                </div>
              </div>
              
              <Card className="mb-6">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">What can I help you with today?</CardTitle>
                  <CardDescription>Your personal AI assistant is ready to help</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <Button variant="outline" className="justify-start" onClick={() => setNewMessage("Help me create a project timeline")}>
                      Create a project timeline
                    </Button>
                    <Button variant="outline" className="justify-start" onClick={() => setNewMessage("I need help with team productivity")}>
                      Team productivity tips
                    </Button>
                    <Button variant="outline" className="justify-start" onClick={() => setNewMessage("Optimize my workflow process")}>
                      Workflow optimization
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="h-[500px] flex flex-col">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Chat with AI Assistant</CardTitle>
                  <CardDescription>Your conversation is private and secure</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col h-full pb-0">
                  <div className="flex-1 overflow-y-auto pr-2 mb-4 space-y-4">
                    {messages.map((message, index) => (
                      <div 
                        key={index} 
                        className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div 
                          className={`max-w-[80%] p-3 rounded-lg ${
                            message.role === 'user' 
                              ? 'bg-gialoma-gold text-white' 
                              : 'bg-gray-100 text-gialoma-black'
                          }`}
                        >
                          <p className="text-sm">{message.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <form onSubmit={handleSendMessage} className="border-t pt-4">
                    <div className="relative">
                      <input
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Type your message..."
                        className="w-full pl-4 pr-12 py-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-gialoma-gold focus:border-transparent"
                      />
                      <Button 
                        type="submit" 
                        size="icon" 
                        className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-gialoma-gold hover:bg-gialoma-darkgold text-white rounded-full h-9 w-9"
                      >
                        <Send size={16} />
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="documents">
              <h1 className="text-2xl font-bold mb-6 text-gialoma-black">Documents</h1>
              
              <Card>
                <CardHeader>
                  <CardTitle>Your Documents</CardTitle>
                  <CardDescription>Access and manage your files</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gialoma-darkgray mb-4">
                    This section will contain your documents and files. 
                    Features will include uploading, organizing, and sharing capabilities.
                  </p>
                  <Button>Coming Soon</Button>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="team">
              <h1 className="text-2xl font-bold mb-6 text-gialoma-black">Team Management</h1>
              
              <Card>
                <CardHeader>
                  <CardTitle>Team Members</CardTitle>
                  <CardDescription>Manage your team and permissions</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gialoma-darkgray mb-4">
                    This section will allow you to manage team members, 
                    assign roles, and set permissions.
                  </p>
                  <Button>Coming Soon</Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default ClientDashboard;
