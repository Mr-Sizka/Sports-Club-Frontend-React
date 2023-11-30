import React, {useEffect, useState} from "react";
import Navigation from "./components/Nav";
import axios from "axios";
import UpdatePlayers from "./UpdatePlayers.jsx";

function Players  () {
  
  const [players,setPlayers] = useState([])
  const [update,setUpdate] = useState(false)
  const [active,setActive] = useState()

  const deletePlayer = (id)=>{
    axios.delete('http://localhost:3001/api/v1/player/delete',{headers:{"id":`${id}`}}).then(result=>{
      console.log(result)
      getlist()
    }).catch(error=>{
      console.log(error)
    })
  }

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

  return (
      <>
        {!update && <div className="flex">
          <Navigation/>

          <main className="flex-1 ml-64 p-8">
            <div className="bg-red-100 container m-auto mt-6 p-4 rounded-lg text-gray-800">
              <h1 className="text-2xl font-bold text-red-500 mb-4">
                Player Details
              </h1>
              {players.map((player) => (
                  <div
                      key={player.id}
                      className="mt-6 p-4 border border-gray-300 rounded-lg shadow-md"
                  >
                    <p className="text-xl font-semibold mb-2">{player.name}</p>
                    <div className="flex flex-wrap">
                      <div className="w-full sm:w-1/2 md:w-1/3">
                        <p>
                          <strong>Address:</strong> {player.address}
                        </p>
                        <p>
                          <strong>Contact:</strong> {player.contact}
                        </p>
                        <p>
                          <strong>Email:</strong> {player.email}
                        </p>
                      </div>
                      <div className="w-full sm:w-1/2 md:w-1/3">
                        <p>
                          <strong>Team:</strong> {player.team}
                        </p>
                        <p>
                          <strong>Points:</strong> {player.points}
                        </p>
                        <p>
                          <strong>Age:</strong> {player.age} years
                        </p>
                      </div>
                      <div className="w-full sm:w-1/2 md:w-1/3">
                        <div className="mt-2">
                          <a
                              className="text-red-500 hover:underline"
                              onClick={()=> {
                                setActive(player)
                                setUpdate(!update)
                              }}
                          >
                            Update Player
                          </a>
                        </div>
                        <div className="mt-2">
                          <a
                              onClick={() => deletePlayer(player._id)}
                              className="text-red-500 hover:underline"
                          >
                            Delete Player
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
              ))}
              <div className="mt-6">
                <a
                    href="/admin-players-create"
                    className="text-red-500  hover:underline"
                >
                  Create Player
                </a>
              </div>
            </div>
          </main>
        </div>}
        {update && <UpdatePlayers active={active} setUpdate={setUpdate} getList={getlist}/>}
      </>
  );
}

export default Players;