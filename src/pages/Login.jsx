import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

const Login = ({ setIsLoggedIn }) => {
    const [input, setInput] = useState({
        email: "", password: "",
    })
    const navigate = useNavigate();

    const handleChange = (e) => {
        setInput({ ...input, [e.target.id]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (input.email == "admin@gmail.com" && input.password == "admin@123") {
            setIsLoggedIn(true);
            localStorage.setItem("isLoggedIn", JSON.stringify(true))
            toast.success("Admin Logged In Successfully !");
            navigate("/employees")
        } else {
            toast.error("Invalid Email Id or Password !")
            setIsLoggedIn(false)
        }
    }

    return (
        <section>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-[80vh] lg:py-0">
                <div className="w-full bg-white rounded-sm shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-7">
                        <h1 className="text-xl font-bold text-gray-900 md:text-2xl">
                            Let’s Get You Logged In
                        </h1>
                        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                                <input onChange={handleChange} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-800 rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@mail.com" />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                                <input onChange={handleChange} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-800 rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" />
                            </div>
                            <button type="submit" className="w-full text-white sign-in-btn font-medium rounded-sm text-sm py-2.5 text-center transition-all duration-300">Sign In</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login