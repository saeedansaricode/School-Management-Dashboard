"use client";
import Image from "next/image";
import { JSXElementConstructor, useState } from "react";
// import TeacherForm from "./forms/TeacherForm";
// import StudentForm from "./forms/StudentForm";
import dynamic from "next/dynamic";

const TeacherForm = dynamic(() => import("./forms/TeacherForm"), {
  loading: () => <h1>Loading...</h1>,
});
const StudentForm = dynamic(() => import("./forms/StudentForm"), {
  loading: () => <h1>Loading...</h1>,
});
const ParentForm = dynamic(() => import("./forms/ParentForm"));
const ClassForm = dynamic(() => import("./forms/ClassForm"));
const SubjectForm = dynamic(() => import("./forms/SubjectForm"));
// const LessonForm = dynamic(() => import("./forms/LessonForm"));
// const ExamForm = dynamic(() => import("./forms/ExamForm"));
// const AssignmentForm = dynamic(() => import("./forms/AssignmentForm"));
// const ResultForm = dynamic(() => import("./forms/ResultForm"));
// const AttendanceForm = dynamic(() => import("./forms/AttendanceForm"));
// const EventForm = dynamic(() => import("./forms/EventForm"));
// const AnnouncementForm = dynamic(() => import("./forms/AnnouncementForm"));

const forms: {
  [key: string]: (type: "create" | "update", data?: any) => JSX.Element;
} = {
  teacher: (type, data) => <TeacherForm type={type} data={data} />,
  student: (type, data) => <StudentForm type={type} data={data} />,
  // ClassForm: (type, data) => <ClassForm type={type} data={data} />,
  // SubjectForm: (type, data) => <SubjectForm type={type} data={data} />,
  // LessonForm: (type, data) => <LessonForm type={type} data={data} />,
  // ExamForm: (type, data) => <ExamForm type={type} data={data} />,
  // AssignmentForm: (type, data) => <AssignmentForm type={type} data={data} />,
  // ResultForm: (type, data) => <ResultForm type={type} data={data} />,
  // AttendanceForm: (type, data) => <AttendanceForm type={type} data={data} />,
  // EventForm: (type, data) => <EventForm type={type} data={data} />,
  // AnnouncementForm: (type, data) => <AnnouncementForm type={type} data={data} />,
  // ParentForm: (type, data) => <ParentForm type={type} data={data} />,
};

const FormModal = ({
  table,
  type,
  data,
  id,
}: {
  table:
    | "Teacher"
    | "Student"
    | "Parent"
    | "Subject"
    | "Class"
    | "Lesson"
    | "Exam"
    | "Assignment"
    | "Result"
    | "Attendance"
    | "Event"
    | "Announcement";
  type: "create" | "update" | "delete";
  data?: any;
  id?: number | string;
}) => {
  const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
  const bgColor =
    type === "create"
      ? "bg-schoolYellow"
      : type === "update"
      ? "bg-schoolBlue"
      : "bg-schoolPurple";
  const [open, setOpen] = useState(false);
  const Form = () => {
    return type === "delete" && id ? (
      <form action="" className="p-4 flex flex-col gap-4 ">
        <span className="text-center font-medium">
          All data will be lost. Are you sure you want to delete this {table} ?
        </span>
        <button className="bg-red-700 text-white py-2 px-4 rounded-md border-none w-max self-center">
          Delete
        </button>
      </form>
    ) : type === "create" || type === "update" ? (
      <SubjectForm type={type} data={data}/>
    ): (
        "Form Not Found!"
      );
    
    // type === "create" || type === "update" ? (
    //   forms[table](type, data)
    // ) : (
    //   "Form Not Found!"
    // );
  };
  return (
    <>
      <button
        className={`${size} flex items-center justify-center rounded-full ${bgColor}`}
        onClick={() => setOpen(true)}
      >
        <Image src={`/${type}.png`} alt="" width={16} height={16} />
      </button>
      {open && (
        <div className="w-screen h-screen absolute left-0 top-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]">
            <Form />
            <div
              className="absolute right-4 top-4 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <Image src="/close.png" alt="close" width={14} height={14} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FormModal;
