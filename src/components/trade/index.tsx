import React from "react";
import { Button, Text, useNavigation, View } from "react-xnft";

export const Trade = () => {
  const nav = useNavigation();

  const onClickHandler = () => {
    nav.push("navigation");
  };

  return (
    <View style={{ position: "relative", textAlign: "center", top: "25%" }}>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          paddingBottom: "2vh",
        }}
      >
        <Text
          style={{
            padding: "5vw",
            marginRight: "2vw",
            borderRadius: "2vw",
            backgroundColor: "darkblue",
          }}
        >
          24h volume
        </Text>
        <Text
          style={{
            padding: "5vw",
            marginLeft: "2vw",
            borderRadius: "2vw",
            backgroundColor: "darkblue",
          }}
        >
          All time volume
        </Text>
      </View>
      <Text
        style={{
          padding: "5vw",
          width: "50%",
          margin: "auto",
          borderRadius: "2vw",
          backgroundColor: "darkblue",
        }}
      >
        Total value locked
      </Text>
      <Text style={{ padding: "3vh 4vw 4vh 4vw" }}>
        The best NFT marketplace on Solana for traders
      </Text>
      <Button onClick={onClickHandler}>Trade</Button>
    </View>
  );
};
