import { IDonatedUser } from "./donatedUser";
import { IQuestion } from "./question";

export interface IFundrisingGoal {
  id: string;
  title: string;
  description: string;
  goalAmount: number;
  questions: IQuestion[];
}
