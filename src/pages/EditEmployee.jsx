import { X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';

const EditEmployee = () => {
    const navigate = useNavigate();
    const { id } = useParams()

    const [input, setInput] = useState({
        name: "", salary: "", department: "",
    })

    useEffect(() => {
        const employees = JSON.parse(localStorage.getItem("employees")) || [];
        const editEmp = employees.find((emp) => {
            return emp.id == id;
        })

        if (editEmp) {
            setInput(editEmp);
        } else {
            toast.error("User Not Found !");
            navigate("/employee");
        }
    }, [id])

    const handleChange = (e) => {
        setInput({ ...input, [e.target.id]: e.target.value })
    }

    const handleUpdate = (e) => {
        e.preventDefault();

        const employees = JSON.parse(localStorage.getItem("employees")) || [];
        const updatedData = employees.map((data) => {
            return data.id == id ? { ...input } : data
        })

        localStorage.setItem("employees", JSON.stringify(updatedData));
        toast.success("Data Updated Successfully !");
        setInput({ name: "", salary: "", department: "" });
        navigate("/employees");
    }

    return (
        <section className="min-h-screen bg-[#152733] flex items-center justify-center px-4">
            <div className="w-full max-w-2xl bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-lg p-8">
                <div className="flex justify-end text-white cursor-pointer" onClick={() => {
                    navigate("/employees")
                }}>
                    <X />
                </div>
                <h2 className="text-2xl font-bold text-white mb-6 text-center border-b border-white/10 pb-3">
                    Edit Employee
                </h2>

                <form onSubmit={handleUpdate} className="grid grid-cols-1 gap-6">

                    <div>
                        <label htmlFor="name" className="block mb-1 text-sm font-medium text-white">
                            Employee Name
                        </label>
                        <input
                            onChange={handleChange}
                            value={input.name}
                            type="text"
                            id="name"
                            className="w-full bg-[#1e3a4c] text-white border border-white/20 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-white/60"
                            placeholder="John Doe"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="salary" className="block mb-1 text-sm font-medium text-white">
                            Salary
                        </label>
                        <input
                            onChange={handleChange}
                            value={input.salary}
                            type="number"
                            id="salary"
                            className="w-full bg-[#1e3a4c] text-white border border-white/20 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-white/60"
                            placeholder="₹5000"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="department" className="block mb-1 text-sm font-medium text-white">
                            Department
                        </label>
                        <select
                            onChange={handleChange}
                            value={input.department}
                            id="department"
                            className="w-full bg-[#1e3a4c] text-white border border-white/20 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        >
                            <option value="">Choose a Department</option>
                            <option value="Designing">Designing</option>
                            <option value="Development">Development</option>
                            <option value="Finance">Finance</option>
                            <option value="Sales And Marketing">Sales And Marketing</option>
                        </select>
                    </div>

                    <div className="flex items-end">
                        <button
                            type="submit"
                            className=" px-7 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-md transition duration-200">
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default EditEmployee