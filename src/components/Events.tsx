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
    return (
      <div className="bg-white rounded-xl p-4">
        {/* HEADER */}
        <div className="flex justify-between items-center my-2">
          <h1 className="text-lg font-semibold">Events</h1>
          <Link href="/list/events">
            <span className="text-xs text-gray-300">View All</span>
          </Link>
        </div>
        {/* BODY */}
        <div className="flex flex-col gap-4 mt-4">
          <p className="flex justify-center items-center mt-2 text-gray-400 text-sm">Data Fetch Error</p>
        </div>
      </div>
    );
  } else if (eventsData) {
    return (
      <div className="bg-white rounded-xl p-4">
        {/* HEADER */}
        <div className="flex justify-between items-center my-2">
          <h1 className="text-lg font-semibold">Events</h1>
          <Link href="/list/events">
            <span className="text-xs text-gray-300">View All</span>
          </Link>
        </div>
        {/* body */}
        <div className="flex flex-col gap-4 mt-4">
          {eventsData.map((event) => {
            if (date === event.date) {
              return (
                <div
                  className="bg-schoolLightBlue round-md p-2"
                  key={event.id}
                >
                  <div className="flex items-center justify-between">
                    <h1 className="font-semibold text-gray-600">
                      {event.title}
                    </h1>
                    <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
                      {event.date}
                    </span>
                  </div>
                  <p className="mt-2 text-gray-400 text-sm">
                    {event.description}
                  </p>
                </div>
              );
            }
          })}
          <div>
            <p className="flex justify-center items-center mt-2 text-gray-400 text-sm">No event today</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Events;
