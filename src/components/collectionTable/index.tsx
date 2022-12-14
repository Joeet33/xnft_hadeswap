import React, { useEffect, useState } from "react";
import { Image, List, ListItem, Text, useNavigation, View } from "react-xnft";
import { CollectionListType } from "../../interface/collectionListTypes";
import TableNames from "../../utils/tableNames..json";

export const CollectionTable = (props) => {
  const [markets, setMarkets] = useState<CollectionListType[]>();

  const nav = useNavigation();

  const onClickHandler = (collection: CollectionListType) => {
    nav.push("collectionTab", { ...collection });
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://hadeswap-api.herokuapp.com/markets"
      );
      const data = await response.json();
      setMarkets(data.slice(0, 10));
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
              marginTop: "3vh",
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
                margin: "auto",
                width: "95vw",
                marginTop: "1vh",
              }}
              key={i}
            >
              <View
                style={{
                  display: "flex",
                  margin: "auto",
                  width: "95vw",
                  marginTop: "1vh",
                  paddingTop: "4vh",
                }}
                onClick={() => onClickHandler(listItem)}
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
                      paddingBottom: "8.5vh",
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
              </View>
            </List>
          );
        })}
    </View>
  );
};
