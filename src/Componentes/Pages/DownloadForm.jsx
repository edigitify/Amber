// DownloadForm.jsx
import React, { useState } from "react";

const DownloadForm = ({ id, label, bgImage, pdfFile }) => {

console.log("DownloadForm rendered with id:", id, "label:", label, "bgImage:", bgImage, "pdfFile:", pdfFile);

  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      alert("Please fill in all required fields.");
      return;
    }

    setIsOpen(false);

    // Download specific PDF
    const link = document.createElement("a");
    link.href = pdfFile;
    link.download = `${id}.pdf`;
    link.click();
  };

  return (
    <div className="flex items-center justify-center min-h-40 bg-gray-100">
      {/* Centered Download Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
      >
        Download {label}
      </button>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="w-full max-w-md p-6 rounded-2xl shadow-lg bg-white/30 backdrop-blur-md border border-white/40">
            <h2 className="mb-4 text-2xl font-bold text-center text-white drop-shadow">
              Fill Details to Download {label} (ID: {id})
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/40 placeholder-white text-white"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/40 placeholder-white text-white"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone No"
                className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/40 placeholder-white text-white"
                value={formData.phone}
                onChange={handleChange}
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/40 placeholder-white text-white"
                value={formData.city}
                onChange={handleChange}
              />

              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 rounded-lg bg-white/20 text-white border border-white/40 hover:bg-white/30"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
                >
                  Submit & Download
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DownloadForm;
