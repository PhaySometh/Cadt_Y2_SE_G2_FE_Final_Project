export function AboutSection() {
    return (
      <section className="relative sm:pt-16 lg:pt-20 xl:pt-24 overflow-hidden bg-[#F5F5F5] sm:pb-16 lg:pb-20 xl:pb-24">
        <div className="px-4 mx-auto relative sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 gap-x-16">
            <div>
              <h1 className="text-4xl font-semibold text-[#1E293B] sm:text-5xl lg:text-6xl xl:text-7xl">
                The Software Engineer Duo!
              </h1>
              <p className="mt-4 text-lg font-normal text-gray-400 sm:mt-8">
                We are the sophomore from CADT, under IDT institute study Computer Sciecne specilized in Software Engineer. This is the <span className="font-bold">Chlart Task Manager</span> which is the app that we can keet track our task more efficiently.   
              </p>

              <div className="mt-8 sm:mt-12">
                <p className="text-lg font-normal text-[#1E293B]">Trusted by 50k+ users</p>
                <div className="flex items-center mt-3">
                  <div className="flex">
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.8586 4.71248C11.2178 3.60691 12.7819 3.60691 13.1412 4.71248L14.4246 8.66264C14.5853 9.15706 15.046 9.49182 15.5659 9.49182H19.7193C20.8818 9.49182 21.3651 10.9794 20.4247 11.6626L17.0645 14.104C16.6439 14.4095 16.4679 14.9512 16.6286 15.4456L17.912 19.3958C18.2713 20.5013 17.0059 21.4207 16.0654 20.7374L12.7052 18.2961C12.2846 17.9905 11.7151 17.9905 11.2945 18.2961L7.93434 20.7374C6.99388 21.4207 5.72851 20.5013 6.08773 19.3958L7.37121 15.4456C7.53186 14.9512 7.35587 14.4095 6.93529 14.104L3.57508 11.6626C2.63463 10.9794 3.11796 9.49182 4.28043 9.49182H8.43387C8.95374 9.49182 9.41448 9.15706 9.57513 8.66264L10.8586 4.71248Z"
                        fill="url(#b)"
                      />
                      <defs>
                        <linearGradient
                          id="b"
                          x1="3.07813"
                          y1="3.8833"
                          x2="23.0483"
                          y2="6.90161"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0%" style={{ stopColor: "var(--color-cyan-500)" }} />
                          <stop offset="100%" style={{ stopColor: "var(--color-purple-500)" }} />
                        </linearGradient>
                      </defs>
                    </svg>
                    {/* Repeat other SVGs as needed */}
                  </div>
                  <span className="ml-2 text-base font-normal text-[#1E293B]">4.1/5</span>
                  <span className="ml-1 text-base font-normal text-gray-500">(14k Reviews)</span>
                </div>
              </div>
            </div>
  
            <div className="relative">
              <div className="absolute inset-0">
                <svg
                  className="blur-3xl filter opacity-70"
                  style={{ filter: "blur(64px)" }} // Fixed inline style
                  width="444"
                  height="536"
                  viewBox="0 0 444 536"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M225.919 112.719C343.98 64.6648 389.388 -70.487 437.442 47.574C485.496 165.635 253.266 481.381 135.205 529.435C17.1445 577.488 57.9596 339.654 9.9057 221.593C-38.1482 103.532 107.858 160.773 225.919 112.719Z"
                    fill="url(#c)"
                  />
                  <defs>
                    <linearGradient
                      id="c"
                      x1="82.7339"
                      y1="550.792"
                      x2="-39.945"
                      y2="118.965"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0%" style={{ stopColor: "var(--color-cyan-500)" }} />
                      <stop offset="100%" style={{ stopColor: "var(--color-purple-500)" }} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
  
              
  
              <img
                className="relative w-full max-w-md mx-auto"
                src="MethxReach.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    );
  }