import { useState } from "react";
import { Award, Calendar, BookOpen, Trophy } from "lucide-react";
import { motion } from "framer-motion";

const EducationSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const educationData = [
    {
      degree: "Sarjana Terapan Teknik Informatika",
      school: "Politeknik Negeri Malang",
      mascot: "🎓",
      year: "Aug 2021 - Jul 2025",
      location: "Malang, East Java",
      achievements: [
        "GPA: 3.74/4.00",
        "Cum Laude Graduate",
        "Project Management Excellence",
        "AI/ML Implementation",
        "Full-Stack Development",
        "MSIB Batch 6 Participant",
      ],
      skills: [
        "Java Programming",
        "React.js Development",
        "Flutter Development",
        "Python & AI/ML",
        "Project Management",
        "Database Management",
        "ETL & Data Analytics",
        "Power BI Visualization",
        "Firebase Integration",
        "API Integration",
        "Agile Methodologies",
        "System Analysis",
      ],
      highlights: [
        "Graduated with honors (Cum Laude, GPA 3.74) after completing 146 credits in the Bachelor of Applied Informatics Engineering program",
        "Led a team of 5 members as Project Manager, IT Lead, and QA Engineer in developing an integrated tourism ticketing system integrated with the Midtrans API",
        "Oversaw and monitored team progress on the VacationPal project using Jira, Kanban, and Scrum methodologies, ensuring efficient project workflow and adherence to quality standards",
        "Independently developed a dynamic Decision Support System website using MABAC methodology, customized to allow users to modify questions, alternatives, and criteria based on their preferences",
        "Integrated ETL processes to clean duplicated and missing data for online sales in Europe, utilizing SSDT for data preparation and implementing Power BI for generating comprehensive visualizations and analytical diagrams",
        "Developed a job vacancy mobile application using the Flutter framework with integrated Google Firebase for robust database management and authentication functionalities",
        "Engineered a student identity card OCR mobile application using Flutter framework, leveraging Python integration with Convolutional Neural Network (CNN) techniques to enhance identity card data processing accuracy",
        "Completed a Mobile Developer training program by Digital Talent x State Polytechnic of Malang, focusing on Flutter-based application development",
        "Participated in the MSIB Batch 6 internship program and the Matching Fund project in collaboration with the Lumajang Government",
      ],
    },
    {
      degree: "Senior High School (Science Program)",
      school: "SMA Negeri 2 Pare",
      mascot: "🏫",
      year: "Jul 2018 - May 2021",
      location: "Kediri, East Java",
      achievements: [
        "Final Grade: 89.80/100",
        "6 Juz Quran Memorization",
        "Tilawah Competition 2nd Place",
        "National Olympiad Participant",
        "Social Leadership Role",
        "Community Service Leader",
      ],
      skills: [
        "Mathematics",
        "Physics",
        "Chemistry",
        "Biology",
        "Islamic Studies",
        "Leadership",
        "Public Relations",
        "Event Management",
        "Community Engagement",
        "Crisis Management",
        "Academic Competition",
        "Social Welfare",
      ],
      highlights: [
        "Achieved a final grade of 89.80/100 on the graduation certificate",
        "Memorized 6 Juz of the Quran (Juz 30, 29, 28, 27, 26, and 1), certified and signed by the Head of the Education Office",
        "Won 2nd place in the Tilawah Al-Quran Competition",
        "Actively participated in national-level competitions and academic contests",
        "Participated in social service activities organized by SMA Negeri 2 Pare and Islamic Spiritual Organization",
        "Participated in National Logic Competition organized by ITS (Institut Teknologi Sepuluh Nopember)",
        "Participated in Dentine Olympiad organized by Unair (Universitas Airlangga)",
        "Participated in Physics Olympiad organized by ITS (Institut Teknologi Sepuluh Nopember)",
        "Actively participated as a volunteer during the 2019 Riau Haze Crisis alongside Lazismu.",
        "Served as the Chairman of the Public Relations Division for a social welfare event in both 2019 and 2020.",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="min-h-screen relative overflow-hidden py-40 bg-[#04081A]">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#04081A] via-transparent to-[#04081A]" />
        <div className="absolute inset-0 border border-white/[0.05] grid grid-cols-2 md:grid-cols-4" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent mb-6">
            Educational Journey
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Discover how academic excellence shapes innovative thinking and
            professional growth.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`relative border rounded-xl p-8 transition-all duration-300 bg-gray-900/50 backdrop-blur-sm ${
                hoveredIndex === index
                  ? "border-teal-500 scale-[1.02]"
                  : "border-blue-400/20"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{edu.mascot}</span>
                    <h3 className="text-2xl font-bold text-white">
                      {edu.degree}
                    </h3>
                  </div>
                  <p className="text-lg text-gray-300 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-teal-500" />
                    {edu.school}
                  </p>
                  <div className="flex justify-between items-center">
                    <p className="text-gray-400 flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {edu.year}
                    </p>
                    <p className="text-sm text-gray-400 flex items-center gap-1">
                      <svg
                        className="w-3 h-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {edu.location}
                    </p>
                  </div>
                  <div className="mt-2">
                    <p className="text-lg font-semibold text-teal-400">
                      {edu.achievements[0]}
                    </p>
                  </div>
                </div>

                {/* Highlights as bullet points */}
                <div className="border-l-4 border-teal-500/50 pl-4">
                  <ul className="space-y-2 text-gray-300 text-sm leading-relaxed">
                    {edu.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-teal-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-yellow-500" />
                    Key Achievements
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement, i) => (
                      <div
                        key={i}
                        className="px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 flex items-center gap-2 text-sm"
                      >
                        <Award className="w-4 h-4" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {edu.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs rounded bg-blue-500/10 text-blue-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
