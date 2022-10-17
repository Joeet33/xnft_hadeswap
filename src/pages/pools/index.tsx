import React from "react";
import { Button, Text, View } from "react-xnft";

export const Pools = () => {
  return (
    <View
      style={{
        textAlign: "center",
        marginTop: "50%",
      }}
    >
      <Button>Create Pool</Button>
      <Text style={{ paddingTop: "5vh" }}>No pools Found</Text>
    </View>
  );
};
