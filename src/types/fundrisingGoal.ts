import { IDonatedUser } from "./donatedUser";

export interface IFundrisingGoal {
  id: string;
  title: string;
  description: string;
  goalAmount: number;
  donatedUsers: IDonatedUser[];
}
