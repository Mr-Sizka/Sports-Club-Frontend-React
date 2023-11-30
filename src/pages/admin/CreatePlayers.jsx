import React, { useState } from "react";
import Navigation from "./components/Nav";
import axios from "axios";
import routes from "../../routes.jsx";

export default function Players() {
  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [contact, setContact] = useState();
  const [email, setEmail] = useState();
  const [points, setPoints] = useState();
  const [age, setAge] = useState();
  const [password, setPassword] = useState();

  const Submit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3001/api/v1/player/save", {
        name,
        address,
        contact,
        email,
        points,
        age,
        password
      })
      .then((result) => {
        console.log(result)
        window.location.href = "/admin-players-view"
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="flex">
      <Navigation />

      <main className="flex-1 ml-64 p-8">
        <div className="bg-red-100 container m-auto mt-6 p-4 rounded-lg text-gray-800">
          <h1 className="text-2xl font-bold text-red-500 mb-4">
            Create Player
          </h1>
          <form
            onSubmit={Submit}
            className="p-4 border border-gray-300 rounded-lg shadow-md"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 sm:col-span-1">
                <label htmlFor="name" className="block font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-2 border rounded"
                  placeholder="Player Name"
                  required={true}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label htmlFor="address" className="block font-medium">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="w-full p-2 border rounded"
                  placeholder="Address"
                  required={true}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label htmlFor="contact" className="block font-medium">
                  Contact
                </label>
                <input
                  type="text"
                  id="contact"
                  name="contact"
                  className="w-full p-2 border rounded"
                  placeholder="Contact"
                  required={true}
                  onChange={(e) => setContact(e.target.value)}
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label htmlFor="email" className="block font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-2 border rounded"
                  placeholder="Email"
                  required={true}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label htmlFor="password" className="block font-medium">
                  Password
                </label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    className="w-full p-2 border rounded"
                    placeholder="Password"
                    required={true}
                    onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label htmlFor="age" className="block font-medium">
                  Age
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  className="w-full p-2 border rounded"
                  placeholder="Age"
                  required={true}
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label htmlFor="points" className="block font-medium">
                  Points
                </label>
                <input
                  type="number"
                  id="points"
                  name="points"
                  className="w-full p-2 border rounded"
                  placeholder="Points"
                  required={true}
                  onChange={(e) => setPoints(e.target.value)}
                />
              </div>
            </div>
            <button className="w-full mt-4 bg-red-500 text-white p-2 rounded hover:bg-red-600">
              Create Player
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
