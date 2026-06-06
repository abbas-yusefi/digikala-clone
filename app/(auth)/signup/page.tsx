"use client";

import Input from "@/components/form/input";
import SubmitButton from "@/components/form/submit-button";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { signup } from "@/lib/actions/signup";
import { SignupSchema, signupSchema } from "@/lib/schemas/signup-schema";
import { useState } from "react";
import BackButton from "@/components/ui/back-button";

const SignupPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
    mode: "onSubmit",
    shouldFocusError: false,
  });

  const [serverError, getServerError] = useState<any>(null);

  const submitHandler = async (data: SignupSchema) => {
    const localCart = localStorage.getItem("cart");
    const parsedLocalCart = localCart ? JSON.parse(localCart) : null;

    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => formData.append(key, value));

    console.log("iteams", parsedLocalCart);
    const result = await signup(formData, parsedLocalCart);

    if (result?.message) {
      getServerError(result);
    }
  };

  const [isPasswordHidden, setIsPasswordHidden] = useState(false);

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="flex justify-center items-center flex-col max-lg:min-h-screen px-6 lg:h-full lg:my-auto lg:w-100 lg:mx-auto lg:border lg:border-black/10 lg:rounded-md lg:p-7 lg:shadow-md"
    >
      <BackButton className="fixed top-6 right-8" />
      <Image
        alt="something"
        src={"https://www.digikala.com/brand/full-horizontal.svg"}
        width={175}
        height={175}
        className="mb-15"
      />
      <div className="flex justify-end flex-col items-end w-full mb-1">
        <p className="font-bold mb-5">ورود به دیجی کالا</p>
        <p className="text-xs text-black/50">لطفا مشخصات خود را وارد کنید</p>
      </div>
      <Input
        errors={errors}
        serverError={serverError}
        register={register}
        registerName={"email"}
        inputType={"email"}
        autoComplete="new-email"
      >
        پست الکترونیک
      </Input>
      <div className="flex items-center w-full">
        <div className="flex flex-col w-full">
          <Input errors={errors} register={register} registerName="username">
            نام کاربری
          </Input>
        </div>
        <span className="mx-5"></span>
        <div className="flex flex-col w-full">
          <Input errors={errors} register={register} registerName="fullName">
            نام و نام خانوادگی
          </Input>
        </div>
      </div>
      <Input
        errors={errors}
        register={register}
        registerName={"password"}
        inputType={"password"}
        autoComplete="new-password"
        isPasswordHidden={isPasswordHidden}
        onTogglePassword={() => setIsPasswordHidden((prev) => !prev)}
      >
        رمز ورود
      </Input>
      <Input
        errors={errors}
        register={register}
        registerName={"confirmPassword"}
        inputType={"password"}
        isPasswordHidden={isPasswordHidden}
        onTogglePassword={() => setIsPasswordHidden((prev) => !prev)}
      >
        تایید رمز ورود
      </Input>

      <SubmitButton>ثبت نام در دیجی کالا</SubmitButton>
      <div className="text-xs font-bold text-[0.7em] w-full flex justify-between items-center mt-2 text-text-secondary flex-col-reverse gap-1 md:flex-row lg:flex-col-reverse">
        <p>
          اکانت دارید؟
          <Link className="text-text-link underline" href={"/signin"}>
            ورود به اکانت
          </Link>
        </p>
        <p>
          ورود شما به معنای پذیرش{" "}
          <Link className="text-text-link" href={"/"}>
            شرایط دیجی کالا
          </Link>
          و{" "}
          <Link className="text-text-link" href={"/"}>
            قوانین حریم خصوصی{" "}
          </Link>{" "}
          است
        </p>
      </div>
    </form>
  );
};

export default SignupPage;
