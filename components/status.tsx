"use client";
import { BigNumber } from "ethers";
import { useEffect, useState } from "react";
import {
  useAddress,
  useContract,
  useContractRead,
  useMetamask,
} from "@thirdweb-dev/react";
import { Button } from "@nextui-org/button";
const Status = ({ ...props }) => {
  const { collection } = props;
  console.log(collection.address);
  const [claimedSupply, setClaimedSupply] = useState<number>(0);
  const [totalSupply, setTotalSupply] = useState<BigNumber>();
  const address = useAddress();
  const isConnected = !!address;
  const { contract, isLoading, error, failureCount } = useContract(
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
    const claimed = await contract.getAllClaimed();
    const total = await contract.totalSupply();
    setClaimedSupply(claimed.length);
    setTotalSupply(total);
  };

  // console.log(claimedSupply, totalSupply);
  return (
    <div>
      <p className="pt-2 text-xl text-green-500 pb-2">
        {claimedSupply} / {totalSupply?.toString()} NFT&apos;s claimed
      </p>
      <Button
        onClick={fetchNftDropData}
        isLoading={isLoading}
        isDisabled={!isConnected}
      >
        {isConnected ? "Check Claimed" : "Connect Wallet"}
      </Button>
    </div>
  );
};

export default Status;
