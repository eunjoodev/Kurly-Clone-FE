import React from "react";
import { banner } from "../../assets/images";

const MainAd = () => {
  return (
    <section className="my-16 mb-28">
      <div className=" container mx-auto max-w-[1050px]">
        <a href="#" className="block">
          <img
            src={banner}
            alt="컬리 퍼플위크 안내 적립률up+3종 쿠폰팩, 더 풍성해진 혜택 10월24일 부터 10월28일 까지"
            className="w-full"
          />
        </a>
      </div>
    </section>
  );
};

export default MainAd;
