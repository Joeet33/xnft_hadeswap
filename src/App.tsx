import React from "react";
import ReactXnft, { Button, Tab, Text, useNavigation } from "react-xnft";
import { Home } from "./pages/home";

//
// On connection to the host environment, warm the cache.
//
ReactXnft.events.on("connect", () => {
  // no-op
});

export function App() {
  return <Home />;
}
