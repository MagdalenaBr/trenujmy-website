import Image from "next/image";
import logo from "../../public/logo.png";
import Nav from "./Nav";

function Header() {
  return (
    <header className="z-100 flex h-24 w-11/12 max-w-[1300px] items-center justify-between overflow-hidden">
      <div className="relative h-20 w-28 lg:h-28 lg:w-36">
        <Image
          src={logo}
          fill
          alt="Logo o nazwie trenujmy z niemieskim ciężarkiem."
          className="object-contain"
        />
      </div>

      <Nav />
    </header>
  );
}

export default Header;
