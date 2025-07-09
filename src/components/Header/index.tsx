import bg2 from "../../assets/images/bg2.png";

const Header = () => {
	return (
		<section className="w-full min-h-screen bg-[#FFE164] flex flex-col-reverse lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-24 py-8 sm:py-10 overflow-hidden">

			{/* Left Text Section */}
			<div className="flex-1 flex flex-col gap-6 sm:gap-8 items-start justify-center text-primary text-center sm:text-left">
				<h1 className="font-Mirza text-[32px] sm:text-[40px] md:text-[48px] lg:text-[70px] leading-tight tracking-tight">
					Քնքշություն, <span className="text-[#9370DB]">արվեստ</span> ու հումոր՝
					<br className="hidden sm:block" />
					ամեն ինչ Lil' Meow-ում:
				</h1>

				<p className="font-Lora text-[16px] sm:text-[18px] lg:text-[20px] max-w-[600px] leading-relaxed text-[#3d2d00]">
					Պատվիրիր քո ստիկերը՝ ցանկացած չափով ու դիզայնով։ <br />
					Ձեր երևակայությունը՝ մեր թղթին․ Lil’ Meow-ը պատրաստ է կյանքի կոչել քո գաղափարները։
				</p>

				<div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-2 w-full sm:w-auto">
					<a
						href="https://instagram.com/lilmeowstickers"
						target="_blank"
						rel="noopener noreferrer"
						className="bg-white text-primary border border-primary px-6 py-3 rounded-full font-Lora text-[16px] hover:shadow-lg hover:scale-105 transition-transform duration-200 w-full sm:w-auto text-center"
					>
						📸 @lilmeowstickers
					</a>

					<a
						href="tel:+37493871053"
						className="text-[#3d2d00] underline font-Lora text-[16px] hover:text-[#FF5E9C] transition w-full sm:w-auto text-center"
					>
						📞 +374 93 871053
					</a>
				</div>
			</div>

			{/* Right Image Section */}
			<div className="flex-1 flex justify-center items-center mb-8 lg:mb-0">
				<div className="w-[80%] max-w-[400px] sm:max-w-[500px]">
					<img
						src={bg2}
						alt="Lil Meow Stickers"
						className="w-full h-auto object-contain"
					/>
				</div>
			</div>
		</section>
	);
};

export default Header;
