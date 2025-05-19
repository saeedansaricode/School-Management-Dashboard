import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { assignmentsData, role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type Assignment = {
  id: number;
  subject: string;
  class: string;
  teacher: string;
  dueDate: string;
};

const columns = [
  {
    header: "Subject Name",
    accessor: "subject",
  },
  {
    header: "Class",
    accessor: "class",
    className: "hidden md:table-cell",
  },
  {
    header: "Teacher",
    accessor: "teacher",
    className: "hidden lg:table-cell",
  },
  {
    header: "Due Date",
    accessor: "due Date",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "actions",
  },
];

const renderRow = (item: Assignment) => (
  <tr
    key={item.id}
    className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-schoolLightPurple dark:bg-medium dark:hover:bg-dark"
  >
    <td className="flex items-center gap-4 p-4">
      <div className="flex flex-col">
        <h3 className="font-semibold">{item.subject}</h3>
      </div>
    </td>
    <td className="hidden md:table-cell">{item.class}</td>
    <td className="hidden lg:table-cell">{item.teacher}</td>
    <td className="hidden lg:table-cell">{item.dueDate}</td>
    <td>
      <div className="flex items-center gap-2">
        {role === "admin" && (
          <>
            <FormModal table="Assignment" type="update" data={item} />
            <FormModal table="Assignment" type="delete" id={item.id} />
          </>
        )}
      </div>
    </td>
  </tr>
);
async function AssignmentListPage () {

  return (
    <div className="flex flex-col p-4 bg-white rounded-lg m-4 mt-0  dark:bg-medium">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div className="hidden md:block justify-start">
          <h1 className="text-lg font-semibold">All Assignments</h1>
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
            {role === "admin" && <FormModal table="Assignment" type="create" />}
          </div>
        </div>
      </div>

      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={assignmentsData} />

      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default AssignmentListPage;
