import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalendar";
import EventCalender from "@/components/EventCalender";
import Events from "@/components/Events";

const TeacherPage = () => {
  return (
    <div className="flex flex-col xl:flex-row p-4 gap-4">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        <div className="h-full bg-white p-4 rounded-md ">
          {/* HEADER */}
          <div className="flex items-center justify-between">
            <h1 className="font-semibold text-xl">Schedule</h1>
          </div>
          {/* CALENDAR */}
          <BigCalendar />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-6">
        {/* EVENT CALENDER */}
        <EventCalender/>

        {/* EVENT CALENDER */}
        <Events />

        {/* ANNOUNCEMENTS */}
        <Announcements />
      </div>
    </div>
  );
};

export default TeacherPage;
