import React from "react";
import { Image, List, ListItem, Text } from "react-xnft";
import MockData from "../../utils/mockData.json";

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

      {MockData.map((listItem) => {
        const tvl = parseInt(listItem.tvl) / 1000;
        return (
          <List
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "auto",
              width: "95vw",
              marginTop: "1vh",
            }}
            key={listItem.id}
          >
            <ListItem
              style={{
                width: "16vw",
                height: "fit-content",
                textAlign: "center",
              }}
            >
              <Image
                style={{
                  width: "8vw",
                  padding: "3.5vh 2vw 0.5vh 2vw",
                }}
                src={"https://cryptologos.cc/logos/solana-sol-logo.png"}
              />
              <Text
                style={{
                  textAlign: "center",
                  overflowWrap: "break-word",
                  paddingBottom: "3vh",
                }}
              >
                {listItem.name}
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
                {listItem.listings}
              </Text>
            </ListItem>

            <ListItem
              style={{
                width: "16vw",
                height: "fit-content",
                textAlign: "center",
              }}
            >
              <Image
                style={{
                  width: "8vw",
                  padding: "3.5vh 2vw 0.5vh 2vw",
                }}
                src={"https://cryptologos.cc/logos/solana-sol-logo.png"}
              />
              <Text
                style={{
                  textAlign: "center",
                  overflowWrap: "break-word",
                  paddingBottom: "3vh",
                }}
              >
                {parseInt(listItem.floor).toFixed(2)}
              </Text>
            </ListItem>
            <ListItem
              style={{
                width: "16vw",
                height: "fit-content",
                textAlign: "center",
              }}
            >
              <Image
                style={{
                  width: "8vw",
                  padding: "3.5vh 2vw 0.5vh 2vw",
                }}
                src={"https://cryptologos.cc/logos/solana-sol-logo.png"}
              />
              <Text
                style={{
                  textAlign: "center",
                  overflowWrap: "break-word",
                  paddingBottom: "3vh",
                }}
              >
                {parseInt(listItem.offer).toFixed(2)}
              </Text>
            </ListItem>
            <ListItem
              style={{
                width: "16vw",
                height: "fit-content",
                textAlign: "center",
              }}
            >
              <Image
                style={{
                  width: "8vw",
                  padding: "3.5vh 2vw 0.5vh 2vw",
                }}
                src={"https://cryptologos.cc/logos/solana-sol-logo.png"}
              />
              <Text
                style={{
                  textAlign: "center",
                  overflowWrap: "break-word",
                  paddingBottom: "3vh",
                }}
              >
                {tvl.toFixed(2)}K
              </Text>
            </ListItem>
          </List>
        );
      })}
    </>
  );
};
