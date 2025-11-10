import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";

// Import certificate images using @ alias (same as About page)
import networkCert from "@/assets/images/certificate/network_cert.jpg";
import bnspCert1 from "@/assets/images/certificate/software_programming_1.jpg";
import bnspCert2 from "@/assets/images/certificate/software_programming_2.jpg";
import googleCert from "@/assets/images/certificate/IT_support.png";
import devopsCert from "@/assets/images/certificate/devops_cert_alibaba.jpg";
import bigDataCert from "@/assets/images/certificate/big_data_cert_alibaba.png";
import courseItSupport from "@/assets/images/course/course_it_support.jpg";
import courseDbsCamp from "@/assets/images/course/dbs_foundation.jpg";
import courseIdCamp from "@/assets/images/course/course_idcamp.jpg";

const certifications = [
  {
    title: "Network Engineer Specialty",
    organization: "Alibaba Cloud",
    year: "2025",
    description:
      "Cloud networking certification covering the complete Networking Engineer Career Path on Alibaba Cloud. Curriculum spans from basic cloud server operations to advanced hybrid architectures, including VPC construction, dynamic websites, load balancer for high traffic, VPN gateway, Cloud Enterprise Network for VPC interconnection, and Global Accelerator for network optimization.",
    src: networkCert,
    link: "https://drive.google.com/file/d/1SEsI435CTvNL6V1Opv-6FQBVg1Z-gBvn/view?usp=sharing",
    color: "#1890FF",
    credentialId: "SPEC01251100232499",
    skills: [
      "Cloud Server Management",
      "VPC & Dynamic Websites",
      "Load Balancer",
      "VPN Gateway",
      "Cloud Enterprise Network",
      "Global Accelerator",
    ],
  },
  {
    title: "Computer Software Programming",
    organization: "Badan Nasional Sertifikasi Profesi (BNSP)",
    year: "2025",
    description:
      "Professional competency certification in Information Technology - Computer Software Programming issued by Indonesian Professional Certification Authority. Covers 12 competency units including program specifications, data structures, user interface implementation, entity design, database access, SQL usage, library components, programming algorithms, structured programming, object-oriented programming, code documentation, and debugging techniques.",
    src: [bnspCert1, bnspCert2], // Multiple images for carousel
    isMultiple: true,
    link: "https://drive.google.com/file/d/1YDbIcUlFqooC9a8TVrQGrHtHAw0OBriV/view?usp=sharing",
    color: "#FF6B35",
    credentialId: "62019.3512.01.5.0012606.2025",
    skills: [
      "Program Specifications & Data Structures",
      "User Interface & Entity Design",
      "Database Access & SQL",
      "Programming Algorithms & OOP",
      "Code Documentation & Debugging",
    ],
  },
  {
    title: "IT Support",
    organization: "Google Professional Certificate",
    year: "2024",
    description:
      "Professional Certificate completing five Google-developed courses with hands-on assessments designed to prepare for entry-level IT Support positions. Demonstrates competency in foundational skills including troubleshooting and customer service, networking, operating systems, system administration, and security fundamentals.",
    src: googleCert,
    link: "https://coursera.org/verify/professional-cert/MYLW5UF9J4HF",
    color: "#4285F4",
    credentialId: "MYLW5UF9J4HF",
    skills: [
      "Troubleshooting & Customer Service",
      "Networking Fundamentals",
      "Operating Systems",
      "System Administration",
      "Security Fundamentals",
    ],
  },
  {
    title: "DevOps Engineer",
    organization: "Alibaba Cloud",
    year: "2023",
    description:
      "DevOps certification covering fundamental philosophies, processes and tools for faster software releases. Curriculum includes DevOps introduction, CI/CD with Jenkins, Docker containerization, Terraform orchestration, application containerization, Blue-Green deployment, Kubernetes cluster management, Swarm orchestration, Log Service management, cloud monitoring, and containerized application optimization.",
    src: devopsCert,
    link: "https://drive.google.com/file/d/1WNcAM8t3ldTInKfK8DLss_hkyqN2SsZF/view?usp=sharing",
    color: "#FF9500",
    credentialId: "SPEC02230700095706",
    skills: [
      "DevOps & CI/CD with Jenkins",
      "Docker & Terraform",
      "Kubernetes & Swarm",
      "Blue-Green Deployment",
      "Log Service & Monitoring",
      "Container Optimization",
    ],
  },
  {
    title: "Big Data Analysis",
    organization: "Alibaba Cloud",
    year: "2023",
    description:
      "Big Data Career Path certification focusing on fundamental tools and techniques for Big Data professionals. Curriculum covers structured data processing with Python, MySQL queries, Spark on Cloud, data migration to Big Data platforms, MaxCompute data transmission, DataWorks development, QuickBI business intelligence, large dashboard creation, Hive/Hadoop on E-MapReduce, and Python data visualization.",
    src: bigDataCert,
    link: "https://drive.google.com/file/d/1LwsQj-vQv-UhEZuOm0dwtmgM9zcevixO/view?usp=sharing",
    color: "#8B5CF6",
    credentialId: "SPEC03230200087880",
    skills: [
      "Python Data Processing",
      "MySQL & Spark",
      "MaxCompute & DataWorks",
      "QuickBI & Dashboards",
      "E-MapReduce (Hive/Hadoop)",
      "Data Visualization",
    ],
  },
];

