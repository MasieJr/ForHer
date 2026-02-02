import { motion } from "framer-motion";

interface Memory {
  id: number;
  date: string;
  title: string;
  description: string;
  image: string; // Ensure you have images for these!
}

// 📸 REPLACE THESE WITH YOUR REAL DATA
// Tip: Use the Lusaka trip (July 2025) or when you became "Wifeee" official
const memories: Memory[] = [
  {
    id: 1,
    date: "First Impression",
    title: "The first image you sent me",
    description: "",
    image: "images/1.jpg", // Placeholder
  },
  {
    id: 2,
    date: "July 2025",
    title: "Our Trip to Lusaka",
    description:
      "That long bus ride was worth it just to see the world with you.",
    image:
      "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 3,
    date: "Valentine's 2026",
    title: "My Wifeee 💜💍",
    description:
      "Building our future, one line of code (and credit score point) at a time.",
    image:
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=2000&auto=format&fit=crop",
  },
];

export default function Timeline() {
  return (
    <div className="min-h-screen bg-pink-50 py-20 overflow-hidden">
      {/* Header */}
      <div className="text-center mb-16 px-4">
        <h2 className="text-4xl font-bold text-red-600 mb-2 font-serif">
          Our Journey
        </h2>
        <p className="text-red-400">Scroll down memory lane...</p>
      </div>

      <div className="max-w-4xl mx-auto px-4 relative">
        {/* The Central Line (hidden on mobile, visible on desktop) */}
        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-1 bg-red-200 rounded-full" />

        <div className="space-y-12">
          {memories.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* 1. The Content Card */}
              <div className="w-full md:w-5/12">
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-pink-100 hover:shadow-2xl transition-shadow duration-300">
                  {/* Image Area */}
                  <div className="mb-4 overflow-hidden rounded-lg h-48">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <span className="inline-block px-3 py-1 bg-red-100 text-red-500 rounded-full text-xs font-bold mb-2">
                    {item.date}
                  </span>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* 2. The Center Heart Icon */}
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-8 h-8 bg-red-500 rounded-full border-4 border-white shadow-lg z-10 hidden md:flex">
                <span className="text-white text-xs">❤️</span>
              </div>

              {/* 3. Empty Spacer for the other side (Desktop only) */}
              <div className="w-full md:w-5/12 hidden md:block" />
            </motion.div>
          ))}
        </div>

        {/* Footer Message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mt-20"
        >
          <p className="text-2xl font-serif text-red-500">To be continued...</p>
        </motion.div>
      </div>
    </div>
  );
}
