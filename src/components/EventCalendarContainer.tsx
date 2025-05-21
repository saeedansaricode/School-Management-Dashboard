import Image from "next/image";
import Link from "next/link";
import React from "react";

async function EventCalendarContainer({
  searchParams,
}: {
  searchParams: { [keys: string]: string | undefined };
}) {
  // GET SEARCH PARAMS AS DATA
  const { data } = await searchParams;
  return (
    // CONTAINAR ( CALENDAR + EVENTS )
    <div className="bg-white dark:bg-medium p-4 rounded-md">
      {/* CALENDAR */}

      {/* EVENT */}
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold my-4">Events</h1>

        {/* ALL EVENTS */}
        <Link href="/list/events">
          <Image src="/moreDark.png" alt="" width={20} height={20} />
        </Link>
      </div>

      {/* BODY */}
      <div className="flex flex-col gap-4">

        {/* EVENT LIST */}
      </div>
    </div>
  );
}

export default EventCalendarContainer;
