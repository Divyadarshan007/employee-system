import { useEffect, useState } from 'react';
import EmployeeTable from '../components/EmployeeTable'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

const Employees = () => {
    const navigate = useNavigate();
    const [employees, setEmployees] = useState([]);
    const [searchEmp, setSearchEmp] = useState([]);
    const [search, setSearch] = useState({ name: '', dept: '' })
    useEffect(() => {
        let data = JSON.parse(localStorage.getItem("employees")) || [];
        setEmployees(data);
        setSearchEmp(data);
    }, []);

    const employeeDelete = (id) => {
        const updatedEmployee = employees.filter((emp) => {
            return emp.id !== id;
        })
        setEmployees(updatedEmployee);
        localStorage.setItem("employees", JSON.stringify(updatedEmployee));
        toast.success("Employee Deleted Successfully !");
    }

    let newArr = [...employees]
    const handleSearch = (e) => {
        const value = e.target.value;
        setSearch({ ...search, [e.target.id]: e.target.value })
        let searchedArr = value.trim() == '' ? searchEmp : searchEmp.filter((item) => {
            return item.name.toLowerCase().includes(value.toLowerCase())
        })
        setEmployees(searchedArr)

    }

    const handleChange = (e) => {
        const value = e.target.value;

        setSearch({ ...search, [e.target.id]: e.target.value })
        let searchedArr = value.trim() == '' ? searchEmp : searchEmp.filter((item) => {
            console.log(item.department);

            return item.department == value;
        })
        setEmployees(searchedArr)
    }

    return (
        <section className="bg-[#152733] min-h-screen text-white pt-10">
            <div className="container mx-auto px-4">

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold">Employee Details</h2>
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">

                        <select
                            onChange={handleChange}
                            value={search.department}
                            id="dept"
                            className="bg-[#1f3542] text-white border border-gray-600 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">All Departments</option>
                            <option value="Designing">Designing</option>
                            <option value="Development">Development</option>
                            <option value="Finance">Finance</option>
                            <option value="Sales And Marketing">Sales And Marketing</option>
                        </select>


                        <input
                            type="text"
                            value={search.name}
                            onChange={handleSearch}
                            id="name"
                            placeholder="Search by Name"
                            className="bg-[#1f3542] text-white border border-gray-600 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        <button
                            onClick={() => navigate("/add-employee")}
                            className="bg-gradient-to-r from-[#3D8BFF] to-[#1E6FE3] hover:opacity-90 text-white font-semibold rounded-md px-5 py-1 text-sm flex items-center gap-2 shadow-md transition-all duration-200"
                        >
                            <i className="ri-add-line text-lg"></i>
                            Add Employee
                        </button>

                    </div>
                </div>

                <div className="overflow-x-auto  rounded-lg shadow-lg">
                    <EmployeeTable
                        employees={employees}
                        setEmployees={setEmployees}
                        employeeDelete={employeeDelete}
                    />
                </div>
            </div>
        </section>

    )
}

export default Employees