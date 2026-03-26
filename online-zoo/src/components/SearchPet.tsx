import { useState } from "react";

export const SearchPet = () => {
  const [searchValue, setSearchValue] = useState("");
  console.log(searchValue);
  return (
    <div className="search-pet">
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className="search-pet-input"
        placeholder="Find your favourite pet"
      />
    </div>
  );
};
