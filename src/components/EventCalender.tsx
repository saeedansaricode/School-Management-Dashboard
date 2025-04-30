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
      {/* HEADER */}
      <div className="flex justify-between items-center my-2">
        <h1 className=" text-lg font-semibold">Events</h1>
        
        <Link href="/list/events">
          {/* <Image src="/moreDark.png" alt="more" width={20} height={20} /> */}
          <span className="text-xs text-gray-300"> View All</span>
        </Link>
      </div>
      {/* EVENTS */}
      <div className="flex flex-col gap-4">
        {eventsData.map((event) => {
          return (
            <div
              className="p-2 rounded-md border-2 border-gray-100 bor-t-4 odd:border-t-schoolBlue even:border-t-schoolPurple dark:border-none dark:odd:bg-schoolLightBlue dark:even:bg-schoolLightPurple"
              key={event.id}
            >
              <div className="flex justify-between items-center">
                <h1 className="font-semibold text-gray-600">{event.title}</h1>
                <span className="text-xs text-gray-300">{event.time}</span>
              </div>
              <p className="mt-2 text-gray-400 text-sm">{event.descriprion}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EventCalender;
