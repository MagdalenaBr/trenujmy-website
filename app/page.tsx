import Image from "next/image";
import Navigation from "./_components/Navigation";

export default function Page() {
	return (
		<div>
				<Image
					src='/main-page-large.jpg'
					fill
					alt='Kobieta ćwicząca na siłowni'
					className='object-cover object-bottom z-[-10] backdrop-blur-xl'
				/>
		</div>
	);
}
