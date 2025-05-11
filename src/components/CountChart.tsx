"use client"
import Image from "next/image";
import Link from "next/link";
import React, { PureComponent, useEffect, useState} from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Total",
    count: 100,
    fill: "white",
  },
  {
    name: "Girls",
    count: 40,
    fill: "#FAE27C",
  },
  {
    name: "Boys",
    count: 60,
    fill: "#C3EBFA",
  },
];

// const style = {
//   top: "50%",
//   right: 0,
//   transform: "translate(0, -50%)",
//   lineHeight: "24px",
// };

const CountChart = ()=> {
  const male = 6;
  const female = 4;
  const all = male + female;

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
      <div className="w-full h-[75%] relative">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar background dataKey="count" />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image
          src="/maleFemale.png"
          alt="maleFemale"
          width={50}
          height={50}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      {/* BOTTOM */}
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="w-4 h-4 bg-schoolBlue rounded-full" />
          <h1 className="font-bold">{male ? male : 0}</h1>
          <h2 className="text-xs text-gray-300">{data[2].name + " " + data[2].count}%</h2>
        </div>
        <div className="flex flex-col gap-1">
          <div className="w-4 h-4 bg-schoolYellow rounded-full" />
          <h1 className="font-bold">{female ? female : 0}</h1>
          <h2 className="text-xs text-gray-300">{data[1].name + " " + data[1].count}%</h2>
        </div>
      </div>
    </div>
  );
}

export default CountChart;
