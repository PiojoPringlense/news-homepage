type Props = { item: { title: string; text: string; imageSrc: string }; index: number };

export default function Item({ item, index }: Props) {
	return (
		<div className="flex gap-6">
			<img className="w-[100px]" src={item.imageSrc} alt={item.title} />
			<div className="flex flex-col gap-3">
				<p className="text-listHeadMobile sm:text-listHeadDesktop font-black text-neutral-400">
					{index.toString().padStart(2, "0")}
				</p>
				<p className="text-listTitle font-bold text-neutral-900 hover:text-primary-red cursor-pointer">
					{item.title}
				</p>
				<p>{item.text}</p>
			</div>
		</div>
	);
}
