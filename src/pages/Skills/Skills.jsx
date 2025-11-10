/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import IconCloudDemo from "@/components/globe";
import {
  Code2,
  Paintbrush,
  Database,
  Layout,
  Cpu,
  Cloud,
  Network,
  Globe,
  BookOpen,
  Award,
  Settings,
} from "lucide-react";
import {
  FaReact,
  FaGitAlt,
  FaJava,
  FaPython,
  FaDocker,
  FaAws,
  FaGooglePay,
  FaPhp,
  FaAngular,
  FaNodeJs,
  FaUbuntu,
} from "react-icons/fa";
import { BsFileEarmarkCode, BsGrid1X2 } from "react-icons/bs";
import { MdSecurity } from "react-icons/md";
import { FcWorkflow } from "react-icons/fc";
import {
  SiKubernetes,
  SiTerraform,
  SiJenkins,
  SiMysql,
  SiFirebase,
  SiFlutter,
  SiTailwindcss,
  SiNuxtdotjs,
  SiSpring,
  SiLaravel,
  SiMongodb,
  SiNextdotjs,
  SiNestjs,
  SiAndroidstudio,
  SiKotlin,
  SiAndroid,
  SiGitkraken,
  SiVirtualbox,
} from "react-icons/si";

const SkillCard = ({ icon: Icon, title, skills, color }) => (
  <Card className="group relative overflow-hidden bg-gray-900/80 border-gray-700 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(100,100,255,0.1)] to-transparent group-hover:via-[rgba(100,100,255,0.2)] animate-shimmer"></div>
    <CardContent className="p-6 relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`p-3 rounded-xl bg-gray-800/50 ${color} group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="outline"
            className="group/badge relative bg-gray-800/50 hover:bg-gray-700/80 text-gray-100 border-gray-600 flex items-center gap-2 py-2 px-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
          >
            <span className="transform group-hover/badge:scale-110 transition-transform duration-300">
              {skill.icon}
            </span>
            <span className="font-medium">{skill.name}</span>
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Programming Languages",
      color: "text-blue-400",
      skills: [
        {
          name: "Java",
          icon: <FaJava className="w-4 h-4 text-[#ED8B00]" />,
        },
        {
          name: "Kotlin",
          icon: <SiKotlin className="w-4 h-4 text-[#0095D5]" />,
        },
        {
          name: "JavaScript",
          icon: <BsFileEarmarkCode className="w-4 h-4 text-[#F7DF1E]" />,
        },
        {
          name: "Python",
          icon: <FaPython className="w-4 h-4 text-[#3776AB]" />,
        },
        {
          name: "PHP",
          icon: <FaPhp className="w-4 h-4 text-[#777BB4]" />,
        },
        {
          name: "Dart",
          icon: <BsFileEarmarkCode className="w-4 h-4 text-[#0175C2]" />,
        },
      ],
    },
    {
      icon: Layout,
      title: "Frontend Development",
      color: "text-cyan-400",
      skills: [
        {
          name: "React.js",
          icon: <FaReact className="w-4 h-4 text-[#61DAFB]" />,
        },
        {
          name: "Next.js",
          icon: <SiNextdotjs className="w-4 h-4 text-[#000000]" />,
        },
        {
          name: "Angular",
          icon: <FaAngular className="w-4 h-4 text-[#DD0031]" />,
        },
        {
          name: "NuxtJS",
          icon: <SiNuxtdotjs className="w-4 h-4 text-[#00DC82]" />,
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="w-4 h-4 text-[#06B6D4]" />,
        },
        {
          name: "UI/UX Design",
          icon: <Paintbrush className="w-4 h-4 text-[#FF4081]" />,
        },
      ],
    },
    {
      icon: Layout,
      title: "Mobile Development",
      color: "text-emerald-400",
      skills: [
        {
          name: "Android Studio",
          icon: <SiAndroidstudio className="w-4 h-4 text-[#3DDC84]" />,
        },
        {
          name: "Android SDK",
          icon: <SiAndroid className="w-4 h-4 text-[#3DDC84]" />,
        },
        {
          name: "Flutter",
          icon: <SiFlutter className="w-4 h-4 text-[#02569B]" />,
        },
        {
          name: "Kotlin",
          icon: <SiKotlin className="w-4 h-4 text-[#0095D5]" />,
        },
        {
          name: "Dart",
          icon: <BsFileEarmarkCode className="w-4 h-4 text-[#0175C2]" />,
        },
        {
          name: "Cross-Platform Development",
          icon: <Layout className="w-4 h-4 text-[#4CAF50]" />,
        },
      ],
    },
    {
      icon: Database,
      title: "Backend & Database",
      color: "text-green-400",
      skills: [
        {
          name: "Java Spring Boot",
          icon: <SiSpring className="w-4 h-4 text-[#6DB33F]" />,
        },
        {
          name: "Laravel",
          icon: <SiLaravel className="w-4 h-4 text-[#FF2D20]" />,
        },
        {
          name: "NestJS",
          icon: <SiNestjs className="w-4 h-4 text-[#E0234E]" />,
        },
        {
          name: "Node.js",
          icon: <FaNodeJs className="w-4 h-4 text-[#339933]" />,
        },
        {
          name: "MySQL",
          icon: <SiMysql className="w-4 h-4 text-[#4479A1]" />,
        },
        {
          name: "MongoDB",
          icon: <SiMongodb className="w-4 h-4 text-[#47A248]" />,
        },
        {
          name: "Firebase",
          icon: <SiFirebase className="w-4 h-4 text-[#FFCA28]" />,
        },
        {
          name: "Hapi Framework",
          icon: <FaNodeJs className="w-4 h-4 text-[#FF6600]" />,
        },
      ],
    },
    {
      icon: Cpu,
      title: "Big Data & Analytics",
      color: "text-purple-400",
      skills: [
        {
          name: "Apache Hadoop",
          icon: <Database className="w-4 h-4 text-[#FF9900]" />,
        },
        {
          name: "HBase",
          icon: <Database className="w-4 h-4 text-[#FF6600]" />,
        },
        {
          name: "ETL Processes",
          icon: <FcWorkflow className="w-4 h-4" />,
        },
        {
          name: "Power BI",
          icon: <BsGrid1X2 className="w-4 h-4 text-[#F2C811]" />,
        },
        {
          name: "Data Visualization",
          icon: <Paintbrush className="w-4 h-4 text-[#9C27B0]" />,
        },
        {
          name: "MaxCompute",
          icon: <Database className="w-4 h-4 text-[#FF5722]" />,
        },
      ],
    },
    {
      icon: Cloud,
      title: "Cloud & Infrastructure",
      color: "text-orange-400",
      skills: [
        {
          name: "AWS Cloud",
          icon: <FaAws className="w-4 h-4 text-[#FF9900]" />,
        },
        {
          name: "Google Cloud Platform",
          icon: <FaGooglePay className="w-4 h-4 text-[#4285F4]" />,
        },
        {
          name: "Alibaba Cloud",
          icon: <Cloud className="w-4 h-4 text-[#FF6A00]" />,
        },
        {
          name: "Ubuntu Server",
          icon: <FaUbuntu className="w-4 h-4 text-[#E95420]" />,
        },
        {
          name: "Oracle VirtualBox",
          icon: <SiVirtualbox className="w-4 h-4 text-[#183A61]" />,
        },
        {
          name: "Virtual Machine Management",
          icon: <Cpu className="w-4 h-4 text-[#0078D4]" />,
        },
        {
          name: "Proxmox VE",
          icon: <Cpu className="w-4 h-4 text-[#E57000]" />,
        },
        {
          name: "Dell PowerEdge Servers",
          icon: <Cpu className="w-4 h-4 text-[#007DB8]" />,
        },
      ],
    },
    {
      icon: Settings,
      title: "DevOps & Tools",
      color: "text-pink-400",
      skills: [
        {
          name: "Docker",
          icon: <FaDocker className="w-4 h-4 text-[#2496ED]" />,
        },
        {
          name: "Kubernetes",
          icon: <SiKubernetes className="w-4 h-4 text-[#326CE5]" />,
        },
        {
          name: "Jenkins CI/CD",
          icon: <SiJenkins className="w-4 h-4 text-[#D33833]" />,
        },
        {
          name: "Terraform",
          icon: <SiTerraform className="w-4 h-4 text-[#623CE4]" />,
        },
        {
          name: "Git Version Control",
          icon: <FaGitAlt className="w-4 h-4 text-[#F05032]" />,
        },
        {
          name: "GitKraken",
          icon: <SiGitkraken className="w-4 h-4 text-[#179287]" />,
        },
        {
          name: "Load Balancer",
          icon: <Network className="w-4 h-4 text-[#00C853]" />,
        },
      ],
    },
    {
      icon: Award,
      title: "Specialized Technologies",
      color: "text-yellow-400",
      skills: [
        {
          name: "Machine Learning",
          icon: <Cpu className="w-4 h-4 text-[#FF6D00]" />,
        },
        {
          name: "Computer Vision (CNN)",
          icon: <BsGrid1X2 className="w-4 h-4 text-[#2196F3]" />,
        },
        {
          name: "OCR Technology",
          icon: <BsFileEarmarkCode className="w-4 h-4 text-[#9C27B0]" />,
        },
        {
          name: "Anti-Cheating Detection",
          icon: <MdSecurity className="w-4 h-4 text-[#F44336]" />,
        },
        {
          name: "OpenStreetMap API",
          icon: <Globe className="w-4 h-4 text-[#7EBC6F]" />,
        },
        {
          name: "Midtrans Payment Gateway",
          icon: <BsGrid1X2 className="w-4 h-4 text-[#FF5722]" />,
        },
      ],
    },
    {
      icon: BookOpen,
      title: "Project Management & Leadership",
      color: "text-indigo-400",
      skills: [
        {
          name: "Agile Methodologies",
          icon: <FcWorkflow className="w-4 h-4" />,
        },
        {
          name: "Scrum & Kanban",
          icon: <BsGrid1X2 className="w-4 h-4 text-[#7C4DFF]" />,
        },
        {
          name: "Project Management",
          icon: <Layout className="w-4 h-4 text-[#4CAF50]" />,
        },
        {
          name: "Quality Assurance",
          icon: <BsGrid1X2 className="w-4 h-4 text-[#00C853]" />,
        },
        {
          name: "Team Leadership",
          icon: <Award className="w-4 h-4 text-[#FF9800]" />,
        },
        {
          name: "Research & Innovation",
          icon: <BookOpen className="w-4 h-4 text-[#607D8B]" />,
        },
      ],
    },
  ];

  return (
    <main className="pt-15 lg:pt-0 text-white min-h-screen bg-[#04081A] relative">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

      <section className="container mx-auto px-4 py-11 relative z-10">
        <div className="flex justify-center items-center ">
          <IconCloudDemo />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              color={category.color}
            />
          ))}
        </div>
      </section>
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(
              to right,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            );
          background-size: 30px 30px;
        }
      `}</style>
    </main>
  );
};

export default SkillsSection;
