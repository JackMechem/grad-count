"use client";

import moment from "moment";
import { useEffect, useState } from "react";
import Header from "./componets/header";

export default function Home() {
  const currDate = moment(new Date());
  const gradDate = moment(new Date(2024, 4, 21, 18, 0));

  const [countdown, setCountdown]: any = useState(null);
  const [graduated, setGraduated] = useState(false);

  useEffect(() => {
    const currDates = moment(new Date());
    const diffrenceDate = moment.duration(gradDate.diff(currDates));
    setTimeout(() => {
      setCountdown(
        gradDate.diff(currDates, "days") +
          ":" +
          diffrenceDate.hours() +
          ":" +
          diffrenceDate.minutes() +
          ":" +
          diffrenceDate.seconds() +
          ":" +
          diffrenceDate.milliseconds(),
      );

      if (currDate >= gradDate) {
        setGraduated(true);
      } else {
        setGraduated(false);
      }
    }, 10);
  });

  return (
    <main className="w-full h-full bg-gray-950 font-semibold  text-slate-400 text-center flex items-center justify-center">
      <Header />
      {graduated ? (
        <div className="bg-slate-900 py-10 text-[8vw] md:text-[5vw] rounded-2xl border border-slate-700 shadow-slate-900 shadow-lg text-center md:min-w-[50%] min-w-[80%]">
          <p>NO MORE BOWEN</p>
        </div>
      ) : (
        <div className="bg-slate-900 py-10 text-[8vw] md:text-[5vw] rounded-2xl border border-slate-700 shadow-slate-900 shadow-lg text-center md:min-w-[50%] min-w-[80%]">
          <p>Graduation</p>
          <span>{countdown}</span>
        </div>
      )}
    </main>
  );
}
