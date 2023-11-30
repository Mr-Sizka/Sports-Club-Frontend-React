import React, {useEffect, useState} from "react";
import Navigation from "./components/Nav";
import UpdateMatch from "./UpdateMatch.jsx";
import axios from "axios";

export default function Matches() {

  const [update, setUpdate] = useState(false);
  const [matches, setmatches] = useState([]);
  const [active, setActive] = useState([]);


  const getMatches =  ()=>{
    axios.get("http://localhost:3001/api/v1/match/list").then(result=>{
      setmatches(result.data.data.value);
    }).catch(error=>{
      console.log(error);
    })
  }

  const deleteMatch =  (id)=>{
    axios.delete("http://localhost:3001/api/v1/match/delete",{headers:{"id":`${id}`}}).then(result=>{
      console.log(result)
      getMatches()
    }).catch(error=>{
      console.log(error);
    })
  }

  useEffect( () => {
    getMatches();
  }, [update]);


  return (
      <>
        {!update && <div className="flex">
          <Navigation/>
          <main className="flex-1 ml-64 p-8">
            <div className="container m-auto mt-5 bg-red-100 p-4 rounded-lg text-gray-800">
              <h1 className="text-2xl font-bold text-red-500 mb-4">
                Match Details
              </h1>
              {matches.map((match) => (
                  <div
                      key={match.id}
                      className="mt-6 p-4 border border-gray-300 rounded-lg shadow-md"
                  >
                    <p className="text-xl font-semibold mb-2">{match.name}</p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="col-span-2 sm:col-span-1">
                        <p>
                          <strong>Place:</strong> {match.place}
                        </p>
                        <p>
                          <strong>Date:</strong> {match.date.slice(0,10)}
                        </p>
                        <p>
                          <strong>Playing Teams:</strong> {match.teams.team1.name} vs {match.teams.team2.name}
                        </p>
                        <p>
                          <strong>Status:</strong>{" "}
                          {match.isHeld ? "Held" : "Not Held"}
                        </p>
                      </div>
                      <div className="col-span-2 sm:col-span-1">
                        <div className="mt-2">
                          <a
                              onClick={() => {
                                setActive(match)
                                setUpdate(true)
                              }}
                              className="text-red-500 hover:underline"
                          >
                            Update Match
                          </a>
                        </div>
                        <div className="mt-2">
                          <a
                              onClick={()=>deleteMatch(match._id)}
                              className="text-red-500 hover:underline"
                          >
                            Delete Match
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
              ))}
              <div className="mt-6">
                <a
                    href="/admin-match-create"
                    className="text-red-500 hover:underline"
                >
                  Create Match
                </a>
              </div>
            </div>
          </main>
        </div>}
        {update && <UpdateMatch setUpdate={setUpdate} active={active} getMatches={getMatches}/>}
      </>

  );
}
