import { FiEdit3 } from "react-icons/fi";
import Link from "next/link";
import { Session } from "next-auth";

const PersonalInfo = ({ session }: { session: Session }) => {
  return (
    <section className="flex justify-between items-center w-full py-5 px-5">
      <Link href={"/profile/personal-info"}>
        <FiEdit3 className={`text-xl cursor-pointer text-text-link`} />
      </Link>
      <div className="flex flex-col" dir="rtl">
        <span className="font-bold tracking-wide">{session.user?.name}</span>
        <span className="text-text-secondary font-light">
          {session.user?.email}
        </span>
      </div>
    </section>
  );
};

export default PersonalInfo;
