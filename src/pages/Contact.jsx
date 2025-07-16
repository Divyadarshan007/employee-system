const Contact = () => {
    return (
        <section className="contact-section h-[92.5vh] flex items-center justify-center"> 
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-5/12 w-full bg-gradient-to-b from-blue-500 to-blue-800 text-white p-10 flex flex-col justify-center">
                        <h4 className="text-sm uppercase tracking-wide mb-2">Let's Talk</h4>
                        <h1 className="text-3xl md:text-4xl font-bold mb-8">Speak With Expert Engineers.</h1>
                        <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <div className="bg-white text-blue-700 px-3 py-2 rounded-full">
                                    <i className="fas fa-home"></i>
                                </div>
                                <div>
                                    <p className="font-bold">Email:</p>
                                    <p>(+088)589-8745</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="bg-white text-blue-700 px-3 py-2 rounded-full">
                                    <i className="fas fa-phone-alt"></i>
                                </div>
                                <div>
                                    <p className="font-bold">Phone:</p>
                                    <p>support@rstheme.com</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="bg-white text-blue-700 px-3 py-2 rounded-full">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <div>
                                    <p className="font-bold">Address:</p>
                                    <p>New Jesrsy, 1201, USA</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-7/12 w-full p-10 flex flex-col justify-center">
                        <p className="text-blue-500 font-medium uppercase mb-2">Get In Touch</p>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Fill The Form Below</h2>
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input type="text" placeholder="Name" className="p-3 rounded-md border border-gray-300 focus:outline-none" />
                            <input type="email" placeholder="E-Mail" className="p-3 rounded-md border border-gray-300 focus:outline-none" />
                            <input type="text" placeholder="Phone Number" className="p-3 rounded-md border border-gray-300 focus:outline-none" />
                            <input type="text" placeholder="Your Website" className="p-3 rounded-md border border-gray-300 focus:outline-none" />
                            <textarea placeholder="Your Message Here" className="md:col-span-2 p-3 rounded-md border border-gray-300 h-32 resize-none focus:outline-none"></textarea>
                            <button className="md:col-span-2 w-48 bg-gradient-to-r from-blue-700 to-blue-500 text-white py-3 px-6 rounded-full hover:opacity-90 transition-all">
                                Submit Now
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact