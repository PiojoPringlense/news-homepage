type Props = { title: string; text: string; last: boolean };

export default function New({ title, text, last }: Props) {
	return (
		<div className={`py-8 border-neutral-600 ${!last ? "border-b" : ""}`}>
			<p className="text-neutral-100 hover:text-primary-orange cursor-pointer text-listTitle font-bold mb-3">
				{title}
			</p>
			<p>{text}</p>
		</div>
	);
}
