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
            ABC
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
              padding: "3vh 2vw 0 2vw",
            }}
          >
            10K
          </Text>
          <Text
            style={{
              textAlign: "center",
              overflowWrap: "break-word",
              padding: "0.5vh 0 3vh 0",
            }}
          >
            377
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
              padding: "3vh 2vw 0 2vw",
            }}
          >
            Sol
          </Text>
          <Text
            style={{
              textAlign: "center",
              overflowWrap: "break-word",
              padding: "0.5vh 0 3vh 0",
            }}
          >
            {(29.615).toFixed(2)}
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
              padding: "3vh 2vw 0 2vw",
            }}
          >
            Sol
          </Text>
          <Text
            style={{
              textAlign: "center",
              overflowWrap: "break-word",
              padding: "0.5vh 0 3vh 0",
            }}
          >
            {(27.965).toFixed(2)}
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
              padding: "3vh 2vw 0 2vw",
            }}
          >
            Sol
          </Text>
          <Text
            style={{
              textAlign: "center",
              overflowWrap: "break-word",
              padding: "0.5vh 0 3vh 0",
            }}
          >
            {(2649.694 / 1000).toFixed(2)}K
          </Text>
        </ListItem>
      </List>
    </>
  );
};
