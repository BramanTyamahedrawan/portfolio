import { useState } from "react";
import { Award, Calendar, Users, Trophy, Target } from "lucide-react";
import { motion } from "framer-motion";

const OrganizationsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const organizationData = [
    {
      title: "Workshop Riset Informatika (WRI)",
      organization: "Politeknik Negeri Malang",
      mascot: "🔬",
      year: "Oct 2021 - Jan 2024",
      location: "Malang, East Java",
      role: "Active Member",
      category: "Academic Research",
      achievements: [
        "Active Member",
        "Research Participation",
        "Technical Contributions",
        "Collaborative Projects",
      ],
      skills: [
        "Research Methodology",
        "Team Collaboration",
        "Technical Presentation",
        "Innovation Development",
      ],
      highlights: [
        "Participated in WRI OpenTalk17, contributing to discussions and development workshops",
        "Enhanced technical presentation skills through regular research presentations",
        "Contributed to academic discussions on emerging technologies and software development trends",
        "Developed collaborative skills working with diverse teams on technical projects",
      ],
    },
    {
      title: "Google Developer Student Club (GDSC)",
      organization: "Politeknik Negeri Malang Chapter",
      mascot: "🌐",
      year: "Nov 2021 - Jan 2024",
      location: "Malang, East Java",
      role: "Active Member",
      category: "Developer Community",
      achievements: [
        "Machine Learning Division Member",
        "AI Discussion Forum Participant",
        "Workshop Participation",
        "Technical Learning",
        "Professional Networking",
      ],
      skills: [
        "Machine Learning",
        "Artificial Intelligence",
        "Google Technologies",
        "Cloud Computing",
      ],
      highlights: [
        "Served as an active member of the Machine Learning division within GDSC",
        "Actively participated in discussion forums addressing artificial intelligence problems and solutions",
        "Participated in Google Developer workshops and technical training sessions",
        "Collaborated with fellow developers on innovative projects using Google technologies",
        "Contributed to the local developer community through knowledge sharing",
      ],
    },
    {
      title: "EEPROM",
      organization: "Politeknik Negeri Malang",
      mascot: "🤖",
      year: "Oct 2021 - Apr 2022",
      location: "Malang, East Java",
      role: "Member",
      category: "Robotics & Engineering",
      achievements: [
        "Software Division Member",
        "Robotics Projects",
        "Technical Learning",
        "Innovation Participation",
      ],
      skills: [
        "Robotics Programming",
        "Hardware Integration",
        "Problem Solving",
        "Technical Innovation",
      ],
      highlights: [
        "Served as an active member of the Software division within EEPROM Robotika",
        "Participated in robotics projects and technical workshops focusing on software development",
        "Gained hands-on experience with robotics programming and hardware integration",
        "Enhanced understanding of robotics applications in industry and research",
      ],
    },
    {
      title: "Sie Kerohanian Islam (Youth Mosque Committee)",
      organization: "SMA Negeri 2 Pare",
      mascot: "🕌",
      year: "Aug 2018 - May 2021",
      location: "Kediri, East Java",
      role: "Committee Member",
      category: "Religious & Social",
      achievements: [
        "Equipment Committee",
        "Event Organization",
        "Islamic Reformist Representative",
        "Leadership Development",
      ],
      skills: [
        "Event Management",
        "Community Engagement",
        "Public Speaking",
        "Religious Leadership",
      ],
      highlights: [
        "Served as equipment committee for Sunday Morning Regular Study sessions",
        "Served as equipment committee for Islamic Spiritual Organization training programs",
        "Organized committee for Eid al-Adha prayers and Qurban (sacrifice) activities",
        "Actively participated in group discussions related to Islamic development and reform",
        "Represented the Islamic reform faction in Focus Group Discussions (FGD)",
        "Organized and managed various religious and social events for the school community",
        "Coordinated Islamic spiritual activities and programs for students",
        "Developed leadership and organizational skills through committee responsibilities",
      ],
    },
    {
      title: "Tahfidz Al-Quran Organization",
      organization: "SMA Negeri 2 Pare",
      mascot: "📖",
      year: "Aug 2018 - May 2021",
      location: "Kediri, East Java",
      role: "Active Participant & Event Organizer",
      category: "Religious Education",
      achievements: [
        "6 Juz Memorized",
        "Official Certification",
        "Tilawah Competition 2nd Place",
        "Event Leadership",
      ],
      skills: [
        "Quran Memorization",
        "Arabic Pronunciation",
        "Spiritual Discipline",
        "Event Organization",
      ],
      highlights: [
        "Successfully memorized 6 Juz of the Quran (Juz 30, 29, 28, 27, 26, and 1)",
        "Received official certification signed by the Head of the Education Office",
        "Won 2nd place in the Tilawah Al-Quran Competition at school level",
        "Led as chief organizer of 3-day 2-night Tahfidz intensive retreat program",
        "Maintained consistent daily practice and spiritual discipline throughout high school",
        "Participated in regional Quran recitation events representing the school",
        "Mentored junior students in Quran memorization techniques and spiritual practices",
        "Organized intensive Quran memorization retreat programs for students",
      ],
    },
    {
      title: "Remaja Masjid Al Amin dan Imam Balqi",
      organization: "Community Mosque Organization",
      mascot: "🕌",
      year: "2018 - 2021",
      location: "Kediri, East Java",
      role: "Committee Member",
      category: "Community Service",
      achievements: [
        "Community Service Leader",
        "Event Committee",
        "Social Impact",
        "Religious Activities",
      ],
      skills: [
        "Community Outreach",
        "Event Planning",
        "Social Service",
        "Religious Coordination",
      ],
      highlights: [
        "Organized rice distribution committee for congregation members and underprivileged residents in the surrounding area",
        "Served as committee for regular religious study sessions every Friday and Wednesday",
        "Organized weekly religious study sessions for community members",
        "Coordinated food distribution programs for underprivileged families in the neighborhood",
        "Developed community engagement skills through regular mosque activities",
        "Facilitated religious education programs for youth and adults",
        "Contributed to social welfare initiatives connecting mosque and local community",
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
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-6">
            Organizations & Leadership
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Active participation in various organizations, developing leadership
            skills and contributing to community growth through diverse
            initiatives.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {organizationData.map((org, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`relative border rounded-xl p-8 transition-all duration-300 bg-gray-900/50 backdrop-blur-sm ${
                hoveredIndex === index
                  ? "border-purple-500 scale-[1.02]"
                  : "border-purple-400/20"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="space-y-6">
                {/* Header Section */}
                <div className="space-y-3">
                  {/* Title and Role */}
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{org.mascot}</span>
                      <div>
                        <h3 className="text-xl font-bold text-white">
                          {org.title}
                        </h3>
                        <p className="text-sm text-purple-400 font-semibold">
                          {org.role}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-mono bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full">
                      {org.category}
                    </span>
                  </div>

                  {/* Organization and Location */}
                  <div className="space-y-1">
                    <p className="text-lg text-gray-300 flex items-center gap-2">
                      <Users className="w-4 h-4 text-purple-500" />
                      {org.organization}
                    </p>
                    <div className="flex justify-between items-center">
                      <p className="text-gray-400 flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {org.year}
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
                        {org.location}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Highlights as bullet points */}
                <div className="border-l-4 border-purple-500/50 pl-4">
                  <ul className="space-y-2 text-gray-300 text-sm leading-relaxed">
                    {org.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Achievements */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-yellow-500" />
                    Key Achievements
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {org.achievements.map((achievement, i) => (
                      <div
                        key={i}
                        className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 flex items-center gap-2 text-sm"
                      >
                        <Award className="w-3 h-3" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                    <Target className="w-4 h-4 text-blue-500" />
                    Skills Developed
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {org.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs rounded bg-blue-500/10 text-blue-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-16 h-16">
                <div className="absolute top-0 right-0 w-4 h-[1px] bg-purple-500/50" />
                <div className="absolute top-0 right-0 w-[1px] h-4 bg-purple-500/50" />
              </div>
              <div className="absolute bottom-4 left-4 w-16 h-16">
                <div className="absolute bottom-0 left-0 w-4 h-[1px] bg-pink-500/50" />
                <div className="absolute bottom-0 left-0 w-[1px] h-4 bg-pink-500/50" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Enhanced background effects */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/10 rounded-full filter blur-3xl animate-pulse delay-1000" />
    </section>
  );
};

export default OrganizationsSection;
