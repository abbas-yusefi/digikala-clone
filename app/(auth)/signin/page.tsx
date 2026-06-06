"use client";

import Input from "@/components/form/input";
import SubmitButton from "@/components/form/submit-button";
import { getSession, signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SigninSchema, signinSchema } from "@/lib/schemas/signin-schema";
import Link from "next/link";
import { useState } from "react";
import BackButton from "@/components/ui/back-button";
import { addProductToCart } from "@/lib/querys";
import { syncCartToServer } from "@/lib/actions/add-localitems-to-cart";
import { revalidatePath } from "next/cache";

const SigninPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(signinSchema),
    mode: "onSubmit",
    shouldFocusError: false,
  });
  // const { data: session } = useSession();

  const router = useRouter();

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const [serverError, setServerError] = useState({});

  const onSubmit = async (data: SigninSchema) => {
    try {
      const result = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (result?.error) {
        setServerError({
          message: result.error,
          field: "general",
        });
        return;
      }

      const session = await getSession();

      if (session?.user?.id) {
        const localCart = localStorage.getItem("cart");
        const parsedLocalCart = localCart ? JSON.parse(localCart) : null;

        if (parsedLocalCart && parsedLocalCart.length > 0) {
          await syncCartToServer(session.user.id, parsedLocalCart);
          // Clear local cart after syncing
          localStorage.removeItem("cart");
        }
      }

      setServerError({});
      router.replace(callbackUrl);
      router.refresh();
    } catch (err) {
      setServerError({
        message:
          err instanceof Error ? err.message : "An unexpected error occurred",
        field: "general",
      });
    }
  };

  const [isPasswordHidden, setIsPasswordHidden] = useState(false);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex justify-center items-center flex-col min-h-screen px-6 lg:h-full lg:my-auto lg:w-100 lg:mx-auto lg:border lg:border-black/10 lg:rounded-md lg:p-7 lg:shadow-md"
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
        <p className="text-xs text-black/50">
          لطفا پست الکترونیک و رمز ورود خود را وارد کنید
        </p>
      </div>
      <Input
        errors={errors}
        register={register}
        registerName={"email"}
        inputType={"email"}
        serverError={serverError}
      >
        پست الکترونیک
      </Input>
      <Input
        errors={errors}
        register={register}
        registerName={"password"}
        inputType={"password"}
        onTogglePassword={() => setIsPasswordHidden((prev) => !prev)}
        isPasswordHidden={isPasswordHidden}
        serverError={serverError}
      >
        رمز ورود
      </Input>
      <input className="hidden" name="prevent-autofill" type="text" />

      <SubmitButton>ورود به دیجی کالا</SubmitButton>
      <div className="text-xs font-bold text-[0.7em] w-full flex justify-between items-center mt-2 text-text-secondary lg:flex-col-reverse">
        <p>
          اکانت ندارید؟
          <Link className="text-text-link underline" href={"/signup"}>
            ساخت اکانت
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

export default SigninPage;