const trainings = [
  {
    title: "IT Support",
    organization: "Fresh Graduate Academy - Digital Talent Scholarship 2024",
    year: "2024",
    description:
      "A certified professional training program organized by the Ministry of Communication and Informatics (Kominfo) through the Fresh Graduate Academy Digital Talent Scholarship (FGA DTS) 2024, in collaboration with Google and Coursera. The program focused on developing technical competencies in IT support and infrastructure technology with a total of 152 hours of training. The curriculum covered five core modules—Technical Support Fundamentals, The Bits and Bytes of Computer Networking, Operating Systems and You: Becoming a Power User, System Administration and IT Infrastructure Services, and IT Security: Defense Against the Digital Dark Arts. Through this program, participants gained practical and comprehensive skills in troubleshooting, system administration, network management, and cybersecurity, preparing them to work as IT Support Specialists aligned with Google's global industry standards.",
    src: courseItSupport,
    link: "https://drive.google.com/drive/folders/1-66WvsBJyeiOjQFs4csgDQtnTIDSfCRa?usp=sharing",
    color: "#4285F4",
    credentialId: "1957832840-1954/FGA/BLSDM.Kominfo/2024",
    skills: [
      "Technical Support",
      "Network Administration",
      "System Security",
      "Troubleshooting",
    ],
    certificates: [
      "Technical Support Fundamentals",
      "Computer Networking Basics",
      "Operating Systems Management",
      "System Administration",
      "IT Infrastructure Services",
      "IT Security Implementation",
    ],
  },
  {
    title: "DBS Foundation Coding Camp",
    organization: "DBS Foundation",
    year: "2024",
    description:
      "An intensive certified training program organized in collaboration between DBS Foundation and Dicoding Indonesia, focusing on mastering the fundamentals of software development and cloud technology. The program covered a comprehensive range of topics from foundational to technical levels, including basic programming, modern JavaScript, SQL, software project management, back-end development, and AWS Cloud Practitioner Essentials as an introduction to cloud computing. Through this training, participants gained both technical and managerial competencies to build end-to-end web applications and understand the core concepts of cloud infrastructure and deployment in accordance with industry standards.",
    src: courseDbsCamp,
    link: "https://drive.google.com/drive/folders/1VEQ9GFxFCu7PGqHuoTkTngNLvydCvcqJ?usp=sharing",
    color: "#E60012",
    credentialId: "DBS-CAMP-2024-004",
    skills: [
      "Web Development",
      "JavaScript",
      "SQL",
      "AWS Cloud",
      "Project Management",
    ],
    certificates: [
      "Basic Programming Fundamentals",
      "Modern JavaScript Development",
      "SQL Database Management",
      "Software Project Management",
      "Back-end Development",
      "AWS Cloud Practitioner Essentials",
    ],
  },
  {
    title: "IDCamp Indosat Ooredoo Hutchison",
    organization: "Indosat Ooredoo Hutchison",
    year: "2023",
    description:
      "A scholarship-based training program organized in collaboration between Indosat Ooredoo Hutchison and Dicoding Indonesia, focusing on mobile application development using the Dart programming language and the Flutter framework. The program was designed to equip participants with fundamental programming skills and the ability to build cross-platform applications for Android and iOS. The curriculum covered introductory programming with Dart, including basic logic, variables, functions, and control structures, as well as beginner-level Flutter development, emphasizing user interface (UI) design, state management, and widget implementation. Graduates of this program are capable of independently developing simple mobile applications and possess a solid understanding of modern software development principles based on Flutter industry standards.",
    src: courseIdCamp,
    link: "https://drive.google.com/drive/folders/1nrw4nhwcQnc1PQ_BjvKHIWd_Ms70eEWr?usp=sharing",
    color: "#FF6B6B",
    credentialId: "IDC-IOH-2023-005",
    skills: [
      "Dart Programming",
      "Flutter Development",
      "Mobile App Development",
      "UI/UX Design",
    ],
    certificates: [
      "Dart Programming Fundamentals",
      "Flutter Framework Basics",
      "Cross-Platform Development",
      "UI Design with Flutter",
      "State Management",
      "Mobile App Deployment",
    ],
  },
];

