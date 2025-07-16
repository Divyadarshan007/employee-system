import { Link, useLocation, useNavigate } from 'react-router-dom'
import { toast } from "react-toastify"

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
    const navigate = useNavigate();

    const { pathname } = useLocation();

    const handleClick = () => {
        setIsLoggedIn(false);
        localStorage.setItem("isLoggedIn", JSON.stringify(false))
        toast.success("Logged Out Successfully")
        navigate("/login")
    }

    return (
        <header className="bg-color-header">
            <div className="container mx-auto">
                <nav>
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        <Link to={"/"} className="flex items-center space-x-3 rtl:space-x-reverse">
                            <img src="/images/logo.png" className="h-8" alt="logo" />
                        </Link>
                        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                                <li>
                                    <Link to={"/"} className={`${pathname == "/" ? "text-[#bbb]" : "text-white"}`}>Home</Link>
                                </li>
                                <li>
                                    <Link to={"/services"} className={`${pathname == "/services" ? "text-[#bbb]" : "text-white"}`}>Services</Link>
                                </li>
                                <li>
                                    <Link to={"/contact"} className={`${pathname == "/contact" ? "text-[#bbb]" : "text-white"}`}>Contact</Link>
                                </li>
                                {isLoggedIn && (<Link to={"/employees"} className={`${pathname == "/employees" || pathname == "/add-employee" || pathname.includes("/edit-employee") ? "text-[#bbb]" : "text-white"}`}>Employees</Link>)}
                            </ul>
                        </div>
                        {
                            isLoggedIn ? <button onClick={handleClick} type="button" className="text-white bg-[#03228f] hover:bg-[#1b2e74ab] focus:border-[#03228f] ring-slate-200 focus:ring-1 font-medium rounded-lg text-sm px-9 py-2 text-center transition-all duration-300">Logout</button>
                                : <button onClick={() => {
                                    navigate("/login")
                                }} type="button" className="text-white bg-[#03228f] hover:bg-[#1b2e74ab] focus:border-[#03228f] ring-slate-200 focus:ring-1 font-medium rounded-lg text-sm px-9 py-2 text-center transition-all duration-300">Login</button>
                        }
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header