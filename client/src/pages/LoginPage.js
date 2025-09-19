"use client"

import { Login } from "@/components/_login/login";
import { useForm } from "react-hook-form";
import { useAuth } from "@/providers/auth.provider";
import { useLogin } from "@/hooks/useLogin";
import { useRouter } from "next/navigation";

export default function LoginPage() {

  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const { login, loading, error } = useLogin();
  const { setLoginData          } = useAuth();
  const router = useRouter();

  const onSubmit = async (formData) => {
    const result = await login(formData);
    if (result?.accessToken && result?.user?.id) {
      const authData = {
        accessToken: result?.accessToken,
        user: result?.user
      };
      sessionStorage.setItem("access_token", JSON.stringify(authData));
      sessionStorage.setItem("user_id", result.user.id);
      setLoginData(authData);
      reset();
      router.push("/");
    }
  };

  return (
    <div className="flex justify-center items-center h-full">
      <Login
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        errors={errors}
        loading={loading}
        error={error}
      />
    </div>
  );
}