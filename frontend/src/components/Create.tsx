import { FormEvent, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [hobby, setHobby] = useState("");

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Optional: Input validation
    if (!name || !lastname || !email || !hobby) {
      console.log("All fields are required.");
      return; // Prevent submission
    }

    try {
      await axios.post("http://localhost:3000/api/users/create", {
        name,
        lastname,
        email,
        hobby,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex h-[100vh] bg-green-600 justify-center items-center">
      <div className="w-1/2 bg-white rounded-lg p-3">
        <form onSubmit={submitHandler}>
          <h2>Add User</h2>
          <div className="mb-2 flex flex-col">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              onChange={(e) => setName(e.target.value)}
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
  );
};

export default Create;
