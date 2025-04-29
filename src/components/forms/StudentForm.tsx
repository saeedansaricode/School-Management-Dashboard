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
  firstname: z.string().min(1, { message: "Firstname is required!" }),
  lastname: z.string().min(1, { message: "Lastname is required!" }),
  phone: z.string().min(1, { message: "Phone number is required!" }),
  address: z.string().min(1, { message: "Address is required!" }),
  bloodType: z.string().min(1, { message: "Blood Type is required!" }),
  birthday: z.date({ message: "Birthday is required!" }),
  sex: z.enum(["Male", "Female"], { message: "Sex is required!" }),
  img: z.instanceof(File, { message: "Image is required!" }),
});

const StudentForm = ({
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
          register={register as unknown as (name: "username" | "email" | "password" | "firstname" | "lastname" | "phone" | "address" | "bloodType" | "birthday" | "sex") => ReturnType<typeof register>}
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
        {/* FIRSTNAME */}
        <InputField
          lable="First name"
          register={register}
          name="firstname"
          defaultValue={data?.firstname}
          error={errors.firstname}
        />
        {/* LASTNAME */}
        <InputField
          lable="Last name"
          register={register}
          name="lastname"
          defaultValue={data?.lastname}
          error={errors.lastname}
        />
        {/* PHONE */}
        <InputField
          lable="Phone"
          register={register}
          name="phone"
          defaultValue={data?.phone}
          error={errors.phone}
        />
        {/* address */}
        <InputField
          lable="Address"
          register={register}
          name="address"
          defaultValue={data?.address}
          error={errors.address}
        />
        {/* BLOODTYPE */}
        <InputField
          lable="Blood type"
          register={register}
          name="bloodType"
          defaultValue={data?.bloodType}
          error={errors.bloodType}
        />
        {/* birthday */}
        <InputField
          lable="Birthday"
          type="date"
          register={register}
          name="birthday"
          defaultValue={data?.birthday}
          error={errors.birthday}
        />
        {/* sex */}
        <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-gray-500">Sex</label>
          <select
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
            {...register("sex")}
            defaultValue={data?.sex}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {errors.sex?.message && (
            <p className="text-xs text-red-400">
              {errors.sex.message.toString()}
            </p>
          )}
        </div>
        {/* img */}
        <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-gray-500 flex items-center gap-2 cursor-pointer" htmlFor="img">
            <Image src="/upload.png" alt="upload" width={28} height={28} />
            <span>Upload a photo</span>
          </label>
          <input type="file" id="img" {...register("img")} className="hidden"/>
          {errors.img?.message && (
            <p className="text-xs text-red-400">
              {errors.img.message.toString()}
            </p>
          )}
        </div>
      </div>
      <button className="bg-blue-500 rounded-md p-2 text-white">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};
export default StudentForm;
