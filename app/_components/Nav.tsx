import Link from "next/link";
import { usePathname } from "next/navigation";
import LoginButton from "./LoginButton";
import { XMarkIcon } from "@heroicons/react/16/solid";
import { Dispatch, SetStateAction } from "react";

function Nav() {
	const pathname = usePathname();

	return (
		<>
			<div className={`flex  w-3/4 justify-between`}>
				<ul className={`flex gap-4 px-5 py-2  self-center bg-black/50`}>
					<li
						className={`uppercase text-textLight font-semibold tracking- hover:text-accentColor ${
							pathname === "/" ? "border-b-2 border-accentColor" : ""
						}`}>
						<Link href=''>Strona głowna</Link>
					</li>
					<li
						className={`uppercase text-textLight font-semibold tracking- hover:text-accentColor ${
							pathname === "/about" ? "border-b-2 border-accentColor" : ""
						}`}>
						<Link href=''>O nas</Link>
					</li>
					<li
						className={`uppercase text-textLight font-semibold tracking- hover:text-accentColor ${
							pathname === "/classes" ? "border-b-2 border-accentColor" : ""
						}`}>
						<Link href=''>Zajęcia</Link>
					</li>
					<li
						className={`uppercase text-textLight font-semibold tracking- hover:text-accentColor ${
							pathname === "/trainers" ? "border-b-2 border-accentColor" : ""
						}`}>
						<Link href=''>Kadra</Link>
					</li>
					<li
						className={`uppercase text-textLight font-semibold tracking- hover:text-accentColor ${
							pathname === "/prices" ? "border-b-2 border-accentColor" : ""
						}`}>
						<Link href=''>Cennik</Link>
					</li>
					<li
						className={`uppercase text-textLight font-semibold tracking- hover:text-accentColor ${
							pathname === "/contact" ? "border-b-2 border-accentColor" : ""
						}`}>
						<Link href=''>Kontakt</Link>
					</li>
				</ul>
				<LoginButton />
			</div>
		</>
	);
}

export default Nav;
