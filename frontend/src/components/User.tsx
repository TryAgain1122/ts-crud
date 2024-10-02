import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from 'axios';

interface User {
    name: string,
    lastname: string;
    email: string;
    hobby: string;
}

const User = () => {
    const [users, setUSers] = useState<User[]>([])

    useEffect(()=> {
        const fetchUsers = async () => {
            try {
                const result = await axios.get("http://localhost:3000/api/users/alldata")
                console.log(result.data)
                setUSers(result.data)
            } catch(error) {
                console.log(error)
            }
        }
        fetchUsers();
    },[])
  return (
    <div className="flex h-[100vh] bg-green-600 justify-center items-center">
        <div className="w-1/2 bg-white rounded-lg p-5">
            <Link to={"/create"} className="px-3 py-2 bg-blue-500 rounded-md text-white">Add</Link>
            <table className="border border-gray-200 w-full mt-5">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Lastname</th>
                        <th>Email</th>
                        <th>Hobby</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index} className="border-b">
                            <td className="p-4 ">{user.name}</td>
                            <td className="p-4">{user.lastname}</td>
                            <td className="p-4">{user.email}</td>'
                            <td className="p-4">{user.hobby}</td>'
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default User