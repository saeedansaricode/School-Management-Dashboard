import React from "react";

function AttendanceChartContainer() {
  return (
    <div className=" bg-white dark:bg-medium rounded-xl w-full h-full p-4">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">Attendance</h1>
        <Link href="/list/attendances">
          <Image src="/moreDark.png" alt="more" width={20} height={20} />
        </Link>
      </div>

      {/* CHART */}
    </div>
  );
}

export default AttendanceChartContainer;
