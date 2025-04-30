import React from "react";
import CurrentDate from "./CurrentDate";
import Link from "next/link";
import fetchApi from "@/lib/FetchApi";

interface Event {
  id: number;
  title: string;
  class: string;
  date: string;
  startTime: string;
  endTime: string;
  description: string;
}
async function Events() {
  const eventsData = await fetchApi<Event[]>(
    "http://localhost:4000/eventsData"
  );
  const date = CurrentDate();

  if (!eventsData) {
    return <p>Error fetching data</p>;
  }

  return (
    <div className="bg-white dark:bg-medium rounded-xl p-4">
      {/* HEADER */}
      <div className="flex justify-between items-center my-2">
        <h1 className=" text-lg font-semibold">Events</h1>

        <Link href="/list/events">
          <span className="text-xs text-gray-300"> View All</span>
        </Link>
      </div>

      {/* EVENTS */}
      <div className="flex flex-col gap-4">
        {eventsData.map((event) => {
          if (date === event.date)
            return (
              <div
              className="p-2 rounded-md border-2 border-gray-100 bor-t-4 odd:border-t-schoolBlue even:border-t-schoolPurple"
              key={event.id}
            >
                <div className="flex justify-between items-center">
                  <h1 className="font-semibold text-gray-600">{event.title}</h1>
                  <span className="text-xs text-gray-300">
                    {event.startTime} - {event.endTime}
                  </span>
                </div>
                <p className="mt-2 text-gray-400 text-sm">
                  {event.description}
                </p>
              </div>
            );
        })}
      </div>
    </div>
  );
}

export default Events;
