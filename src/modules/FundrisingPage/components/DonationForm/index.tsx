"use client";

import React, { FormEvent, useState } from "react";

import s from "./styles.module.scss";
import Button from "@/UI/Button";
import Input from "@/UI/Input";
import { loadStripe } from "@stripe/stripe-js";
import { Oval } from "react-loader-spinner";
import Select from "@/UI/Select";
import { useRouter } from "next/navigation";

const DonationForm = () => {
  const [amount, setAmount] = useState("0");
  const [currency, setCurrency] = useState("usd");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const sendMoney = async (e: FormEvent) => {
    e.preventDefault();

    setIsLoading(true);
    try {
      const stripe = await loadStripe(
        process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
      );
      console.log(process.env.NEXT_PUBLIC_DEV_HOST);
      console.log(`${process.env.NEXT_PUBLIC_DEV_HOST}/api/checkout`);
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_DEV_HOST}/api/checkout`,
        {
          method: "POST",
          body: JSON.stringify({ amount, currency }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const { sessionId } = await res.json();
      const { error } = await stripe!.redirectToCheckout({ sessionId });
      if (error) {
        router.push("/404");
      }
    } catch (e) {
      console.log(e);
      router.push("/404");
    }
  };

  const options = [
    {
      value: "pln",
      label: "PLN",
    },
    {
      value: "usd",
      label: "USD",
    },
    {
      value: "czk",
      label: "CZK",
    },
    {
      value: "eur",
      label: "EUR",
    },
  ];

  return (
    <form className={s.form} onSubmit={sendMoney}>
      <div className={s.form__inputs}>
        <Input
          id="value"
          name="value"
          type="number"
          aria-label="Funding amount"
          placeholder="Funding amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <Select
          options={options}
          defaultValue={currency}
          onChange={(e) => setCurrency(e.target.value)}
        />
      </div>

      <Button type="submit">
        {isLoading ? <Oval width={18} height={18} /> : "Donate"}
      </Button>
    </form>
  );
};

export default DonationForm;
