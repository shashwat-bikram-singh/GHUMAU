import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, ArrowRight, Loader2 } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/dashboard');
    }, 600);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen pt-32 pb-20 bg-surface flex flex-col items-center justify-center relative overflow-hidden"
    >
      <motion.div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <motion.div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md mx-auto bg-surface-container-lowest/95 backdrop-blur-xl p-8 md:p-10 rounded-[2rem] ambient-shadow ghost-border"
        >
          <motion.div className="text-center mb-10">
            <h1 className="text-4xl font-display font-bold text-on-surface mb-3 tracking-tight">Welcome Back</h1>
            <p className="text-on-surface-variant text-[0.9375rem]">Enter your details to access your trips.</p>
          </motion.div>

          <motion.form className="space-y-6" onSubmit={handleSubmit}>
            <motion.div>
              <label className="block text-sm font-medium text-on-surface mb-2 pl-1">Email Address</label>
              <motion.div className="relative">
                <motion.div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail size={18} className="text-on-surface-variant" strokeWidth={1.5} />
                </motion.div>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  className="w-full bg-surface-container-low focus:bg-surface-container-lowest text-on-surface placeholder-on-surface-variant/50 rounded-xl py-3.5 pl-12 pr-4 border-2 border-transparent focus:border-primary/20 focus:outline-none transition-all duration-300 text-[0.9375rem]"
                />
              </motion.div>
            </motion.div>

            <motion.div>
              <motion.div className="flex justify-between items-center mb-2 pl-1">
                <label className="block text-sm font-medium text-on-surface">Password</label>
                <span className="text-xs text-primary font-medium cursor-pointer hover:underline">Forgot password?</span>
              </motion.div>
              <motion.div className="relative">
                <motion.div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock size={18} className="text-on-surface-variant" strokeWidth={1.5} />
                </motion.div>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  className="w-full bg-surface-container-low focus:bg-surface-container-lowest text-on-surface placeholder-on-surface-variant/50 rounded-xl py-3.5 pl-12 pr-4 border-2 border-transparent focus:border-primary/20 focus:outline-none transition-all duration-300 text-[0.9375rem]"
                />
              </motion.div>
            </motion.div>

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: loading ? 1 : 1.02 }}
              whileTap={{ scale: loading ? 1 : 0.98 }}
              className="w-full btn-primary py-3.5 flex items-center justify-center gap-2 text-[0.9375rem] font-medium mt-8 disabled:opacity-70"
            >
              {loading ? (
                <Loader2 size={18} className="animate-spin" />
              ) : (
                <>
                  Sign In <ArrowRight size={18} strokeWidth={2} />
                </>
              )}
            </motion.button>
          </motion.form>

          <motion.div className="mt-8 text-center text-[0.9375rem] text-on-surface-variant">
            Don&apos;t have an account?{' '}
            <Link to="/register" className="text-primary font-bold hover:underline">
              Create one
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Login;
