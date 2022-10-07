import React from "react";
import { Button, Text, useNavigation, View } from "react-xnft";

export const Trade = () => {
  const nav = useNavigation();

  const onClickHandler = () => {
    nav.push("navigation");
  };

  return (
    <View style={{display:"flex", flexDirection:"column" ,position:"relative", top:"50%", textAlign:"center"}}>
      <View style={{dislay:"flex", flexDirection:"row"}}>
        <Text>24 hour volume</Text>
        <Text>all time volume</Text>
      </View>
      <Text>total value locked</Text>
      <Text>The best NFT marketplace on Solana for traders</Text>
      <Button style={{margin:"auto"}} onClick={onClickHandler}>Trade</Button>
    </View>
  );
};
