import { FundrisingPage } from "@/modules/FundrisingPage";

export const runtime = "edge";

export default function Page({ params }: { params: { id: string } }) {
  return <FundrisingPage id={params.id} />;
}
