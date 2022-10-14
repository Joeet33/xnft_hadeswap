import React, { useEffect, useState } from "react";
import { Image, List, ListItem, Text, View } from "react-xnft";
import TableNames from "../../utils/tableNames..json";

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
      setMarkets(data.slice(0, 7));
    };
    fetchData();
  }, []);

  console.log("testdata", markets);

  return (
    <View>
      {TableNames?.map((listItem, i) => {
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
              return (
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
                    {[itemData]}
                  </Text>
                </ListItem>
              );
            })}
          </List>
        );
      })}

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
          return (
            <List
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "auto",
                width: "95vw",
                marginTop: "1vh",
                paddingTop:"4vh",
              }}
              key={i}
            >
              <ListItem
                style={{
                  width: "20vw",
                  height: "fit-content",
                  textAlign: "center",
                }}
              >
                <Image
                  style={{
                    width: "8vw",
                    borderRadius: "5vw",
                  }}
                  src={listItem.collectionImage}
                />

                <Text
                  style={{
                    textAlign: "center",
                    overflow: "hidden",
                    overflowWrap: "break-word",
                    height: "8vh",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    webkitLineClamp: "2",
                    webkitBoxOrient: "vertical",
                    paddingLeft: "1vw",
                    paddingBottom:"8.5vh"
                  }}
                >
                  {listItem.collectionName}
                </Text>
              </ListItem>
              <ListItem
                style={{
                  width: "20vw",
                  height: "fit-content",
                  textAlign: "center",
                  // padding: "1vh 1vh",
                }}
              >
                <Image
                  style={{
                    width: "8vw",
                  }}
                  src={"https://cryptologos.cc/logos/solana-sol-logo.png"}
                />
                <Text
                  style={{
                    textAlign: "center",
                    overflowWrap: "break-word",
                  }}
                >
                  {listItem.listingsAmount}
                </Text>
              </ListItem>
              <ListItem
                style={{
                  width: "20vw",
                  height: "fit-content",
                  textAlign: "center",
                  // padding: "1vh 1vh",
                }}
              >
                <Image
                  style={{
                    width: "8vw",
                  }}
                  src={"https://cryptologos.cc/logos/solana-sol-logo.png"}
                />
                <Text
                  style={{
                    textAlign: "center",
                    overflowWrap: "break-word",
                  }}
                >
                  {parseFloat(listItem.floorPrice).toFixed(2)}
                </Text>
              </ListItem>
              <ListItem
                style={{
                  width: "20vw",
                  height: "fit-content",
                  textAlign: "center",
                  // padding: "1vh 1vh",
                }}
              >
                <Image
                  style={{
                    width: "8vw",
                  }}
                  src={"https://cryptologos.cc/logos/solana-sol-logo.png"}
                />
                <Text
                  style={{
                    textAlign: "center",
                    overflowWrap: "break-word",
                  }}
                >
                  {parseFloat(listItem.bestoffer).toFixed(2)}
                </Text>
              </ListItem>
              <ListItem
                style={{
                  width: "20vw",
                  height: "fit-content",
                  textAlign: "center",
                  // padding: "1vh 1vh",
                }}
              >
                <Image
                  style={{
                    width: "8vw",
                  }}
                  src={"https://cryptologos.cc/logos/solana-sol-logo.png"}
                />
                <Text
                  style={{
                    textAlign: "center",
                    overflowWrap: "break-word",
                  }}
                >
                  {`${(parseFloat(listItem.offerTVL) / 1000).toFixed(2)}K`}
                </Text>
              </ListItem>
            </List>
          );
        })}
    </View>
  );
};
