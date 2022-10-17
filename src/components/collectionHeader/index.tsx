import React from "react";
import { Text, useNavigation, View, Image, Button } from "react-xnft";
import { CollectionListType } from "../../interface/collectionListTypes";

export const CollectionHeader = () => {
  const nav = useNavigation();

  const {
    collectionName,
    collectionImage,
    floorPrice,
    bestoffer,
    offerTVL,
  }: CollectionListType = nav.activeRoute.props;

  return (
    <View
      style={{
        textAlign: "center",
        borderBottom: "1px solid #bbb",
        borderRadius: "2vw",
        paddingBottom: "2vh",
      }}
    >
      <Image
        style={{ width: "25vw", borderRadius: "20vw" }}
        src={collectionImage}
      />
      <Text style={{ marginBottom: "2vh" }}>{collectionName}</Text>
      <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          textAlign: "center",
          padding: "5vw",
          borderStyle: "solid",
          borderRadius: "5vw",
          marginLeft: "4vw",
          marginRight: "4vw",
        }}
      >
        <View>
          <Text>Floor</Text>
          <Text>{floorPrice}</Text>
        </View>
        <View>
          <Text>Best Offer</Text>
          <Text>{bestoffer}</Text>
        </View>
        <View>
          <Text>Offer TVL</Text>
          <Text>{offerTVL}</Text>
        </View>
      </View>
      <Button style={{ marginTop: "1vh", width: "30vw" }}>Create Pool</Button>
    </View>
  );
};
