import { getServerSession } from "next-auth";
import LoginButton from "./LoginButton";
import Logo from "./Logo";
import Nav from "./Nav";
import LogoutButton from "./LogoutButton";

async function Header() {
  const session = await getServerSession();
  console.log(session);
  return (
    <div className="absolute w-full">
      <header className="z-100 m-auto flex h-24 w-11/12 max-w-[1300px] items-center justify-between">
        <Logo />
        <Nav />
        <div className="mr-12 lg:mr-0">
          {session?.user?.email ? <LogoutButton /> : <LoginButton />}
        </div>
      </header>
    </div>
  );
}

export default Header;
