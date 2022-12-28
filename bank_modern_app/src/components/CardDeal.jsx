import React from "react";
import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
const CardDeal = () => {
  return (
    <div>
      <section className={layout.section}>
        <div className={layout.sectionInfo}>
          <h2 className={styles.heading2}>
            Find a better card deal
            <br className="sm:block hidden" /> in few easy steps.
          </h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla,
            consequuntur veritatis laborum hic praesentium sapiente. Nisi
            blanditiis sequi eum perspiciatis quas repellendus, architecto id
            minus!
          </p>
          <Button styles="mt-10" />
        </div>
        <div className={layout.sectionImg}>
          <img src={card} className="h-[100%] w-[100%]" />
        </div>
      </section>
    </div>
  );
};

export default CardDeal;
