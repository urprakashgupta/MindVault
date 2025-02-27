import heroImage from "../assets/hero.png";
const Hero = () => {
  return (
    <section className="bg-[#E8EBFE] min-h-screen flex items-center justify-center px-6">
      <div className="max-w-6xl flex flex-col md:flex-row items-center gap-12">
  
        <div className="w-full md:w-1/2">
          <img src={heroImage} alt="Hero Illustration" className="w-full" />
        </div>

       
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-[#4A3AFF] leading-tight">
            Your Second Brain, <br className="hidden md:inline" /> Simplified
          </h1>
          <p className="text-lg text-gray-700 mt-4">
            Effortlessly save and organize content from Twitter, YouTube, Google
            Docs, and more—all in one centralized place. Turn your information
            into actionable insights. Future-ready with powerful search and
            AI-driven embeddings to explore your knowledge like never before.
          </p>
          <button className="mt-6 bg-[#4A3AFF] text-white px-6 py-3 rounded-lg text-lg font-semibold">
            Try Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
