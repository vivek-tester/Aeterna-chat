import React from 'react';

function MainChatEmptyState() {
  return (
    <div className="flex h-screen w-full flex-col font-display text-text-dark-primary bg-amoled-black">
      <div className="flex h-full w-full">
        <aside className="flex h-full w-full max-w-[360px] flex-col border-r border-border-dark bg-sidebar-dark">
          <div className="flex flex-col h-full">
            <div className="flex flex-col gap-4 p-4 border-b border-border-dark">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="Aeterna app logo, a stylized letter A" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC58f76yso0iut0Va6mP5DJ0tZf_RjiZ7X_c8nXrnqvyxtw9SdQcic0_8-JoP5SnjvorkWrYIbNntEYvb2BTM2MODc2xER6ZIWmp21_spKzH981qMKLnusOEXn5y0q8L7yPMQQCn8KPytBWYLGvQ7m-f0XHdigAY3lYa4jltrQ6GbfWU36_0xun7CstsyiVewU8-Yw-5k-B-uxIhQZCLPt4Dsrv26_C2ky4H1TX_ArBXcUNNcEQL-4acVXyzabrD0DCuG9fCd--9B-4")' }}></div>
                  <h1 className="text-lg font-bold text-primary text-glow">Aeterna</h1>
                </div>
                <button className="flex items-center justify-center rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] gap-2 hover:bg-opacity-80 transition-opacity">
                  <span className="material-symbols-outlined text-base">add</span>
                  <span className="truncate">New Chat</span>
                </button>
              </div>
              <div className="w-full">
                <label className="flex flex-col w-full">
                  <div className="relative flex w-full flex-1 items-stretch rounded-lg h-10">
                    <div className="glow-border absolute inset-0 rounded-lg from-glow-start via-glow-mid to-glow-end opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
                    <div className="group relative flex w-full items-stretch rounded-lg bg-amoled-black">
                      <div className="text-text-dark-secondary flex items-center justify-center pl-3">
                        <span className="material-symbols-outlined text-xl">search</span>
                      </div>
                      <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-dark-primary focus:outline-0 focus:ring-0 border-none bg-transparent h-full placeholder:text-text-dark-secondary px-2 text-sm font-normal" placeholder="Search or start a new chat" value=""/>
                    </div>
                  </div>
                </label>
              </div>
            </div>
            <div className="flex-grow overflow-y-auto">
              <nav className="flex flex-col p-2">
                <div className="group relative rounded-lg cursor-pointer active-chat">
                  <div className="absolute inset-0 rounded-lg glow-border from-glow-start via-glow-mid to-glow-end"></div>
                  <div className="relative flex gap-3 px-3 py-2.5 justify-between rounded-lg transition-colors duration-300">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12" data-alt="Avatar for Design Team group chat" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCQdODu9p_42cLW72yA5uVR4_Xt1o97Pn8eEqBEJVGABUDQPNvZ44PfE59i2eIL2VFtiN1mUD5yqDEQOpdceDvxNAWoeZeexELNyNivmaDQLvzUWhhPMrBE4fRt4Li7v_wOaFe6L1jWgD7YlEzFvEk6CCSslmvXNiOsW_PMOG1E_UQeraBtHo8CIxR5aYfn_mq0HxXDD840BT1yWFNxVmYZTEZOlzVnPPzA2fNytA6mikHtcPKKxX52CyfOMy34-z9LM5oy7IYHwuho")' }}></div>
                        <div className="absolute bottom-0 right-0 size-3.5 rounded-full bg-green-500 border-2 border-sidebar-dark"></div>
                      </div>
                      <div className="flex flex-1 flex-col justify-center">
                        <p className="text-text-dark-primary text-sm font-medium leading-normal">Design Team</p>
                        <p className="text-text-dark-secondary text-sm font-normal leading-normal truncate max-w-[150px]">Sarah: Here's the latest update...</p>
                      </div>
                    </div>
                    <div className="shrink-0 flex flex-col items-end gap-1.5">
                      <p className="text-xs font-medium text-primary text-glow">11:15 AM</p>
                      <span className="flex items-center justify-center bg-primary text-white text-xs font-bold rounded-full size-5">2</span>
                    </div>
                  </div>
                </div>
                <div className="group relative rounded-lg cursor-pointer">
                  <div className="absolute inset-0 rounded-lg glow-border from-glow-start via-glow-mid to-glow-end"></div>
                  <div className="relative flex gap-3 px-3 py-2.5 justify-between rounded-lg hover:bg-[#1f5dff1a] transition-colors duration-300">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12" data-alt="Avatar for Alex Thompson" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuArRHt1rE9Wzn_CSebqria6wuabXuNSi7fY0tDlDhdFXl_r5AMOmD2gwcwjwtjysfdcURHxPi7tmAcu_GGeL6gB0fuJCN2EAiJtBVwmC-YtKJqDRo1XcZuSFnwnVMvqZ5-RBwCrQaqsq8dKd0jj6FepjkWb0_D24pZ25BO-AvTETsvOUiC7bpI-FNOGS3ST3Na9VIt61Ht5HQ2RZMI0KQa_Rxy2xNikGYeFcjeULpoQsMZt-aGcrVcg9gAxHnqTkQRsNGGAmgJ9sB_w")' }}></div>
                        <div className="absolute bottom-0 right-0 size-3.5 rounded-full bg-slate-400 border-2 border-sidebar-dark"></div>
                      </div>
                      <div className="flex flex-1 flex-col justify-center">
                        <p className="text-text-dark-primary text-sm font-medium leading-normal">Alex Thompson</p>
                        <p className="text-text-dark-secondary text-sm font-normal leading-normal truncate max-w-[150px]">Sounds good, I'll review the new mockups.</p>
                      </div>
                    </div>
                    <div className="shrink-0">
                      <p className="text-text-dark-secondary text-xs font-medium">Yesterday</p>
                    </div>
                  </div>
                </div>
                <div className="group relative rounded-lg cursor-pointer">
                  <div className="absolute inset-0 rounded-lg glow-border from-glow-start via-glow-mid to-glow-end"></div>
                  <div className="relative flex gap-3 px-3 py-2.5 justify-between rounded-lg hover:bg-[#1f5dff1a] transition-colors duration-300">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12" data-alt="Avatar for Maria Garcia" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB3NsQFKFpVqw9JmnTb6hRGK9LvDJSdWY9hUQnOpHam_CJv5OiULhtk2demNz7UojRwzheBzHnHqG1oIjqXi3ZfD0VgHOQjFUhfQ8L9fE9foWTvro_HcM1-u5uDSfCa5RFLV_e8r7ryjaMpzfZXNgBgbOALydTLoHe_pSX7tc8DE7wzfr-REzF-WdhL11C_xTkJVqmH53WoQlksjOFDVoICRK73uqUPoaP-JLdaKm6O6pyxes5VpzFlX2LQezGjDoUPNmdnlxhn1eeS")' }}></div>
                        <div className="absolute bottom-0 right-0 size-3.5 rounded-full bg-green-500 border-2 border-sidebar-dark"></div>
                      </div>
                      <div className="flex flex-1 flex-col justify-center">
                        <p className="text-text-dark-primary text-sm font-medium leading-normal">Maria Garcia</p>
                        <p className="text-text-dark-secondary text-sm font-normal leading-normal truncate max-w-[150px]">Let's sync up tomorrow morning.</p>
                      </div>
                    </div>
                    <div className="shrink-0">
                      <p className="text-text-dark-secondary text-xs font-medium">1:30 PM</p>
                    </div>
                  </div>
                </div>
                <div className="group relative rounded-lg cursor-pointer">
                  <div className="absolute inset-0 rounded-lg glow-border from-glow-start via-glow-mid to-glow-end"></div>
                  <div className="relative flex gap-3 px-3 py-2.5 justify-between rounded-lg hover:bg-[#1f5dff1a] transition-colors duration-300">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12" data-alt="Avatar for James Lee" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDN8R2-9Acm0rdH4KY09-e51DdFpOua6zXvCC-DQcLbITZllBOVn47UesG02Jrz8c-lxXpfLDa2CvLwI1NDjvHfkXJUBfKXlBs4FUd-LAf2KT_LUr2tIKrsNYoH9R9r8Vrz9aGcrlG_PpMfq6_cp7KMzk1UDEKnQtPlS-I4Iux-q6zCzTYuS2H9Yc_5wGeHP6mEBQ4NkpPZeG0p6Ts-eksWxCwRV4B2nHoJL-3HBaQS46ahWFKLYnuJoNATuri0DsXVPT9thAT7kFo-")' }}></div>
                        <div className="absolute bottom-0 right-0 size-3.5 rounded-full bg-slate-400 border-2 border-sidebar-dark"></div>
                      </div>
                      <div className="flex flex-1 flex-col justify-center">
                        <p className="text-text-dark-primary text-sm font-medium leading-normal">James Lee</p>
                        <p className="text-text-dark-secondary text-sm font-normal leading-normal truncate max-w-[150px]">Okay, I've pushed the latest changes.</p>
                      </div>
                    </div>
                    <div className="shrink-0">
                      <p className="text-text-dark-secondary text-xs font-medium">Mon</p>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </aside>
        <main className="flex-1 bg-gradient-to-br from-amoled-black via-amoled-black to-[#131a33] bg-[length:200%_200%] animate-gradient">
          <div className="flex h-full items-center justify-center p-8">
            <div className="text-center">
              <div className="mx-auto size-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-primary text-3xl text-glow">forum</span>
              </div>
              <h2 className="text-xl font-semibold text-text-dark-primary">Welcome to Aeterna</h2>
              <p className="text-text-dark-secondary mt-2">Select a conversation to start chatting.</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default MainChatEmptyState;
