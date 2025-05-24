"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

function EventCalendar() {
  const [value, onChange] = useState<Value>(new Date());

  const router = useRouter();
  useEffect(() => {
    if (value instanceof Date) {
      router.push(`?date=${value.toLocaleDateString("en-US")}`);
    }
  }, [value, router]);

  return (
    <div className="bg-white dark:bg-medium rounded-xl">
      {/* CALENDER */}
      <div className="flex justify-center items-center dark:text-dark">
        <Calendar onChange={onChange} value={value} />
      </div>
    </div>
  );
}

export default EventCalendar;
