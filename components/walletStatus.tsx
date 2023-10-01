"use client";
import { useAddress } from "@thirdweb-dev/react";

const WalletStatus = () => {
  const address = useAddress();
  return (
    <>
      {address && (
        <p className="text-green-500 text-base text-center">
          {"Connected with " +
            address.substring(0, 5) +
            "..." +
            address.substring(address.length - 5)}
        </p>
      )}
    </>
  );
};

export default WalletStatus;
