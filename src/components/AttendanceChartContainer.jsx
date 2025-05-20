import Image from "next/image";
import AttendanceChart from "./AttendanceChart";
import Link from "next/link";
import { prisma } from "@/lib/prisma";

async function AttendanceChartContainer() {
  // GET CURRENT WEEK'S DAYS FROM LAST MONDAY
  const today = new Date();
  const dayOfWeek = today.getDay();
  const daysSinceMonday = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
  const lastMonday = new Date(today);
  lastMonday.setDate(today.getDate() - daysSinceMonday);

  // FETCH DATA
  const dataRes = await prisma.attendance.findMany({
    where: {
      date: {
        gte: lastMonday,
      },
    },
    select: {
      date: true,
      present: true,
    },
  });

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
      <AttendanceChart />
    </div>
  );
}

export default AttendanceChartContainer;
