import React, { cache } from "react";
import { Collection } from "@/types/typings";
import { notFound } from "next/navigation";
import Button, { Status } from "@/components/button";
import { sanityClient } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";

export default async function Page({ params }: { params: { id: string } }) {
  const collection = await getData(params?.id);
  if (!collection) {
    notFound();
  } else {
    console.log(collection);
  }
  return (
    <div>
      <div className="flex h-screen flex-col lg:grid lg:grid-cols-10">
        {/* left */}
        <div className=" col-span-4 bg-gradient-to-br from-cyan-800 to-rose-500">
          <div className=" flex flex-col items-center justify-center py-2 lg:min-h-screen">
            <div className="bg-gradient-to-br from-yellow-400 to-purple-600 p-2 rounded-xl">
              <img
                className=" w-60 lg:h-96 lg:w-72 rounded-lg object-cover"
                src={urlForImage(collection?.previewImage?.asset).url()}
                alt=""
              />
            </div>
            <h1 className="text-4xl text-gray-300 font-bold">
              {collection?.nftCollectionName}
            </h1>
            <h2 className=" text-xl text-gray-300">
              {" "}
              {collection?.description}
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
            <Button />
          </div>
          <hr className="my-2 border" />
          <Status />
          {/* content */}
          <div className="mt-10 flex flex-1 flex-col items-center space-x-6 text-center lg:space-y-0 lg:justify-center">
            <img
              className="w-80 object-cover pb-10 lg:h-40"
              src={urlForImage(collection?.mainImage?.asset).url()}
              alt="ape"
            />
            <h1 className=" text-3xl font-bold lg:text-5xl lg:font-extrabold">
              {collection?.title ? collection.title : "NOTROX Apes"}
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
const getData = async (id: string) => {
  const query = `*[_type=="collection" && slug.current == $id][0]{ 
    _id,
    title,
    address,
    description,
    nftCollectionName,
    mainImage {
      asset
    },
    previewImage {
      asset
    },
    slug {
      current,
    },
    creator-> {
      _id,
      name,
      address,
      slug {
      current
      },
    },
  }`;

  const collections: Collection = await sanityClient.fetch(query, { id: id });
  return collections;
};
