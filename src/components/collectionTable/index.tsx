import React from "react";
import { List, ListItem, Text } from "react-xnft";

export const CollectionTable = () => {
  return (
    <>
      <List
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "auto",
          width: "95vw",
        }}
      >
        <ListItem
          style={{
            width: "16vw",
            height: "fit-content",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              overflowWrap: "break-word",
              padding: "3vh 2vw",
            }}
          >
            Name
          </Text>
        </ListItem>

        <ListItem
          style={{
            width: "20vw",
            height: "fit-content",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              overflowWrap: "break-word",
              padding: "3vh 2vw",
            }}
          >
            Listings
          </Text>
        </ListItem>

        <ListItem
          style={{
            width: "16vw",
            height: "fit-content",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              overflowWrap: "break-word",
              padding: "3vh 2vw",
            }}
          >
            Floor
          </Text>
        </ListItem>
        <ListItem
          style={{
            width: "16vw",
            height: "fit-content",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              overflowWrap: "break-word",
              padding: "3vh 2vw",
            }}
          >
            Offer
          </Text>
        </ListItem>
        <ListItem
          style={{
            width: "16vw",
            height: "fit-content",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              overflowWrap: "break-word",
              padding: "3vh 2vw",
            }}
          >
            TVL
          </Text>
        </ListItem>
      </List>

      {/* mapped data */}
      <List
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "auto",
          width: "95vw",
          marginTop: "1vh",
        }}
      >
        <ListItem
          style={{
            width: "16vw",
            height: "fit-content",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              overflowWrap: "break-word",
              padding: "3vh 2vw 0 2vw",
            }}
          >
            Img
          </Text>
          <Text
            style={{
              textAlign: "center",
              overflowWrap: "break-word",
              padding: "0.5vh 0 3vh 0",
            }}
          >
            Name
          </Text>
        </ListItem>

        <ListItem
          style={{
            width: "20vw",
            height: "fit-content",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              overflowWrap: "break-word",
              padding: "3vh 2vw",
              marginTop: "2vh",
            }}
          >
            Listings
          </Text>
        </ListItem>

        <ListItem
          style={{
            width: "16vw",
            height: "fit-content",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              overflowWrap: "break-word",
              padding: "3vh 2vw",
              marginTop: "2vh",
            }}
          >
            Floor
          </Text>
        </ListItem>
        <ListItem
          style={{
            width: "16vw",
            height: "fit-content",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              overflowWrap: "break-word",
              padding: "3vh 2vw",
              marginTop: "2vh",
            }}
          >
            Offer
          </Text>
        </ListItem>
        <ListItem
          style={{
            width: "16vw",
            height: "fit-content",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              overflowWrap: "break-word",
              padding: "3vh 2vw",
              marginTop: "2vh",
            }}
          >
            TVL
          </Text>
        </ListItem>
      </List>
    </>
  );
};
