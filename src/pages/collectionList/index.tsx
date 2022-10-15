import React, { useState } from "react";
import {
  Button,
  List,
  ListItem,
  Stack,
  Table,
  Text,
  TextField,
  View,
} from "react-xnft";
import { CollectionTable } from "../../components/collectionTable";
import { SearchBar } from "../../components/searchBar";
import { Collection } from "../collection";

export const CollectionList = () => {
  const [query, setQuery] = useState<string>("");

  return (
    <View>
      <View
        style={{
          display: "flex",
          paddingLeft: "2.5vw",
          paddingTop: "2vh",
          paddingRight: "2.5vw",
        }}
      >
        <SearchBar setQuery={setQuery} />
        <Button style={{ marginLeft: "auto" }}>Create Pool</Button>
      </View> 
      <View>
        <CollectionTable query={query} />
      </View>
    </View>
  );
};
