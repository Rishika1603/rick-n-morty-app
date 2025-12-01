import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import InputGroup from "../Filter/InputGroup";

const Episodes = () => {
  // State variables
  const [results, setResults] = useState([]);
  const [info, setInfo] = useState({});
  const [id, setID] = useState(1);

  // Destructure episode details from `info`
  const { air_date, episode, name } = info;

  // API endpoint based on selected episode ID
  const api = `https://rickandmortyapi.com/api/episode/${id}`;

  // Fetch episode data and character information
  useEffect(() => {
    (async function () {
      const data = await fetch(api).then((res) => res.json());
      setInfo(data);

      // Fetch character details for each character in the episode
      const characterData = await Promise.all(
        data.characters.map((url) => fetch(url).then((res) => res.json()))
      );
      setResults(characterData);
    })();
  }, [api]);

  return (
    <div className="container">
      {/* Episode Information */}
      <div className="row mb-3">
        <h1 className="text-center mb-3">
          Episode Name: <span className="text-primary">{name || "Unknown"}</span>
        </h1>
        <h5 className="text-center">
          Air Date: {air_date || "Unknown"}
        </h5>
      </div>

      {/* Episode Selector and Character Cards */}
      <div className="row">
        {/* Episode Selector */}
        <div className="col-lg-3 col-12 mb-4">
          <h4 className="text-center mb-4">Pick Episode</h4>
          <InputGroup name="Episode" changeID={setID} total={51} />
        </div>

        {/* Characters in the Selected Episode */}
        <div className="col-lg-8 col-12">
          <div className="row">
            <Card results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Episodes;
