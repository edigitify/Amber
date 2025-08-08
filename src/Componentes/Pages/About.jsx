import React from "react";
import OfficeImage from "../../assets/3.png";
const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Amber
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a leading company dedicated to providing innovative solutions
            and exceptional service to our clients worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 mb-6">
              Founded with a vision to transform the industry, Amber has been at
              the forefront of innovation for over a decade. Our commitment to
              excellence and customer satisfaction has made us a trusted partner
              for businesses worldwide.
            </p>
            <p className="text-lg text-gray-600">
              We believe in creating lasting relationships with our clients
              through transparent communication, reliable service, and
              cutting-edge solutions that drive real results.
            </p>
          </div>
          <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
            <img
              src={OfficeImage}
              alt="Office view"
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
