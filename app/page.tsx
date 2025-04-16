export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-white">
      {/* nav bar */}
      <nav className="fixed w-full bg-white shadow-m z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-amber-700">Cafe Perindu</h1>
            </div>
            <div className="hidden md:flex item-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-gray-900">Home</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">Menu</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">About</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* hero section */}
      <section id="home" className="relative pt-16 md:pt-0 h-screen">
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <div className="relative h-full flex items-center z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center justify-center ">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Welcome to Cafe Perindu</h1>
            <p className="text-xl text-white mb-8">Experience authentic cuisine in a cozy atmosphere</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 ">
              <a href="#menu" className="px-6 py-3 rounded-full bg-amber-600 text-white hover:bg-amber-700 font-medium">
                View Menu
              </a>
              <a href="#reserve" className="px-6 py-3 rounded-full border-2 border-white text-white hover:bg-white hover:text-amber-700 font-medium">
                Reserve Table
              </a>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 -z-10">
          <div className="relative h-full w-full">
            {/* You would replace this with your restaurant hero image */}
            <div className="absolute inset-0 bg-amber-900/20"></div>
          </div>
        </div>
      </section>

      {/* about section */}
      <section id="about" className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Kedai Story</h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto mt-4"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="rounded-lg overflow-hidden h-80 bg-gray-300">
              {/* Replace with your restaurant image */}
              <div className="h-full w-full bg-amber-200"></div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">A Culinary Journey</h3>
              <p className="text-gray-600 mb-4">
                Founded in 2004, Cafe Perindu has been serving the Kolej Perindu with love and passion. Our chef brings over 20 years of experience, creating dishes that blend traditional recipes with modern techniques.
              </p>
              <p className="text-gray-600 mb-6">
                We source our ingredients locally, supporting farmers and ensuring the freshest produce for our customers. Every dish tells a story of heritage and innovation.
              </p>
              <a href="#menu" className="text-amber-600 font-medium hover:text-amber-700">Explore our dishes →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Highlights Section */}
      <section id="menu" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Menu Highlights</h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto mt-4"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Menu Item 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-300">
                {/* Replace with food image */}
                <div className="h-full w-full bg-amber-100"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Signature Pasta</h3>
                <p className="text-gray-600 mb-4">Handmade pasta with rich tomato sauce, fresh basil, and aged parmesan.</p>
                <p className="text-amber-600 font-bold">$18.99</p>
              </div>
            </div>
            
            {/* Menu Item 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-300">
                {/* Replace with food image */}
                <div className="h-full w-full bg-amber-100"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Grilled Sea Bass</h3>
                <p className="text-gray-600 mb-4">Locally-sourced sea bass with lemon herb butter and seasonal vegetables.</p>
                <p className="text-amber-600 font-bold">$24.99</p>
              </div>
            </div>
            
            {/* Menu Item 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-300">
                {/* Replace with food image */}
                <div className="h-full w-full bg-amber-100"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Chocolate Soufflé</h3>
                <p className="text-gray-600 mb-4">Warm chocolate soufflé with vanilla bean ice cream and berries.</p>
                <p className="text-amber-600 font-bold">$12.99</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a href="#" className="px-6 py-3 rounded-full bg-amber-600 text-white hover:bg-amber-700 font-medium inline-block">
              View Full Menu
            </a>
          </div>
        </div>
      </section>

 {/* Testimonials Section */}
 <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">What Our Guests Say</h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto mt-4"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                <div>
                  <h4 className="font-semibold text-gray-800">Aiman Jamaluddin</h4>
                  <div className="flex text-amber-500">
                    <span>★★★★★</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">
              {"The food was exceptional and the service was impeccable. The ambiance really made our anniversary dinner special."}              </p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                <div>
                  <h4 className="font-semibold text-gray-800">Nadyie Alhakim</h4>
                  <div className="flex text-amber-500">
                    <span>★★★★★</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">
                {"As a food enthusiast, I can say that Cafe Perindu offers one of the most authentic culinary experiences in town. Will definitely be back!"}              </p>
            </div>
          </div>
        </div>
      </section>

    {/* Contact & Reservation Section */}
    <section id="contact" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Location</h3>
                <p className="text-gray-600">Universiti Teknologi Mara 40450 Shah Alam Selangor ·</p>
              </div>
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Hours</h3>
                <p className="text-gray-600 mb-1">Monday - Thursday: 11:30 AM - 10:00 PM</p>
                <p className="text-gray-600 mb-1">Friday - Saturday: 11:30 AM - 11:00 PM</p>
                <p className="text-gray-600">Sunday: 10:30 AM - 9:00 PM</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Contact</h3>
                <p className="text-gray-600 mb-1">Phone: (123) 456-7890</p>
                <p className="text-gray-600">Email: info@cafeperindu.com</p>
              </div>
            </div>
            
            <div id="reserve">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Make a Reservation</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">Full Name</label>
                  <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                  <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="date" className="block text-gray-700 mb-2">Date</label>
                    <input type="date" id="date" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" />
                  </div>
                  <div>
                    <label htmlFor="time" className="block text-gray-700 mb-2">Time</label>
                    <input type="time" id="time" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" />
                  </div>
                </div>
                <div>
                  <label htmlFor="guests" className="block text-gray-700 mb-2">Number of Guests</label>
                  <select id="guests" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500">
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3">3 People</option>
                    <option value="4">4 People</option>
                    <option value="5">5 People</option>
                    <option value="6">6+ People</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">Special Requests</label>
                  <textarea id="message" rows={3} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"></textarea>
                </div>
                <button type="submit" className="w-full px-6 py-3 bg-amber-600 text-white rounded-md hover:bg-amber-700 font-medium">
                  Reserve Table
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

{/* Footer */}
<footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Cafe Perindu</h3>
              <p className="text-gray-300">
                Bringing culinary excellence to your table since 2010.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-300 hover:text-amber-500">Home</a></li>
                <li><a href="#about" className="text-gray-300 hover:text-amber-500">About</a></li>
                <li><a href="#menu" className="text-gray-300 hover:text-amber-500">Menu</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-amber-500">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-amber-500">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-amber-500">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-amber-500">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>© 2025 Cafe Perindu. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </div>
  )
}