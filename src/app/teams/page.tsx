"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

// Define team roles and specializations
const teamRoles = [
  { title: "Veterinary Director", specialty: "Cat Health & Medical Care" },
  { title: "Senior Cat Care Specialist", specialty: "Behavioral & Enrichment" },
  { title: "Guest Services Manager", specialty: "Customer Relations" },
  { title: "Feline Enrichment Coordinator", specialty: "Play & Activities" },
  { title: "Night Care Supervisor", specialty: "24/7 Cat Monitoring" },
  { title: "Nutrition Specialist", specialty: "Dietary & Wellness" },
  { title: "Cat Grooming Expert", specialty: "Beauty & Hygiene" },
  { title: "Operations Manager", specialty: "Facility Management" },
];

const catCareBios = [
  "Passionate about feline welfare with over 8 years of experience in veterinary care. Believes every cat deserves personalized attention and the highest quality medical care.",
  "Dedicated to understanding each cat's unique personality and creating enriching experiences that promote physical and mental well-being in our care facility.",
  "Committed to providing exceptional customer service and ensuring every cat parent feels confident and informed about their pet's stay with us.",
  "Specializes in designing engaging play activities and environmental enrichment programs that keep our feline guests happy, active, and mentally stimulated.",
  "Ensures round-the-clock care and monitoring, providing peace of mind for cat parents and maintaining the highest safety standards during overnight stays.",
  "Expert in feline nutrition and dietary requirements, creating customized meal plans that support optimal health and cater to special dietary needs.",
  "Professional cat groomer with expertise in stress-free grooming techniques, helping our guests look and feel their best during their stay.",
  "Oversees daily operations to maintain our high standards of cleanliness, safety, and comfort, ensuring an exceptional experience for all our feline guests.",
];

interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialty: string;
  bio: string;
  photo: string;
  email: string;
  experience: string;
}

