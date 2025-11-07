import { Target, Users, Award, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About TechZone</h1>
          <p className="text-xl text-blue-100">
            Your trusted partner in technology excellence
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Who We Are
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              TechZone is a leading online retailer of cutting-edge technology
              products. Founded with a passion for innovation, we've been
              serving tech enthusiasts and professionals since 2020.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Our mission is to make the latest technology accessible to
              everyone by offering premium products at competitive prices,
              backed by exceptional customer service.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We carefully curate our product selection to ensure that every
              item meets our high standards for quality, performance, and value.
            </p>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="About TechZone"
              className="rounded-2xl shadow-xl"
            />
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-600">
                We stay ahead of the curve by offering the latest technology
                products and solutions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Customer Focus</h3>
              <p className="text-gray-600">
                Your satisfaction is our priority. We're here to help you find
                the perfect tech solution.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality</h3>
              <p className="text-gray-600">
                We only stock products from trusted brands that meet our
                rigorous quality standards.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Passion</h3>
              <p className="text-gray-600">
                Our team is passionate about technology and committed to sharing
                that enthusiasm with you.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Our Promise to You</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            We're committed to providing you with an exceptional shopping
            experience, from browsing to delivery and beyond. Your trust in us
            drives everything we do.
          </p>
        </div>
      </div>
    </div>
  );
}
