
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    console.log('Register Data:', formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-8">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <h2 className="mb-2 text-center text-3xl font-bold text-gray-800">
          Create Account
        </h2>

        <p className="mb-6 text-center text-gray-500">
          Join IQRA Jewelry today
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-pink-500"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-pink-500"
          />

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-pink-500"
          />

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Create Password"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-pink-500"
          />

          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-pink-500"
          />

          <button
            type="submit"
            className="w-full rounded-lg bg-amber-800 py-3 font-semibold text-white transition hover:bg-amber-700"
          >
            Create Account
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="font-semibold text-amber-800 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
