"use client"

import { Signup } from "@/components/_signup/signup";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSignup } from "@/hooks/useSignup";

export default function SignupPage() {
    
  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
  const [success, setSuccess] = useState(false);
  const router = useRouter();
  const { signup, loading, error } = useSignup();

  const password = watch("password");


  
  const onSubmit = async (formData) => {

    const result = await signup(formData);
    if (result && !error) {
      setSuccess(true);
      reset();
      setTimeout(() => router.push("/login"), 2000);
    }
  };

  return (
    <div className="flex justify-center items-center h-full">
      <Signup
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        errors={errors}
        loading={loading}
        error={error}
        success={success}
        password={password}
      />
    </div>
  );
}