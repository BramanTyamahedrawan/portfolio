import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  Instagram,
  MessageSquare,
  MapPin,
  Download,
  ExternalLink,
  MessageCircle,
  Heart,
  Copy,
  Check,
} from "lucide-react";

export default function Contact() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Social media contacts data
  const contactData = [
    {
      id: 1,
      name: "Email",
      value: "bramantyamahendrawan@gmail.com",
      icon: Mail,
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-500/10",
      borderColor: "border-red-500/20",
      link: "mailto:bramantyamahendrawan@gmail.com",
      description: "Drop me a line anytime",
    },
    {
      id: 2,
      name: "WhatsApp",
      value: "+62 821-3236-7110",
      icon: MessageSquare,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20",
      link: "https://wa.me/6282132367110",
      description: "Let's chat on WhatsApp",
    },
    {
      id: 3,
      name: "GitHub",
      value: "@BramanTyamahedrawan",
      icon: Github,
      color: "from-gray-600 to-gray-800",
      bgColor: "bg-gray-500/10",
      borderColor: "border-gray-500/20",
      link: "https://github.com/BramanTyamahedrawan",
      description: "Check out my repositories",
    },
    {
      id: 4,
      name: "LinkedIn",
      value: "Braman Tyamahendrawan",
      icon: Linkedin,
      color: "from-blue-600 to-blue-800",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
      link: "https://www.linkedin.com/in/braman-tyamahendrawan-717b44206/",
      description: "Let's connect professionally",
    },
    {
      id: 5,
      name: "Instagram",
      value: "@bram_mahendrawan",
      icon: Instagram,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
      link: "https://www.instagram.com/bram_mahendrawan?igsh=MTFnNGdpNmx0Ymo2cA==",
      description: "Follow my journey",
    },
    {
      id: 6,
      name: "Download CV",
      value: "Curriculum Vitae",
      icon: Download,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/20",
      link: "/cv-braman-tyamahendrawan.pdf",
      description: "Get my latest CV",
      isDownload: true,
    },
  ];

  // Copy email to clipboard
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("bramantyamahendrawan@gmail.com");
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  // Mouse move effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 20;
      const y = (clientY / window.innerHeight - 0.5) * 20;

      document.documentElement.style.setProperty("--mouse-x", `${x}px`);
      document.documentElement.style.setProperty("--mouse-y", `${y}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <main className="min-h-screen bg-[#04081A] text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5" />

        {/* Floating orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="relative z-10 pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Let&apos;s Connect
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Ready to collaborate or just want to say hi?
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-semibold">
                  Choose your preferred way to reach out!
                </span>
              </p>
            </motion.div>

            {/* Location Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-8 flex items-center justify-center gap-2 text-gray-400"
            >
              <MapPin className="w-5 h-5" />
              <span>Kediri, East Java, Indonesia</span>
            </motion.div>
          </motion.div>

          {/* Contact Cards Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 w-[102%] -ml-[1%]"
          >
            {contactData.map((contact, index) => {
              const IconComponent = contact.icon;
              return (
                <motion.div
                  key={contact.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * index, duration: 0.6 }}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    transition: { duration: 0.2 },
                  }}
                  onHoverStart={() => setHoveredCard(contact.id)}
                  onHoverEnd={() => setHoveredCard(null)}
                  className={`relative group cursor-pointer`}
                  onClick={() => {
                    if (contact.name === "Email") {
                      copyEmail();
                    } else if (contact.isDownload) {
                      // Create a temporary link element for downloading
                      const link = document.createElement("a");
                      link.href = contact.link;
                      link.download = "CV-Braman-Tyamahendrawan.pdf";
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    } else {
                      window.open(contact.link, "_blank");
                    }
                  }}
                >
                  <div
                    className={`
                    relative p-8 rounded-2xl border ${contact.borderColor} ${
                      contact.bgColor
                    } 
                    backdrop-blur-sm transition-all duration-300 overflow-hidden
                    ${
                      hoveredCard === contact.id
                        ? "border-opacity-60 shadow-2xl"
                        : "border-opacity-20"
                    }
                  `}
                  >
                    {/* Gradient Background on Hover */}
                    <div
                      className={`
                      absolute inset-0 bg-gradient-to-br ${contact.color} opacity-0 
                      group-hover:opacity-10 transition-opacity duration-300
                    `}
                    />

                    {/* Icon */}
                    <div className="relative z-10 mb-6">
                      <div
                        className={`
                        w-16 h-16 rounded-xl ${contact.bgColor} border ${contact.borderColor} 
                        flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300
                      `}
                      >
                        <IconComponent
                          className={`
                          w-8 h-8 text-gray-400 group-hover:text-white transition-colors duration-300
                        `}
                        />
                      </div>

                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                        {contact.name}
                      </h3>

                      <p className="text-gray-400 text-sm mb-3 group-hover:text-gray-300 transition-colors duration-300">
                        {contact.description}
                      </p>

                      <p className="font-mono text-sm text-gray-300 group-hover:text-white transition-colors duration-300 break-all">
                        {contact.value}
                      </p>
                    </div>

                    {/* External link icon */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {contact.name === "Email" ? (
                        <div className="flex items-center gap-1">
                          {copiedEmail ? (
                            <Check className="w-4 h-4 text-green-400" />
                          ) : (
                            <Copy className="w-4 h-4 text-gray-400" />
                          )}
                        </div>
                      ) : (
                        <ExternalLink className="w-4 h-4 text-gray-400" />
                      )}
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute bottom-4 right-4 w-12 h-12 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                      <div
                        className={`w-full h-full rounded-full bg-gradient-to-br ${contact.color}`}
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Call to Action Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-center"
          >
            <div className="max-w-3xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-purple-500/20 backdrop-blur-sm">
              <div className="flex items-center justify-center mb-4">
                <MessageCircle className="w-8 h-8 text-purple-400 mr-3" />
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Let&apos;s Build Something Amazing Together
                </h3>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Whether you have a project idea, want to collaborate, or just
                want to connect, I&apos;m always excited to meet new people and
                explore opportunities. Choose any platform above that works best
                for you!
              </p>

              <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-1">
                  <Heart className="w-4 h-4 text-red-400" />
                  <span>Open to opportunities</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Download className="w-4 h-4 text-green-400" />
                  <span>Available for projects</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          animation: gradient-x 3s linear infinite;
          background-size: 200% 200%;
        }
      `}</style>
    </main>
  );
}