export default function Certifications() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    // Add specific styles for 1366x768 resolution
    const style = document.createElement("style");
    style.textContent = `
      @media screen and (width: 1366px) and (height: 768px),
             screen and (width: 1367px) and (height: 768px),
             screen and (width: 1368px) and (height: 769px) {
        .cert-card {
          scale: 0.85;
          margin-top: -5vh;
        }
        .cert-container {
          height: 90vh;
        }
      }
    `;
    document.head.appendChild(style);

    // Resolution check function
    const checkResolution = () => {
      const isTargetResolution =
        window.innerWidth >= 1360 &&
        window.innerWidth <= 1370 &&
        window.innerHeight >= 760 &&
        window.innerHeight <= 775;

      if (isTargetResolution) {
        document.documentElement.style.setProperty("--cert-scale", "0.85");
        document.documentElement.style.setProperty("--cert-margin", "-5vh");
      } else {
        document.documentElement.style.setProperty("--cert-scale", "1");
        document.documentElement.style.setProperty("--cert-margin", "0");
      }
    };

    checkResolution();
    window.addEventListener("resize", checkResolution);

    return () => {
      document.head.removeChild(style);
      window.removeEventListener("resize", checkResolution);
    };
  }, []);

  return (
    <ReactLenis root>
      <main className="bg-black" ref={container}>
        {/* Hero Section */}
        <section className="h-screen flex items-center justify-center bg-gradient-to-b from-slate-950 to-black text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:50px_50px]" />
          <div className="relative z-10 text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Certifications & Training
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Professional certifications and continuous learning journey in
                technology and software development
              </p>
            </motion.div>
          </div>

          {/* Floating elements */}
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </section>

        {/* Certifications Section */}
        <section className="text-white w-full bg-slate-950">
          {certifications.map((cert, i) => {
            const targetScale = 1 - (certifications.length - i) * 0.05;
            return (
              <CertCard
                key={`c_${i}`}
                i={i}
                url={cert.src}
                link={cert.link}
                title={cert.title}
                organization={cert.organization}
                year={cert.year}
                color={cert.color}
                description={cert.description}
                credentialId={cert.credentialId}
                skills={cert.skills}
                progress={scrollYProgress}
                range={[i * 0.2, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </section>

        {/* Training Programs Section */}
        <section className="text-white w-full bg-gradient-to-b from-slate-950 to-slate-900 py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Training Programs
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive training programs with multiple certificates per
                course
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {trainings.map((training, index) => (
                <TrainingCard
                  key={`training_${index}`}
                  training={training}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </ReactLenis>
  );
}

// Image Carousel Component for multiple certificate images
function ImageCarousel({ images, alt, className }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPortrait, setIsPortrait] = useState(false);

  // Auto-slide every 3 seconds
  useEffect(() => {
    if (images.length > 1) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 3000);

      return () => clearInterval(timer);
    }
  }, [images.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Handle image load to detect orientation
  const handleImageLoad = (e) => {
    const { naturalWidth, naturalHeight } = e.target;
    setIsPortrait(naturalHeight > naturalWidth);
  };

  // Get appropriate object-fit class based on image type
  const getImageFitClass = () => {
    if (isPortrait) {
      // For portrait images (software certificates), contain to show full image with center positioning
      return "object-contain object-center bg-gray-900";
    } else {
      // For landscape images (network, google certificates), cover for better fill
      return "object-cover object-center";
    }
  };

  if (!Array.isArray(images)) {
    return (
      <motion.img
        src={images}
        alt={alt}
        className={`${className.replace(
          "object-cover",
          ""
        )} ${getImageFitClass()}`}
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.02 }} // Reduced scale for portrait images
        transition={{ duration: 0.4 }}
        onLoad={handleImageLoad}
      />
    );
  }
  return (
    <div className="relative w-full h-full group flex items-center justify-center">
      {/* Main Image */}
      <motion.img
        key={currentIndex}
        src={images[currentIndex]}
        alt={`${alt} - Image ${currentIndex + 1}`}
        className={`${className.replace(
          "object-cover",
          ""
        )} ${getImageFitClass()}`}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: isPortrait ? 1.02 : 1.05 }}
        onLoad={handleImageLoad}
      />

      {/* Navigation Arrows (visible on hover) */}
      {images.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>

          {/* Image Counter */}
          <div className="absolute top-3 right-3 bg-black/50 text-white px-2 py-1 rounded text-xs z-10">
            {currentIndex + 1} / {images.length}
          </div>
        </>
      )}
    </div>
  );
}

function CertCard({
  i,
  title,
  organization,
  year,
  description,
  url,
  link,
  color,
  credentialId,
  skills,
  progress,
  range,
  targetScale,
}) {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0 cert-container"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-2vh + ${i * 15}px)`, // Reduced positioning offset
        }}
        className="relative h-auto w-[90%] md:w-[85%] lg:w-[75%] xl:w-[65%] origin-center cert-card"
        whileHover={{
          y: -4, // Reduced hover lift
          transition: { duration: 0.3 },
        }}
      >
        {/* Modern split card design */}
        <div className="w-full flex flex-col md:flex-row bg-zinc-900 rounded-2xl overflow-hidden shadow-xl">
          {/* Certificate image section - full width on mobile, 55% on desktop */}
          <div className="w-full md:w-[55%] min-h-[300px] md:min-h-[450px] lg:min-h-[500px] relative flex items-center justify-center p-2">
            <ImageCarousel
              images={url}
              alt={`${title} Certificate`}
              className="w-full h-full max-h-[480px] rounded-lg"
            />

            {/* Colored overlay on hover */}
            <motion.div
              className="absolute inset-0"
              style={{ backgroundColor: color, mixBlendMode: "overlay" }}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.3 }}
              transition={{ duration: 0.3 }}
            />

            {/* Year badge */}
            <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-black/50 backdrop-blur-md text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium">
              {year}
            </div>

            {/* Verification badge */}
            <div className="absolute top-4 right-4 md:top-6 md:right-6 bg-green-500/20 backdrop-blur-md text-green-400 px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium border border-green-500/30">
              ✓ Verified
            </div>
          </div>

          {/* Content section - full width on mobile, 45% on desktop */}
          <div className="w-full md:w-[45%] p-6 md:p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div
                  className="w-2 h-2 md:w-3 md:h-3 rounded-full"
                  style={{ backgroundColor: color }}
                />
                <div className="h-[1px] w-12 md:w-20 bg-gray-600" />
              </div>

              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-3">
                {title}
              </h2>

              <p
                className="text-lg md:text-xl font-semibold mb-2"
                style={{ color }}
              >
                {organization}
              </p>

              <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-4 md:mb-6">
                {description}
              </p>

              {/* Credential ID */}
              <div className="mb-4 md:mb-6">
                <p className="text-xs text-gray-500 mb-1">Credential ID</p>
                <p className="text-sm font-mono text-gray-300 bg-gray-800/50 px-3 py-1 rounded">
                  {credentialId}
                </p>
              </div>

              {/* Skills Tags */}
              <div className="mb-6">
                <p className="text-xs text-gray-500 mb-2">Key Skills</p>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs rounded-full bg-gray-800/50 text-gray-300 border border-gray-700/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-auto pt-4">
              <div className="w-full h-[1px] bg-gray-800 mb-4 md:mb-6" />

              <div className="flex items-center gap-4">
                {/* View Certificate */}
                <motion.button
                  className="group flex items-center gap-2"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  onClick={() => window.open(link, "_blank")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14,2 14,8 20,8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10,9 9,9 8,9"></polyline>
                  </svg>
                  <span
                    className="text-xs md:text-sm font-medium"
                    style={{ color }}
                  >
                    View Certificate
                  </span>
                </motion.button>

                {/* Verified Badge */}
                <div className="flex items-center gap-2 text-green-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20,6 9,17 4,12"></polyline>
                  </svg>
                  <span className="text-xs md:text-sm font-medium">
                    Verified
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function TrainingCard({ training, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="bg-zinc-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-zinc-700/50 hover:border-zinc-600/50 transition-all duration-300"
      whileHover={{ y: -8 }}
    >
      {/* Training Image Section */}
      <div className="h-48 relative overflow-hidden">
        <motion.img
          src={training.src}
          alt={`${training.title} Training`}
          className="w-full h-full object-cover"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        />

        {/* Colored overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{ backgroundColor: training.color }}
        />

        {/* Year badge */}
        <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-medium">
          {training.year}
        </div>

        {/* Multiple certificates badge */}
        <div className="absolute top-4 right-4 bg-green-500/20 backdrop-blur-md text-green-400 px-3 py-1 rounded-full text-xs font-medium border border-green-500/30">
          Multiple Certificates
        </div>
      </div>

      {/* Training Header */}
      <div className="p-6 border-b border-zinc-700/50">
        <div className="flex items-center gap-3 mb-4">
          <div
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: training.color }}
          />
          <div className="h-[1px] w-12 bg-gray-600" />
        </div>

        <h3 className="text-2xl font-bold text-white mb-2">{training.title}</h3>
        <p
          className="text-lg font-semibold mb-3"
          style={{ color: training.color }}
        >
          {training.organization}
        </p>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          {training.description}
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-2">
          {training.skills.map((skill, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs rounded-full bg-gray-800/50 text-gray-300 border border-gray-700/50"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Individual Certificates */}
      <div className="p-6">
        <h4 className="text-sm font-semibold text-gray-300 mb-4 flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14,2 14,8 20,8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
          </svg>
          Individual Certificates ({training.certificates.length})
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {training.certificates.map((cert, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-3 p-3 bg-zinc-900/50 rounded-lg border border-zinc-700/30 hover:border-zinc-600/50 transition-colors"
              whileHover={{ x: 4 }}
            >
              <div
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ backgroundColor: training.color }}
              />
              <span className="text-sm text-gray-300">{cert}</span>
            </motion.div>
          ))}
        </div>

        {/* View All Certificates Button */}
        <motion.button
          className="w-full mt-6 p-3 rounded-lg border border-zinc-700/50 text-gray-300 hover:text-white hover:border-zinc-600/50 transition-colors flex items-center justify-center gap-2"
          whileHover={{ y: -2 }}
          onClick={() => window.open(training.link, "_blank")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 3h6v6"></path>
            <path d="M10 14 21 3"></path>
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
          </svg>
          View All Certificates
        </motion.button>
      </div>
    </motion.div>
  );
}

// Add PropTypes validation
CertCard.propTypes = {
  i: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  organization: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  credentialId: PropTypes.string.isRequired,
  skills: PropTypes.array.isRequired,
  progress: PropTypes.object.isRequired,
  range: PropTypes.array.isRequired,
  targetScale: PropTypes.number.isRequired,
};

ImageCarousel.propTypes = {
  images: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

TrainingCard.propTypes = {
  training: PropTypes.shape({
    title: PropTypes.string.isRequired,
    organization: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    skills: PropTypes.array.isRequired,
    certificates: PropTypes.array.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};
