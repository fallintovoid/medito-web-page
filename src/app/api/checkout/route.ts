// Next.js Edge API Route Handlers: https://nextjs.org/docs/app/building-your-application/routing/router-handlers#edge-and-nodejs-runtimes

import { IDonatedUser } from "@/types/donatedUser";
import { IFundrisingGoal } from "@/types/fundrisingGoal";
import convertUnixTime from "@/utils/convertUnixTime";
import getConvertedValue from "@/utils/getConvertedValue";
import { type NextRequest } from "next/server";
import Stripe from "stripe";

export const runtime = "edge";

const stripe = new Stripe(process.env.STRIPE_SECRET_TOKEN!);
const host = process.env.NEXT_PUBLIC_HOST;

interface IPostRequestBody {
  amount: number;
  currency: string;
  fundrisingId: string;
}

export async function POST(request: NextRequest) {
  const body = (await request.json()) as IPostRequestBody;
  const date = new Date().toISOString();
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: body.currency,
            product_data: {
              name: "INV-" + date,
            },
            unit_amount: body?.amount * 100 || 100,
          },
          quantity: 1,
        },
      ],
      metadata: {
        fundrisingId: body.fundrisingId,
      },
      mode: "payment",
      cancel_url: `${host}`,
      success_url: `${host}/success`,
    });
    return new Response(JSON.stringify({ sessionId: session.id }), {
      status: 200,
    });
  } catch (e) {
    return new Response(
      JSON.stringify({ error: "Error occured in try catch statement" }),
      {
        status: 500,
      }
    );
  }
}

export async function GET() {
  try {
    const sessionsList = await stripe.checkout.sessions.list({
      status: "complete",
    });
    const preparedList: IDonatedUser[] | undefined = sessionsList.data
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
    throw new Error("Error occured by getting sesions list: " + e);
  }
}
