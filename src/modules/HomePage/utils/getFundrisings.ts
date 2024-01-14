import { IFundrisingGoal } from "@/types/fundrisingGoal";
import { fundrisingData } from "@/utils/constants";

const getFundrisings = (): Promise<IFundrisingGoal[]> => {
  return new Promise((res) => {
    setTimeout(() => res(fundrisingData), 2000);
  });
};

export default getFundrisings;
