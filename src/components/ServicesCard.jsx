const ServicesCard = ({ img, title, desc }) => {
    return (
        <div className="w-full sm:w-1/2 md:w-1/3 p-4 ">
            <div className="h-full hover:ring-1 hover:ring-blue-400 hover:scale-[1.02] bg-[#1f2f46] hover:bg-[#2a3c5a] transition-all duration-300 rounded-2xl shadow-lg p-6 backdrop-blur-md border border-gray-700 hover:shadow-xl">

                <div className="pb-4">
                    <img src={img} alt="logo" className="h-14 w-14 object-contain" />
                </div>


                <h5 className="text-xl font-semibold text-gray-100 mb-2 tracking-wide">
                    {title}
                </h5>
                <p className="text-sm text-gray-400 leading-relaxed">
                    {desc}
                </p>
            </div>
        </div>
    );
};

export default ServicesCard;
