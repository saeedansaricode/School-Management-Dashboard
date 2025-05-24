import Announcements from "@/components/Announcements";
import AttendanceChartContainer from "@/components/AttendanceChartContainer";
import CountChartContainer from "@/components/CountChartContainer";
import EventCalendarContainer from "@/components/EventCalendarContainer";
import Events from "@/components/Events";
import FinanceChart from "@/components/FinanceChart";
import UserCart from "@/components/UserCart";

async function AdminPage ({
  searchParams,
}: {
  searchParams: { [keys: string]: string | undefined };
}) {

  return (
    <div className="flex flex-col md:flex-row p-4 gap-4">
      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-6">
        {/* USER CART */}
        <div className="flex justify-between gap-4 flex-wrap">
          <UserCart type={"teacher"} url={"/list/teachers"} />
          <UserCart type="student" url={"/list/students"} />
          <UserCart type="parent" url={"/list/parents"} />
          <UserCart type="event" url={"/list/events"} />
        </div>
        {/* MIDDLE CHARTS */}
        <div className="flex justify-between gap-4 flex-col lg:flex-row">
          {/* COUNT CHART */}
          <div className="w-full lg:w-1/3 h-[350px]">
            <CountChartContainer />
          </div>
          {/* ATTENDANCE CHART */}
          <div className="w-full lg:w-2/3 h-[350px]">
            <AttendanceChartContainer />
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
          <EventCalendarContainer searchParams={searchParams}/>
        </div>
        {/* EVENTS */}
        <div className="w-full">
          <Events />
        </div>
        {/* ANNOUNCEMENT */}
        <div className="w-full">
          <Announcements />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
