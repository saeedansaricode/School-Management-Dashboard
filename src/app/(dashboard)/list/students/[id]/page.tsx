import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalendar";
import Performance from "@/components/Performance";
import Image from "next/image";
import Link from "next/link";

const SingleStudentPage = () => {
  return (
    <div className="felx-1 p-4 flex flex-col gap-4 xl:flex-row ">
      {/* LEFT */}
      <div className="w-full xl:w-2/3 ">
        {/*  TOP */}
        <div className="flex flex-col gap-4 lg:flex-row">
          {/* USER INFO CART */}
          <div className="bg-schoolBlue py-6 px-4 rounded-md flex-1 flex gap-4">
            <div className="w-1/3">
              <Image
                src="https://images.pexels.com/photos/5414817/pexels-photo-5414817.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="picture"
                width={144}
                height={144}
                className="w-36 h-36 rounded-full object-cover"
              />
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4 ">
              <h1 className="text-xl font-semibold">Cameron Moran</h1>
              <p className="text-gray-500 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium md:flex-row">
                <div className="w-full flex items-center gap-2 md:w-1/3 lg:w-full xl:w-1/3 ">
                  <Image src="/blood.png" alt="blood" width={14} height={14} />
                  <span>A+</span>
                </div>
                <div className="w-full flex items-center gap-2 md:w-1/3 lg:w-full xl:w-1/3 ">
                  <Image src="/date.png" alt="date" width={14} height={14} />
                  <span>January 2025</span>
                </div>
                <div className="w-full flex items-center gap-2 md:w-1/3 lg:w-full xl:w-1/3 ">
                  <Image src="/mail.png" alt="mail" width={14} height={14} />
                  <span>user@gmail.com</span>
                </div>
                <div className="w-full flex items-center gap-2 md:w-1/3 lg:w-full xl:w-1/3 ">
                  <Image src="/phone.png" alt="phone" width={14} height={14} />
                  <span>+1 234 5678902</span>
                </div>
              </div>
            </div>
          </div>
          {/* SMALL CARTS */}
          <div className="flex-1 w-full flex justify-between flex-wrap gap-4 md:flex-row ">
            {/* CARD 1 */}
            <div className="w-full bg-white rounded-md p-4 gap-4 flex md:w-[48%] lg:w-full xl:w-[45%]">
              <Image
                src="/singleAttendance.png"
                alt="singleAttendance"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">90%</h1>
                <p className="text-sm text-gray-400">Attendance</p>
              </div>
            </div>
            {/* CARD 2 */}
            <div className="w-full bg-white rounded-md p-4 gap-4 flex md:w-[48%] lg:w-full xl:w-[45%]">
              <Image
                src="/singleClass.png"
                alt="singleClass"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">6A</h1>
                <p className="text-sm text-gray-400">Class</p>
              </div>
            </div>
            {/* CARD 3 */}
            <div className="w-full bg-white rounded-md p-4 gap-4 flex md:w-[48%] lg:w-full xl:w-[45%]">
              <Image
                src="/singleLesson.png"
                alt="singleLesson"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">18</h1>
                <p className="text-sm text-gray-400">Lessons</p>
              </div>
            </div>
            {/* CARD 4 */}
            <div className="w-full bg-white rounded-md p-4 gap-4 flex md:w-[48%] lg:w-full xl:w-[45%]">
              <Image
                src="/singleBranch.png"
                alt="singleBranch"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">6th</h1>
                <p className="text-sm text-gray-400">Grade</p>
              </div>
            </div>
          </div>
        </div>
        {/*  BOTTOM */}
        <div className="bg-white mt-4 rounded-md p-4 h-[800]">
          <h1 className="text-lg font-semibold">Student's Schedule</h1>
          <BigCalendar />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
      {/* SHORTCUTS */}
      <div className="bg-white p-4 rounded-md">
        <h1 className="text-xl font-semibold">Shortcuts</h1>
        <div className="flex flex-wrap gap-4 mt-4 text-xs text-gray-500">
          <Link className="p-3 rounded-md bg-schoolLightBlue" href={`/list/teachers?classId=${2}`}>Student's Teachers</Link>
          <Link className="p-3 rounded-md bg-schoolLightYellow" href={`/list/lessons?classId=${2}`}>Student's Lessons</Link>
          <Link className="p-3 rounded-md bg-pink-50" href={`/list/exams?classId=${2}`}>Student's Exams</Link>
          <Link className="p-3 rounded-md bg-green-50" href='/'>Student's Assignments</Link>
          <Link className="p-3 rounded-md bg-schoolLightPurple" href='/'>Student's Results</Link>
        </div>
      </div>
      {/* PERFORMANCE */}
      <Performance/>
      {/* ANNOUNCEMENTS */}
      <Announcements/>
      </div>
    </div>
  );
};

export default SingleStudentPage;
