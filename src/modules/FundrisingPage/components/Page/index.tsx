import React from "react";
import s from "./styles.module.scss";
import Block from "@/UI/Block";
import ProgressBar from "../ProgressBar";
import DonationItem from "../DonationItem";
import getFundrising from "../../utils/getFundrising";
import DonationForm from "../DonationForm";
import { IDonatedUser } from "@/types/donatedUser";
import QuestionAndAnswer from "../QuestionAndAnswer";
import Input from "@/UI/Input";
import Button from "@/UI/Button";
import cn from "classnames";
import DonationsList from "../DonationsList";

type Props = {
  id: string;
};

const FundrisingPage = async ({ id }: Props) => {
  const fundrising = await getFundrising(id);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/checkout/${id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next: {
        revalidate: 20,
      },
    }
  );

  const data = await res.json();
  const donatedUsers = data.sessionsList as IDonatedUser[];

  const currentAmount = donatedUsers.reduce(
    (accumulator, currValue) => accumulator + currValue.value,
    0
  );

  const sendEmail = async (formData: FormData) => {
    "use server";

    setTimeout(() => {
      console.log(formData.get("question"));
      console.log(formData.get("email"));
    }, 1000);
  };

  const generateEmailForm = () => (
    <QuestionAndAnswer key={"email form"} question={"Get in touch with us!"}>
      <form className={s.page__grid__left__form} action={sendEmail}>
        <Input
          placeholder="Ask a Question!"
          name="question"
          id="question"
          type="text"
        />
        <Input
          placeholder="Give us your email"
          name="email"
          id="email"
          type="email"
        />
        <Button type="submit">Send us a question!</Button>
      </form>
    </QuestionAndAnswer>
  );

  const questionsAndAnswers = fundrising.questions.map((item) => (
    <QuestionAndAnswer key={item.question} question={item.question}>
      {item.answer}
    </QuestionAndAnswer>
  ));

  return (
    <main className={s.page}>
      <h1>{fundrising.title}</h1>
      <div className={s.page__grid}>
        <Block className={s.page__grid__left}>
          <h3>About this Fundrising</h3>
          <p>{fundrising.description}</p>
          {[...questionsAndAnswers, generateEmailForm()]}
          <div className={s.page__grid__left__tiers}>
            <Block
              overrideClassname={cn(
                s.page__grid__left__tier_block,
                s.page__grid__left__tier_block__tier_1
              )}
            >
              By donating an amount more than 20% of overall fundrising goal you
              will get red badge of{" "}
              <div className={cn(s.badge__tier1, s.badge)}>Tier 1 Donator</div>
            </Block>
            <Block
              overrideClassname={cn(
                s.page__grid__left__tier_block,
                s.page__grid__left__tier_block__tier_2
              )}
            >
              By donating an amount more than 10% of overall fundrising goal you
              will get orange badge of{" "}
              <div className={cn(s.badge__tier2, s.badge)}>Tier 2 Donator</div>
            </Block>
            <Block
              overrideClassname={cn(
                s.page__grid__left__tier_block,
                s.page__grid__left__tier_block__tier_3
              )}
            >
              By donating an amount more than 5% of overall fundrising goal you
              will get green badge of{" "}
              <div className={cn(s.badge__tier3, s.badge)}>Tier 3 Donator</div>
            </Block>
          </div>
        </Block>

        <Block className={s.page__grid__right}>
          <ProgressBar
            goalAmount={fundrising.goalAmount}
            currentAmount={currentAmount}
          />
          <p>{donatedUsers.length} donations</p>
          <DonationForm fundrisingId={id} />
          <DonationsList
            donatedUsers={donatedUsers}
            goalAmount={fundrising.goalAmount}
          />
        </Block>
      </div>
    </main>
  );
};

export default FundrisingPage;
