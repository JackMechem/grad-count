"use client";

import moment from "moment";
import { useEffect, useState } from "react";

export default function Home() {
  const currDate = moment(new Date());
  const gradDate = moment(new Date(2024, 4, 21, 18, 0, 0));

  const [countdown, setCountdown]: any = useState(null);
  const [graduated, setGraduated] = useState(false);

  useEffect(() => {
    const currDates = moment(new Date());
    const diffrenceDate = moment.duration(gradDate.diff(currDates));
    setTimeout(() => {
      setCountdown(
        ~~diffrenceDate.asDays() +
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
    <main className="w-full h-full bg-black text-white font-semibold text-[5vw] text-center flex items-center justify-center">
      {graduated ? (
        <div className="bg-slate-900 p-10 rounded-2xl border border-slate-700 shadow-slate-900 shadow-lg text-center">
          <p>NO MORE BOWEN</p>
        </div>
      ) : (
        <div className="bg-slate-900 p-10 rounded-2xl border border-slate-700 shadow-slate-900 shadow-lg text-center">
          <p>Graduation</p>
          <span>{countdown}</span>
        </div>
      )}
    </main>
  );
}
