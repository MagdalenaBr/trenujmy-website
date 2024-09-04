import { getServerSession } from "next-auth";
import LoginButton from "./LoginButton";
import Logo from "./Logo";
import Nav from "./Nav";
import LogoutButton from "./LogoutButton";
import { UserIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

async function Header() {
  const session = await getServerSession();
  console.log(session);
  return (
    <div className="absolute w-full">
      <header className="z-100 m-auto flex h-24 w-11/12 max-w-[1300px] items-center justify-between">
        <Logo />
        <Nav />
        <div className="mr-12 lg:mr-0">
          {session?.user?.email ? (
            <div className="flex gap-10">
              <div className="text-accentColor flex">
                <Link
                  href="/user/profile"
                  className="h-10 w-10 text-accentColor"
                >
                  <UserIcon />
                </Link>
                <span className="uppercase self-center font-semibold">
                  {session.user.name?.split(" ")[0]}
                </span>
              </div>
              <LogoutButton />
            </div>
          ) : (
            <LoginButton />
          )}
        </div>
      </header>
    </div>
  );
}

export default Header;
