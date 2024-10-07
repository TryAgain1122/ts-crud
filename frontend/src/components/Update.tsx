import { useParams, useNavigate } from "react-router-dom"
import axios from "axios";
import { FormEvent, useEffect, useState } from "react";

const Update = () => {
    const { id } = useParams();

    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [hobby, setHobby] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/users/getUser/"+id);
                console.log(response.data);
                setName(response.data.name);
                setLastname(response.data.lastname);
                setEmail(response.data.email);
                setHobby(response.data.hobby);
                
            } catch (error) {
                console.log(error)
            }
        }
        fetchUsers();
    },[])

    const updateHandler = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const result = await axios.put("http://localhost:3000/api/users/update/"+ id, {
                name,
                lastname,
                email,
                hobby
            }) 
            console.log(result.data);
            navigate('/')
        } catch(error) {
            console.log(error)
        }
    }

  return (
    <div className="flex h-[100vh] bg-green-600 justify-center items-center">
    <div className="w-1/2 bg-white rounded-lg p-3">
      <form onSubmit={updateHandler}>
        <h2>Add User</h2>
        <div className="mb-2 flex flex-col">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="border border-black p-1"
            required
          />
        </div>
        <div className="mb-2 flex flex-col">
          <label htmlFor="lastname">Lastname</label>
          <input
            type="text"
            name="lastname"
            onChange={(e) => setLastname(e.target.value)}
            value={lastname}
            className="border border-black p-1"
            required
          />
        </div>
        <div className="mb-2 flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="border border-black p-1"
            required
          />
        </div>
        <div className="mb-2 flex flex-col">
          <label htmlFor="hobby">Hobby</label>
          <input
            type="text"
            name="hobby"
            onChange={(e) => setHobby(e.target.value)}
            value={hobby}
            className="border border-black p-1"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full px-3 py-2 bg-blue-500 text-white"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
  )
}

export default Update