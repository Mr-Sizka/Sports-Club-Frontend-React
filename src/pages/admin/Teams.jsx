import React, {useEffect, useState} from "react";
import Navigation from "./components/Nav";
import axios from "axios";
import UpdateTeam from "./UpdateTeam.jsx";
export default function Teams() {

  const [teams,setTeams] = useState([])
  const [update,setUpdate] = useState(false)
  const [active,setActive] = useState();


  const getTeams = ()=>{
    axios.get("http://localhost:3001/api/v1/team/list").then(result=>{
      setTeams(result.data.data.value);
    }).catch(error=>{
      console.log(error)
    })
  }

  const deleteTeam = (id) =>{
    axios.delete("http://localhost:3001/api/v1/team/delete",{headers:{"id":`${id}`}}).then(result=>{
      console.log(result);
      getTeams();
    }).catch(error=>{
      console.log(error);
    })
  }

  useEffect(() => {
    getTeams()
  }, []);
  return (
      <>
        {!update && <div className="flex">
          <Navigation/>
          <main className="flex-1 ml-64 p-8">
            <div className="container m-auto mt-5 bg-red-100 p-4 rounded-lg text-gray-800">
              <h1 className="text-2xl font-bold text-red-500 mb-4">Team Details</h1>
              {teams.map((team) => (
                  <div
                      key={team._id}
                      className="mt-6 p-4 border border-gray-300 rounded-lg shadow-md"
                  >
                    <p className="text-xl font-semibold mb-2">{team.name}</p>
                    <div>
                      <p>
                        <strong>Players:</strong>
                      </p>
                      <ul>
                        {team.players.map((player, index) => (
                            <li key={index}>{player.name}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-2">
                      <a
                          onClick={()=> {
                            setActive(team)
                            setUpdate(!update)
                          }}
                          className="text-red-500 hover:underline"
                      >
                        Update Team
                      </a>
                    </div>
                    <div className="mt-2">
                      <a
                          onClick={() => deleteTeam(team._id)}
                          className="text-red-500 hover:underline"
                      >
                        Delete Team
                      </a>
                    </div>
                  </div>
              ))}
              <div className="mt-6">
                <a
                    href="/admin-team-create"
                    className="text-red-500 hover:underline"
                >
                  Create Team
                </a>
              </div>
            </div>
          </main>
        </div>}
        {update && <UpdateTeam active={active} setUpdate={setUpdate} getTeams={getTeams}/>}
      </>

  );
}
