import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role, teachersData } from "@/lib/data";
import { prisma } from "@/lib/prisma";
import { ITEM_PER_PAGE } from "@/lib/settings";
import { Class, Subject, Teacher } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

// TYPES FROME PRISMA/CLIENT DATABASE
type TeacherList = Teacher & {subjects: Subject[]} & {classes: Class[]}

const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Teacher ID",
    accessor: "teacherId",
    className: "hidden md:table-cell",
  },
  {
    header: "Subjects",
    accessor: "subjects",
    className: "hidden md:table-cell",
  },
  {
    header: "Classes",
    accessor: "classes",
    className: "hidden md:table-cell",
  },
  {
    header: "Phone",
    accessor: "phone",
    className: "hidden lg:table-cell",
  },
  {
    header: "Address",
    accessor: "address",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "actions",
  },
];

const renderRow = (item: TeacherList) => (
  <tr
    key={item.id}
    className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-schoolLightPurple dark:bg-medium dark:hover:bg-dark"
  >

    <td className="flex items-center gap-4 p-4">
      <Image
        src={item.img || "/public/noAvatar.png"}
        alt="photo"
        width={40}
        height={40}
        className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
      />
      <div className="flex flex-col">
        <h3 className="font-semibold">{item.name}</h3>
        <p className="text-xs text-gray-500">{item?.email}</p>
      </div>
    </td>
    <td className="hidden md:table-cell">{item.username}</td>
    <td className="hidden md:table-cell">{item.subjects.map(subject => subject.name).join(", ")}</td>
    <td className="hidden md:table-cell">{item.classes.map(classItem => classItem.name).join(", ")}</td>
    <td className="hidden lg:table-cell">{item.phone}</td>
    <td className="hidden lg:table-cell">{item.address}</td>
    <td>
      <div className="flex items-center gap-2">
        <Link href={`/list/teachers/${item.id}`}>
          <button className="w-7 h-7 flex items-center justify-center bg-schoolBlue rounded-full">
            <Image src="/view.png" alt="view" width={16} height={16} />
          </button>
        </Link>
        {role === "admin" && (
          // <button className="w-7 h-7 flex items-center justify-center bg-schoolPurple rounded-full">
          //   <Image src="/delete.png" alt="delete" width={16} height={16} />
          // </button>
          <FormModal table="Teacher" type="delete" id={item.id}/>
        )}
      </div>
    </td>
  </tr>
);

async function TeacherListPage ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {

  // GET SEARCHPARAMS AND CALCULATING PAGENUMBER INFO
  const {page, ...queryParams} = await searchParams
  const p = page ? parseInt(page) : 1 ;

  const data = await prisma.teacher.findMany({
    include : {
      subjects: true,
      classes: true,
    },

    // DATA FETCHING OPTIMIZATION 
    take: ITEM_PER_PAGE,
    skip: ITEM_PER_PAGE * ( p - 1 ),
  })
  

  return (
    <div className="flex flex-col p-4 bg-white rounded-lg m-4 mt-0  dark:bg-medium">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div className="hidden md:block justify-start">
          <h1 className="text-lg font-semibold">All Teachers</h1>
        </div>
        {/* SEARCH BAR */}
        <div className="w-full flex flex-col items-center gap-4 md:w-auto md:flex-row">
          <TableSearch />
          {/* BOTTOMS */}
          <div className="flex items-center gap-4 self-end md:">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-schoolYellow">
              <Image src="/filter.png" alt="filter" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-schoolYellow">
              <Image src="/sort.png" alt="sort" width={14} height={14} />
            </button>
            {role === "admin" && (
              // <button className="w-8 h-8 flex items-center justify-center rounded-full bg-schoolYellow">
              //   <Image src="/plus.png" alt="plus" width={14} height={14} />
              // </button>
              <FormModal table="Teacher" type="create"/>
            )}
          </div>
        </div>
      </div>

      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={data} />

      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default TeacherListPage;
