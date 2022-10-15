import React from "react";
import { Stack } from "react-xnft";
import {  Trade } from "../../components/trade";
import { Navigation } from "../../components/navigator";
import { Collection } from "../collection";

export const Home = () => {
  return (
    <Stack.Navigator
      initialRoute={{ name: "trade" }}
      options={({ route }) => {
        switch (route.name) {
          case "trade":
            return {
              title: "HadeSwap",
            };
          case "navigation":
            return {
              title: "HadeSwap",
            };
            case "collection":
            return {
              title: "HadeSwap",
            };
          default:
            throw new Error("unknown route");
        }
      }}
      style={{}}
    >
      <Stack.Screen name={"trade"} component={() => <Trade />} />
      <Stack.Screen name={"navigation"} component={() => <Navigation />} />
      <Stack.Screen name={"collection"} component={() => <Collection />} />
    </Stack.Navigator>
    // <>
    // <Trade />
    // </>
  );
};
