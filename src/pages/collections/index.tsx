import React from "react";
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

export const Collections = () => {
  return (
    <View>
      <Text>Collections</Text>
      <Button>+ create pool</Button>
      <TextField>Search by collection name</TextField>
      <View>
        <CollectionTable />
      </View>
    </View>
  );
};
