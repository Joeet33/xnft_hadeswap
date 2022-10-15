import React, { useEffect, useState } from "react";
import { Text, useNavigation, View } from "react-xnft";
import { CollectionListTab } from "../../tabs/collectionListTab";
import { CollectionListType } from "../../interface/collectionListTypes";
import { PairType } from "../../interface/pairTypes";
import { CollectionHeader } from "../../components/collectionHeader";

export const CollectionBuy = () => {
  const nav = useNavigation();
  const [markets, setMarkets] = useState<CollectionListType>();
  const [pairs, setPairs] = useState<PairType[]>();

  const { marketPubkey }: CollectionListType =
    nav.activeRoute.props;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://hadeswap-api.herokuapp.com/markets/${marketPubkey}`
      );
      const data = await response.json();
      setMarkets(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://hadeswap-api.herokuapp.com/pairs/${marketPubkey}`
      );
      const data = await response.json();
      setPairs(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <CollectionHeader />
    </>
  );
};
