import React from "react";
import s from "./styles.module.scss";
import Button from "@/UI/Button";
import Link from "next/link";

type Props = {};

const SuccessPaymentPage = (props: Props) => {
  return (
    <main className={s.page}>
      <h1>Your Payment is Successful!</h1>
      <div className={s.button__wrapper}>
        <Link href={"/"}>
          <Button>To the home page</Button>
        </Link>
      </div>
    </main>
  );
};

export default SuccessPaymentPage;
