import React, { useEffect, useState } from "react";
import MemberCard from "./MemberCard";
const Home = () => {
  const [searchText, setSearchText] = useState("");
  const [members, setMembers] = useState([]);

  useEffect(async () => {
    const url = "https://swapi.dev/api/people/?search=";
    let response = await fetch(url + searchText);
    const res = await response.json();
    const results = res.results;
    console.log("gd-res1", res);
    console.log("gd-res", results);
    setMembers(results);
  }, [searchText]);

  return (
    <div>
      <h1>Search</h1>
      <input
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search by name"
      />
      <div className="container">
        {members &&
          members.map((item, index) => {
            return <MemberCard member={item} key={index} />;
          })}
      </div>
    </div>
  );
};

export default Home;
