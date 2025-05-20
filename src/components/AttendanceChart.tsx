"use client";

import Image from "next/image";
import Link from "next/link";
import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Sat",
    peresent: 60,
    absent: 40,
  },
  {
    name: "Sun",
    peresent: 70,
    absent: 60,
  },
  {
    name: "Mon",
    peresent: 90,
    absent: 75,
  },
  {
    name: "Tue",
    peresent: 80,
    absent: 45,
  },
  {
    name: "Wed",
    peresent: 60,
    absent: 25,
  },
  {
    name: "Thu",
    peresent: 50,
    absent: 10,
  },
];

const AttendanceChart = () => {
  return (
    <div className="w-full h-[93%]">
      <ResponsiveContainer>
        <BarChart width={500} height={300} data={data} barSize={20}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
          />
          <YAxis axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} />
          <Tooltip
            contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }}
          />
          <Legend
            align="left"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
          />
          <Bar
            dataKey="peresent"
            fill="#C3EBFA"
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="absent"
            fill="#FAE27C"
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;
