import Image from "next/image";
import Link from "next/link";

const announcements = [
    {
      id: 1,
      title: "Lorem ipsum dolor",
      date: " 2025-01-01 ",
      descriprion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, tempora.",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor",
      date: " 2025-02-05 ",
      descriprion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, tempora.",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor",
      date: " 2025-09-17 ",
      descriprion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, tempora.",
    },
  ];
const Announcements = () => {
  return (
    <div className="bg-white rounded-xl p-4">
      {/* HEADER */}
      <div className="flex justify-between items-center my-2">
        <h1 className="text-lg font-semibold">Announcements</h1>
        <Link href="/list/announcements">
          <span className="text-xs text-gray-300"> View All</span>
        </Link>
      </div>
      {/* ANNOUNCEMENTS */}
      <div className="flex flex-col gap-4 mt-4">
        {
            announcements.map(announcement=>{
                return (
                    <div className="bg-schoolLightBlue round-md p-2" key={announcement.id}>
                        <div className="flex items-center justify-between">
                            <h1 className="font-semibold text-gray-600">{announcement.title}</h1>
                            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">{announcement.date}</span>
                        </div>
                        <p className="mt-2 text-gray-400 text-sm">{announcement.descriprion}</p>
                    </div>
                )
            })
        }
      </div>
    </div>
  );
};

export default Announcements;
