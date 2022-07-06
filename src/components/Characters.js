import React, { useState } from "react";
import { useEffect } from "react";
import { useQuery } from "react-query";
import Character from "./Character";

const Characters = () => {
  const fetchCharacters = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    return response.json();
  };

  const { data, status } = useQuery("characters", fetchCharacters);

  if (status === "loading") {
    return <div> loading...</div>;
  }
  if (status === "error") {
    return <div> error...</div>;
  }

  return (
    <div className="characters">
      {data.results.map((character) => (
        <Character key={character.id} character={character} />
      ))}
    </div>
  );
};

export default Characters;
