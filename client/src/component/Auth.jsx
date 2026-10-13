import React, { useState, useEffect } from 'react';

// initialMode prop add kiya
const Auth = ({ initialMode = 'login' }) => {
  const [isLogin, setIsLogin] = useState(initialMode === 'login');

  // Link switch hone par view update hoga
  useEffect(() => {
    setIsLogin(initialMode === 'login');
  }, [initialMode]);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log("Login Data:", { email: formData.email, password: formData.password });
      alert("Login Successfully!");
    } else {
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      console.log("Register Data:", formData);
      alert("Account Created Successfully!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        
        {/* Header Banner */}
        <div className="bg-gray-900 text-white text-center py-6 px-4">
          <h2 className="text-2xl font-bold tracking-wide text-amber-400">
            Luxe Jewelry
          </h2>
          <p className="text-sm text-gray-300 mt-1">
            {isLogin ? "Welcome back! Please login to your account." : "Create an account to explore our collections."}
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-gray-200">
          <button
            type="button"
            onClick={() => setIsLogin(true)}
            className={`w-1/2 py-3 text-center font-semibold text-sm transition-colors duration-200 ${
              isLogin 
                ? "border-b-2 border-amber-500 text-amber-600 bg-amber-50/30" 
                : "text-gray-500 hover:text-gray-800"
            }`}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => setIsLogin(false)}
            className={`w-1/2 py-3 text-center font-semibold text-sm transition-colors duration-200 ${
              !isLogin 
                ? "border-b-2 border-amber-500 text-amber-600 bg-amber-50/30" 
                : "text-gray-500 hover:text-gray-800"
            }`}
          >
            Create Account
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {!isLogin && (
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Full Name</label>
              <input
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full px-4 py-2.5 text-sm border rounded-lg focus:ring-2 focus:ring-amber-400 focus:outline-none border-gray-300"
              />
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="example@mail.com"
              className="w-full px-4 py-2.5 text-sm border rounded-lg focus:ring-2 focus:ring-amber-400 focus:outline-none border-gray-300"
            />
          </div>

          {!isLogin && (
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Phone Number</label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+92 300 1234567"
                className="w-full px-4 py-2.5 text-sm border rounded-lg focus:ring-2 focus:ring-amber-400 focus:outline-none border-gray-300"
              />
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full px-4 py-2.5 text-sm border rounded-lg focus:ring-2 focus:ring-amber-400 focus:outline-none border-gray-300"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-xs text-gray-500 hover:text-gray-700"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {!isLogin && (
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Confirm Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full px-4 py-2.5 text-sm border rounded-lg focus:ring-2 focus:ring-amber-400 focus:outline-none border-gray-300"
              />
            </div>
          )}

          {isLogin && (
            <div className="text-right">
              <a href="#forgot" className="text-xs text-amber-600 hover:underline">
                Forgot password?
              </a>
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-black transition-colors duration-200 shadow-md text-sm mt-2"
          >
            {isLogin ? "Sign In" : "Register Now"}
          </button>

          <p className="text-center text-xs text-gray-500 mt-4">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-amber-600 font-semibold hover:underline ml-1"
            >
              {isLogin ? "Sign Up" : "Sign In"}
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Auth;