import image1 from "./../assets/images/image-retro-pcs.jpg";
import image2 from "./../assets/images/image-top-laptops.jpg";
import image3 from "./../assets/images/image-gaming-growth.jpg";
import Item from "./Item";

const LIST = [
	{
		title: "Reviving Retro PCs",
		text: "What happens when old PCs are given modern upgrades?",
		imageSrc: image1,
	},
	{
		title: "Top 10 Laptops of 2022",
		text: "Our best picks for various needs and budgets.",
		imageSrc: image2,
	},
	{
		title: "The Growth of Gaming",
		text: "How the pandemic has sparked fresh opportunities.",
		imageSrc: image3,
	},
];

export default function List() {
	return (
		<div className="flex flex-col sm:flex-row gap-8 sm:gap-11 my-16 sm:my-[72px]">
			{LIST.map((item, i) => (
				<Item key={i} index={i} item={item} />
			))}
		</div>
	);
}
