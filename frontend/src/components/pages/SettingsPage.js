import React from 'react';

function SettingsPage() {
  return (
    <div className="flex h-screen w-full font-display text-gray-200 animated-gradient">
      <aside className="flex w-64 flex-col border-r border-border-dark bg-card-dark/30 p-4 backdrop-blur-sm">
        <div className="flex items-center gap-3 p-2">
          <div className="relative">
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="User avatar for Eleanor Vance" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBreULZVIBzW4P49n-nwMdt75t1FpiHVjJJMokiUSSr_m30IgNO811rQKNECtgUw0iF9A4oxgaYRDfdd71aADqBDSNf75HvHO7x99d_9D9ZZEzN1yHMrymnGLKISMCuYKRuYiCXVgQJGnkqOSUnZoKJr9W3V-ceIFvl3SyxVbVVHtknM59OpMblc5hCrKhe6hciG_QiXxfaKFBFQFzirVpzN_My4qJLYOZvhrrtdVclgqXslxP2lZSTLXvxYe0KM8my8B9yOqFdqpSs")' }}></div>
            <div className="absolute -bottom-1 -right-1 flex size-4 items-center justify-center rounded-full border-2 border-background-dark bg-green-500"></div>
          </div>
          <div className="flex flex-col">
            <h1 className="text-gray-100 text-base font-medium leading-normal">Eleanor Vance</h1>
            <p className="text-gray-400 text-sm font-normal leading-normal">Online</p>
          </div>
        </div>
        <nav className="flex flex-col gap-2 mt-8">
          <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/20 glowing-border active" href="#">
            <span className="material-symbols-outlined text-primary text-xl">person</span>
            <p className="text-primary text-sm font-medium leading-normal">My Profile</p>
          </a>
          <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5" href="#">
            <span className="material-symbols-outlined text-gray-300 text-xl">palette</span>
            <p className="text-gray-200 text-sm font-medium leading-normal">Appearance</p>
          </a>
          <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5" href="#">
            <span className="material-symbols-outlined text-gray-300 text-xl">notifications</span>
            <p className="text-gray-200 text-sm font-medium leading-normal">Notifications</p>
          </a>
          <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5" href="#">
            <span className="material-symbols-outlined text-gray-300 text-xl">lock</span>
            <p className="text-gray-200 text-sm font-medium leading-normal">Privacy &amp; Security</p>
          </a>
          <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5" href="#">
            <span className="material-symbols-outlined text-gray-300 text-xl">settings</span>
            <p className="text-gray-200 text-sm font-medium leading-normal">Account</p>
          </a>
        </nav>
        <div className="mt-auto">
          <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5" href="#">
            <span className="material-symbols-outlined text-gray-300 text-xl">logout</span>
            <p className="text-gray-200 text-sm font-normal leading-normal">Logout</p>
          </a>
        </div>
      </aside>
      <main className="flex-1 overflow-y-auto p-8">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col gap-2 mb-8">
            <p className="text-gray-50 text-4xl font-black leading-tight tracking-[-0.033em]">My Profile</p>
            <p className="text-gray-400 text-base font-normal leading-normal">Manage your profile information and preferences.</p>
          </div>
          <div className="rounded-xl border border-border-dark bg-card-dark glowing-border">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-50">Profile Information</h3>
              <p className="text-sm text-gray-400 mt-1">Update your personal details here.</p>
            </div>
            <div className="p-6 border-t border-border-dark">
              <div className="flex items-center gap-6">
                <div className="relative group">
                  <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-24" data-alt="User avatar for Eleanor Vance" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBreULZVIBzW4P49n-nwMdt75t1FpiHVjJJMokiUSSr_m30IgNO811rQKNECtgUw0iF9A4oxgaYRDfdd71aADqBDSNf75HvHO7x99d_9D9ZZEzN1yHMrymnGLKISMCuYKRuYiCXVgQJGnkqOSUnZoKJr9W3V-ceIFvl3SyxVbVVHtknM59OpMblc5hCrKhe6hciG_QiXxfaKFBFQFzirVpzN_My4qJLYOZvhrrtdVclgqXslxP2lZSTLXvxYe0KM8my8B9yOqFdqpSs")' }}></div>
                  <button className="absolute inset-0 flex items-center justify-center rounded-full bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="material-symbols-outlined text-white">photo_camera</span>
                  </button>
                </div>
                <div className="flex flex-col gap-2">
                  <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] glowing-border active">
                    <span className="truncate">Upload New Photo</span>
                  </button>
                  <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-border-dark text-gray-200 text-sm font-bold leading-normal tracking-[0.015em] glowing-border">
                    <span className="truncate">Remove</span>
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                <div>
                  <label className="text-sm font-medium text-gray-300" htmlFor="username">Username</label>
                  <div className="relative mt-2 glowing-border rounded-lg">
                    <input className="w-full bg-card-dark border border-border-dark rounded-lg px-4 py-2.5 text-gray-200 focus:ring-0 focus:border-transparent" id="username" type="text" value="eleanor.vance"/>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-300" htmlFor="email">Email Address</label>
                  <div className="relative mt-2 glowing-border rounded-lg">
                    <input className="w-full bg-card-dark border border-border-dark rounded-lg px-4 py-2.5 text-gray-200 focus:ring-0 focus:border-transparent" id="email" type="email" value="eleanor.vance@aeterna.com"/>
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mt-6" htmlFor="bio">Bio</label>
                <div className="relative mt-2 glowing-border rounded-lg">
                  <textarea className="w-full bg-card-dark border border-border-dark rounded-lg px-4 py-2.5 text-gray-200 focus:ring-0 focus:border-transparent min-h-24" id="bio" placeholder="Tell us a little about yourself...">Lead Designer at Aeterna. Passionate about creating beautiful and intuitive user experiences.</textarea>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-border-dark bg-card-dark mt-8 glowing-border">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-50">Status Settings</h3>
              <p className="text-sm text-gray-400 mt-1">Control your online presence.</p>
            </div>
            <div className="p-6 border-t border-border-dark space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-100">Show online status</p>
                  <p className="text-sm text-gray-400">Let others know when you are online.</p>
                </div>
                <button aria-checked="true" className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-primary transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-card-dark group" role="switch" type="button">
                  <div className="absolute inset-[-3px] rounded-full glowing-border"></div>
                  <span aria-hidden="true" className="pointer-events-none inline-block h-5 w-5 translate-x-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-100">Share my activity</p>
                  <p className="text-sm text-gray-400">Show what you're currently doing (e.g., in a voice channel).</p>
                </div>
                <button aria-checked="false" className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-border-dark transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-card-dark group" role="switch" type="button">
                  <div className="absolute inset-[-3px] rounded-full glowing-border"></div>
                  <span aria-hidden="true" className="pointer-events-none inline-block h-5 w-5 translate-x-0 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-end items-center gap-4 mt-8">
            <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-border-dark text-gray-200 text-sm font-bold leading-normal tracking-[0.015em] glowing-border">
              <span className="truncate">Cancel</span>
            </button>
            <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] glowing-border active">
              <span className="truncate">Save Changes</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default SettingsPage;
