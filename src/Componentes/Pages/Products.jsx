import React from 'react'

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Premium Solution",
      description: "Our flagship product offering comprehensive features and support",
      price: "$999",
      features: ["24/7 Support", "Advanced Analytics", "Custom Integration", "Priority Updates"]
    },
    {
      id: 2,
      name: "Standard Package",
      description: "Perfect for growing businesses with essential features",
      price: "$499",
      features: ["Email Support", "Basic Analytics", "Standard Integration", "Monthly Updates"]
    },
    {
      id: 3,
      name: "Starter Plan",
      description: "Ideal for small businesses getting started",
      price: "$199",
      features: ["Community Support", "Basic Reports", "Simple Integration", "Quarterly Updates"]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Products
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect solution for your business needs. All our products come with 
            guaranteed quality and exceptional support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition duration-300">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="text-4xl font-bold text-blue-600 mb-4">{product.price}</div>
              </div>
              
              <ul className="space-y-3 mb-8">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                Get Started
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Need a Custom Solution?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact us to discuss your specific requirements and get a tailored solution.
          </p>
          <button className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition duration-300">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  )
}

export default Products 