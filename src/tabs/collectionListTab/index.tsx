import React from "react";
import ReactXnft, { Tab, Text } from "react-xnft";
import { Route } from "../../pages/route";
import { CollectionList } from "../../pages/collectionList";
import { Pools } from "../../pages/pools";
import { THEME } from "../../utils/theme";

export function CollectionListTab() {
  return (
    <Tab.Navigator
      options={({ route }) => {
        return {
          tabBarIcon: ({ focused }) => {
            switch (route.name) {
              case "collections":
                return (
                  <Text
                    style={{
                      fontSize: "16px",
                      fontWeight: 500,
                      textAlign: "center",
                      color: THEME.colors.textSecondary,
                    }}
                  >
                    Collections
                  </Text>
                );
              case "pools":
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
        name="collections"
        disableLabel={true}
        component={() => <CollectionList />}
      />
      <Tab.Screen
        name="pools"
        disableLabel={true}
        component={() => <Pools />}
      />
    </Tab.Navigator>
  );
}
