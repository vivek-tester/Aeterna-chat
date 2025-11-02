import React from 'react';

function LoginPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center p-4 group/design-root overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,_#000000_25%,_hsl(215,100%,50%)_50%,_hsl(215,90%,55%)_75%,_#000000_100%)] bg-[size:400%_400%] animate-gradient-pan"></div>
      <div className="flex h-full w-full max-w-7xl grow items-center justify-center">
        <div className="flex w-full flex-col items-stretch justify-center md:flex-row md:items-start md:gap-16">
          <div className="flex w-full max-w-md flex-col items-center justify-center space-y-6 rounded-xl bg-card/80 backdrop-blur-sm border border-border py-8 shadow-2xl shadow-brand-blue/10">
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25a8.25 8.25 0 00-8.25 8.25c0 1.902.668 3.65 1.755 5.039a8.25 8.25 0 0013 0c1.087-1.389 1.755-3.137 1.755-5.039A8.25 8.25 0 0012 2.25z" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </div>
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-foreground text-3xl font-bold leading-tight tracking-[-0.033em]">Welcome back</p>
                <p className="text-muted-foreground text-base font-normal leading-normal">Sign in to continue to Aeterna</p>
              </div>
            </div>
            <div className="w-full max-w-sm space-y-6 px-4">
              <div className="input-container glow-border rounded-lg">
                <input className="input-field peer h-12 w-full rounded-lg border border-input bg-input px-3 py-2 text-sm text-foreground ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="email" placeholder="Email or Username" type="text"/>
                <label className="floating-label" htmlFor="email">Email or Username</label>
              </div>
              <div className="relative w-full">
                <div className="input-container glow-border rounded-lg">
                  <input className="input-field peer h-12 w-full rounded-lg border border-input bg-input px-3 py-2 text-sm text-foreground ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pr-10" id="password" placeholder="Password" type="password"/>
                  <label className="floating-label" htmlFor="password">Password</label>
                </div>
                <button aria-label="Toggle password visibility" className="absolute inset-y-0 right-0 flex items-center pr-3 text-muted-foreground hover:text-foreground focus:outline-none">
                  <span className="material-symbols-outlined text-xl">visibility</span>
                </button>
              </div>
              <a className="text-primary text-sm font-medium leading-normal block text-right hover:underline" href="/a">Forgot Password?</a>
            </div>
            <div className="w-full max-w-sm px-4 pt-2">
              <div className="group/button">
                <div className="glow-border rounded-lg">
                  <button className="flex h-12 w-full items-center justify-center rounded-lg bg-primary px-6 font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus-visible:bg-primary/90">Sign In</button>
                </div>
              </div>
            </div>
            <p className="text-muted-foreground text-sm font-normal leading-normal pt-4">Don't have an account? <a className="font-semibold text-primary hover:underline" href="/signup">Sign Up</a></p>
          </div>
          <div className="cool-card hidden flex-1 items-center justify-center lg:flex">
            <div className="relative w-full max-w-md aspect-square rounded-xl overflow-hidden group/card glow-border">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/30 via-background to-brand-blue/10 backdrop-blur-lg"></div>
              <div className="absolute inset-0 z-10 flex flex-col justify-between p-8">
                <pre className="encrypted-text font-mono text-xs text-muted-foreground/30 select-none whitespace-pre-wrap leading-relaxed">[init_secure_channel]...OK
[auth_user:eternal]...OK
[load_aeterna_core]...OK
[validate_token]...<span className="text-green-400/50 group-hover/card:text-green-400">SUCCESS</span>
[establish_connection]...100%
[render_ui]...<span className="text-cyan-400/50 group-hover/card:text-cyan-400">ACTIVE</span>
AETERNA_SESSION_ID: <span className="text-yellow-400/50 group-hover/card:text-yellow-400">4f46e5a8-55f7-4a4b-9e1e-1a2b3c4d5e6f</span>
AETERNA_NODE: <span className="text-yellow-400/50 group-hover/card:text-yellow-400">eu-central-1a</span>
AETERNA_ENCRYPTION: <span className="text-yellow-400/50 group-hover/card:text-yellow-400">AES-256-GCM</span>
[system_status]...<span className="text-green-400/50 group-hover/card:text-green-400">ALL SYSTEMS NOMINAL</span>
[log_stream_start]...
...user authenticated successfully
...profile data loaded
...presence sync complete
...waiting for user input</pre>
                <div className="text-center">
                  <p className="font-display text-lg font-semibold text-foreground/80 group-hover/card:text-foreground transition-colors">Aeterna <span className="text-muted-foreground/80 group-hover/card:text-muted-foreground transition-colors">made by</span> Eternal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
