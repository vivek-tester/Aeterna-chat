import React from 'react';

function SignUpPage() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center p-4 font-display text-text-primary-dark bg-background-dark animated-gradient-bg">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold" style={{ textShadow: '0 0 15px rgba(13, 107, 255, 0.5)' }}>Aeterna</h1>
        </div>
        <div className="bg-card-dark/80 backdrop-blur-xl p-8 rounded-xl border border-border-dark shadow-2xl shadow-primary/10">
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold text-text-primary-dark">Create an Account</h2>
            <p className="text-sm text-text-secondary-dark">Welcome to the future of communication.</p>
          </div>
          <form className="space-y-5">
            <div className="flex flex-col space-y-2">
              <label className="text-sm font-medium text-text-secondary-dark" htmlFor="name">Name</label>
              <div className="glow-border rounded-lg">
                <input className="w-full rounded-lg border border-border-dark bg-[#080808] h-11 px-4 text-sm placeholder:text-text-secondary-dark/70 focus:outline-none focus:ring-0" id="name" placeholder="Your full name" type="text"/>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-sm font-medium text-text-secondary-dark" htmlFor="email">Email</label>
              <div className="glow-border rounded-lg">
                <input className="w-full rounded-lg border border-border-dark bg-[#080808] h-11 px-4 text-sm placeholder:text-text-secondary-dark/70 focus:outline-none focus:ring-0" id="email" placeholder="you@example.com" type="email"/>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-sm font-medium text-text-secondary-dark" htmlFor="password">Password</label>
              <div className="glow-border relative flex w-full items-center rounded-lg">
                <input className="w-full rounded-lg border border-border-dark bg-[#080808] h-11 px-4 pr-10 text-sm placeholder:text-text-secondary-dark/70 focus:outline-none focus:ring-0" id="password" placeholder="Create a strong password" type="password"/>
                <button className="absolute inset-y-0 right-0 flex items-center pr-3 text-text-secondary-dark transition-colors hover:text-primary" type="button">
                  <span className="material-symbols-outlined text-xl">visibility_off</span>
                </button>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-sm font-medium text-text-secondary-dark" htmlFor="confirm-password">Confirm Password</label>
              <div className="glow-border rounded-lg">
                <input className="w-full rounded-lg border border-border-dark bg-[#080808] h-11 px-4 text-sm placeholder:text-text-secondary-dark/70 focus:outline-none focus:ring-0" id="confirm-password" placeholder="Re-enter your password" type="password"/>
              </div>
            </div>
            <div className="pt-2">
              <button className="glow-button flex w-full items-center justify-center rounded-lg bg-primary h-11 px-6 text-sm font-bold text-white shadow-glow focus:outline-none" type="submit">
                Create Account
              </button>
            </div>
          </form>
          <div className="mt-6 text-center">
            <p className="text-sm text-text-secondary-dark">
              Already have an account?
              <a className="font-semibold text-primary transition-all hover:text-blue-400 hover:underline" href="/login">Log in</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
