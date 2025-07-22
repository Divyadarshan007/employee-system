const Home = () => {
  return (
    <section className="bg-[#152733] min-h-screen flex items-center py-12 px-4">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
          <p className="text-sm text-orange-500 font-semibold tracking-widest uppercase">
            Technology & IT Solutions
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-white">
            Digital <span className="text-blue-500">Technology</span>,<br />
            <span className="text-orange-500">IT Solutions</span> & Services<br />
            Around the World
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-md mx-auto lg:mx-0">
            We are a leading technology solutions provider working globally for over 40 years.
          </p>
          <div>
            <button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 hover:shadow-lg transition duration-300">
              GET STARTED
            </button>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="/images/home-2.png"
            alt="Technology Illustration"
            className="w-full max-w-[400px] sm:max-w-[450px] md:max-w-[500px] lg:max-w-[450px] h-auto drop-shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
