"use server";

import {
  addAddress,
  deleteAddress,
  getAddress,
  updateAddress,
} from "../queries";
import { auth } from "@/auth";
import { addressSchema } from "../schemas/address-schema";
import { revalidatePath } from "next/cache";

const DeleteAddressAction = async (id: number): Promise<void> => {
  const session = await auth();
  await deleteAddress(id, session?.user.id);
  revalidatePath("/profile/addresses");
};

const AddAddressAction = async (formData: FormData) => {
  const session = await auth();
  if (!session?.user) return { message: "ابتدا وارد حساب خود شوید" };

  const parsed = addressSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) return { message: "اطلاعات واردشده معتبر نیست" };

  const a = parsed.data;

  try {
    await addAddress(
      session.user.id,
      a.city,
      a.state,
      a.street_address,
      a.postal_code,
      a.recipient_name,
      a.phone,
      a.street_address_2 ?? "",
    );
  } catch (err) {
    console.log(err);
    return { message: "خطا در ثبت آدرس" };
  }
};

const EditAddressAction = async (
  formData: FormData,
): Promise<void | { message: string }> => {
  const session = await auth();
  if (!session?.user) return { message: "ابتدا وارد حساب خود شوید" };

  const id = formData.get("id");
  if (typeof id !== "string" || !id) return { message: "آدرس نامعتبر است" };

  const parsed = addressSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) return { message: "اطلاعات واردشده معتبر نیست" };

  const a = parsed.data;

  try {
    await updateAddress(
      session.user.id,
      a.city,
      a.state,
      a.street_address,
      a.postal_code,
      a.recipient_name,
      a.phone,
      a.street_address_2 ?? "",
      id,
    );
  } catch (err) {
    console.log(err);
    return { message: "خطا در ثبت آدرس" };
  }
};

const GetAddressAction = async (id: string) => {
  const session = await auth();
  try {
    if (!session?.user) return { message: "ابتدا وارد حساب خود شوید" };
    if (!id) return { message: "آدرس نامعتبر" };
    const result = await getAddress(session.user.id, id);
    return result;
  } catch (err) {
    console.log(err);
  }
};

export {
  DeleteAddressAction,
  AddAddressAction,
  EditAddressAction,
  GetAddressAction,
};
