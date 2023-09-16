import { GetServerSideProps } from "next";
import { sanityClient } from "../sanity/lib/client";
import { Collection } from "../types/typings";

interface Props {
  collections: Collection[];
}
export default function Home({ collections }: Props) {
  return (
    <>
      <header>
        <h1 className="cursor-pointer w-52 text-xl font-extralight sm:w-80">
          {" "}
          The{" "}
          <span className=" font-extrabold underline decoration-green-600">
            NOTROX
          </span>{" "}
          NFT Market Place
        </h1>
      </header>
      <section className=""></section>
    </>
  );
}

export const getserversideprops: GetServerSideProps = async () => {
  const query = `*[_type=="collection"]{
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
  const collections = await sanityClient.fetch(query);
  console.log(collections);
  return {
    props: {
      collections,
    },
  };
};
