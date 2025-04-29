import Announcements from "@/components/Announcements";
import AttendanceChart from "@/components/AttendanceCart";
import CountChart from "@/components/CountChart";
import EventCalender from "@/components/EventCalender";
import FinanceChart from "@/components/FinanceChart";
import UserCart from "@/components/UserCart";

const AdminPage = () => {
  const users = [
    {
      type: "Teacher",
      url: "http://localhost:4000/teachersData",
      href: "/list/teachers",
    },
    {
      type: "Student",
      url: "http://localhost:4000/studentsData",
      href: "/list/students",
    },
    {
      type: "Parent",
      url: "http://localhost:4000/parentsData",
      href: "/list/parents",
    },
    {
      type: "Event",
      url: "http://localhost:4000/eventsData",
      href: "/list/events",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row p-4 gap-4">
      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-6">
        {/* USER CART */}
        <div className="flex justify-between gap-4 flex-wrap">
          {users.map((user) => (
            <UserCart
              key={user.type}
              type={user.type}
              apiUrl={user.url}
              href={user.href}
            />
          ))}
          {/* <UserCart type={users.teacher.type} apiUrl={users.teacher.apiUrl} /> */}
        </div>
        {/* MIDDLE CHARTS */}
        <div className="flex justify-between gap-4 flex-col lg:flex-row">
          {/* COUNT CHART */}
          <div className="w-full lg:w-1/3 h-[350px]">
            <CountChart />
          </div>
          {/* ATTENDANCE CHART */}
          <div className="w-full lg:w-2/3 h-[350px]">
            <AttendanceChart />
          </div>
        </div>
        {/* BOTTOM CHARTS */}
        <div className="w-full h-[400px]">
          {/* FINANCE CHART */}
          <div className="h-full">
            <FinanceChart />
          </div>
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full lg:w-1/3 flex flex-col gap-6">
        {/* EVENT CALENDER */}
        <div className="w-full">
          <EventCalender />
        </div>
        <div className="w-full">
          <Announcements />
        </div>

      </div>
    </div>
  );
};

export default AdminPage;
