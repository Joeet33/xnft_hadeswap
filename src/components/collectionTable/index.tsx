import React, { useEffect, useState } from "react";
import { Image, List, ListItem, Text } from "react-xnft";
import MockData from "../../utils/mockData.json";

interface Props {
  marketPubkey: string;
  collectionName: string;
  collectionImage: string;
  listingsAmount: number;
  floorPrice: string;
  bestoffer: string;
  offerTVL: string;
  nftValidationAdapter: string;
}

export const CollectionTable = (props) => {
  const [markets, setMarkets] = useState<Props[]>();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://hadeswap-api.herokuapp.com/markets"
      );
      const data = await response.json();
      setMarkets(data);
    };
    fetchData();
  }, []);

  console.log("testdata", markets);

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

      {markets
        ?.filter((listItem) => {
          if (props.query === "") {
            return listItem;
          } else if (
            listItem.collectionName
              .toLowerCase()
              .includes(props.query.toLowerCase())
          ) {
            return listItem;
          }
        })
        .map((listItem, i) => {
          if (i > 5) return;
          return (
            <List
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "auto",
                width: "95vw",
                marginTop: "1vh",
              }}
              key={i}
            >
              {Object.keys(listItem).map((itemData) => {
                const listText =
                  itemData === "collectionName"
                    ? listItem[itemData]
                    : parseFloat(listItem[itemData]).toFixed(2);
                return (
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
                      {itemData === "offertvl"
                        ? `${(parseInt(listItem[itemData]) / 1000).toFixed(2)}K`
                        : listText}
                    </Text>
                  </ListItem>
                );
              })}
            </List>
          );
        })}
    </>
  );
};
