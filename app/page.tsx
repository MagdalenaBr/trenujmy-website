import Image from "next/image";
import bg from "../public/main-page-large.jpg"


export default function Page() {
  return (
    <div>
      <Image
        src={bg}
        fill
        alt="Kobieta ćwicząca na siłowni"
        className="z-[-10] object-cover object-bottom backdrop-blur-xl"
      />
    </div>
  );
}
