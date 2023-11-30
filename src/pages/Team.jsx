import React, {useEffect, useState} from "react";
import Navigation from "../components/Nav";
import axios from "axios";

export default function Profile() {
    const [teams,setTeams] = useState([])
    const getTeams = ()=>{
        axios.get("http://localhost:3001/api/v1/team/list").then(result=>{
            setTeams(result.data.data.value);
        }).catch(error=>{
            console.log(error)
        })
    }

    useEffect(() => {
        getTeams();
    }, []);
  return (
    <div>
      <Navigation />
      <h1 className="px-6 capitalize text-3xl text-center py-4 font-bold text-blue-900">
        All Teams
      </h1>

      <div className="container grid grid-cols-1 md:grid-cols-3 m-auto">
        {teams.map((team,index)=>(
            <div key={index} className="text-xl bg-blue-500 text-white rounded-lg hover:bg-blue-600 m-4 p-7">
                <h2 className="font-bold">Team Name</h2>
                <h3 className="font-semibold pb-3">{team.name}</h3>

                <h2 className="font-bold">Members</h2>
                {team.players.map((player,index)=>(
                    <h3 key={index} className="font-semibold">{player.name}</h3>
                ))}

            </div>

        ))}
      </div>
    </div>
  );
}
