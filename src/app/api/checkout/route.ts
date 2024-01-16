// Next.js Edge API Route Handlers: https://nextjs.org/docs/app/building-your-application/routing/router-handlers#edge-and-nodejs-runtimes

import { type NextRequest } from "next/server";
import Stripe from "stripe";

export const runtime = "edge";

const stripe = new Stripe(process.env.STRIPE_SECRET_TOKEN!);
const host = process.env.NEXT_PUBLIC_DEV_HOST;

interface IRequestBody {
  amount: number;
  currency: string;
}

export async function POST(request: NextRequest) {
  const body = (await request.json()) as IRequestBody;
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
