import { useState, type ChangeEvent } from "react";

export const SearchPet = ({
  onSearch,
}: {
  onSearch: (value: string) => void;
}) => {
  const [searchValue, setSearchValue] = useState("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchValue(value);
    onSearch(value);
  };

  return (
    <div className="search-pet">
      <input
        type="text"
        value={searchValue}
        onChange={handleChange}
        className="search-pet-input"
        placeholder="search ... your favourite pet"
      />
    </div>
  );
};
