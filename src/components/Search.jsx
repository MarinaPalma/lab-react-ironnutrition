import { Divider, Input } from 'antd';
import React, {useState} from 'react';

// Iteration 5
function Search(props) {
const {searchFilter} = props;
const [search, setSearch] =useState("")

const handleSearch = (e) => {
  setSearch(e.target.value);
  searchFilter(e.target.value);
}


  return (
    <>
      <Divider>Search</Divider>

      <label htmlFor="search">Search</label>
      <Input value={search} type="text" onChange= {handleSearch} />
    </>
  );
}

export default Search;