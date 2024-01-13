import React from "react";
import s from "./styles.module.scss";
import Block from "@/UI/Block";
import ProgressBar from "../ProgressBar";

type Props = {
  id: string;
};

const FundrisingPage = ({ id }: Props) => {
  return (
    <main className={s.page}>
      <h1>Here will be the title of fundrising</h1>
      <div className={s.page__grid}>
        <Block backgroundColor="#E8B5B5">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
            quaerat rem asperiores recusandae nobis odio totam non nemo amet
            placeat, sequi, blanditiis porro, et inventore voluptas corporis
            animi numquam assumenda? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ipsum voluptate modi, cum neque temporibus minima!
            Est minus ducimus error ipsum, incidunt deserunt eveniet aliquid
            reprehenderit ipsam voluptas nam consequuntur nostrum? Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Rerum voluptas nihil
            eos sequi itaque quidem, perferendis sapiente atque suscipit, magnam
            amet, eius necessitatibus quia veritatis asperiores ab ex voluptate
            architecto? Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Ut natus facilis perferendis dicta architecto quae, nam
            molestias eum numquam corporis qui ratione aspernatur quo cupiditate
            voluptatum recusandae porro error officia.
          </p>
        </Block>
        <Block backgroundColor="#FEFEFE" className={s.page__grid__right}>
          <ProgressBar />
        </Block>
      </div>
    </main>
  );
};

export default FundrisingPage;