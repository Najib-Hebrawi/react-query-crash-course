import React, { useState } from "react";
import { useEffect } from "react";
import { useQuery } from "react-query";





const Characters = () => {


  const fetchCharacters = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    return response.json();

  };

 const {data, status}= useQuery("characters", fetchCharacters);

  if (status === "loading") {return<div> loading...</div>}
  if (status === "error") {return<div> error...</div>}


 
  return (
    <div>
      {data.results.map((character) => (
        <div key={character.name}>{character.name}</div>
      ))}
    </div>
  );
};

export default Characters;
