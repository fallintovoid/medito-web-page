import React from "react";

import s from "./styles.module.scss";
import Button from "@/UI/Button";
import Input from "@/UI/Input";

const DonationForm = () => {
  const sendMoney = async (formData: FormData) => {
    "use server";
    setTimeout(() => {
      console.log(formData.get("value"));
    }, 1000);
  };

  return (
    <form className={s.form} action={sendMoney}>
      <Input
        id="value"
        name="value"
        type="text"
        aria-label="How much you want to donate"
        placeholder="How much you want to donate?"
      />
      <Button type="submit">Donate</Button>
    </form>
  );
};

export default DonationForm;
