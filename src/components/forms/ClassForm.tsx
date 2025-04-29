"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { date, z } from "zod";
import InputField from "../InputField";

const schema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 charecters long!" })
    .max(200, { message: "Username must be most 20 charecters long!" }),
  email: z.string().email({ message: "Invalid email address!" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 charecters long!" }),
  classname: z.string().min(1, { message: "Classname is required!" }),
  capasity: z.string().min(1, { message: "Capasity number is required!" }),
  grade: z.string().min(1, { message: "Grade number is required!" }),
  supervisor: z.string().min(1, { message: "Supervisor Name is required!" }),
});

const ClassForm = ({
  type,
  data,
}: {
  type: "create" | "update";
  data?: any;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {});

  return (
    <form className="flex flex-col gap-8 " onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">Create a new student</h1>
      <span className="text-xs text-gray-400 font-medium">
        Authentication Information
      </span>
      <div className="flex flex-wrap justify-between gap-4">
        {/* USERNAME */}
        <InputField
          lable="Username"
          register={register as unknown as (name: "username" | "email" | "password" | "classname" | "capasity" | "grade" | "supervisor") => ReturnType<typeof register>}
          name="username"
          defaultValue={data?.username}
          error={errors.username}
        />
        {/* EMAIL */}
        <InputField
          lable="Email"
          type="email"
          register={register}
          name="email"
          defaultValue={data?.email}
          error={errors.email}
        />
        {/* PASSWORD */}
        <InputField
          lable="Password"
          type="password"
          register={register}
          name="password"
          defaultValue={data?.password}
          error={errors.password}
        />
      </div>
      <span className="text-xs text-gray-400 font-medium">
        Personal Information
      </span>
      <div className="flex flex-wrap justify-between gap-4">
        {/* CLASSNAME */}
        <InputField
          lable="Class name"
          register={register}
          name="classname"
          defaultValue={data?.classname}
          error={errors.classname}
        />
        {/* CAPASITY */}
        <InputField
          lable="Capasity"
          register={register}
          name="capasity"
          defaultValue={data?.capasity}
          error={errors.capasity}
        />
        {/* GRADE */}
        <InputField
          lable="Grade"
          register={register}
          name="grade"
          defaultValue={data?.grade}
          error={errors.grade}
        />
        {/* SUPERVISOR */}
        <InputField
          lable="Supervisor name"
          register={register}
          name="supervisor"
          defaultValue={data?.supervisor}
          error={errors.supervisor}
        />
      </div>
      <button className="bg-blue-500 rounded-md p-2 text-white">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};
export default ClassForm;
