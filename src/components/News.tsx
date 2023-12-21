import New from "./New";

const NEWS = [
	{
		title: "Hydrogen VS Electric Cars",
		text: "Will hydrogen-fueled cars ever catch up to EVs?",
	},
	{
		title: "The Downsides of AI Artistry",
		text: "What are the possible adverse effects of on-demand AI image generation?",
	},
	{
		title: "Is VC Funding Drying Up?",
		text: "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
	},
];

export default function News() {
	return (
		<div className="bg-neutral-900 sm:py-8 sm:px-6 py-7 px-5 basis-[30%]">
			<h2 className="text-primary-orange font-bold sm:text-newsHeadDesktop text-newsHeadMobile">
				New
			</h2>
			{NEWS.map((val, i) => (
				<New key={i} title={val.title} text={val.text} last={i === NEWS.length - 1} />
			))}
		</div>
	);
}
