import { IFundrisingGoal } from "@/types/fundrisingGoal";
import { fundrisingData } from "@/utils/constants";

const getFundrising = (id: string): Promise<IFundrisingGoal> => {
  const data = fundrisingData.find((item) => item.id === id);

  return new Promise((res, rej) => {
    setTimeout(() => {
      if (data) res(data);
      if (!data) rej();
    }, 2000);
  });
};

export default getFundrising;