export default function TeamsPage() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchTeamData();
  }, []);

  const fetchTeamData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Fetch 8 team members from RandomUser API
      const response = await fetch(
        "https://randomuser.me/api/?results=8&nat=us,ca,au,gb&inc=name,email,picture,dob"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch team data");
      }

      const data = await response.json();

      // Transform the API data into our team structure
      const transformedMembers: TeamMember[] = data.results.map(
        (user: any, index: number) => {
          const roleInfo = teamRoles[index];
          const bio = catCareBios[index];
          const age =
            new Date().getFullYear() - new Date(user.dob.date).getFullYear();
          const experience = Math.floor(age / 4) + 2; // Simulate experience based on age

          return {
            id: `${user.name.first}-${user.name.last}-${index}`,
            name: `${user.name.first} ${user.name.last}`,
            role: roleInfo.title,
            specialty: roleInfo.specialty,
            bio: bio,
            photo: user.picture.large,
            email: user.email,
            experience: `${experience} years experience`,
          };
        }
      );

      setTeamMembers(transformedMembers);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
      console.error("Error fetching team data:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleRefreshTeam = () => {
    fetchTeamData();
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div
          className="min-h-screen flex items-center justify-center"
          style={{ backgroundColor: "var(--softWhite)" }}
        >
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-gray-300 border-t-orange-500 rounded-full animate-spin mx-auto mb-4"></div>
            <p
              className="text-lg text-gray-600"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Loading our amazing team...
            </p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Navbar />
        <div
          className="min-h-screen flex items-center justify-center"
          style={{ backgroundColor: "var(--softWhite)" }}
        >
          <div className="text-center max-w-md mx-auto px-6">
            <div className="text-6xl mb-4">😿</div>
            <h2
              className="text-2xl font-bold mb-4 text-gray-800"
              style={{ fontFamily: "var(--font-libre)" }}
            >
              Oops! Something went wrong
            </h2>
            <p
              className="text-gray-600 mb-6"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {error}
            </p>
            <button
              onClick={handleRefreshTeam}
              className="px-8 py-3 font-semibold rounded-lg hover:scale-105 transform transition-all duration-200 shadow-md hover:shadow-lg"
              style={{
                backgroundColor: "var(--SoftWood)",
                color: "var(--white)",
                fontFamily: "var(--font-libre)",
              }}
            >
              Try Again
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section
        className="pt-32 pb-20 relative overflow-hidden"
        style={{ backgroundColor: "var(--softWhite)" }}
      >
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-orange-100/30 to-pink-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-tl from-blue-100/20 to-purple-100/15 rounded-full blur-3xl"></div>

        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <div
            className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium mb-8"
            style={{
              backgroundColor: "var(--Cream)",
              color: "var(--SoftWood)",
            }}
          >
            Meet Our Team
          </div>
          <h1
            className="text-4xl md:text-6xl font-light mb-6 text-gray-800"
            style={{ fontFamily: "var(--font-libre)" }}
          >
            The Cat Care
            <span
              className="block text-5xl md:text-7xl font-bold mt-2"
              style={{ color: "var(--SoftWood)" }}
            >
              Experts
            </span>
          </h1>
          <p
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Our passionate team of cat care professionals is dedicated to
            providing the highest quality care, comfort, and love for your
            feline companions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleRefreshTeam}
              className="px-8 py-4 border-2 font-semibold rounded-lg transition-all duration-200 hover:bg-opacity-10"
              style={{
                borderColor: "var(--SoftWood)",
                color: "var(--SoftWood)",
                fontFamily: "var(--font-libre)",
              }}
            >
              Meet New Team
            </button>
          </div>
        </div>
      </section>

      {/* Team Grid Section */}
      <section className="py-20" style={{ backgroundColor: "var(--Cream)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section
        className="py-20 text-center"
        style={{ backgroundColor: "var(--softWhite)" }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2
            className="text-3xl md:text-5xl font-bold mb-6"
            style={{
              fontFamily: "var(--font-libre)",
              color: "var(--SoftWood)",
            }}
          >
            Join Our Cat-Loving Team
          </h2>
          <p
            className="text-lg text-gray-600 mb-8 leading-relaxed"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Are you passionate about cat care? We're always looking for
            dedicated professionals to join our team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="px-8 py-4 font-semibold rounded-lg hover:scale-105 transform transition-all duration-200 shadow-md hover:shadow-lg"
              style={{
                backgroundColor: "var(--SoftWood)",
                color: "var(--white)",
                fontFamily: "var(--font-libre)",
              }}
            >
              View Open Positions
            </button>
            <button
              className="px-8 py-4 border-2 font-semibold rounded-lg transition-all duration-200"
              style={{
                borderColor: "var(--SoftWood)",
                color: "var(--SoftWood)",
                fontFamily: "var(--font-libre)",
              }}
            >
              Contact HR
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

function TeamMemberCard({
  member,
  index,
}: {
  member: TeamMember;
  index: number;
}) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div
      className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1 overflow-hidden"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Photo Section */}
      <div className="relative h-48 sm:h-52 md:h-56 overflow-hidden">
        <div
          className={`absolute inset-0 bg-gray-200 animate-pulse ${
            imageLoaded ? "opacity-0" : "opacity-100"
          } transition-opacity duration-300`}
        ></div>
        <Image
          src={member.photo}
          alt={member.name}
          fill
          className={`object-cover group-hover:scale-110 transition-transform duration-700 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImageLoaded(true)}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />

        {/* Overlay with role on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-3 left-3 right-3">
            <p
              className="text-white text-xs md:text-sm font-medium"
              style={{ fontFamily: "var(--font-libre)" }}
            >
              {member.specialty}
            </p>
          </div>
        </div>

        {/* Experience Badge */}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
          <span
            className="text-xs font-semibold"
            style={{ color: "var(--SoftWood)", fontFamily: "var(--font-mono)" }}
          >
            {member.experience}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 md:p-5">
        <h3
          className="text-lg md:text-xl font-bold mb-1"
          style={{ fontFamily: "var(--font-libre)", color: "var(--SoftWood)" }}
        >
          {member.name}
        </h3>
        <p
          className="text-gray-600 text-xs md:text-sm mb-2"
          style={{ fontFamily: "var(--font-libre)" }}
        >
          {member.role}
        </p>

        <p
          className={`text-gray-700 text-xs md:text-sm leading-relaxed transition-all duration-300`}
          style={{
            fontFamily: "var(--font-mono)",
            display: showDetails ? "block" : "-webkit-box",
            WebkitLineClamp: showDetails ? "unset" : 2,
            WebkitBoxOrient: "vertical",
            overflow: showDetails ? "visible" : "hidden",
          }}
        >
          {member.bio}
        </p>

        <button
          onClick={() => setShowDetails(!showDetails)}
          className="mt-2 text-xs font-medium transition-colors duration-200 hover:underline"
          style={{ color: "var(--SoftWood)", fontFamily: "var(--font-libre)" }}
        >
          {showDetails ? "Show Less" : "Read More"}
        </button>

        {/* Contact Info */}
        <div className="mt-3 pt-3 border-t border-gray-100">
          <a
            href={`mailto:${member.email}`}
            className="inline-flex items-center gap-2 text-xs text-gray-600 hover:text-gray-800 transition-colors duration-200"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            <span>📧</span>
            <span className="truncate">{member.email}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
