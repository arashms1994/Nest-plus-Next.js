import { ServerPageProps } from "@/type/serverTypes";
import HomePage from "./HomePage";

export default async function Home({ searchParams }: ServerPageProps) {
  return <HomePage searchParams={searchParams} />;
}
