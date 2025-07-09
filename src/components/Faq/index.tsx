import { useState } from "react";
import { AddOutline, RemoveOutline } from "react-ionicons";
import { questions } from "../../data";

const Faq = () => {
	const [items, setItems] = useState(questions);

	const toggleItem = (id: number) => {
		setItems(items.map((item) => (item.id === id ? { ...item, open: !item.open } : item)));
	};

	return (
		<div
			id="FAQS"
			className="w-full py-10 lg:py-32 px-4 sm:px-6 flex flex-col gap-10 items-center justify-center"
		>
			<span className="font-Mirza text-primary text-[36px] sm:text-[48px] md:text-[60px] lg:text-[72px] text-center">
				Հարց ու պատասխան
			</span>

			<div className="flex flex-col gap-5 w-full max-w-4xl">
				{items.map((item) => (
					<div key={item.id} className="pb-3 border-b">
						<div
							className="flex items-start justify-between gap-4 cursor-pointer"
							onClick={() => toggleItem(item.id)}
						>
							<span className="text-[18px] sm:text-[20px] md:text-[22px] font-Lora text-primary flex-1">
								{item.question}
							</span>
							<div className="min-w-[24px]">
								{item.open ? (
									<RemoveOutline cssClasses="cursor-pointer text-primary fill-primary" />
								) : (
									<AddOutline cssClasses="cursor-pointer text-primary fill-primary" />
								)}
							</div>
						</div>

						{item.open && (
							<div className="text-[15px] sm:text-[16px] font-Lora text-primary mt-2 leading-relaxed">
								{item.answer}
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default Faq;
