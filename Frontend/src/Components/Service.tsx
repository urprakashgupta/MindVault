import { Database, Users, Paperclip } from "lucide-react";

const Service = () => {
  const services = [
    {
      icon: <Database size={40} className="text-blue-600" />,
      title: "Centralized Storage",
      description:
        "Save content from various sources like Twitter, YouTube, and Google Docs in one place.",
    },
    {
      icon: <Users size={40} className="text-blue-600" />,
      title: "Seamless Collaboration",
      description:
        "Share and collaborate on content effortlessly with teammates or friends in real-time.",
    },
    {
      icon: <Paperclip size={40} className="text-blue-600" />,
      title: "Multi-Media Support",
      description:
        "Save, view, and interact with YouTube videos, tweets, and more.",
    },
  ];

  return (
    <section className="bg-[#E8EBFE] py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#4A3AFF]">
          Why Choose Mind Vault?
        </h2>

        {/* Service Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md text-center"
            >
              <div className="flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
