import Image from "next/image";
import logo from "../../public/logo.png";

export default function Logo() {
  return (
    <div className="relative h-20 w-28 md:h-28 md:w-36">
      <Image
        src={logo}
        fill
        alt="Logo o nazwie trenujmy z niemieskim ciężarkiem."
        className="object-contain"
      />
    </div>
  );
}
