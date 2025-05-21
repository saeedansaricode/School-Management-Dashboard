"use client";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Link from "next/link";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];
// TEMPORARY
const eventsData = [

  {
    id: 1,
    title: "Lorem ipsum dolor sit amet.",
    time: " 12:00 PM - 02:00 PM ",
    descriprion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, tempora.",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet.",
    time: " 12:00 PM - 02:00 PM ",
    descriprion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, tempora.",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet.",
    time: " 12:00 PM - 02:00 PM ",
    descriprion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, tempora.",
  },
];

const EventCalender = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="bg-white dark:bg-medium rounded-xl p-4">
      {/* CALENDER */}
      <div className="flex justify-center items-center dark:text-dark">
        <Calendar onChange={onChange} value={value} />
      </div>
    </div>
  );
};

export default EventCalender;