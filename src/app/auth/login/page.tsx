import React from "react";

export default function Page(){
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold mb-8">Welcome to TaskList Pro</h1>
      <div className="w-full max-w-md">
        <p className="text-center mb-4">
          Enter your email address to get started
        </p>
        <input
          type="email"
          placeholder="name@example.com"
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
        />
        <input
          type="password"
          placeholder="*****"
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
        />
        <button className="w-full bg-blue-500 text-white py-2 rounded-md mb-4">
          Continue with Email
        </button>
        <div className="text-center text-gray-500 mb-4">OR</div>
        <button className="w-full bg-white text-black py-2 border border-gray-300 rounded-md mb-4">
          Continue with Google
        </button>
        <button className="w-full bg-black text-white py-2 rounded-md mb-8">
          Continue with Apple
        </button>
        <p className="text-center">
          Already have an account?{" "}
          <a href="#" className="text-blue-500">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};