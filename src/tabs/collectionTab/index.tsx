import React from "react";
import ReactXnft, { Tab, Text } from "react-xnft";
import { THEME } from "../../utils/theme";
import { CollectionBuy } from "../../pages/collectionBuy";
import { CollectionSell } from "../../pages/collectionSell";
import { CollectionActivity } from "../../pages/collectionActivity";
import { CollectionPools } from "../../pages/collectionPools";

export function CollectionTab() {
  return (
    <Tab.Navigator
      options={({ route }) => {
        return {
          tabBarIcon: ({ focused }) => {
            switch (route.name) {
              case "collectionBuy":
                return (
                  <Text
                    style={{
                      fontSize: "16px",
                      fontWeight: 500,
                      textAlign: "center",
                      color: THEME.colors.textSecondary,
                    }}
                  >
                    Buy
                  </Text>
                );
                case "collectionSell":
                return (
                  <Text
                    style={{
                      fontSize: "16px",
                      fontWeight: 500,
                      textAlign: "center",
                      color: THEME.colors.textSecondary,
                    }}
                  >
                    Sell
                  </Text>
                );
                case "collectionActivity":
                return (
                  <Text
                    style={{
                      fontSize: "16px",
                      fontWeight: 500,
                      textAlign: "center",
                      color: THEME.colors.textSecondary,
                    }}
                  >Activity
                    
                  </Text>
                );
              case "collectionPools":
                return (
                  <Text
                    style={{
                      fontSize: "16px",
                      fontWeight: 500,
                      textAlign: "center",
                      color: THEME.colors.textSecondary,
                    }}
                  >
                    Pools
                  </Text>
                );
              default:
                throw new Error("unknown route");
            }
          },
          tabBarActiveTintColor: THEME.colors.text,
          tabBarInactiveTintColor: THEME.colors.attributeBackground,
        };
      }}
      style={{
        height: "34px",
        background: "transparent",
        borderTop: "none",
      }}
    >
      <Tab.Screen
        name="collectionBuy"
        disableLabel={true}
        component={() => <CollectionBuy />}
      />
      <Tab.Screen
        name="collectionSell"
        disableLabel={true}
        component={() => <CollectionSell />}
      />
      <Tab.Screen
        name="collectionActivity"
        disableLabel={true}
        component={() => <CollectionActivity />}
      />
      <Tab.Screen
        name="collectionPools"
        disableLabel={true}
        component={() => <CollectionPools />}
      />
    </Tab.Navigator>
  );
}
