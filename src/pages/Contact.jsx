const Contact = () => {
  return (
    <section className="min-h-screen flex items-center justify-center md:py-[40px] pt-[128px]  bg-[#152733] px-4">
      <div className="container mx-auto shadow-lg rounded-xl overflow-hidden backdrop-blur-md bg-white/5 border border-white/10">
        <div className="flex flex-col md:flex-row">
          
         
          <div className="md:w-5/12 w-full bg-gradient-to-b from-[#1e3c57] to-[#152733] text-white p-10 space-y-6">
            <div>
              <h4 className="text-sm uppercase tracking-widest text-orange-400">Let's Talk</h4>
              <h1 className="text-3xl md:text-4xl font-bold mt-2 leading-snug">
                Speak With Expert Engineers
              </h1>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-white text-blue-700 p-3 rounded-full shadow-md">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-sm text-gray-300">support@rstheme.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-white text-blue-700 p-3 rounded-full shadow-md">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-sm text-gray-300">(+088) 589-8745</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-white text-blue-700 p-3 rounded-full shadow-md">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <p className="font-semibold">Address</p>
                  <p className="text-sm text-gray-300">New Jersey, 1201, USA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel (Form) */}
          <div className="md:w-7/12 w-full bg-[#1e2f3c] p-10 text-white">
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-wide mb-2">Get in Touch</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Fill The Form Below</h2>
            
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="p-3 rounded-md bg-[#243849] border border-gray-600 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="E-Mail"
                className="p-3 rounded-md bg-[#243849] border border-gray-600 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="p-3 rounded-md bg-[#243849] border border-gray-600 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Your Website"
                className="p-3 rounded-md bg-[#243849] border border-gray-600 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Your Message Here"
                className="md:col-span-2 p-3 rounded-md bg-[#243849] border border-gray-600 h-32 resize-none placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <button className="md:col-span-2 w-full md:w-48 bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3 px-6 rounded-full hover:opacity-90 transition-all">
                Submit Now
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
