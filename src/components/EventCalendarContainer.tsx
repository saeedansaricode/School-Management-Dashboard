import React from "react";

async function EventCalendarContainer({
  searchParams,
}: {
  searchParams: { [keys: string]: string | undefined };
}) {
  // GET SEARCH PARAMS AS DATA
  const { data } = await searchParams;
  return <div>EventCalendarContainer</div>;
}

export default EventCalendarContainer;
