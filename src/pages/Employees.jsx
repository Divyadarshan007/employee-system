import { useEffect, useState } from 'react';
import EmployeeTable from '../components/EmployeeTable'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

const Employees = () => {
    const navigate = useNavigate();
    const [employees, setEmployees] = useState([]);
    const [searchEmp, setSearchEmp] = useState([]);
    const [search, setSearch] = useState('')
    useEffect(() => {
        let data = JSON.parse(localStorage.getItem("employees")) || [];
        setEmployees(data);
        setSearchEmp(data);
    }, []);

    // useEffect(() => {
    //     localStorage.setItem("employees", JSON.stringify(employees));
    // }, [employees])

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
        setSearch(value)
        let searchedArr = value.trim() == '' ? searchEmp : searchEmp.filter((item) => {
            return  item.name.toLowerCase().includes(value.toLowerCase()) 
        })

        setEmployees(searchedArr)

    }

    return (
        <section>
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <h2 className="text-3xl font-semibold mt-5">Employees Details</h2>
                    <div className='flex items-center gap-3 '>
                        <input type="text" value={search} className='border' onChange={handleSearch} />
                        <button type="button" onClick={() => navigate("/add-employee")} className="text-white bg-blue-600 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2 text-center flex gap-2">
                            <i className="ri-add-line"></i>
                            Add Employees
                        </button>
                    </div>
                </div>
                <EmployeeTable employees={employees} setEmployees={setEmployees} employeeDelete={employeeDelete} />
            </div>
        </section>
    )
}

export default Employees