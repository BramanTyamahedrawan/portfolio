import HeroImg from "@/assets/images/braman_t.png";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32 text-white bg-[#04081A]">
        <div className="mx-auto max-w-6xl space-y-12 px-6">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Fullstack Developer & Server Administrator specializing in
              Enterprise Solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left Column - Profile Image + Key Achievements */}
            <div className="space-y-6">
              {/* Profile Image */}
              <div className="relative group">
                <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-1 transition-all duration-300 group-hover:from-blue-500/30 group-hover:to-purple-500/30">
                  <img
                    src={HeroImg}
                    className="rounded-2xl w-full shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]"
                    alt="Braman Tyamahendrawan"
                  />
                </div>
              </div>

              {/* Key Achievements - Below Image */}
              {/* <div className="bg-gray-900/60 border border-gray-700/50 rounded-xl p-6 backdrop-blur-sm hover:bg-gray-900/70 transition-all duration-300 hover:border-gray-600/50">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl">🏆</span>
                  <h3 className="text-xl font-semibold text-white tracking-wide">
                    Key Achievements
                  </h3>
                </div>
                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3 group">
                    <span className="w-2 h-2 bg-red-400 rounded-full flex-shrink-0 mt-2 group-hover:scale-125 transition-transform duration-200"></span>
                    <span className="text-gray-300 leading-relaxed">
                      Built advanced{" "}
                      <strong className="text-red-400 font-semibold">
                        CAT system with anti-cheat
                      </strong>{" "}
                      serving <strong className="text-white">100+ users</strong>
                    </span>
                  </div>
                  <div className="flex items-start gap-3 group">
                    <span className="w-2 h-2 bg-pink-400 rounded-full flex-shrink-0 mt-2 group-hover:scale-125 transition-transform duration-200"></span>
                    <span className="text-gray-300 leading-relaxed">
                      Achieved{" "}
                      <strong className="text-pink-400 font-semibold">
                        95%+ accuracy
                      </strong>{" "}
                      in fraud detection
                    </span>
                  </div>
                  <div className="flex items-start gap-3 group">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0 mt-2 group-hover:scale-125 transition-transform duration-200"></span>
                    <span className="text-gray-300 leading-relaxed">
                      Implemented{" "}
                      <strong className="text-cyan-400 font-semibold">
                        behavior tracking
                      </strong>{" "}
                      technology
                    </span>
                  </div>
                  <div className="flex items-start gap-3 group">
                    <span className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0 mt-2 group-hover:scale-125 transition-transform duration-200"></span>
                    <span className="text-gray-300 leading-relaxed">
                      Managed infrastructure with{" "}
                      <strong className="text-green-400 font-semibold">
                        99% uptime
                      </strong>
                    </span>
                  </div>
                  <div className="flex items-start gap-3 group">
                    <span className="w-2 h-2 bg-purple-400 rounded-full flex-shrink-0 mt-2 group-hover:scale-125 transition-transform duration-200"></span>
                    <span className="text-gray-300 leading-relaxed">
                      Processed{" "}
                      <strong className="text-orange-400 font-semibold">
                        1M+ data records
                      </strong>{" "}
                      with Big Data
                    </span>
                  </div>
                </div>
              </div> */}
            </div>

            {/* Right Column - Info Cards */}
            <div className="space-y-6 flex flex-col">
              {/* Description Card */}
              <div className="bg-gray-900/60 border border-gray-700/50 rounded-xl p-6 backdrop-blur-sm hover:bg-gray-900/70 transition-all duration-300 hover:border-gray-600/50">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl">✨</span>
                  <h3 className="text-xl font-semibold text-white tracking-wide">
                    About Me
                  </h3>
                </div>
                <div className="space-y-4 text-gray-300 leading-relaxed text-sm">
                  <p>
                    Hello! I&apos;m a passionate{" "}
                    <span className="text-blue-400 font-semibold">
                      Fullstack Developer
                    </span>{" "}
                    and{" "}
                    <span className="text-green-400 font-semibold">
                      Server Administrator
                    </span>{" "}
                    with comprehensive expertise in modern web technologies,
                    cloud infrastructure, and Big Data analytics. I recently
                    graduated{" "}
                    <span className="text-purple-400 font-semibold">
                      Cum Laude
                    </span>{" "}
                    from Politeknik Negeri Malang with an Applied
                    Bachelor&apos;s degree in Informatics Engineering.
                  </p>
                  <p>
                    I specialize in developing advanced{" "}
                    <span className="text-orange-400 font-semibold">
                      Computer Assisted Test (CAT) systems
                    </span>{" "}
                    with cutting-edge{" "}
                    <span className="text-red-400 font-semibold">
                      anti-cheating detection technology
                    </span>
                    . My CAT systems feature real-time monitoring of user
                    behavior including{" "}
                    <span className="text-cyan-400 font-semibold">
                      fullscreen exit detection, tab switching prevention,
                      right-click blocking, and inspection tool monitoring
                    </span>
                    , achieving{" "}
                    <span className="text-pink-400 font-semibold">
                      95%+ accuracy in fraud detection
                    </span>{" "}
                    while serving 100+ concurrent users.
                  </p>
                  <p>
                    My expertise extends to{" "}
                    <span className="text-purple-400 font-semibold">
                      Big Data processing
                    </span>{" "}
                    with Apache Hadoop and HBase, managing{" "}
                    <span className="text-orange-400 font-semibold">
                      1M+ data records
                    </span>{" "}
                    in real-time, and maintaining enterprise server
                    infrastructures with{" "}
                    <span className="text-green-400 font-semibold">
                      99% uptime
                    </span>
                    . I continuously advance my skills through professional
                    certifications and innovative project development.
                  </p>
                </div>
              </div>

              {/* Bio Card */}
              <div className="bg-gray-900/60 border border-gray-700/50 rounded-xl p-6 backdrop-blur-sm hover:bg-gray-900/70 transition-all duration-300 hover:border-gray-600/50">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl">👨‍💻</span>
                  <h3 className="text-xl font-semibold text-white tracking-wide">
                    const developer = {`{`}
                  </h3>
                </div>
                <div className="space-y-2 text-sm font-mono">
                  <p>
                    <span className="text-blue-400">name:</span>{" "}
                    <span className="text-green-400">
                      &quot;Braman Tyamahendrawan&quot;
                    </span>
                    ,
                  </p>
                  <p>
                    <span className="text-blue-400">role:</span>{" "}
                    <span className="text-green-400">
                      &quot;Fullstack Developer &amp; Server Admin&quot;
                    </span>
                    ,
                  </p>
                  <p>
                    <span className="text-blue-400">education:</span>{" "}
                    <span className="text-green-400">
                      &quot;S.Tr.Kom - Cum Laude (GPA: 3.74)&quot;
                    </span>
                    ,
                  </p>
                  <p>
                    <span className="text-blue-400">location:</span>{" "}
                    <span className="text-green-400">
                      &quot;Kediri, East Java, Indonesia&quot;
                    </span>
                    ,
                  </p>
                  <p>
                    <span className="text-blue-400">experience:</span>{" "}
                    <span className="text-green-400">
                      &quot;Enterprise Solutions &amp; Big Data&quot;
                    </span>
                  </p>
                </div>
                <p className="text-white mt-3 font-mono">{`};`}</p>
              </div>

              {/* Recent Certifications */}
              <div className="bg-gray-900/60 border border-gray-700/50 rounded-xl p-6 backdrop-blur-sm hover:bg-gray-900/70 transition-all duration-300 hover:border-gray-600/50 flex-1">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl">🎓</span>
                  <h3 className="text-xl font-semibold text-white tracking-wide">
                    Recent Certifications
                  </h3>
                </div>
                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3 group hover:bg-gray-800/30 rounded-lg p-2 -m-2 transition-all duration-200">
                    <span className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0 mt-1.5 group-hover:scale-125 transition-transform duration-200"></span>
                    <div>
                      <p className="font-medium text-blue-400 mb-0.5">
                        Alibaba Cloud Network Engineer
                      </p>
                      <p className="text-gray-400 text-xs">
                        2025 • Cloud networking & VPC
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 group hover:bg-gray-800/30 rounded-lg p-2 -m-2 transition-all duration-200">
                    <span className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0 mt-1.5 group-hover:scale-125 transition-transform duration-200"></span>
                    <div>
                      <p className="font-medium text-orange-400 mb-0.5">
                        BNSP Software Programming
                      </p>
                      <p className="text-gray-400 text-xs">
                        2025 • Professional competency
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 group hover:bg-gray-800/30 rounded-lg p-2 -m-2 transition-all duration-200">
                    <span className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0 mt-1.5 group-hover:scale-125 transition-transform duration-200"></span>
                    <div>
                      <p className="font-medium text-green-400 mb-0.5">
                        Google IT Support Professional
                      </p>
                      <p className="text-gray-400 text-xs">
                        2024 • Infrastructure & security
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
