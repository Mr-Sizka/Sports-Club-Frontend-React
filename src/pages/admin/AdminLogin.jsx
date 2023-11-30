import React, {useState} from "react";
import axios from "axios";

export default function AdminLogin() {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const login = (event,email,password)=>{
    event.preventDefault();
      axios.get("http://localhost:3001/api/v1/admin/get",{headers:{"email":`${email}`}}).then(result=>{
        let user = result.data.data.value;
        if( user != null){
          if (user.password === password){
            localStorage.setItem("adminId",user._id)
            window.location.href = "/admin-players-view"
          }
        }
      }).catch(error=>{
        console.log(error);
      })
  }
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-96 p-6 border rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-7 text-center text-red-500">
          Admin Login
        </h2>
        <form onSubmit={(event)=>login(event,email,password)}>
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
              onChange={(event)=>setEmail(event.target.value)}
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
              onChange={(event)=>setPassword(event.target.value)}
            />
          </div>
          <button className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
