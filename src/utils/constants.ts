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
