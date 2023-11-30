import React, {useEffect, useState} from "react";
import Navigation from "./components/Nav";
import axios from "axios";
export default function CreateTeam() {
  const [name, setName] = useState();
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
      .post("http://localhost:3001/api/v1/team/save", {
        name,
        teamPlayers

      })
      .then((result) => {
        console.log(result)
        window.location.href = "/admin-team-view"
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="flex">
      <Navigation />
      <main className="flex-1 ml-64 p-8">
        <div className="container m-auto mt-5 bg-red-100 p-4 rounded-lg text-gray-800">
          <h1 className="text-2xl font-bold text-red-500 mb-4">Create Team</h1>
          <form
            onSubmit={handleSubmit}
            className="p-4 border border-gray-300 rounded-lg shadow-md"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 sm:col-span-1">
                <label htmlFor="name" className="block font-medium">
                  Team Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-2 border rounded"
                  placeholder="Team Name"
                  required={true}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="col-span-2" >
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
            <button className="w-full mt-4 bg-red-500 text-white p-2 rounded hover:bg-red-600">
              Create Team
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
