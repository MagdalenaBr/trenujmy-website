import Image from "next/image";
import logo from "../../public/logo.png";
import Nav from "./Nav";
import Logo from "./Logo";

function Header() {
  return (
    <div className=" w-full absolute">
      <header className="z-100 flex h-24 items-center justify-between  w-11/12 max-w-[1300px] m-auto">
       <Logo/>
        <Nav />
      </header>
    </div>
  );
}

export default Header;
