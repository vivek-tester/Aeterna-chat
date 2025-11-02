import React from 'react';

function SplashScreen() {
  return (
    <div className="flex flex-col min-h-screen font-display bg-[linear-gradient(135deg,_#000000,_#001f66,_#000000)] bg-[length:200%_200%] animate-gradient-animation text-neutral-100">
      <main className="flex flex-1 flex-col items-center justify-center p-4">
        <div className="relative w-full max-w-sm rounded-2xl bg-neutral-900/80 backdrop-blur-sm p-12 shadow-2xl shadow-blue-500/10">
          <div className="absolute inset-0 rounded-2xl bg-[linear-gradient(110deg,_#0047FF,45%,_#001f66,55%,_#0047FF)] bg-[length:200%_100%] p-px animate-glowing-border">
            <div className="h-full w-full rounded-[15px] bg-neutral-900"></div>
          </div>
          <div className="relative flex flex-col items-center text-center">
            <div className="w-32 h-32 text-accent">
              <svg fill="currentColor" height="100%" viewBox="0 0 200 200" width="100%" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50C127.614 50 150 66.6667 150 81.5905C150 96.5143 127.614 113.181 100 113.181C72.3858 113.181 50 96.5143 50 81.5905C50 66.6667 72.3858 50 100 50ZM100 150C72.3858 150 50 133.333 50 118.409C50 103.486 72.3858 86.8182 100 86.8182C127.614 86.8182 150 103.486 150 118.409C150 133.333 127.614 150 100 150Z"></path>
              </svg>
            </div>
            <h1 className="mt-4 text-5xl font-bold tracking-tight text-neutral-100">Aeterna</h1>
            <div className="mt-12 flex w-full max-w-xs flex-col items-center gap-3">
              <p className="text-sm font-medium text-neutral-100/80">Connecting...</p>
              <div className="relative h-1.5 w-full rounded-full bg-neutral-800 overflow-hidden">
                <div className="absolute top-0 left-0 h-full w-full origin-left animate-[scaleX_4s_ease-in-out_infinite] rounded-full bg-accent"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="w-full py-4 px-4 text-center">
        <p className="text-xs font-normal text-neutral-100/40">v1.0.0</p>
      </footer>
    </div>
  );
}

export default SplashScreen;
