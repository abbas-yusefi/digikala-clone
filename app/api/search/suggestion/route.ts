import { getProductsTitle } from "@/lib/querys";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const query = req.nextUrl.searchParams.get("q") || "";

  const allProducts = await getProductsTitle();

  const suggestion = allProducts
    .filter((item) => item.includes(query))
    .slice(0, 5);

  return NextResponse.json({ suggestion });
}
