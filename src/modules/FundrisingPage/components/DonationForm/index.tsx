"use client";

import React, { FormEvent, useState } from "react";

import s from "./styles.module.scss";
import Button from "@/UI/Button";
import Input from "@/UI/Input";
import { loadStripe } from "@stripe/stripe-js";
import { Oval } from "react-loader-spinner";
import Select from "@/UI/Select";
import { useRouter } from "next/navigation";

type Props = {
  fundrisingId: string;
};

const DonationForm = ({ fundrisingId }: Props) => {
  const [currency, setCurrency] = useState("usd");
  const getMinAmount = (currency: string) => {
    return currency === "usd"
      ? 1
      : currency === "czk"
      ? 15
      : currency === "eur"
      ? 1
      : currency === "pln"
      ? 2
      : 1;
  };
  const [amount, setAmount] = useState(String(getMinAmount(currency)));
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const sendMoney = async (e: FormEvent) => {
    e.preventDefault();

    setIsLoading(true);
    try {
      const stripe = await loadStripe(
        process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
      );
      const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/checkout`, {
        method: "POST",
        body: JSON.stringify({ amount, currency, fundrisingId }),
        headers: {
          "Content-Type": "application/json",
        },
      });

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

  const handleSelect = (currency: string) => {
    setCurrency(currency);
    setAmount(String(getMinAmount(currency)));
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
          aria-label="Set Funding amount"
          placeholder="Funding amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
          min={getMinAmount(currency)}
        />
        <Select
          aria-label="select currency"
          options={options}
          defaultValue={currency}
          onChange={(e) => handleSelect(e.target.value)}
        />
      </div>

      <Button type="submit">
        {isLoading ? <Oval width={18} height={18} /> : "Donate"}
      </Button>
    </form>
  );
};

export default DonationForm;
