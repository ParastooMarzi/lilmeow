import { Star } from "react-ionicons";
import { reviews } from "../../data";

const Reviews = () => {
	return (
		<section
			id="Reviews"
			className="w-full bg-[#FFFFF] py-24 px-5 flex flex-col items-center"
		>
			<h2 className="font-Mirza text-[64px] text-primary text-center mb-16">
				Մեր հաճախորդների կարծիքները
			</h2>

			<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 max-w-7xl w-full">
				{reviews.map((review, index) => (
					<div
						key={review.name}
						className="bg-white border border-[#8A2BE2] rounded-2xl shadow-md p-8 flex flex-col justify-between transform transition duration-300 hover:scale-105 hover:shadow-xl"
						style={{
							animation: `fadeInUp 0.5s ease ${index * 0.2}s both`,
						}}
					>
						<p className="text-primary font-Lora text-base leading-7 mb-6">
							“{review.content}”
						</p>
						<div className="flex flex-col gap-2">
							<div className="flex items-center gap-2 text-primary font-Lora font-semibold text-[16px]">
								<span>{review.name}</span>
								<span>-</span>
								<span>{review.date}</span>
							</div>
							<div className="flex gap-1">
								{[...Array(5)].map((_, i) => (
									<Star
										key={i}
										cssClasses="!text-[#FFD700] !fill-[#FFD700]"
										width="20px"
										height="20px"
									/>
								))}
							</div>
						</div>
					</div>
				))}
			</div>

			<style>
				{`
					@keyframes fadeInUp {
						from {
							opacity: 0;
							transform: translateY(20px);
						}
						to {
							opacity: 1;
							transform: translateY(0);
						}
					}
				`}
			</style>
		</section>
	);
};

export default Reviews;
