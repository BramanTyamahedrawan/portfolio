/* eslint-disable react/prop-types */
import {
  Code2,
  Cpu,
  Layers,
  MemoryStick,
  Network,
  Newspaper,
} from "lucide-react";

const ExperienceCard = ({
  title,
  company,
  period,
  location,
  responsibilities,
  icon: Icon,
}) => (
  <div className="group relative overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
    {/* Glass morphism effect */}
    <div className="absolute inset-0 backdrop-blur-lg bg-white/5 rounded-lg" />

    {/* Animated gradient border */}
    <div className="absolute -inset-[2px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-100 animate-gradient-xy transition-all duration-500" />

    <div className="relative bg-gray-900/90 rounded-lg p-8 h-full border border-gray-800/50 shadow-xl backdrop-blur-xl">
      {/* Floating icon with pulse effect */}
      <div className="relative mb-6">
        <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-25 rounded-full blur-xl group-hover:opacity-75 animate-pulse transition-all duration-500" />
        <Icon className="w-12 h-12 text-cyan-400 relative z-10 transform group-hover:rotate-12 transition-transform duration-300" />
      </div>

      {/* Content with improved typography */}
      <div className="space-y-4 relative">
        {/* Title and Period aligned */}
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            {title}
          </h3>
          <div className="text-xs font-mono bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full">
            {period}
          </div>
        </div>
        <div className="space-y-1">
          <span className="font-semibold text-blue-400 block">{company}</span>
          <span className="text-sm text-gray-400 flex items-center gap-1">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            {location}
          </span>
        </div>

        {/* Bullet points for responsibilities */}
        <div className="border-l-4 border-blue-500/50 pl-4 mt-4">
          <ul className="space-y-2 text-gray-300 text-sm leading-relaxed">
            {responsibilities.map((responsibility, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></span>
                <span>{responsibility}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-4 right-4 w-20 h-20">
        <div className="absolute top-0 right-0 w-6 h-[2px] bg-cyan-500/50" />
        <div className="absolute top-0 right-0 w-[2px] h-6 bg-cyan-500/50" />
      </div>
      <div className="absolute bottom-4 left-4 w-20 h-20">
        <div className="absolute bottom-0 left-0 w-6 h-[2px] bg-purple-500/50" />
        <div className="absolute bottom-0 left-0 w-[2px] h-6 bg-purple-500/50" />
      </div>
    </div>
  </div>
);

const ExperienceSection = () => {
  const experiences = [
    {
      icon: Network,
      title: "Server Administrator",
      company: "Politeknik Negeri Malang PSDKU Lumajang",
      period: "Jun 2025 - Aug 2025",
      location: "Lumajang, East Java",
      responsibilities: [
        "Performed installation and configuration of Dell PowerEdge servers to support system development and deployment.",
        "Managed and maintained LAN/WAN network infrastructure, achieving 99% system uptime.",
        "Administered the Proxmox Virtual Environment (hypervisor) hosting 10+ Virtual Machines (VMs) for various operational needs.",
        "Configured public and private IPs, IP tables, and network routing to strengthen system security and optimize communication.",
        "Deployed applications to VMs with efficient resource allocation and optimized network configurations, ensuring stable performance.",
        "Monitored server health and network traffic to proactively identify and resolve performance bottlenecks.",
      ],
    },
    {
      icon: Code2,
      title: "Fullstack Developer",
      company: "SMK Negeri Rowokangkung",
      period: "Jan 2025 - Jun 2025",
      location: "Lumajang, East Java",
      responsibilities: [
        "Developed a Computer Assisted Test (CAT) website using React.js and Java Spring Boot, serving 100+ active users.",
        "Implemented Big Data technologies with Apache Hadoop and HBase for real-time exam data analysis, increasing processing efficiency by up to 40%.",
        "Configured and managed the Hadoop cluster environment, including HBase integration and system performance optimization.",
        "Designed an automated question bank categorized by topic and difficulty, with an exam analytics system that accelerated teacher evaluations by 50%.",
        "Developed a Cheating Detection feature to monitor user behavior (fullscreen exit, tab switch, right-click, inspection), improving exam integrity by 95%.",
      ],
    },
    {
      icon: Layers,
      title: "Developer",
      company: "Dinas Ketahanan Pangan dan Pertanian Lumajang (DKPP)",
      period: "Nov 2024 - Jan 2025",
      location: "Lumajang, East Java",
      responsibilities: [
        "Developed the Lumajang Regency Livestock Management System using React.js (frontend) and Spring Boot (backend), integrated with Hadoop and HBase for Big Data processing.",
        "Implemented JWT Authentication to strengthen system security and developed a Flutter mobile app with the same data architecture for cross-platform consistency.",
        "Integrated OpenStreetMap API to display thousands of livestock pen locations interactively across Lumajang Regency.",
        "Managed and processed 1M+ livestock data records (farmers, animals, vaccinations, births), improving data retrieval speed by up to 40%.",
        "Implemented real-time data synchronization between entities to maintain database consistency and accuracy.",
      ],
    },
    {
      icon: MemoryStick,
      title: "Fullstack Developer",
      company: "PT. Winnicode Garuda Teknologi",
      period: "Aug 2024 - Des 2024",
      location: "Bantul, DIY Yogyakarta",
      responsibilities: [
        "Developed a journalistic system and news portal website to streamline content management from writing and review to publication.",
        "Built the system with a decoupled frontend and backend architecture, improving scalability, maintainability, and security.",
        "Implemented article, category, and user management modules with role-based access control for journalists and editors",
        "Optimized website performance to ensure fast and responsive page loading across devices.",
        "Integrated APIs for multi-channel content distribution, enabling efficient news publishing across digital platforms.",
      ],
    },
    {
      icon: Cpu,
      title: "Information Technology Intern",
      company: "PT Industri Kereta Api (Persero)",
      period: "Feb 2024 - Jun 2024",
      location: "Madiun, East Java",
      responsibilities: [
        "Developed the corporate information system (IMS Access) for PT INKA Multi Solusi, integrating Laravel REST API and NuxtJS to enhance internal data management and streamline business workflows.",
        "Designed and implemented an intuitive UI/UX for the correspondence module using NuxtJS and Tailwind CSS, improving usability and task efficiency.",
        "Implemented JWT-based authentication and secure API communication to ensure data integrity and user access control.",
        "Deployed and monitored the system on Google Cloud Platform (GCP) for scalability and reliable performance.",
        "Collaborated with backend developers and UI/UX designers through agile sprint reviews and team meetings, ensuring consistency and development productivity.",
      ],
    },
    {
      icon: Newspaper,
      title: "Fullstack Developer",
      company: "Accounting Department Politeknik Negeri Malang",
      period: "Sep 2023 - Feb 2024",
      location: "Malang, East Java",
      responsibilities: [
        "Developed an innovative Information System (Si-Sita) for the Accounting Department to improve data management and user accessibility.",
        "Implemented Excel-to-database import/export features using optimized algorithms, boosting data management efficiency by 30%.",
        "Conducted manual and automated testing for all system features, reducing bugs by 35% and improving overall system reliability.",
        "Collaborated in a team of five developers to design, build, and deploy the Si-Sita website in a cooperative and efficient workflow.",
      ],
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b relative overflow-hidden pt-32 pb-20">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-[#04081A]" />

        {/* Grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(50,50,70,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(50,50,70,0.15)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />

        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-500/20 rounded-full animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        {/* Content container */}
        <div className="relative container mx-auto px-6 mt-10">
          {/* Section header with enhanced effects */}
          <div className="flex flex-col items-center space-y-8 mb-20">
            <div className="relative">
              <h2 className="text-5xl md:text-7xl font-black text-transparent bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-center">
                Work Experience
              </h2>
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl rounded-full" />
            </div>
            <p className="text-lg md:text-xl text-gray-400 font-medium tracking-wide text-center max-w-2xl">
              Building innovative solutions and delivering impactful results
              across diverse technology projects
            </p>
          </div>

          {/* Experience grid with improved layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </div>
        </div>

        {/* Enhanced background effects */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse delay-1000" />
      </div>
    </>
  );
};

export default ExperienceSection;
