import React from "react";
import { TextField, View } from "react-xnft";

export const SearchBar = (props) => {
  const handleChange = (e): any => {
    props.setQuery(e.data.value);
  };

  return (
    <View>
      <TextField placeholder="Enter Post Title" onChange={handleChange} />
    </View>
  );
};
