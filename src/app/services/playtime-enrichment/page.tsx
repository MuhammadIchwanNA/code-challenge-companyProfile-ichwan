"use client";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const pricingPlans = [
  {
    name: "Basic Session",
    price: "$15",
    period: "30 minutes",
    features: [
      "30-minute play session",
      "Basic toy rotation",
      "Interactive playtime",
      "Exercise tracking",
      "Session summary"
    ],
    popular: false
  },
  {
    name: "Premium Session",
    price: "$25",
    period: "45 minutes",
    features: [
      "45-minute enrichment session",
      "Premium toy selection",
      "Puzzle solving activities",
      "Climbing challenges",
      "Mental stimulation games",
      "Detailed progress report"
    ],
    popular: true
  },
  {
    name: "Ultimate Experience",
    price: "$40",
    period: "60 minutes",
    features: [
      "Full hour of activities",
      "Customized enrichment plan",
      "Advanced puzzle toys",
      "Agility training",
      "Social interaction time",
      "Video documentation",
      "Behavioral insights"
    ],
    popular: false
  }
];

const enrichmentActivities = [
  {
    category: "Mental Stimulation",
    icon: "🧠",
    activities: [
      "Puzzle feeders & treat dispensers",
      "Hidden treasure hunts",
      "Interactive problem-solving games",
      "Memory training exercises"
    ]
  },
  {
    category: "Physical Exercise",
    icon: "🏃‍♀️",
    activities: [
      "Climbing trees & cat towers",
      "Obstacle courses",
      "Chase & pounce games",
      "Agility training basics"
    ]
  },
  {
    category: "Sensory Enrichment",
    icon: "👃",
    activities: [
      "Catnip & herb gardens",
      "Texture exploration mats",
      "Sound stimulation toys",
      "Visual tracking games"
    ]
  },
  {
    category: "Natural Behaviors",
    icon: "🐾",
    activities: [
      "Hunting simulation games",
      "Scratching post variety",
      "Territory marking spaces",
      "Grooming station setup"
    ]
  }
];

const testimonials = [
  {
    name: "Amanda Clark",
    location: "Riverside",
    rating: 5,
    comment: "Tiger was getting bored at home and started acting out. The enrichment sessions completely changed his behavior! He's now calm and content.",
    catName: "Tiger",
    program: "Premium Session"
  },
  {
    name: "Robert Kim",
    location: "Hill District",
    rating: 5,
    comment: "Cleo loves the puzzle toys and climbing challenges. She comes home tired and satisfied. Best investment I've made for her wellbeing.",
    catName: "Cleo",
    program: "Ultimate Experience"
  },
  {
    name: "Maria Gonzalez",
    location: "Downtown",
    rating: 5,
    comment: "Simba was overweight and lazy. The structured playtime helped him lose weight and regain his playful spirit. Amazing transformation!",
    catName: "Simba",
    program: "Basic Session"
  }
];

const benefits = [
  {
    icon: "🎯",
    title: "Reduces Boredom",
    desc: "Prevents destructive behaviors caused by lack of mental stimulation and provides healthy outlets for energy."
  },
  {
    icon: "💪",
    title: "Improves Fitness",
    desc: "Maintains healthy weight through engaging physical activities and promotes cardiovascular health."
  },
  {
    icon: "🧘",
    title: "Stress Relief",
    desc: "Natural stress reduction through play and mental engagement, leading to a calmer, happier cat."
  },
  {
    icon: "🎨",
    title: "Cognitive Development",
    desc: "Enhances problem-solving skills and keeps the mind sharp through challenging activities."
  },
  {
    icon: "😊",
    title: "Behavioral Improvement",
    desc: "Redirects negative behaviors into positive activities and strengthens confidence."
  },
  {
    icon: "🏠",
    title: "Better Home Life",
    desc: "Creates a more harmonious household with a well-exercised and mentally satisfied cat."
  }
];

