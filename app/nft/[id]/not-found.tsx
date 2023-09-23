import Link from "next/link";
import { redirect } from "next/navigation";

export default function NotFound() {
  return (
    <div className="">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
