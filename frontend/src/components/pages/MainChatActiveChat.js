import React from 'react';

function MainChatActiveChat() {
  return (
    <div className="flex h-screen w-full font-display bg-background-dark text-gray-300">
      <aside className="flex h-full w-[360px] shrink-0 flex-col border-r border-gray-900 bg-background-dark">
        <div className="flex flex-col gap-4 p-4 border-b border-gray-900">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="Monica Hall's avatar" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC9Rvyd85OxuQExC0QlntRxHQbyMa4Vo779ZLgfFZPDlT6ZKlpI5TE5fPb8AvnBh0uDnFD6bFwjYBDKJrwRa7iaDBP8Xk_tG81X3MEI6Q7VXVpc1DowUz8FVzNllr95tlb8kfPBGfz4NQVrhS3dXQLENmnuJTUcGiDW6Nq0cYy3NGWnoX6a6774qjra0jTIIJCrozY4Md_-GZXi4Leb40Q_DaZZ2b7EfpXJqCC8JIQIGLW-TtHcMBAZOAYi7wtMvPXSav8YeYo-dPQ8")' }}></div>
              <div className="flex flex-col">
                <h1 className="text-base font-bold text-white">Monica Hall</h1>
                <p className="text-sm text-gray-400">Aeterna</p>
              </div>
            </div>
            <button className="flex min-w-0 cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 w-10 bg-primary-accent hover:bg-gray-800 text-gray-300 glow-border transition-all">
              <span className="material-symbols-outlined">edit_square</span>
            </button>
          </div>
          <div className="relative focus-glow-border rounded-lg transition-shadow duration-300">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">search</span>
            <input className="w-full rounded-lg border border-transparent bg-primary-accent py-2 pl-10 pr-4 text-sm text-gray-200 placeholder-gray-500 focus:ring-0 focus:border-transparent" placeholder="Search conversations..." type="text"/>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          <nav className="flex flex-col gap-1 p-2">
            <a className="flex items-start gap-3 rounded-lg bg-primary/20 p-3 glow-border" href="#">
              <div className="relative shrink-0">
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="Jared Dunn's avatar" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDfBBCI9hZYrI2zd6Dv1a-LOt6QwEBWTd5Dn7z5woEFN8c4nfVxIsGGtaD5Hf-ZmMqONS2EuVPq7bsMlgzyE-1b816hroPGDj54jQXyAMkTLcHJmtA6bV6QP3fb8ubO-Z_tZx9nKc7YUP4wYDI8xnfV9pNFFnStfgvK5eXbUV_QVxHCAU2DqNO0G002XYJCVRP9SpQbNYmiRMVpOtYnvuQ0D3OanjXtafTM6_XC64JLyKPAJYXioGd-k9BAu4qaK0wUgerRJBagYbDJ")' }}></div>
                <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-background-dark"></div>
              </div>
              <div className="flex-1 overflow-hidden">
                <div className="flex justify-between items-baseline">
                  <p className="text-sm font-semibold text-white truncate">Jared Dunn</p>
                  <p className="text-xs text-primary">2:15 PM</p>
                </div>
                <p className="text-sm text-gray-300 truncate mt-1">Perfect! I'll send over the latest version...</p>
              </div>
            </a>
            <a className="flex items-start gap-3 rounded-lg hover:bg-primary-accent/50 p-3 glow-border" href="#">
              <div className="relative shrink-0">
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="Richard Hendricks's avatar" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA2rTBJSdYS6psNJ9RR5iI1qHOdpeZHxWZ3paMqg9CJy6DFBHem3b3J0UaADV0M11CA00klEg_b9WWN-_WeLVgZ48nL7GQZ-q9ImytgU74alr_CNIYyteG3RArUQ55Qnwocvt74Nu0D3-c0HT-9vB5zNyli-cEjO7v34nD6ldMM1LQP_A1Jgec0eVg-fGjHcHes5V2SRtQWkdjc4eexNLKiVRRkVHgXe7KkhFORmobZfJvzIR-R0QCCuVlPrCInL205HJrXbvwO8E9j")' }}></div>
                <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-background-dark"></div>
              </div>
              <div className="flex-1 overflow-hidden">
                <div className="flex justify-between items-baseline">
                  <p className="text-sm font-medium text-gray-200 truncate">Richard Hendricks</p>
                  <p className="text-xs text-gray-400">1:30 PM</p>
                </div>
                <p className="text-sm text-gray-400 truncate mt-1">We need to discuss the compression algorithm.</p>
              </div>
            </a>
            <a className="flex items-start gap-3 rounded-lg hover:bg-primary-accent/50 p-3 glow-border" href="#">
              <div className="relative shrink-0">
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="Dinesh Chugtai's avatar" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDH1IPlR0LANublxtQ82ufhZ8H1k7Xh8_HodEK3z1BWFsPiQwUkS2fD27-RIcasYfgL0ewuZ5YFh6QvYgDVsksdBZPjWAZn3XMlpK7EFNtntxQOt9qGQRgSuh8dwd2yJNyF4gKa9W3vJGaZoHsVa273sXd0CXmTVm6-YOJFtab6pGvuF0E9VXd8jeN1d1Sw9HMTogSm0Q7UhEcj6TGdesNwIRcEG8Lv4q4bv-TGNa68_CWUpcN-f2OhExogTOnY8UDweGILXO6_FzXz")' }}></div>
              </div>
              <div className="flex-1 overflow-hidden">
                <div className="flex justify-between items-baseline">
                  <p className="text-sm font-medium text-gray-200 truncate">Dinesh Chugtai</p>
                  <p className="text-xs text-gray-400">Yesterday</p>
                </div>
                <div className="flex items-center justify-between mt-1">
                  <p className="text-sm text-gray-400 truncate">My Tesla is superior.</p>
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">2</span>
                </div>
              </div>
            </a>
            <a className="flex items-start gap-3 rounded-lg hover:bg-primary-accent/50 p-3 glow-border" href="#">
              <div className="relative shrink-0">
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="Bertram Gilfoyle's avatar" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCZIFxoT1oOa8ZraHWtbW3rMfO2glQ7FB8kHcEX9DN4_QoVfsxNcE2NKpDxR098vGcz1GCG3RLwtCR4NkDqFiGd-7yhjOWsTposk6rqrgGEL4jxk1RtBGYHJgpx_dhGXmMWTEM7YlJuu6GO-zqEdHXWxRZz4LszxxnONvtgPCtfYN03HuO06p7uo5hpKeGm5uImSFqx0lWLD8d9pYew6HjwXw24uL6CBrYPZG6jGyy6P93RfjCpApwTVau7q2slg_BIGfU_YucAsWxh")' }}></div>
              </div>
              <div className="flex-1 overflow-hidden">
                <div className="flex justify-between items-baseline">
                  <p className="text-sm font-medium text-gray-200 truncate">Bertram Gilfoyle</p>
                  <p className="text-xs text-gray-400">Yesterday</p>
                </div>
                <p className="text-sm text-gray-400 truncate mt-1">I'll need to provision new servers.</p>
              </div>
            </a>
          </nav>
        </div>
        <div className="p-4 border-t border-gray-900">
          <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary-accent/50 glow-border" href="#">
            <span className="material-symbols-outlined text-gray-400">settings</span>
            <p className="text-sm font-medium text-gray-200">Settings</p>
          </a>
        </div>
      </aside>
      <main className="flex h-full flex-1 flex-col bg-gradient-animated animate-gradient-bg">
        <header className="flex h-[73px] items-center justify-between border-b border-gray-900 bg-background-dark/80 px-6 py-3 backdrop-blur-sm">
          <div className="flex items-center gap-4">
            <div className="relative shrink-0">
              <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="Jared Dunn's avatar" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC5BwXwO7ymEC_bp8z0vaXXYrWjWhnFmge6vS702WVWIQkixPXPsx9ML8GEleM_NFMD_533J-jwDNs4Z_D1Le-_BrKXpU52b9yDkMleIo2fE8HOv37pkgYDKSxXSkvDiGOTuz7IhBG--tmDz2BHU5tlm3J-hqBtCsPILvAYRxxib6rcotf0y0rEQMl0SJ6PBvM5mNgB-6mbpUjgWOKoKjw4wpmNs-wG_hRP392BgKIhw8bWKiwRm1nf7sOz1oGcf1Eyq6adtqUk-yJo")' }}></div>
              <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-background-dark"></div>
            </div>
            <div>
              <h2 className="text-base font-semibold text-white">Jared Dunn</h2>
              <p className="text-sm text-green-500">Online</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-full text-primary hover:bg-primary/20 glow-border transition-all">
              <span className="material-symbols-outlined">call</span>
            </button>
            <button className="p-2 rounded-full text-primary hover:bg-primary/20 glow-border transition-all">
              <span className="material-symbols-outlined">videocam</span>
            </button>
            <button className="p-2 rounded-full text-primary hover:bg-primary/20 glow-border transition-all">
              <span className="material-symbols-outlined">info</span>
            </button>
          </div>
        </header>
        <div className="flex-1 overflow-y-auto p-6">
          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-3 self-start max-w-2xl">
              <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8 shrink-0" data-alt="Jared Dunn's avatar" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB7ikX3HtkcYAD9Fu8eVoBaYIdvhH1_2RGok3XBD_bSrnpJTcYmWywdvuvlcVSOhGUVHbvukujiJXpfxVe5v-DxOziGZk0Tho0VHugKdo-WCvjcgdmUrofps-Wl7OMRPQC5CAzFF0jf45rMyzSI08hbaPzURPWGc0t-Xt3GkVTfW_DGkxoQoKUWE5U7p3NKC3TvHCL3US-bXU1ihrHPLoUR-gZNwehpUj337KvU9KF8YnUWM-EjOGd66RM6m71SD8uFwNlEGSuTaK-m")' }}></div>
              <div className="flex flex-col gap-1 items-start">
                <div className="flex items-baseline gap-2">
                  <p className="text-sm font-medium text-gray-200">Jared Dunn</p>
                  <p className="text-xs text-gray-500">2:14 PM</p>
                </div>
                <div className="text-base font-normal leading-normal rounded-xl rounded-bl-none px-4 py-2 bg-primary-accent text-white glow-border">Hey Monica, are you free to review the pitch deck this afternoon?</div>
              </div>
            </div>
            <div className="flex items-start gap-3 self-end max-w-2xl">
              <div className="flex flex-col gap-1 items-end">
                <div className="flex items-baseline gap-2">
                  <p className="text-sm font-medium text-primary">You</p>
                  <p className="text-xs text-gray-500">2:14 PM</p>
                </div>
                <div className="text-base font-normal leading-normal rounded-xl rounded-br-none px-4 py-2 bg-primary text-white glow-border">Hi Jared, absolutely. I have a window from 2-3 PM. Does that work for you?</div>
              </div>
              <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8 shrink-0" data-alt="Monica Hall's avatar" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDbPwbx4sNOEALgAqV7BJClcvGvfB0NG4FJcHl6xiIWhYlZJnK7z3Nx3E_5pt2kGmY2QrPNHxEpW631RlZk8umTVW4qTYS4Sj_4jMjVJzg1mASPvpco59H-0L0FfOJuNR-c6tCzDyhXD03qy-ONgOOEBr7cOoQNtEN1wm8yV0qqNUIsUMzr16LD-gQXE2VAhhv1vYP_Scpu4xPBHfz4NkpPZeG0p6Ts-eksWxCwRV4B2nHoJL-3HBaQS46ahWFKLYnuJoNATuri0DsXVPT9thAT7kFo-")' }}></div>
            </div>
            <div className="flex items-start gap-3 self-start max-w-2xl">
              <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8 shrink-0" data-alt="Jared Dunn's avatar" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBbhrl9zmpG_EPmOn2hWGeMAf32UwXpWPiaJkqmlbdtrXX7Jy73L9vF0y_PpCWks2bSQSc8DC9g_Z_bSClYi3AdS8XqTk8rBEbl-MvV68H9y4qRjRB0wEAYrd50P0cd9yOy4V1MQCVlnU87usswR2T3bm7dJHravhGvLcFMOXaK9P4VEZFjUNGt3yVc0DWjKTRRQbqpNxn-5qGzxhG8vFv1UmhDdn-ri25PyJR2TQyN6ILswF_3xOUzeZfLAWw2xUTxNN8a26NLQ2qe")' }}></div>
              <div className="flex flex-col gap-1 items-start">
                <div className="flex items-baseline gap-2">
                  <p className="text-sm font-medium text-gray-200">Jared Dunn</p>
                  <p className="text-xs text-gray-500">2:15 PM</p>
                </div>
                <div className="text-base font-normal leading-normal rounded-xl rounded-bl-none px-4 py-2 bg-primary-accent text-white glow-border">Perfect! I'll send over the latest version. It's nearly complete.</div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-6 pb-6 pt-4 bg-background-dark/80 border-t border-gray-900 backdrop-blur-sm">
          <div className="flex items-center gap-2 rounded-xl border border-gray-800 bg-primary-accent p-2 focus-glow-border transition-shadow duration-300">
            <button className="p-2 rounded-full text-primary hover:bg-primary/20 glow-border transition-all">
              <span className="material-symbols-outlined">add_circle</span>
            </button>
            <input className="flex-1 bg-transparent border-none focus:ring-0 p-2 text-sm text-gray-200 placeholder-gray-500" placeholder="Type a message..." type="text"/>
            <button className="p-2 rounded-full text-primary hover:bg-primary/20 glow-border transition-all">
              <span className="material-symbols-outlined">mood</span>
            </button>
            <button className="flex h-9 w-9 cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary text-white shrink-0 hover:bg-primary/90 glow-border transition-all">
              <span className="material-symbols-outlined text-xl">send</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainChatActiveChat;
