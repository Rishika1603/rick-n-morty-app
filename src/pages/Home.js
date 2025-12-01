// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Filter from '../Filter/Filter';
import Pagination from '../Pagination/Pagination';
import Search from '../Search/Search';

const Home = () => {
  const [pageNumber, updatePageNumber] = useState(1);
  const [search, setSearch] = useState("");
  const [fetchedData, updateFetchedData] = useState({});
  const { info, results } = fetchedData;

  const [status, updateStatus] = useState("");
  const [gender, updateGender] = useState("");
  const [species, updateSpecies] = useState(""); // Fixed spelling of "species"

  useEffect(() => {
    const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;
    (async function () {
      const response = await fetch(api);
      const data = await response.json();
      updateFetchedData(data);
    })();
  }, [pageNumber, search, status, gender, species]);

  return (
    <div className="container">
      <h1 className="text-center mb-3">Characters</h1>
      <Search setSearch={setSearch} updatePageNumber={updatePageNumber} />
      <Filter
        pageNumber={pageNumber}
        status={status}
        updateStatus={updateStatus}
        updateGender={updateGender}
        updateSpecies={updateSpecies}
        updatePageNumber={updatePageNumber}
      />
      <div className="row">
        <Card results={results} />
      </div>
      <Pagination
        info={info}
        pageNumber={pageNumber}
        updatePageNumber={updatePageNumber}
      />
    </div>
  );
};

export default Home;
