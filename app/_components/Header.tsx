"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Nav from "./Nav";

function Header() {
	const [showSidebar, setShowSidebar] = useState(false);
	const [deviceWidth, setDeviceWidth] = useState(0);

	function changeNav() {
		if (typeof window !== "undefined" && window.innerWidth < 768) {
			setShowSidebar(true);
		} else {
			setShowSidebar(false);
		}
	}
	useEffect(() => {
		window.addEventListener("resize", changeNav);
		setDeviceWidth(window.innerWidth);
	}, []);

	return (
		<header className='flex h-24 items-center z-100 max-w-[1300px] w-11/12 justify-between'>
			<div>
				<Image
					width={deviceWidth < 768 ? 110 : 110}
					height={deviceWidth < 768 ? 120 : 150}
					src='/logo.png'
					alt='logo'
				/>
			</div>

			<Nav />
		</header>
	);
}

export default Header;
