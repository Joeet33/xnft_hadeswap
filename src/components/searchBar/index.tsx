import React from "react";
import { TextField } from "react-xnft";

export const SearchBar = (props) => {
  const handleChange = (e): any => {
    props.setQuery(e.data.value);
  };

  return (
    <TextField
      style={{
        width: "45vw",
      }}
      placeholder="Enter Collection"
      onChange={handleChange}
    />
  );
};
