"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";




function LogInForm() {
    const { register, control, handleSubmit, formState: {errors} } = useForm()
    
    const onSubmit = (data)=>{
        console.log(data)
    }


  return (
    <div className="bg-[#F7F8FA] flex justify-center h-screen ">
        <form noValidate onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center w-64 h-80 rounded-2xl shadow-md my-auto bg-schoolLightPurple p-5 gap-4">

            <div className="flex justify-center mb-4">
                <h1 className="font-semibold text-gray-600 text-2xl">Login Form</h1>
            </div>
            <div className="flex flex-col">
                <label className="text-gray-500">Username</label>
                <input
                  className="outline-none p-1 text-gray-400 text-sm"
                  type="text"
                  {...register("username", {
                    required: "name karbari elzamist"
                  })}
                />
                <p className="text-red-600 text-xs pt-1">{errors.username?.message}</p>
            </div>
            <div className="flex flex-col">
                <label className="text-gray-500">Password</label>
                <input
                  className="outline-none p-1 text-gray-400 text-sm"
                  type="password"
                  {...register("password")}
                />
                <p className="text-red-600 text-xs pt-1">{errors.password?.message}</p>
            </div>
            <div className="flex flex-col items-center mx-auto w-[80%] mt-6 border">
                <button
                  className="w-full text-lg font-medium py-1 rounded-2xl bg-schoolPurple text-gray-600"
                  type="submit"
                >
                  Submit
                </button>
            </div>
        </form>
        <DevTool control={control} />
    </div>
  );
}

export default LogInForm;
