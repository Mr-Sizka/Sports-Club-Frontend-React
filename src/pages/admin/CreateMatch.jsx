import React, {useEffect, useState} from "react";
import Navigation from "./components/Nav";
import axios from "axios";

export default function CreateMatch() {
  const [name, setName] = useState();
  const [team1, setTeam1] = useState();
  const [team2, setTeam2] = useState();
  const [teams,setTeams] = useState([]);
  const [isHeld, setIsHeld] = useState(false);
  const [date, setDate] = useState();
  const [place, setPlace] = useState();

  const handleChangeTeam1 = (id) => {
    axios.get("http://localhost:3001/api/v1/team/get",{headers:{"id":`${id}`}}).then(result=>{
      setTeam1(result.data.data.value);
    }).catch(err=>{
      console.log(err)
    })
  };
  const handleChangeTeam2 = (id) => {
    axios.get("http://localhost:3001/api/v1/team/get",{headers:{"id":`${id}`}}).then(result=>{
      setTeam2(result.data.data.value);
    }).catch(err=>{
      console.log(err)
    })
    };

    const getlist = async () => {
    await axios.get('http://localhost:3001/api/v1/team/list').then((result) => {
      setTeams(result.data.data.value)
    }).catch(error => {
      console.log(error)
    })
  }

  useEffect(() => {
    getlist()
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/api/v1/match/save",{
        name,
      place,
      date,
      teams: {team1, team2},
      isHeld
    }).then(result=>{
      console.log(result)
      window.location.href = "/admin-match-view"
    }).catch(error=>{
      console.log(error)
    })
  };
  return (
    <div className="flex">
      <Navigation />
      <main className="flex-1 ml-64 p-8">
        <div className="container m-auto mt-5 bg-red-100 p-4 rounded-lg text-gray-800">
          <h1 className="text-2xl font-bold text-red-500 mb-4">Create Match</h1>
          <form
            onSubmit={handleSubmit}
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
                  onChange={(e)=>setName(e.target.value)}
                  className="w-full p-2 border rounded"
                  placeholder="Match Name"
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label htmlFor="place" className="block font-medium">
                  Place
                </label>
                <input
                  type="text"
                  id="place"
                  name="place"
                  onChange={(e)=>setPlace(e.target.value)}
                  className="w-full p-2 border rounded"
                  placeholder="Place"
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label htmlFor="date" className="block font-medium">
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  onChange={(e)=>setDate(e.target.value)}
                  className="w-full p-2 border rounded"
                />
              </div><br/>
              <div className="col-span-2 sm:col-span-1">
                <label htmlFor="playingTeams" className="block font-medium">
                  Teams 1
                </label>
                <select
                    className="w-full p-2 border rounded"
                    id="Team1"
                    name="Teams1"
                    onChange={(e)=>handleChangeTeam1(e.target.value)}
                >
                  <option selected disabled>Select Team</option>
                  {teams.map((team,index)=>(
                    <option key={index} value={team._id} >{team.name}</option>))
                  }

                </select>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label htmlFor="playingTeams" className="block font-medium">
                  Teams 2
                </label>
                <select
                    className="w-full p-2 border rounded"
                    id="Team2"
                    name="Teams2"
                    required
                    onChange={(e)=>handleChangeTeam2(e.target.value)}
                >
                  <option selected disabled>Select Team</option>
                  {teams.map((team,index)=>(
                      <option key={index} value={team._id}>{team.name}</option>
                  ))}

                </select>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <label htmlFor="isHeld" className="block font-medium">
                  <input
                    type="checkbox"
                    id="isHeld"
                    name="isHeld"
                    onChange={()=>{setIsHeld(!isHeld)}}
                  />
                  {" Is Held"}
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="w-full mt-4 bg-red-500 text-white p-2 rounded hover:bg-red-600"
            >
              Create Match
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
