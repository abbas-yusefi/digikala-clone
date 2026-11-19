"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import Input from "@/components/form/input";
import SubmitButton from "@/components/form/submit-button";
import BackButton from "@/components/ui/back-button";
import { addressSchema, AddressSchema } from "@/lib/schemas/address-schema";
import { AddAddressAction } from "@/lib/actions/address";

const AddAddressPage = () => {
  const router = useRouter();
  const [serverError, setServerError] = useState<{
    message: string;
    field?: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AddressSchema>({
    resolver: zodResolver(addressSchema),
    mode: "onSubmit",
    shouldFocusError: false,
  });

  const submitHandler = async (data: AddressSchema) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) =>
      formData.append(key, value ?? ""),
    );
    const result = await AddAddressAction(formData);

    if (result?.message) {
      setServerError(result);
      return;
    }
    router.push("/profile/addresses");
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="flex flex-col items-center px-6 py-16 w-full lg:w-100 lg:mx-auto"
    >
      <BackButton className="fixed top-6 right-8" />
      <p className="font-bold mb-5 w-full text-right">افزودن آدرس جدید</p>

      <Input errors={errors} register={register} registerName="recipient_name">
        نام و نام خانوادگی گیرنده
      </Input>
      <Input
        errors={errors}
        serverError={serverError}
        register={register}
        registerName="phone"
        inputType="tel"
      >
        شماره موبایل
      </Input>

      <div className="flex items-center w-full gap-5">
        <div className="flex flex-col w-full">
          <Input errors={errors} register={register} registerName="state">
            استان
          </Input>
        </div>
        <div className="flex flex-col w-full">
          <Input errors={errors} register={register} registerName="city">
            شهر
          </Input>
        </div>
      </div>

      <Input errors={errors} register={register} registerName="street_address">
        آدرس
      </Input>
      <Input
        errors={errors}
        register={register}
        registerName="street_address_2"
      >
        پلاک، طبقه و واحد (اختیاری)
      </Input>
      <Input errors={errors} register={register} registerName="postal_code">
        کد پستی
      </Input>

      <SubmitButton isSubmitting={isSubmitting}>
        {isSubmitting ? "در حال ثبت آدرس" : "ثبت آدرس"}
      </SubmitButton>
    </form>
  );
};

export default AddAddressPage;
