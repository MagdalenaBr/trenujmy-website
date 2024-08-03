import Image from "next/image";
import logo from "../../public/logo.png";
import Nav from "./Nav";

function Header() {
  return (
    <div className=" w-full absolute">
      <header className="z-100 flex h-24 items-center justify-between  w-11/12 max-w-[1300px] m-auto">
        <div className="relative h-20 w-28 md:h-28 md:w-36">
          <Image
            src={logo}
            fill
            alt="Logo o nazwie trenujmy z niemieskim ciężarkiem."
            className="object-contain "
          />
        </div>
        <Nav />
      </header>
    </div>
  );
}

export default Header;
