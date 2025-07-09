import { features } from "../../data";

const Features = () => {
	return (
		<div
			id="Features"
			className="w-full bg-[#F8F8F8] py-10 lg:py-24 px-4 sm:px-8 lg:px-20 flex flex-col items-center justify-center gap-12"
		>
			<span className="font-Mirza text-primary text-[36px] sm:text-[48px] md:text-[60px] lg:text-[72px] text-center">
				մեր արտադրանքը
			</span>

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 w-full max-w-[1300px]">
				{features.map((item) => (
					<div className="flex flex-col gap-3 items-center" key={item.title}>
						<img
							src={item.image}
							alt={item.title}
							className="w-full max-w-[320px] sm:max-w-[300px] md:max-w-[350px] h-auto object-cover rounded-xl shadow-md"
						/>
						<span className="font-Lora text-[20px] sm:text-[22px] md:text-[24px] text-primary text-center">
							{item.title}
						</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default Features;