export default function PlaytimeEnrichmentPage() {
  // Modal state removed; navigation now uses Link to /signup
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden" style={{ backgroundColor: "var(--softWhite)" }}>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-green-100/30 to-blue-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-tl from-purple-100/20 to-pink-100/15 rounded-full blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6" 
                   style={{ backgroundColor: "var(--Cream)", color: "var(--SoftWood)" }}>
                Mental & Physical Enrichment
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: "var(--font-libre)", color: "var(--SoftWood)" }}>
                Playtime & Enrichment
              </h1>
              <h2 className="text-2xl md:text-3xl font-light mb-6 text-gray-800" style={{ fontFamily: "var(--font-libre)" }}>
                Toys, Climbing Trees & More
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8" style={{ fontFamily: "var(--font-mono)" }}>
                Specialized enrichment programs designed to keep your cat mentally stimulated and physically active. Our expert team creates customized play sessions that challenge your cat's mind while providing essential exercise and entertainment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={{
                    pathname: "/signup",
                    query: { service: "Playtime & Enrichment" },
                  }}
                  className="px-8 py-4 font-semibold rounded-lg hover:scale-105 transform transition-all duration-200 shadow-md hover:shadow-lg inline-block"
                  style={{
                    backgroundColor: "var(--SoftWood)",
                    color: "var(--white)",
                    fontFamily: "var(--font-libre)",
                  }}
                >
                  Book Session
                </Link>
                <a href="/coming-soon" className="px-8 py-4 border-2 font-semibold rounded-lg transition-all duration-200"
                        style={{ 
                          borderColor: "var(--SoftWood)", 
                          color: "var(--SoftWood)",
                          fontFamily: "var(--font-libre)"
                        }}>
                  Free Assessment
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/catPlaytime.jpg"
                  alt="Cat Playtime & Enrichment"
                  width={600}
                  height={450}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg"
                   style={{ backgroundColor: "var(--SoftWood)" }}>
                🎮
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enrichment Activities Section */}
      <section className="py-20" style={{ backgroundColor: "var(--Cream)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ fontFamily: "var(--font-libre)", color: "var(--SoftWood)" }}>
              Our Enrichment Activities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: "var(--font-mono)" }}>
              We offer a diverse range of activities designed to stimulate every aspect of your cat's natural instincts and abilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {enrichmentActivities.map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl">{category.icon}</div>
                  <h3 className="text-2xl font-bold" style={{ fontFamily: "var(--font-libre)", color: "var(--SoftWood)" }}>
                    {category.category}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {category.activities.map((activity, i) => (
                    <li key={i} className="flex items-start gap-3" style={{ fontFamily: "var(--font-mono)" }}>
                      <div className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5" 
                           style={{ backgroundColor: "var(--SoftWood)" }}>
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-gray-700">{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20" style={{ backgroundColor: "var(--softWhite)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ fontFamily: "var(--font-libre)", color: "var(--SoftWood)" }}>
              Why Enrichment Matters
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: "var(--font-mono)" }}>
              Regular enrichment activities provide essential benefits for your cat's physical health, mental wellbeing, and overall happiness.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "var(--font-libre)", color: "var(--SoftWood)" }}>
                  {benefit.title}
                </h3>
                <p className="text-gray-600" style={{ fontFamily: "var(--font-mono)" }}>
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20" style={{ backgroundColor: "var(--Cream)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ fontFamily: "var(--font-libre)", color: "var(--SoftWood)" }}>
              Enrichment Packages
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: "var(--font-mono)" }}>
              Choose the perfect enrichment program to meet your cat's individual needs and activity level.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} 
                   className={`relative bg-white rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:scale-105 ${
                     plan.popular ? 'ring-4 ring-green-200' : ''
                   }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="px-6 py-2 rounded-full text-white text-sm font-bold"
                         style={{ backgroundColor: "var(--SoftWood)" }}>
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "var(--font-libre)", color: "var(--SoftWood)" }}>
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-4xl font-bold" style={{ color: "var(--SoftWood)" }}>
                      {plan.price}
                    </span>
                    <span className="text-gray-600" style={{ fontFamily: "var(--font-mono)" }}>
                      / {plan.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3" style={{ fontFamily: "var(--font-mono)" }}>
                      <div className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5" 
                           style={{ backgroundColor: "var(--SoftWood)" }}>
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a href="/coming-soon" className={`w-full py-4 font-semibold rounded-lg transition-all duration-200 ${
                  plan.popular 
                    ? 'text-white hover:scale-105 shadow-lg' 
                    : 'border-2 hover:bg-opacity-10'
                }`}
                style={{ 
                  backgroundColor: plan.popular ? "var(--SoftWood)" : "transparent",
                  borderColor: plan.popular ? "transparent" : "var(--SoftWood)",
                  color: plan.popular ? "var(--white)" : "var(--SoftWood)",
                  fontFamily: "var(--font-libre)",
                  padding: "12px"
                }}>
                  Choose {plan.name}
                </a>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6" style={{ fontFamily: "var(--font-mono)" }}>
              * Multi-session packages available with discounts. Group sessions for multiple cats also offered.
            </p>
            <a href="/coming-soon" className="px-8 py-3 border-2 font-semibold rounded-lg transition-all duration-200"
                    style={{ 
                      borderColor: "var(--SoftWood)", 
                      color: "var(--SoftWood)",
                      fontFamily: "var(--font-libre)"
                    }}>
              Custom Enrichment Plan
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20" style={{ backgroundColor: "var(--softWhite)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ fontFamily: "var(--font-libre)", color: "var(--SoftWood)" }}>
              Enrichment Success Stories
            </h2>
            <p className="text-lg text-gray-600" style={{ fontFamily: "var(--font-mono)" }}>
              See how our enrichment programs have transformed cats' lives and improved their wellbeing.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed" style={{ fontFamily: "var(--font-mono)" }}>
                  "{testimonial.comment}"
                </p>
                
                <div className="border-t pt-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-gray-800" style={{ fontFamily: "var(--font-libre)" }}>
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600" style={{ fontFamily: "var(--font-mono)" }}>
                        {testimonial.location}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium" style={{ color: "var(--SoftWood)", fontFamily: "var(--font-libre)" }}>
                        {testimonial.catName}
                      </p>
                      <p className="text-xs text-gray-500" style={{ fontFamily: "var(--font-mono)" }}>
                        {testimonial.program}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center" style={{ backgroundColor: "var(--Cream)" }}>
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ fontFamily: "var(--font-libre)", color: "var(--SoftWood)" }}>
            Transform Your Cat's Life Today
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed" style={{ fontFamily: "var(--font-mono)" }}>
            Start with a free assessment to discover the perfect enrichment program for your cat's personality and needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/coming-soon" className="px-8 py-4 font-semibold rounded-lg hover:scale-105 transform transition-all duration-200 shadow-md hover:shadow-lg"
                    style={{ 
                      backgroundColor: "var(--SoftWood)", 
                      color: "var(--white)",
                      fontFamily: "var(--font-libre)"
                    }}>
              Free Assessment
            </a>
            <Link 
              href="/services"
              className="px-8 py-4 border-2 font-semibold rounded-lg transition-all duration-200 inline-block"
              style={{ 
                borderColor: "var(--SoftWood)", 
                color: "var(--SoftWood)",
                fontFamily: "var(--font-libre)"
              }}
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    {/* Reservation modal removed. Use /signup page for booking. */}
    </>
  );
}
