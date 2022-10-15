export interface PairType {
  pairPubkey: string;
  type: string;
  fundsSolOrTokenBalance: null;
  nftsCount: number;
  bondingCurve: string;
  delta: number;
  assetReceiver: string;
  pairState: string;
  currentSpotPrice: number;
  baseSpotPrice: number;
  mathCounter: number;
  fee: number;
  totalAccumulatedFees: number;
  liquidityProvisionOrders: [
    {
      liquidityProvisionOrder: string;
      lpTokenMint: string;
      orderACounter: number;
      orderBCounter: number;
      lpOrderState: string;
      accumulatedFee: number;
      liquidityFeeBump: number;
    }
  ];
  sellOrders: [
    {
      nftPairBox: string;
      mint: string;
      name: string;
      imageUrl: string;
      traits: string[][];
      vaultTokenAccount: string;
    },
    {
      nftPairBox: string;
      mint: string;
      name: string;
      imageUrl: string;
      traits: string[][];
      vaultTokenAccount: string;
    }
  ];
  buyOrdersAmount: number;
  authorityAdapterPubkey: string;
}
