import React, {useEffect, useState} from "react";
import Navigation from "../components/Nav";
import axios from "axios";

export default function Profile() {

  const [user, setUser] = useState();


  const getData = ()=>{
    axios.get("http://localhost:3001/api/v1/player/get",{headers:{"id":`${localStorage.getItem("userId")}`}}).then(result=>{
      setUser(result.data.data.value);
    }).catch(error=>{
      console.log(error);
    })
  }

  useEffect(() => {
    getData()
  }, [localStorage.getItem("userId")]);

  useEffect(() => {
    console.log(user)
  }, [user]);

  return (
    <div>
      <Navigation />
      <h1 className="px-6 capitalize text-3xl text-center py-4 font-bold text-blue-900">
        Your Profile
      </h1>

      <div className="container grid grid-cols-1 md:grid-cols-2 m-auto">
        <div className="bg-blue-500 text-white rounded-lg hover:bg-blue-600 p-6 m-4">
          <div className="flex justify-between py-5 text-xl">
            <h2 className="font-bold">Name</h2>
            <h3 className="font-semibold">{user? user.name:"noContent"}</h3>
          </div>
          <div className="flex justify-between py-5 text-xl">
            <h2 className="font-bold">Address</h2>
            <h3 className="font-semibold">{user? user.address:"noContent"}</h3>
          </div>
          <div className="flex justify-between py-5 text-xl">
            <h2 className="font-bold">Contacts</h2>
            <h3 className="font-semibold">{user? user.contact:"noContent"}</h3>
          </div>
          <div className="flex justify-between py-5 text-xl">
            <h2 className="font-bold">Age</h2>
            <h3 className="font-semibold">{user? user.age:"noContent"}</h3>
          </div>
          <div className="flex justify-between py-5 text-xl">
            <h2 className="font-bold">Email Address</h2>
            <h3 className="font-semibold">{user? user.email:"noContent"}</h3>
          </div>
          <div className="flex justify-between py-5 text-xl">
            <h2 className="font-bold">Points</h2>
            <h3 className="font-semibold">{user? user.points:"noContent"}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
