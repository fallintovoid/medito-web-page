import { IDonatedUser } from "@/types/donatedUser";
import { NextRequest } from "next/server";
import Stripe from "stripe";
import getConvertedValue from "@/utils/getConvertedValue";
import convertUnixTime from "@/utils/convertUnixTime";

export const runtime = "edge";

const stripe = new Stripe(process.env.STRIPE_SECRET_TOKEN!);

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  try {
    const sessionsList = await stripe.checkout.sessions.list({
      status: "complete",
    });
    const preparedList: IDonatedUser[] | undefined = sessionsList.data
      .filter((item) => {
        return item.metadata?.fundrisingId && item.metadata?.fundrisingId == id;
      })
      .map((item) => {
        return {
          name: item.customer_details!.name!.split(" ")[0],
          value: Number(getConvertedValue(item.amount_total!, item.currency!)),
          date: convertUnixTime(item.created),
        };
      });

    return new Response(JSON.stringify({ sessionsList: preparedList }), {
      status: 200,
    });
  } catch (e) {
    console.log(e);
  }
}
