import React from 'react';
import { Users, Target, Eye, Award, Factory, Leaf } from 'lucide-react';

const About = () => {
  return (
    <div className="py-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About MicroPlastics India
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading the way in sustainable plastic manufacturing with over 25 years of industry expertise and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 1998, MicroPlastics India has grown from a small family business to one of the country's leading plastic manufacturing companies. Our journey began with a simple vision: to provide high-quality, sustainable plastic solutions that meet the evolving needs of modern industries.
                </p>
                <p>
                  Over the years, we have expanded our operations to include state-of-the-art manufacturing facilities, advanced recycling technologies, and a comprehensive product portfolio that serves diverse sectors including automotive, packaging, construction, and consumer goods.
                </p>
                <p>
                  Today, we pride ourselves on being at the forefront of sustainable manufacturing, with a strong commitment to environmental responsibility and innovative product development that helps our clients achieve their sustainability goals.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3735780/pexels-photo-3735780.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Manufacturing facility"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-blue-600 opacity-10 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide innovative, high-quality plastic solutions while maintaining our commitment to environmental sustainability and customer satisfaction.
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <Eye className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading sustainable plastic manufacturer in India, setting industry standards for quality, innovation, and environmental responsibility.
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <Award className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
              <p className="text-gray-600">
                Excellence, integrity, sustainability, and innovation drive everything we do, ensuring we deliver value to our customers and communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Sets Us Apart</h2>
            <p className="text-xl text-gray-600">Our commitment to excellence and sustainability makes us the preferred choice</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <Factory className="h-8 w-8 text-blue-600 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Advanced Manufacturing</h3>
                <p className="text-gray-600">State-of-the-art facilities with cutting-edge technology and automated processes.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Leaf className="h-8 w-8 text-green-600 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Eco-Friendly Solutions</h3>
                <p className="text-gray-600">Comprehensive recycling programs and sustainable manufacturing practices.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Users className="h-8 w-8 text-purple-600 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Team</h3>
                <p className="text-gray-600">Highly qualified professionals with decades of combined industry experience.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Award className="h-8 w-8 text-orange-600 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Certified</h3>
                <p className="text-gray-600">ISO 9001:2015 certified with rigorous quality control measures.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Target className="h-8 w-8 text-red-600 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Customer Focus</h3>
                <p className="text-gray-600">Dedicated customer service and customized solutions for every requirement.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Factory className="h-8 w-8 text-indigo-600 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation Driven</h3>
                <p className="text-gray-600">Continuous research and development for next-generation plastic solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Our Commitment</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            With over 500 satisfied clients and 1000+ products in our portfolio, we continue to innovate and lead the industry towards a more sustainable future. Our dedicated team of 200+ professionals works tirelessly to ensure we exceed your expectations in quality, service, and environmental responsibility.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            <div>
              <div className="text-3xl font-bold mb-2">ISO 9001</div>
              <div className="text-blue-200">Quality Certified</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-blue-200">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">25+</div>
              <div className="text-blue-200">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">200+</div>
              <div className="text-blue-200">Team Members</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;