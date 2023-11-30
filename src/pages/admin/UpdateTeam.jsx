import React, {useEffect, useState} from "react";

import Navigation from "./components/Nav";
import axios from "axios";
export default function UpdateTeam({active,setUpdate,getTeams}) {
  const [name, setName] = useState();

  const handleChange = (e) => {
    console.log(e.target.value)
    setName(e.target.value)
  };

  const [teamPlayers,setTeamPlayers] = useState([])
  const [players,setPlayers] = useState([])


  // Handle the checkbox change event
  const handleCheckboxChange = (event) => {
    if(event.event.target.checked){
      teamPlayers.push(event.value);
    }else {
      teamPlayers.pop(event.value)
    }
  };

  const getlist = ()=>{
    axios.get('http://localhost:3001/api/v1/player/list').then((result) => {
      setPlayers(result.data.data.value)
    }).catch(error=>{
      console.log(error)
    })
  }

  useEffect(() => {
    getlist()
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();

    axios
        .put("http://localhost:3001/api/v1/team/update", {
          name,
          teamPlayers

        },{headers:{"id":`${active._id}`}})
        .then((result) => {
          console.log(result);
          setUpdate(false);
          getTeams();
        })
        .catch((err) => console.log(err));
  };

  return (
    <div>
      <Navigation  setUpdate={setUpdate}/>
      <main className="flex-1 ml-64 p-8">
        <div className="container m-auto mt-5 bg-red-100 p-4 rounded-lg text-gray-800">
          <h1 className="text-2xl font-bold text-red-500 mb-4">Update Team</h1>
          <form
            onSubmit={handleSubmit}
            className="p-4 border border-gray-300 rounded-lg shadow-md"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 sm:col-span-1" key={1}>
                <label htmlFor="name" className="block font-medium">
                  Team Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={active.name}
                  onChange={handleChange}
                  required={true}
                  className="w-full p-2 border rounded"
                  placeholder="Team Name"
                />
              </div>
              <div className="col-span-2" key={2} >
                <label htmlFor="players" className="block font-medium">
                  Select Players
                </label>
                { players.map((player,index)=>(
                    <><input
                        name="player.id"
                        className="mx-2"
                        type="checkbox"
                        value={player}
                        key={index}
                        onChange={(e)=>handleCheckboxChange({event:e,value:player})}
                    />
                      <label >{player.name}</label>
                    </>
                ))}
              </div>
            </div>
            <button
              type="submit"
              className="w-full mt-4 bg-red-500 text-white p-2 rounded hover:bg-red-600"
            >
              Update Team
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
