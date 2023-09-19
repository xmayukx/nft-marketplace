import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import Image from "next/image";
import { Collection } from "@/types/typings";
import { urlForImage } from "@/sanity/lib/image";

const Cardo = ({ collection }: { collection: Collection }) => {
  return (
    <Card className="py-4 shadow-none border-2 border-spacing-5 border-slate-800 hover:border-green-800 focus:border-green-500">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{collection.title}</p>
        <small className="text-default-500">{collection.description}</small>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={urlForImage(collection.previewImage.asset).url()}
          width={270}
          height={270}
        />
      </CardBody>
    </Card>
  );
};

export default Cardo;
