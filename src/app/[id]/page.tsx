import { FundrisingPage, getFundrising } from "@/modules/FundrisingPage";
import { Metadata } from "next";

export const runtime = "edge";

type Props = {
  params: { id: string }
}

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  // read route params
  const id = params.id
 
  const fundrising = await getFundrising(id)
 
  return {
    title: fundrising.title,
    description: fundrising.description,
  }
}

export default function Page({ params }: { params: { id: string } }) {
  return <FundrisingPage id={params.id} />;
}
