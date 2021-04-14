import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";

const ProfileView = (props) => {
  let history = useHistory();
  const params = useLocation();
  console.log("gd1", params);
  const { member } = params;
  console.log("duh member", member);
  // useEffect(() => {}, []);

  useEffect(async () => {
    const url = "https://swapi.dev/api/people/?search=";
    let response = await fetch(member.url);
    const res = await response.json();
    const results = res.results;
    console.log("gd-res1", res);
    console.log("gd-res", results);
    setMembers(results);
  }, [member]);
  return (
    <div>
      {member && (
        <>
          <div style={{ textAlign: "center" }}>
            <h1>{member.name}</h1>

            <p>Height: {member.height}</p>
            <p>Mass: {member.mass}</p>
            <p>Hair Color: {member.hair_color}</p>
            <p>Gender: {member.gender}</p>

            <button onClick={() => history.push("/")}>Return To Search</button>
          </div>
        </>
      )}
    </div>
  );
};

export default ProfileView;
