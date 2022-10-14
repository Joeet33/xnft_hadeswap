import React from "react";
import ReactXnft, { Tab, Text } from "react-xnft";
import { Home } from "../../pages/home";
import { Collections } from "../../pages/collections";
import { Pools } from "../../pages/pools";
import { THEME } from "../../utils/theme";

export function Navigation() {
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
        component={() => <Collections />}
      />
      <Tab.Screen
        name="pools"
        disableLabel={true}
        component={() => <Pools />}
      />
    </Tab.Navigator>
  );
}
