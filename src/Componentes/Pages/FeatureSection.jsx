import { FaHeadset, FaTruck, FaRegCreditCard } from "react-icons/fa";
import { FaMedal } from "react-icons/fa6";

const  FeatureSection = () =>{
  const features = [
    {
      icon: <FaHeadset className="text-sky-800 text-4xl" />,
      title: "5* Customer Service",
      description: "UK & EU sales and support teams.",
    },
    {
      icon: <FaTruck className="text-sky-800 text-4xl" />,
      title: "Next Day Delivery",
      description: "Available on in-stock items placed before 1pm.",
    },
    {
      icon: <FaMedal className="text-sky-800 text-4xl"  />,
      title: "5 Year Warranty",
      description: "An industry leading warranty on all products.",
    },
    {
      icon: <FaRegCreditCard className="text-sky-800 text-4xl" />,
      title: "Secure Payments",
      description: "All major debit & credit cards accepted.",
    },
  ];

  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {features.map((feature, idx) => (
          <div key={idx} className="flex flex-col items-center space-y-3">
            {feature.icon}
            <h3 className="font-semibold text-lg">{feature.title}</h3>
            <p className="text-gray-500 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeatureSection;
