import { prisma } from "@/lib/prisma";
import CountChart from "./CountChart";
import Link from "next/link";
import Image from "next/image";

async function CountChartContainer() {
  // FETCH DATA
  const data = await prisma.student.groupBy({
    by: ["sex"],
    _count: true,
  });
  const boys = data.find((item) => item.sex === "MALE")?._count || 0;
  const girls = data.find((item) => item.sex === "FEMALE")?._count || 0;

  return (
    <div className=" bg-white dark:bg-medium rounded-xl w-full h-full p-4">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">Student</h1>
        <Link href="/list/students">
          <Image src="/moreDark.png" alt="more" width={20} height={20} />
        </Link>
      </div>
      {/* CHART */}
      <CountChart boys={boys} girls={girls} />
      {/* BOTTOM */}
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="w-4 h-4 bg-schoolBlue rounded-full" />
          <h1 className="font-bold">{boys}</h1>
          <h2 className="text-xs text-gray-300">
            Boys ({Math.round((boys / (boys + girls)) * 100)}%)
          </h2>
        </div>
        <div className="flex flex-col gap-1">
          <div className="w-4 h-4 bg-schoolYellow rounded-full" />
          <h1 className="font-bold">{girls}</h1>
          <h2 className="text-xs text-gray-300">
            Girls ({Math.round((girls / (boys + girls)) * 100)}%)
          </h2>
        </div>
      </div>
    </div>
  );
}

export default CountChartContainer;
