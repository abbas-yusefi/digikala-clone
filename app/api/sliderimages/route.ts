import { sliderImages } from "@/public/sliderimages";

export async function GET() {
  return new Response(JSON.stringify(sliderImages), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
