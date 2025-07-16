const Home = () => {
    return (
        <section className="bg-gradient-to-b from-white to-[#eae4ff] h-[92.5vh] flex items-center justify-center py-[50px]">
            <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-3">
                <div className="lg:w-1/2 space-y-6">
                    <p className="text-sm text-orange-600 font-semibold tracking-wide uppercase">Technology & IT Solutions</p>
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                        Digital <span className="text-blue-600">Technology,</span><br />
                        <span className="text-orange-600">IT Solution</span> & Services<br />
                        Around the World
                    </h1>
                    <p className="text-gray-600 text-base">
                        We are leading technology solutions providing company<br />
                        all over the world doing over 40 years.
                    </p>
                    <button className="bg-blue-700 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-800 transition duration-300">
                        GET STARTED
                    </button>
                </div>
                <div className="lg:w-1/2 flex justify-center">
                    <img src="/images/home-2.png" alt="Technology Illustration" className="max-w-full h-[90%]" />
                </div>
            </div>
        </section>
    )
}

export default Home