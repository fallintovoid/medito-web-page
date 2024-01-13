import { FundrisingPage } from "@/modules/FundrisingPage";

export default function Page({ params }: { params: { id: string } }) {
  return <FundrisingPage id={params.id} />;
}
