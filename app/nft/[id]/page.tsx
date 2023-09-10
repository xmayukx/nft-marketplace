"use client";
import React from "react";
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";

type Params = {
  id: string;
};

export default function Page({ props }: { props: Params }) {
  const connectWithMetamask = useMetamask();
  const address = useAddress();
  const disconnect = useDisconnect();

  // console.log(address);
  return (
    <div>
      <div className="flex h-screen flex-col lg:grid lg:grid-cols-10">
        {/* left */}
        <div className=" col-span-4 bg-gradient-to-br from-cyan-800 to-rose-500">
          <div className=" flex flex-col items-center justify-center py-2 lg:min-h-screen">
            <div className="bg-gradient-to-br from-yellow-400 to-purple-600 p-2 rounded-xl">
              <img
                className=" w-60 lg:h-96 lg:w-72 rounded-lg object-cover"
                src="https://blockworks-co.imgix.net/wp-content/uploads/2022/01/Bored-Ape-Yacht-Club_Ape_wide.jpg"
                alt=""
              />
            </div>
            <h1 className=" text-4xl text-gray-300 font-bold">NOTROX Apes</h1>
            <h2 className=" text-xl text-gray-300">
              {" "}
              A collection of NOTROX Apes who eat bitcoin cookies
            </h2>
          </div>
        </div>
        {/* right */}
        <div className="flex flex-col p-10 lg:col-span-6">
          {/* header */}
          <div className="flex items-center justify-between p-5">
            <h1 className="cursor-pointer w-52 text-xl font-extralight sm:w-80">
              {" "}
              The{" "}
              <span className=" font-extrabold underline decoration-green-600">
                NOTROX
              </span>{" "}
              NFT Market Place
            </h1>
            <button
              onClick={() => (address ? disconnect() : connectWithMetamask())}
              className="rounded-full bg-green-200 px-4 py-2 text-xs font-bold text-green-700 lg:px-5 lg:py-3"
            >
              {address ? "Sign Out" : "Connect Wallet"}
            </button>
          </div>
          <hr className="my-2 border" />
          {address && (
            <p className="text-green-500 text-base text-center">
              {"Connected with " +
                address.substring(0, 5) +
                "..." +
                address.substring(address.length - 5)}
            </p>
          )}
          {/* content */}
          <div className="mt-10 flex flex-1 flex-col items-center space-x-6 text-center lg:space-y-0 lg:justify-center">
            <img
              className="w-80 object-cover pb-10 lg:h-40"
              src="https://www.artnews.com/wp-content/uploads/2021/09/Apes-Collage.jpg"
              alt="ape"
            />
            <h1 className=" text-3xl font-bold lg:text-5xl lg:font-extrabold">
              APE CLUB
            </h1>
            <p className="pt-2 text-xl text-green-500 pb-2">
              13 / 21 NFT&apos;s claimed
            </p>
          </div>
          {/* Mint */}
          <button className=" font-bold h-16 bg-red-600 rounded-full text-white">
            {" "}
            Mint NFT (0.01 ETH){" "}
          </button>
        </div>
      </div>
    </div>
  );
}
