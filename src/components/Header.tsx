import logo from "../assets/images/logo.svg";
import useViewport from "../tools/useViewport";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

export default function Header() {
	const { width, breackpoint } = useViewport();

	return (
		<div className="flex justify-between items-center gap-3 pt-3 pb-8 sm:pt-[72px] sm:pb-14">
			<img src={logo} alt="Logo" />
			{width > breackpoint ? <DesktopMenu /> : <MobileMenu />}
		</div>
	);
}
