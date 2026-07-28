import {
    Leaf,
    ShieldCheck,
    Wallet,
    Headphones,
  } from "lucide-react";
  
  const features = [
    {
      icon: <Leaf size={40} />,
      title: "Eco-Friendly Tours",
      desc: "Experience nature responsibly with sustainable travel experiences.",
    },
    {
      icon: <ShieldCheck size={40} />,
      title: "Safe & Secure",
      desc: "Carefully planned itineraries with your comfort and safety in mind.",
    },
    {
      icon: <Wallet size={40} />,
      title: "Best Value",
      desc: "Premium experiences at competitive prices.",
    },
    {
      icon: <Headphones size={40} />,
      title: "24/7 Support",
      desc: "Our team is always available to assist throughout your journey.",
    },
  ];
  
  function WhyChoose() {
    return (
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center">
            Why Choose Us
          </h2>
  
          <p className="text-center text-gray-600 mt-4">
            We create memorable journeys with comfort, safety, and sustainability at the heart of every trip.
          </p>
  
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:-translate-y-2 transition"
              >
                <div className="text-green-600 mb-5">
                  {feature.icon}
                </div>
  
                <h3 className="text-xl font-bold">
                  {feature.title}
                </h3>
  
                <p className="text-gray-600 mt-3">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default WhyChoose;