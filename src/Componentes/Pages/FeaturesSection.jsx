import React from "react";
import { ShieldCheck, Lock, Sparkles } from "lucide-react"; 

const FeaturesSection = () => {
  const features = [
    { icon: <ShieldCheck size={64} />, title: "UV Protection" },
    { icon: <Lock size={64} />, title: "Privacy Protection" },
    { icon: <Sparkles size={64} />, title: "Enhance Aesthetics" },
  ];

  return (
    <section className="py-12 bg-white">
      {/* Feature Icons */}
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        {features.map((feature, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <div className="text-sky-800">{feature.icon}</div>
            <h3 className="mt-4 text-lg font-semibold text-gray-800">
              {feature.title}
            </h3>
          </div>
        ))}
      </div>

     
    </section>
  );
};

export default FeaturesSection;
