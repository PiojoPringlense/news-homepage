export default function DesktopMenu() {
	return (
		<div className="flex gap-10 *:cursor-pointer text-neutral-600 hover:*:text-primary-orange text-menuDesktop font-bold">
			<span>Home</span>
			<span>New</span>
			<span>Popular</span>
			<span>Trending</span>
			<span>Categories</span>
		</div>
	);
}
