import Link from "next/link";
import React from "react";
import CurrentDate from "./CurrentDate";
import fetchApi from "@/lib/FetchApi";

const announcements = [
  {
    id: 1,
    title: "Lorem ipsum dolor",
    date: " 2025-01-01 ",
    descriprion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, tempora.",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor",
    date: " 2025-02-05 ",
    descriprion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, tempora.",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor",
    date: " 2025-09-17 ",
    descriprion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, tempora.",
  },
];
interface Announcement {
  id: number;
  title: string;
  class: string;
  date: string;
  description: string;
}

async function Announcements() {
  const announcementsData = await fetchApi<Announcement[]>(
    "http://localhost:4000/announcementsData"
  );
  const date = CurrentDate();

  if (!announcementsData) {
    return (
      <div className="bg-white rounded-xl p-4">
        {/* HEADER */}
        <div className="flex justify-between items-center my-2">
          <h1 className="text-lg font-semibold">Announcements</h1>
          <Link href="/list/announcements">
            <span className="text-xs text-gray-300"> View All</span>
          </Link>
        </div>
        {/* BODY */}
        <div className="flex flex-col gap-4 mt-4">
          <p className="flex justify-center items-center mt-2 text-gray-400 text-sm">
            Data Fetch Error
          </p>
        </div>
      </div>
    );
  } else if (announcementsData) {
    return (
      <div className="bg-white rounded-xl p-4">
        {/* HEADER */}
        <div className="flex justify-between items-center my-2">
          <h1 className="text-lg font-semibold">Announcements</h1>
          <Link href="/list/announcements">
            <span className="text-xs text-gray-300"> View All</span>
          </Link>
        </div>
        {/* body */}
        <div className="flex flex-col gap-4 mt-4">
          {announcementsData.map((announcement) => {
            if (date === announcement.date) {
              return (
                <div
                  className="bg-schoolLightBlue round-md p-2"
                  key={announcement.id}
                >
                  <div className="flex items-center justify-between">
                    <h1 className="font-semibold text-gray-600">
                      {announcement.title}
                    </h1>
                    <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
                      {announcement.date}
                    </span>
                  </div>
                  <p className="mt-2 text-gray-400 text-sm">
                    {announcement.description}
                  </p>
                </div>
              );
            }
          })}
          <div>
            <p className="flex justify-center items-center mt-2 text-gray-400 text-sm">
              No announcement today
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Announcements;
