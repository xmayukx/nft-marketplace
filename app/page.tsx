import { sanityClient } from "../sanity/lib/client";
import { Collection } from "../types/typings";
import Cardo from "../components/card";
export default async function Home() {
  const collections = await getData();
  // console.log(collections);
  return (
    <>
      <header className="p-8 lg:p-10">
        <h1 className="text-center lg:text-left cursor-pointer w-72 text-xl lg:text-2xl font-extralight lg:w-96">
          {" "}
          The{" "}
          <span className=" font-extrabold underline decoration-green-600">
            NOTROX
          </span>{" "}
          NFT Market Place
        </h1>
      </header>
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 m-10 bg-emerald-950 p-10 rounded-xl">
        {collections?.map((collection: Collection, key: number) => {
          return <Cardo key={key} collection={collection} />;
        })}
      </section>
    </>
  );
}
const getData = async () => {
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
  const collections = await sanityClient.fetch(query).catch((err) => {
    console.log(err.message);
  });
  // console.log(collections);
  return collections;
};
