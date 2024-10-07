import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

interface User {
  _id: string;
  name: string;
  lastname: string;
  email: string;
  hobby: string;
}

const User = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const result = await axios.get(
          `http://localhost:3000/api/users/alldata`
        );
        console.log(result.data);
        setUsers(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);

  const handleDelete = async (id: String) => {
    try {
        const result = await axios.delete('http://localhost:3000/api/users/deleteData/'+id);
        console.log(result.data)
        setUsers(users.filter(user => user._id !== id))
    } catch(error) {
        console.log(error)
    }
  }

  return (
    <div className="flex h-[100vh] bg-green-600 justify-center items-center">
      <div className="md:w-1/2 w-3/4 bg-white rounded-lg p-5">
        <Link
          to={"/create"}
          className="px-3 py-2 bg-blue-500 rounded-md text-white"
        >
          Add
        </Link>

        {/* Add a div wrapper around the table for scrollability */}
        <div className="mt-5 overflow-y-auto" style={{ maxHeight: "300px" }}>
          <table className="border border-gray-200 w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Lastname</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Hobby</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index} className="border-b">
                  <td className="p-4">{user.name}</td>
                  <td className="p-4">{user.lastname}</td>
                  <td className="p-4">{user.email}</td>
                  <td className="p-4">{user.hobby}</td>
                  <td className="p-4">
                    <Link to={`/update/${user._id}`}>
                      <button className="px-2 py-3 bg-blue-600 mr-2 text-white text-sm rounded-md">
                        Update
                      </button>
                    </Link>

                    <button 
                        onClick={() => handleDelete(user._id)}
                        className="px-2 py-3 bg-red-600 text-white text-sm rounded-md">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default User;
