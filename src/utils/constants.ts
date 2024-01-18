import { ICurrency } from "@/types/currency";
import { IFundrisingGoal } from "@/types/fundrisingGoal";

export const currencies: ICurrency[] = [
  {
    value: "pln",
    label: "PLN",
    minValue: 2,
  },
  {
    value: "usd",
    label: "USD",
    minValue: 1,
  },
  {
    value: "czk",
    label: "CZK",
    minValue: 15,
  },
  {
    value: "eur",
    label: "EUR",
    minValue: 1,
  },
];
export const fundrisingData: IFundrisingGoal[] = [
  {
    id: "1",
    title: "Buying new equipment for bottle recycling",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    goalAmount: 300,
    questions: [
      {
        question:
          "Why is it important to invest in new equipment for bottle recycling?",
        answer:
          "Investing in new equipment for bottle recycling is crucial for enhancing efficiency and increasing recycling capacity. Modern equipment allows for faster processing, improved sorting, and a higher rate of materials recovery, contributing to a more sustainable and environmentally friendly recycling process.",
      },
      {
        question:
          "How will the funds raised specifically be used to improve bottle recycling efforts?",
        answer:
          "The funds raised will be dedicated to acquiring state-of-the-art recycling equipment. This includes advanced sorting machines, shredders, and compactors designed to handle a variety of bottle materials. Upgrading our equipment ensures a more streamlined and effective recycling process, ultimately leading to greater environmental benefits.",
      },
      {
        question:
          "What impact will the community see from the purchase of new recycling equipment?",
        answer:
          "The community can expect several positive impacts from the purchase of new recycling equipment. Firstly, there will be an increase in recycling capacity, allowing us to process a larger volume of bottles. This, in turn, promotes a cleaner environment by reducing plastic waste. Additionally, the improved efficiency will lead to cost savings, making the recycling program more sustainable in the long run.",
      },
    ],
  },
  {
    id: "2",
    title: "Lorem ipsum",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    goalAmount: 300,
    questions: [
      {
        question: "Question 1",
        answer: "Hello",
      },
      {
        question: "Question 2",
        answer: "Hello",
      },
      {
        question: "Question 3",
        answer: "Hello",
      },
    ],
  },
  {
    id: "3",
    title: "Lorem ipsum",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    goalAmount: 300,
    questions: [
      {
        question: "Question 1",
        answer: "Hello",
      },
      {
        question: "Question 2",
        answer: "Hello",
      },
      {
        question: "Question 3",
        answer: "Hello",
      },
    ],
  },
  {
    id: "4",
    title: "Lorem ipsum",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    goalAmount: 300,
    questions: [
      {
        question: "Question 1",
        answer: "Hello",
      },
      {
        question: "Question 2",
        answer: "Hello",
      },
      {
        question: "Question 3",
        answer: "Hello",
      },
    ],
  },
];
