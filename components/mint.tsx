"use client";
import { Button } from "@nextui-org/button";
import { useAddress, useContract } from "@thirdweb-dev/react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
export default function Mint({ ...props }) {
  const { collection } = props;
  const [Loading, setIsLoading] = useState<boolean>(false);
  const [priceInEth, setPriceInEth] = useState<string>();
  const address = useAddress();
  const { contract, isLoading, error } = useContract(
    collection.address,
    "nft-drop",
  );
  useEffect(() => {
    setIsLoading(true);
    contract?.claimConditions
      .getAll()
      .then((res) => {
        console.log(res);
        const price = res?.[0].currencyMetadata.displayValue;
        setPriceInEth(price);
      })
      .catch((err) => console.log(err));
    setIsLoading(false);
  }, [contract]);
  const mintNft = async () => {
    let quantity = 1;
    if (!address) {
      throw new Error("Wallet not connected");
    }
    if (!contract) {
      throw new Error("Contract not loaded");
    }
    if (error) {
      throw new Error("Error loading contract");
    }
    setIsLoading(true);
    contract
      ?.claimTo(address, quantity)
      .then(async (tx) => {
        const { id, receipt, data } = tx[0];
        const claimedNFT = await data();
        console.log(id, receipt, claimedNFT);
        toast.success("NFT Minted");
      })
      .catch((err) => {
        toast.error("Error minting NFT");
        console.log(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  //   bg-red-200 rounded-lg text-red-600 hover:bg-red-100 text-base
  return (
    <Button className="font-bold h-16 " isLoading={Loading} onClick={mintNft}>
      {" "}
      {Loading ? (
        <span className="animate-pulse">Minting...</span>
      ) : (
        <span>Mint NFT ({priceInEth} ETH)</span>
      )}
    </Button>
  );
}
