import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Lock, ArrowRight } from 'lucide-react';

const Login = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-surface flex flex-col items-center justify-center relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md mx-auto bg-surface-container-lowest/95 backdrop-blur-xl p-8 md:p-10 rounded-[2rem] ambient-shadow ghost-border"
        >
          <div className="text-center mb-10">
            <h1 className="text-4xl font-display font-bold text-on-surface mb-3 tracking-tight">Welcome Back</h1>
            <p className="text-on-surface-variant text-[0.9375rem]">Enter your details to access your trips.</p>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-on-surface mb-2 pl-1">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail size={18} className="text-on-surface-variant" strokeWidth={1.5} />
                </div>
                <input 
                  type="email" 
                  placeholder="name@example.com"
                  className="w-full bg-surface-container-low focus:bg-surface-container-lowest text-on-surface placeholder-on-surface-variant/50 rounded-xl py-3.5 pl-12 pr-4 border-2 border-transparent focus:border-primary/20 focus:outline-none transition-all duration-300 text-[0.9375rem]"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2 pl-1">
                <label className="block text-sm font-medium text-on-surface">Password</label>
                <a href="#" className="text-xs text-primary font-medium hover:underline">Forgot password?</a>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock size={18} className="text-on-surface-variant" strokeWidth={1.5} />
                </div>
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full bg-surface-container-low focus:bg-surface-container-lowest text-on-surface placeholder-on-surface-variant/50 rounded-xl py-3.5 pl-12 pr-4 border-2 border-transparent focus:border-primary/20 focus:outline-none transition-all duration-300 text-[0.9375rem]"
                />
              </div>
            </div>

            <button 
              type="submit"
              className="w-full btn-primary py-3.5 flex items-center justify-center gap-2 text-[0.9375rem] font-medium mt-8"
            >
              Sign In <ArrowRight size={18} strokeWidth={2} />
            </button>
          </form>

          <div className="mt-8 text-center text-[0.9375rem] text-on-surface-variant">
            Don't have an account? <Link to="/register" className="text-primary font-bold hover:underline">Create one</Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
