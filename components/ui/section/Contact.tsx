"use client";
import React, { useState } from "react";
import { Label } from "../label";
import { Input } from "../input";
import { cn } from "@/lib/utils";
import { Cover } from "../cover";

export function Contact() {
      const [loadingMessage,setLoadingMessage] = useState({
            loading:false,
            message:'',
            success:false,


      });
      const [formData, setFormData] = React.useState({ 
            firstName:'',
            lastName:'',
            email:'',
            message:'',
      });

      const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            const { name, value } = e.target;
            setFormData((prev) => ({
                  ...prev,
                  [name]: value,
            }));

      }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement | HTMLTextAreaElement>) => {
    e.preventDefault();
    try {
      if(!formData?.firstName || !formData?.lastName || !formData?.email || !formData.message){
    setLoadingMessage({
      loading:false,
      message:'Please fill all the fields',
      success:false,
    })
    return;
      }
    console.log("Form submitted");
  } catch (error) {
    console.error(error);
  }
};
  return (
    <div className="max-w-[800px] backdrop-blur-[18px] rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black">
      <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
        Do You Want To Join Us?<Cover>Let's Discuss</Cover>
      </h2>
      {loadingMessage?.message && <p className={`mt-[20px] text-[0.9rem] ${loadingMessage?.success ? "text-green-400" : "text-red-400"}`}>*{loadingMessage?.message}</p>}
      <form className="my-8" onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input
              id="firstname"
              name="firstname"
              value={formData?.firstName}
              onChange={handleChange}
              placeholder="Tyler"
              type="text"
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input
              id="lastname"
              name="lastname"
              value={formData?.lastName}
              onChange={handleChange}
              placeholder="Durden"
              type="text"
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            name="email"
            value={formData?.email}
            onChange={handleChange}
            placeholder="projectmayhem@fc.com"
            type="email"
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="message">Enter Your Message</Label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange = {handleChange}
            placeholder="Write a Message"
            className="p-[10px] rounded-[4px] outline-none border-none resize-none h-[140px] bg-zinc-800 text-white"
          ></textarea>
        </LabelInputContainer>
        <button
          className="bg-blue-900 relative group/btn block w-full text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit"
        >
          Submit
          <BottomGradient />
        </button>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
