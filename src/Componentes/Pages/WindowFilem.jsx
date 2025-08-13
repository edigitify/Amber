import React, { useState } from "react";
import { Bath, CookingPot, Sofa, Monitor } from "lucide-react"; // Icons

const WindowFilem = () => {
  const [modalContent, setModalContent] = useState(null);

  const categories = [
    { name: "Bathrooms", icon: Bath },
    { name: "Kitchens", icon: CookingPot },
    { name: "Living Areas", icon: Sofa },
    { name: "Office & Meeting Rooms", icon: Monitor },
  ];

  const hotspots = [
    { top: "20%", left: "10%", content: "Patterned Glass Film" },
    { top: "10%", left: "60%", content: "Tinted Purple Glass" },
    { top: "40%", left: "55%", content: "Textured Wave Film" },
    { top: "70%", left: "40%", content: "Frosted Glass" },
    { top: "80%", left: "70%", content: "Dark Blue Privacy Film" },
  ];

  return (
    <div className="min-h-[600px]  p-6 flex justify-center items-center " style={{ backgroundColor: "#1A3446" }}>
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        
        {/* Left: Hotspot Image */}
        <div className="relative rounded-xl overflow-hidden shadow-md h-[500px]">
          <img
            src="https://imagedelivery.net/hByOdEk1o9iXaPdej2YVyg/b4ae7012-a460-4846-3e6d-94acecc7f500/w=670,h=685"
            alt="Window Film"
            className="w-full h-full object-cover"
          />
          {hotspots.map((spot, i) => (
            <button
              key={i}
              className="absolute w-4 h-4 bg-sky-800 rounded-full border-2 border-white shadow-lg hover:scale-110 transition"
              style={{ top: spot.top, left: spot.left }}
              onClick={() => setModalContent(spot.content)}
            ></button>
          ))}
        </div>

        {/* Right: Equal Height Category Card */}
        <div className="bg-white rounded-xl shadow-md flex flex-col justify-center p-5 h-[500px]">
          <div className="flex flex-col gap-6">
            {categories.map(({ name, icon: Icon }, i) => (
              <div
                key={i}
                className="flex items-center justify-between bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition"

              >
                <div className="flex items-center gap-4">
                  <Icon className="text-sky-800 w-10 h-10" />
                  <h3 className="text-lg font-bold">{name}</h3>
                </div>
                <button className="bg-gray-100 hover:bg-gray-200 px-4 py-1 rounded-md text-sm font-medium">
                  VIEW ROOM
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalContent && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-md relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
              onClick={() => setModalContent(null)}
            >
              ✕
            </button>
            <h2 className="text-xl font-bold mb-2">Hotspot Details</h2>
            <p>{modalContent}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WindowFilem;
