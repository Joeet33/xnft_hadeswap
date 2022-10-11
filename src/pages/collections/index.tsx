import React, { useState } from "react";
import {
  Button,
  List,
  ListItem,
  Table,
  Text,
  TextField,
  View,
} from "react-xnft";
import { CollectionTable } from "../../components/collectionTable";
import { SearchBar } from "../../components/searchBar";

export const Collections = () => {

  const [query, setQuery] = useState<string>("");

  return (
    <View>
      <Text>Collections</Text>
      <Button>+ create pool</Button>
      <SearchBar setQuery={setQuery}/>
      <View>
        <CollectionTable query={query}/>
      </View>
    </View>
  );
};
