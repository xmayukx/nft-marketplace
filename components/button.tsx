"use client";
import React, { cache } from "react";
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";

const Button = ({ ...props }) => {
  const connectWithMetamask = useMetamask();
  const address = useAddress();
  const disconnect = useDisconnect();
  return (
    <button
      onClick={() => (address ? disconnect() : connectWithMetamask())}
      className="rounded-full bg-green-200 px-4 py-2 text-xs font-bold text-green-700 lg:px-5 lg:py-3"
      {...props}
    >
      {address ? "Sign Out" : "Connect Wallet"}
    </button>
  );
};

// export { useAddress };
export const Status = () => {
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
export default Button;
