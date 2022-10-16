import React, { useEffect, useState } from "react";
import { Image, Text, useNavigation, View } from "react-xnft";
import { CollectionListType } from "../../interface/collectionListTypes";
import { PairType } from "../../interface/pairTypes";

export const CollectionItem = () => {
  const nav = useNavigation();
  const [pairs, setPairs] = useState<PairType[]>();

  const { marketPubkey }: CollectionListType = nav.activeRoute.props;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://hadeswap-api.herokuapp.com/pairs/${marketPubkey}`
      );
      const data = await response.json();
      setPairs(data);
    };
    fetchData();
  }, []);

  return (
    <>
      {pairs?.map((pair) => {
        const spotPrice = pair.currentSpotPrice / 1000000000;
        const deltaSol = pair.delta / 1000000000;
        const deltaPercent = pair.delta / 10000 + 1;
        const fee = pair.fee / 10000 + 1;

        const overallPrice = () => {
          if (pair.delta < 1000)
            return (spotPrice * deltaPercent * fee).toFixed(2);
          return ((spotPrice + deltaSol) * fee).toFixed(2);
        };
        const collectionId = pair?.sellOrders?.map((collectionId, i) => {
          return (
            <View
              style={{
                textAlign: "center",
                borderStyle: "solid",
                borderRadius: "2vw",
                padding: "2vw",
              }}
              key={i}
            >
              <Image
                style={{ width: "20vw", borderRadius: "2vw" }}
                src={collectionId.imageUrl}
              />
              <Text>{collectionId.name}</Text>

              <View style={{ display: "flex", justifyContent: "center" }}>
                <Image
                  style={{ width: "4vw" }}
                  src={"https://cryptologos.cc/logos/solana-sol-logo.png"}
                />
                <Text>{overallPrice()}</Text>
              </View>
            </View>
          );
        });

        return <View>{collectionId}</View>;
      })}
    </>
  );
};
