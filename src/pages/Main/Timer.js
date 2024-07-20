import React, { useState, useEffect } from "react";
import clock from "../../assets/images/clock.png";

//MainSpecial 컴포넌트 안에 들어갈 로직입니다.
//특가 시간 카운트 다운, 24시간부터 초단위로 줄어듭니다.

const timeInDay = 2;
const currentTime = Date.parse(new Date());
const deadline1 = new Date(currentTime + timeInDay * 12 * 60 * 60 * 1000);

const getTimeRemaining = (endtime) => {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);

  return {
    total,
    hours,
    minutes,
    seconds,
  };
};

function Timer({ deadline }) {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(deadline));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining(deadline));
    }, 1000);

    return () => clearInterval(timer);
  }, [deadline]);

  return (
    <div className="flex items-center text-2xl md:text-4xl mb-8">
      <div className="mr-2">
        <img
          style={{ width: "28px", height: "28px" }}
          src={clock}
          alt="시계 아이콘"
        />
      </div>
      <div className="flex">
        <span className="font-bold text-gray-800 text-[32px] md:text-[32px]">
          {String(timeLeft.hours).padStart(2, "0")}
        </span>
        <span className="mx-0.5">:</span>
        <span className="font-bold text-gray-800 text-[32px] md:text-[32px]">
          {String(timeLeft.minutes).padStart(2, "0")}
        </span>
        <span className="mx-0.5">:</span>
        <span className="font-bold text-gray-800 text-[32px] md:text-[32px]">
          {String(timeLeft.seconds).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}

export default Timer;
