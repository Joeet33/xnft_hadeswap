import React from "react";
import { List, ListItem } from "react-xnft";

export const CollectionTable = () => {
  return (
    <>
      <List style={{display:"flex", justifyContent: "space-between",}}>
        <ListItem
          style={{
            paddingLeft: "5vw",
            verticalAlign: "center",
          }}
        >
          id
        </ListItem>

        <ListItem
          style={{
            verticalAlign: "center",
          }}
        >
          image
        </ListItem>

        <ListItem
          style={{
            verticalAlign: "center",
          }}
        >
          name
        </ListItem>
        <ListItem
          style={{
            verticalAlign: "center",
          }}
        >
          name
        </ListItem>
        <ListItem
          style={{
            paddingRight: "5vw",
            verticalAlign: "center",
          }}
        >
          name
        </ListItem>
      </List>
    </>
  );
};
