"use client";
import React, { useEffect } from "react";
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";
import { ConnectWallet } from "@thirdweb-dev/react";
const Button = ({ ...props }) => {
  const connectWithMetamask = useMetamask();
  const address = useAddress();
  const disconnect = useDisconnect();

  return (
    <>
      <ConnectWallet theme={"dark"} />
      {/* <button
      onClick={() => (address ? disconnect() : connectWithMetamask())}
      className="rounded-full bg-green-200 px-4 py-2 text-xs font-bold text-green-700 lg:px-5 lg:py-3"
      {...props}
    >
      {address ? "Sign Out" : "Connect Wallet"}
    </button> */}
    </>
  );
};

export default Button;
