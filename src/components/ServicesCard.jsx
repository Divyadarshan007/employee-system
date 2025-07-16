const ServicesCard = ({img, title, desc}) => {
    return (
        <div className="w-full sm:w-1/2 md:w-1/3 py-2 px-2">
            <div className="h-full p-6 bg-white rounded-lg shadow-sm service-card">
                <div className="pb-3">
                    <img src={img} className="h-16 w-16" alt="logo" />
                </div>
                <div className="my-3">
                    <h5 className="text-2xl font-semibold tracking-tight text-gray-900">{title}</h5>
                </div>
                <div>
                    <p className="font-normal text-gray-500">{desc}</p>
                </div>
            </div>
        </div>
    )
}

export default ServicesCard