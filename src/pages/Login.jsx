import React, {useState} from "react";
import axios from "axios";

export default function Login() {

  const [email,setEmail] = useState()
  const [password,setPassword] = useState()

  const login = () =>{
    axios.get("http://localhost:3001/api/v1/player/login",{headers:{"email":`${email}`,"password":`${password}`}}).then(result=>{
      let user = result.data.data.value;
      if (user != null){
        localStorage.setItem("userId",user._id);
        window.location.href = "/profile"
      }
    }).catch(error=>{
      console.log(error)
    })
  }
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-96 p-6 border rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-7 text-center text-blue-500">
          Login Sport Club
        </h2>
        <form onSubmit={login}>
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 border rounded"
              placeholder="Email"
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-2 border rounded"
              placeholder="Password"
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
