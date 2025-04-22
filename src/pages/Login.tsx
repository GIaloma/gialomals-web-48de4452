
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginType, setLoginType] = useState<"client" | "founder">("client");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Demo: founder login (hardcoded), client any other email
    if (loginType === "founder") {
      if (email === "founder@gialoma.com" && password === "founderpassword") {
        navigate("/founder-dashboard");
      } else {
        setError("Invalid founder credentials.");
      }
    } else {
      // Client login accepts any non-empty credentials
      if (email && password) {
        navigate("/client-dashboard");
      } else {
        setError("Please enter your credentials.");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Nav is already on the page */}
      {/* Spacer for nav, then extra space */}
      <div className="h-16" />
      <div className="flex-1 flex items-start justify-center">
        <div className="w-full max-w-md mt-12 bg-white p-8 rounded-xl shadow-lg animate-fade-in">
          <div className="flex justify-center mb-4">
            <img
              src="/lovable-uploads/237f2b3a-fc46-4b28-b6c9-52aa72036706.png"
              alt="Gialoma Logo"
              className="h-14"
            />
          </div>
          <h2 className="text-2xl font-bold text-center mb-2">
            {loginType === "founder"
              ? "Founder Login"
              : "Client Login"}
          </h2>
          <div className="flex justify-center mb-6 gap-3">
            <button
              type="button"
              className={`px-4 py-1 rounded-lg ${
                loginType === "client"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100"
              } transition font-semibold`}
              onClick={() => setLoginType("client")}
            >
              Client
            </button>
            <button
              type="button"
              className={`px-4 py-1 rounded-lg ${
                loginType === "founder"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100"
              } transition font-semibold`}
              onClick={() => setLoginType("founder")}
            >
              Founder
            </button>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="Email"
              value={email}
              autoComplete="username"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="Password"
              value={password}
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg py-2 transition"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
