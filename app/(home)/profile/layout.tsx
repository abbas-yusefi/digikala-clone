import DesktopProfileDashboard from "@/components/profile/profileDashboard/desktop-profile-dashboard";
import PulsingDotLoader from "@/components/ui/pulsing-dot-loader";
import { Suspense } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex w-full justify-center gap-4 mt-14 text-sm max-xs:text-xs text-text-primary">
      <div className="w-200 border rounded-2xl border-black/10">
        <Suspense fallback={<PulsingDotLoader />}>{children}</Suspense>
      </div>
      <div className="max-lg:hidden">
        <DesktopProfileDashboard />
      </div>
    </div>
  );
}
