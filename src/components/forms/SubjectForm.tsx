"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { date, z } from "zod";
import InputField from "../InputField";
import Image from "next/image";

const schema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 charecters long!" })
    .max(200, { message: "Username must be most 20 charecters long!" }),
  email: z.string().email({ message: "Invalid email address!" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 charecters long!" }),
  subjectname: z.string().min(1, { message: "Subject's name is required!" }),
  teachername: z.string().min(1, { message: "Teacher's name is required!" }),
});

const SubjectForm = ({
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
      <h1 className="text-xl font-semibold">Create a new subject</h1>
      <span className="text-xs text-gray-400 font-medium">
        Authentication Information
      </span>
      <div className="flex flex-wrap justify-between gap-4">
        {/* USERNAME */}
        <InputField
          lable="Username"
          register={register as unknown as (name: "username" | "email" | "password" | "subjectname" | "teachername") => ReturnType<typeof register>}
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
        {/* SUBJECTNAME */}
        <InputField
          lable="Subject name"
          register={register}
          name="subjectname"
          defaultValue={data?.subjectname}
          error={errors.subjectname}
        />
        {/* TEACHERNAME */}
        <InputField
          lable="Teacher name"
          register={register}
          name="teachername"
          defaultValue={data?.teachername}
          error={errors.teachername}
        />
      </div>
      <button className="bg-blue-500 rounded-md p-2 text-white">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};
export default SubjectForm;
