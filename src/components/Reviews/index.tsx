import { Star } from "react-ionicons";
import { reviews } from "../../data";

const Reviews = () => {
	return (
		<section
			id="Reviews"
			className="w-full bg-white py-12 sm:py-20 px-4 sm:px-6 flex flex-col items-center"
		>
			<h2 className="font-Mirza text-primary text-center text-[36px] sm:text-[48px] md:text-[60px] mb-10 sm:mb-16">
				Մեր հաճախորդների կարծիքները
			</h2>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl w-full">
				{reviews.map((review, index) => (
					<div
						key={review.name}
						className="bg-white border border-[#8A2BE2] rounded-2xl shadow-md p-6 sm:p-8 flex flex-col justify-between transform transition duration-300 hover:scale-105 hover:shadow-xl"
						style={{
							animation: `fadeInUp 0.5s ease ${index * 0.15}s both`,
						}}
					>
						<p className="text-primary font-Lora text-[15px] sm:text-base leading-7 mb-5">
							“{review.content}”
						</p>
						<div className="flex flex-col gap-2">
							<div className="flex flex-wrap items-center gap-2 text-primary font-Lora font-semibold text-[14px] sm:text-[16px]">
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
