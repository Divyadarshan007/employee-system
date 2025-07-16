import ServicesCard from "../components/ServicesCard"

const Services = () => {
    let cardContent = [
        {
            img: "/images/service-1.png",
            title: "Software Development",
            desc: "At vero eos et accusamus etiusto odio praesentium accusamus etiusto odio data center for managing database.",
        },
        {
            img: "/images/service-2.png",
            title: "Web Development",
            desc: "At vero eos et accusamus etiusto odio praesentium accusamus etiusto odio data center for managing database.",
        },
        {
            img: "/images/service-3.png",
            title: "Analytic Solutions",
            desc: "At vero eos et accusamus etiusto odio praesentium accusamus etiusto odio data center for managing database.",
        },
        {
            img: "/images/service-4.png",
            title: "Clould & DevOps",
            desc: "At vero eos et accusamus etiusto odio praesentium accusamus etiusto odio data center for managing database.",
        },
        {
            img: "/images/service-5.png",
            title: "Product & Design",
            desc: "At vero eos et accusamus etiusto odio praesentium accusamus etiusto odio data center for managing database.",
        },
        {
            img: "/images/service-6.png",
            title: "Data Center",
            desc: "At vero eos et accusamus etiusto odio praesentium accusamus etiusto odio data center for managing database.",
        },
    ]
    return (
        <section className="service-section h-[92.5vh] py-[40px]">
            <div className="container mx-auto">
                {/* <p className="text-center text-[#03228F] uppercase">Services</p> */}
                <h2 className="text-3xl font-bold text-center">We Are Offering All Kinds of IT Solutions Services</h2>
            </div>
            <div className="container mx-auto">
                <div className="flex flex-wrap py-[30px]">
                    {
                        cardContent.map((item, idx)=>{
                            return <ServicesCard key={idx} img={item.img} title={item.title} desc={item.desc} />
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Services