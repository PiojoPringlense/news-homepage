import { useState } from "react";
import open from "../assets/images/icon-menu.svg";
import close from "../assets/images/icon-menu-close.svg";

export default function MobileMenu() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div>
			<button onClick={() => setIsOpen(true)}>
				<img src={open} alt="Open menu" />
			</button>
			{isOpen && (
				<div className="fixed top-0 right-0 bottom-0 bg-neutral-100 w-64 shadow-[0px_0px_0px_100vh_rgba(0,0,0,0.6)] px-4 py-7 flex flex-col gap-20">
					<button className="self-end" onClick={() => setIsOpen(false)}>
						<img src={close} alt="Close menu" />
					</button>
					<ul className="flex flex-col gap-7 *:cursor-pointer hover:*:text-primary-red text-menuMobile text-neutral-900 font-bold">
						<li>Home</li>
						<li>New</li>
						<li>Popular</li>
						<li>Trending</li>
						<li>Categories</li>
					</ul>
				</div>
			)}
		</div>
	);
}
