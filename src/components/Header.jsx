import { Link, useLocation, useNavigate } from 'react-router-dom'
import { toast } from "react-toastify"
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.setItem("isLoggedIn", JSON.stringify(false))
        toast.success("Logged Out Successfully")
        navigate("/login")
    }

    return (
        <header className="bg-color-header fixed top-0 w-full z-50">
            <div className="max-w-screen-xl mx-auto p-4 flex items-center justify-between">
                <Link to="/" className="flex items-center">
                    <img src="/images/logo.png" className="h-8" alt="logo" />
                </Link>
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X color="white" /> : <Menu color="white" />}
                    </button>
                </div>

                <ul className="hidden md:flex space-x-8 text-white font-medium">
                    <li><Link to="/" className={pathname === "/" ? "text-[#bbb]" : ""}>Home</Link></li>
                    <li><Link to="/services" className={pathname === "/services" ? "text-[#bbb]" : ""}>Services</Link></li>
                    <li><Link to="/contact" className={pathname === "/contact" ? "text-[#bbb]" : ""}>Contact</Link></li>
                    {isLoggedIn && <li><Link to="/employees" className={pathname.includes("employee") ? "text-[#bbb]" : ""}>Employees</Link></li>}
                </ul>
                <div className="hidden md:flex items-center gap-3">
                    {isLoggedIn ? (
                        <>
                            <h2 className='text-lg font-semibold text-white'>DEV</h2>
                            <img src="/images/dev.webp" className='w-[30px] h-[30px] rounded-full' alt="dev" />
                            <button onClick={handleLogout} className="bg-rose-600 hover:bg-rose-700 text-white text-sm px-4 py-2 rounded-lg">Logout</button>
                        </>
                    ) : pathname !== "/login" && (
                        <button onClick={() => navigate("/login")} className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-lg">Login</button>
                    )}
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden absolute top-[60px] left-0 w-full bg-color-header shadow-lg text-white text-center space-y-4 py-4 z-40">
                    {isLoggedIn && (
                        <div className="flex items-center justify-center  gap-3 pb-4 border-b border-gray-600 mb-4">
                            <div className='w-10 h-10 overflow-hidden rounded-full'>
                                <img src="/images/dev.webp" className=" " alt="profile" />

                            </div>
                            <h2 className='text-lg font-semibold'>DEV</h2>
                        </div>
                    )}

                    <Link to="/" onClick={() => setIsMenuOpen(false)} className="block">Home</Link>
                    <Link to="/services" onClick={() => setIsMenuOpen(false)} className="block">Services</Link>
                    <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="block">Contact</Link>
                    {isLoggedIn && <Link to="/employees" onClick={() => setIsMenuOpen(false)} className="block">Employees</Link>}

                    {isLoggedIn ? (
                        <button
                            onClick={() => { handleLogout(); setIsMenuOpen(false); }}
                            className="bg-rose-600 text-white px-4 py-2 rounded-lg"
                        >
                            Logout
                        </button>
                    ) : pathname !== "/login" && (
                        <button
                            onClick={() => { navigate("/login"); setIsMenuOpen(false); }}
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                        >
                            Login
                        </button>
                    )}
                </div>
            )}

        </header>
    )
}

export default Header;
