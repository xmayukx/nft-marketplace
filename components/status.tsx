"use client";
import { BigNumber } from "ethers";
import { useEffect, useState } from "react";
import { useAddress, useContract } from "@thirdweb-dev/react";
import { Button } from "@nextui-org/button";
const Status = ({ ...props }) => {
  const { collection } = props;
  // console.log(collection.address);
  const [claimedSupply, setClaimedSupply] = useState<number>(0);
  const [totalSupply, setTotalSupply] = useState<BigNumber>();
  const address = useAddress();

  // if (!address) {
  //   throw new Error("Wallet not connected");
  // }
  // if (!contract) {
  //   throw new Error("Contract not loaded");
  // }
  // if(address){
  //   const { contract, isLoading, error } = useContract(
  //     collection.address,
  //     "nft-drop",
  //   );
  // }
  const { contract, isLoading, error } = useContract(
    collection.address,
    "nft-drop",
  );
  const fetchNftDropData = async () => {
    if (!address) {
      throw new Error("Wallet not connected");
    }
    if (!contract) {
      throw new Error("Contract not loaded");
    }
    if (error) {
      throw new Error("Error loading contract");
    }
    console.log(contract);
    await contract
      .getAllClaimed()
      .then((res) => console.log(res))
      .catch((err) => console.log(err.message));
    // console.log(claimed);
    // const total = await contract.totalSupply();
    // setClaimedSupply(claimed.length);
    // setTotalSupply(total);
  };

  // console.log(claimedSupply, totalSupply);
  return (
    <div className="flex space-x-5 p-5">
      <p className="pt-2 text-xl text-green-500 pb-2">
        {claimedSupply} / {totalSupply?.toString()} NFT&apos;s claimed
      </p>
      <Button
        onClick={() => {
          fetchNftDropData();
        }}
        isLoading={isLoading}
        color="secondary"
      >
        Fetch
      </Button>
    </div>
  );
};

export default Status;
