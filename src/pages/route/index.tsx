import React from "react";
import { Stack } from "react-xnft";
import { Trade } from "../../components/trade";
import { CollectionListTab } from "../../tabs/collectionListTab";
import { CollectionTab } from "../../tabs/collectionTab";

export const Route = () => {
  return (
    <Stack.Navigator
      initialRoute={{ name: "trade" }}
      options={({ route }) => {
        switch (route.name) {
          case "trade":
            return {
              title: "HadeSwap",
            };
          case "collectionListTab":
            return {
              title: "HadeSwap",
            };
          case "collectionTab":
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
      <Stack.Screen
        name={"collectionListTab"}
        component={() => <CollectionListTab />}
      />
      <Stack.Screen
        name={"collectionTab"}
        component={() => <CollectionTab />}
      />
    </Stack.Navigator>
  );
};
