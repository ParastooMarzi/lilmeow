import {
	LogoInstagram,
	MailOutline,
} from "react-ionicons";

const Footer = () => {
	return (
		<footer className="w-full bg-[#E6E6FA] text-primary py-16 px-5 md:px-10">
			<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
				{/* Contact Form */}
				<div className="flex flex-col gap-6">
					<h2 className="text-[42px] font-Mirza">Կապ մեզ հետ</h2>
					<p className="text-[18px] font-Lora leading-8">
						Ունե՞ք հարց, գաղափար կամ պատրաստ եք պատվիրել։ Ուղարկեք մեզ հաղորդագրություն՝
						հեշտությամբ և արագ 🐾
					</p>
					<form
						action="https://formspree.io/f/FORM_URL_HERE"
						method="POST"
						className="flex flex-col gap-5"
					>
						<input
							type="text"
							name="name"
							required
							placeholder="Անուն"
							className="bg-white border border-[#E0DDD9] rounded-xl px-5 py-3 font-Lora text-[16px] placeholder:text-[#A49E99] outline-none"
						/>
						<input
							type="email"
							name="email"
							required
							placeholder="Էլ. հասցե"
							className="bg-white border border-[#E0DDD9] rounded-xl px-5 py-3 font-Lora text-[16px] placeholder:text-[#A49E99] outline-none"
						/>
						<textarea
							name="message"
							required
							rows={4}
							placeholder="Հաղորդագրություն"
							className="bg-white border border-[#E0DDD9] rounded-xl px-5 py-3 font-Lora text-[16px] placeholder:text-[#A49E99] outline-none resize-none"
						></textarea>
						<button
							type="submit"
							className="bg-[#9370DB] text-white rounded-full py-3 px-8 text-lg font-Lora w-fit hover:bg-[#800080] transition"
						>
							Ուղարկել ✉️
						</button>
					</form>
				</div>

				{/* Social & Info */}
				<div className="flex flex-col gap-8">
					<h2 className="text-[42px] font-Mirza">Հետադարձ կապ</h2>
					<div className="flex items-center gap-3">
						<MailOutline cssClasses="!text-primary !fill-primary" />
						<a
							href="mailto:lilmeowstickers@gmail.com"
							className="font-Lora text-lg hover:underline"
						>
							lilmeowstickers@gmail.com
						</a>
					</div>

					<div>
						<h3 className="text-[32px] font-Mirza mb-4">Սոցիալական ցանցեր</h3>
						<div className="flex gap-5 items-center">
							<a
								href="https://instagram.com/lilmeowstickers"
								target="_blank"
								rel="noopener noreferrer"
							>
								<LogoInstagram cssClasses="!text-primary !fill-primary hover:scale-110 transition" />
							</a>
							
						</div>
					</div>

					<div className="text-sm font-Lora mt-6">
						<p>Հասցե՝ Երևան, Հայաստան</p>
						<p>Հեռ․՝ <a href="tel:+37493871053" className="hover:underline">+374 93 871053</a></p>
					</div>
				</div>
			</div>

			{/* Bottom copyright */}
			<div className="border-t border-[#E8E2D8] mt-14 pt-6 text-center">
				<span className="text-[15px] font-Lora">
					© 2025 | Lil’ Meow — Ստեղծված սիրով Երևանում ❤️
				</span>
			</div>
		</footer>
	);
};

export default Footer;
