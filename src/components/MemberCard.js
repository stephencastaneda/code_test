import React, { useEffect, useState } from "react";
import slugify from "react-slugify";

// import { browserHistory } from "react-router";
import { useHistory } from "react-router-dom";

const Home = (props) => {
  const { member } = props;
  let history = useHistory();
  useEffect(() => {}, []);

  return (
    <div
      onClick={() => {
        history.push({
          pathname: `/member/${slugify(member.name)}`,
          member: member
        });
      }}
    >
      <div className="grid-item">
        <p>{member.name}</p>
      </div>
    </div>
  );
};

export default Home;
