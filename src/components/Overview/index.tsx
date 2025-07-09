import image16 from "../../assets/images/16.png";
import { FaInstagram, FaPhoneAlt } from "react-icons/fa";

const Overview = () => {
	return (
		<section
			id="Overview"
			className="relative w-full py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-br from-[#FFFFFF] to-[#F5F5F5] overflow-hidden flex justify-center"
		>
			<img
				src={image16}
				alt="stickers"
				className="absolute opacity-10 bottom-0 right-0 w-[300px] sm:w-[400px] md:w-[500px] lg:max-w-[600px] z-0 pointer-events-none"
			/>

			<div className="relative z-10 w-full max-w-[95%] sm:max-w-2xl md:max-w-3xl bg-white/80 backdrop-blur-md px-6 sm:px-8 md:px-10 py-8 sm:py-10 rounded-3xl shadow-2xl space-y-6 sm:space-y-8">
				<h2 className="font-Mirza text-3xl sm:text-4xl md:text-5xl text-primary text-center">
					մեր ստիկերները
				</h2>

				<p className="font-Lora text-primary text-base sm:text-lg leading-relaxed text-justify">
					Բացահայտեք Lil' meow-ի աշխարհը՝ լի գույնով, հումորով ու անհատականությամբ։ Մեր ստիկերները պատրաստվում են բարձրորակ,
					ջրադիմացկուն նյութերից և կարող են պատվիրել ցանկացած չափով ու ձևով՝ ըստ ձեր ցանկության։
					<br /><br />
					Պատվերներն ընդունվում են Instagram-ով կամ զանգով/հաղորդագրությամբ։ Ուղարկեք ձեր գաղափարը, չափերն ու նախընտրած դիզայնը — և մենք կհոգանք մնացածի մասին։
				</p>

				<div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-primary font-Lora text-sm sm:text-base">
					<a
						href="https://www.instagram.com/lilmeowstickers"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2 hover:underline hover:text-pink-600 transition"
					>
						<FaInstagram className="text-pink-600" />
						@lilmeowstickers
					</a>
					<a
						href="tel:+37493871053"
						className="flex items-center gap-2 hover:underline hover:text-green-600 transition"
					>
						<FaPhoneAlt className="text-green-600" />
						+374 93 871053
					</a>
				</div>
			</div>
		</section>
	);
};

export default Overview;
