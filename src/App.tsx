import React from "react";
import ReactXnft from "react-xnft";
import { Route } from "./pages/route";

//
// On connection to the host environment, warm the cache.
//
ReactXnft.events.on("connect", () => {
  // no-op
});
export function App() {
  return <Route />;
}
