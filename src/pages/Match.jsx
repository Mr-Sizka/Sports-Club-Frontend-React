import React, {useEffect, useState} from "react";
import Navigation from "../components/Nav";
import axios from "axios";

export default function Profile() {

    const [matches,setMatches] = useState([])
    const getMatches = ()=>{
        axios.get("http://localhost:3001/api/v1/match/list").then(result=>{
            setMatches(result.data.data.value);
        }).catch(error=>{
            console.log(error)
        })
    }

    useEffect(() => {
        getMatches();
    }, []);


  return (
    <div>
      <Navigation />
      <h1 className="px-6 capitalize text-3xl text-center py-4 font-bold text-blue-900">
        All Matches
      </h1>

      <div className="container grid grid-cols-1 md:grid-cols-3 m-auto">

          {matches.map((match,index)=>(
                  <div key={index} className="text-xl bg-blue-500 text-white rounded-lg hover:bg-blue-600 m-4 p-7">
                      <h2 className="font-bold">Match Name</h2>
                      <h3 className="font-semibold pb-3">{match.name}</h3>

                      <h2 className="font-bold">Starting Date</h2>
                      <h3 className="font-semibold pb-3">{match.date.slice(0,11)}</h3>

                      <h2 className="font-bold">Place</h2>
                      <h3 className="font-semibold pb-3">{match.place}</h3>

                      <h2 className="font-bold">Status</h2>
                      <h3 className="font-semibold pb-3">{match.isHeld? "Held":"Start Soon"}</h3>

                      <h2 className="font-bold">Teams</h2>
                      <h3 className="font-semibold">{match.teams.team1.name}</h3>
                      <h3 className="font-semibold">{match.teams.team2.name}</h3>
                  </div>
              ))
              }

      </div>
    </div>
  );
}
