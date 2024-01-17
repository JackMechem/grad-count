"use client";

import moment from "moment";
import { useEffect, useState } from "react";

export default function Home() {
  const currDate = moment(new Date());
  const gradDate = moment(new Date(2024, 4, 21, 18, 0, 0));
  const diffrenceDate = moment.duration(gradDate.diff(currDate));

  const [seconds, setSeconds]: any = useState(null);

  useEffect(() => {
    const currDates = moment(new Date());
    const diffrenceDates = moment.duration(gradDate.diff(currDates));
    setTimeout(() => {
      setSeconds(diffrenceDates.seconds());
    }, 1000);
  });

  return (
    <main className="w-screen h-screen bg-black text-white font-semibold text-[5vw] text-center flex items-center justify-center">
      <div>
        <p>Graduation</p>
        <span>
          {~~diffrenceDate.asDays() +
            ":" +
            ~~diffrenceDate.hours() +
            ":" +
            ~~diffrenceDate.minutes() +
            ":"}
        </span>
        <span>{seconds}</span>
      </div>
    </main>
  );
}
