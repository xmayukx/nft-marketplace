import { GetServerSideProps } from "next";
import { sanityClient } from "../sanity/lib/client";
import { Collection } from "../types/typings";

export default async function Home() {
  const collections = await getData();
  console.log(collections);
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
      <section className="">
        {collections?.map((collection: Collection) => {})}
      </section>
    </>
  );
}
export const getData = async () => {
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
  return collections;
};
