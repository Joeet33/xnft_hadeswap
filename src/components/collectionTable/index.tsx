import React, { useEffect, useState } from "react";
import { Image, List, ListItem, Text } from "react-xnft";
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
      setMarkets(data);
    };
    fetchData();
  }, []);

  console.log("testdata", markets);

  return (
    <>
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
              <ListItem
                style={{
                  width: "20vw",
                  height: "fit-content",
                  textAlign: "center",
                  paddingBottom: "1vh",
                }}
              >
                <Image
                  style={{
                    width: "12vw",
                    padding: "3.5vh 2vw 0.5vh 2vw",
                  }}
                  src={listItem.collectionImage}
                />
                <Text
                  style={{
                    textAlign: "center",
                    overflowY: "hidden",
                    overflowWrap: "break-word",
                    height: "8vh",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    webkitLineClamp: "2",
                    webkitBoxOrient: "vertical",
                    paddingLeft: "1vw",
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
                }}
              >
                <Image
                  style={{
                    width: "12vw",
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
                  {listItem.listingsAmount}
                </Text>
              </ListItem>
              <ListItem
                style={{
                  width: "20vw",
                  height: "fit-content",
                  textAlign: "center",
                }}
              >
                <Image
                  style={{
                    width: "12vw",
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
                  {parseFloat(listItem.floorPrice).toFixed(2)}
                </Text>
              </ListItem>
              <ListItem
                style={{
                  width: "20vw",
                  height: "fit-content",
                  textAlign: "center",
                }}
              >
                <Image
                  style={{
                    width: "12vw",
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
                  {parseFloat(listItem.bestoffer).toFixed(2)}
                </Text>
              </ListItem>
              <ListItem
                style={{
                  width: "20vw",
                  height: "fit-content",
                  textAlign: "center",
                }}
              >
                <Image
                  style={{
                    width: "12vw",
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
                  {`${(parseFloat(listItem.offerTVL) / 1000).toFixed(2)}K`}
                </Text>
              </ListItem>
            </List>
          );
        })}
    </>
  );
};
