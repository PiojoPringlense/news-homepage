import heroDesktop from "../assets/images/image-web-3-desktop.jpg";
import heroMobile from "../assets/images/image-web-3-mobile.jpg";
import useViewport from "../tools/useViewport";

export default function Hero() {
	const { width, breackpoint } = useViewport();

	return (
		<div className="grid sm:grid-cols-2 gap-7 sm:gap-9 basis-2/3">
			{width > breackpoint ? (
				<img className="col-span-2 " src={heroDesktop} alt="Web 3.0" />
			) : (
				<img src={heroMobile} alt="Web 3.0" />
			)}
			<h1 className="font-extrabold text-neutral-900 leading-none sm:text-headerDesktop text-headerMobile">
				The Bright Future of Web 3.0?
			</h1>
			<div className="flex flex-col gap-7 sm:gap-9 items-start">
				<p>
					We dive into the next evolution of the web that claims to put the power of the
					platforms back into the hands of the people. But is it really fulfilling its promise?
				</p>
				<button className="uppercase tracking-[0.4em] font-bold bg-primary-red hover:bg-neutral-900 text-button text-neutral-100 px-8 py-4">
					Read more
				</button>
			</div>
		</div>
	);
}
