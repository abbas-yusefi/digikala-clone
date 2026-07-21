import DesktopProfileDashboard from "@/components/profile/profileDashboard/desktop-profile-dashboard";
import PulsingDotLoader from "@/components/ui/pulsing-dot-loader";
import { Suspense } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex w-full justify-center lg:gap-4 lg:mt-14 text-sm max-xs:text-xs text-text-primary lg:px-7">
      <div className="lg:max-w-200 w-full lg:h-fit border rounded-2xl border-black/10">
        <Suspense fallback={<PulsingDotLoader />}>{children}</Suspense>
      </div>
      <div className="max-lg:hidden w-80">
        <DesktopProfileDashboard />
      </div>
    </div>
  );
}
