import { Link } from "react-router-dom"

const EmployeeTable = ({ employees, employeeDelete, setEmployees }) => {

    const handleDelete = (id) => {
        employeeDelete(id);
    }


    const handleSort = () => {
        let demo = [...employees].sort((a, b) => {
            return a.salary - b.salary;
        })
        setEmployees(demo)
    }

    return (
        <div className="relative max-h-[400px] overflow-y-auto scrollbar-hide mt-5 rounded-lg  overflow-x-auto">
            <table className="w-full text-sm text-left text-white min-w-[700px]">
                <thead className="text-xs  uppercase bg-[#1f2f46] text-white">
                    <tr>
                        <th scope="col" className="px-6 py-3">Sr. No</th>
                        <th scope="col" className="px-6 py-3">Employee Name</th>
                        <th
                            scope="col"
                            className="px-6 py-3 cursor-pointer hover:text-blue-400 transition-all"
                            onClick={handleSort}
                            title="Sort by Salary"
                        >
                            Salary ⬍
                        </th>
                        <th scope="col" className="px-6 py-3">Department</th>
                        <th scope="col" className="px-6 py-3">Action</th>
                    </tr>
                </thead>
                <tbody className="">
                    {employees.map((emp, idx) => (
                        <tr
                            key={emp.id}
                            className={` bg-[#1f3542] border-b border-gray-700 hover:bg-[#29445f] transition-all`}
                        >
                            <td className="px-6 py-4 font-medium text-white whitespace-nowrap">
                                {idx + 1}
                            </td>
                            <td className="px-6 py-4">{emp.name}</td>
                            <td className="px-6 py-4">{emp.salary}</td>
                            <td className="px-6 py-4">{emp.department}</td>
                            <td className="px-6 py-4 flex items-center gap-4">
                                <Link
                                    to={`/edit-employee/${emp.id}`}
                                    className="text-green-400 hover:text-green-300 text-lg"
                                    title="Edit"
                                >
                                    <i className="fa-solid fa-pen-to-square"></i>
                                </Link>
                                <button
                                    onClick={() => handleDelete(emp.id)}
                                    className="text-red-500 hover:text-red-400 text-lg"
                                    title="Delete"
                                >
                                    <i className="fa-solid fa-trash"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default EmployeeTable