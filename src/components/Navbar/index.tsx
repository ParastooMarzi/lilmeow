import { useState } from "react";
import { MenuOutline, CloseOutline } from "react-ionicons";
import { navItems } from "../../data";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<>
			{/* Top Navbar */}
			<div className="w-full bg-white h-[97px] flex items-center justify-between lg:px-14 px-5 shadow-sm z-50 relative">
				{/* Logo */}
				<div className="flex items-center h-full">
					<a href="/" className="h-full flex items-center">
						<img
							src={logo}
							alt="Lil' Meow logo"
							className="h-[72px] w-auto object-contain"
						/>
					</a>
					<div className="text-primary font-Mirza text-[32px] sm:text-[40px] md:text-[50px] mt-[-10px] sm:mt-[-15px] ml-2">
						Lil' Meow
					</div>
				</div>

				{/* Desktop Menu */}
				<div className="lg:flex items-center gap-14 hidden">
					{navItems.map((item) => (
						<a
							href={item.path}
							key={item.title}
							className="text-primary font-Lora uppercase cursor-pointer hover:text-secondary transition"
						>
							{item.title}
						</a>
					))}
				</div>

				{/* Mobile Toggle Icon */}
				<div className="block lg:hidden z-50" onClick={toggleMenu}>
					{menuOpen ? (
						<CloseOutline
							cssClasses="cursor-pointer !text-primary !fill-primary"
							width="35px"
							height="35px"
						/>
					) : (
						<MenuOutline
							cssClasses="cursor-pointer !text-primary !fill-primary"
							width="35px"
							height="35px"
						/>
					)}
				</div>
			</div>

			{/* Mobile Menu Overlay */}
			<div
				className={`lg:hidden fixed top-0 left-0 w-full h-full bg-white z-40 flex flex-col items-center justify-center gap-8 text-primary font-Lora text-xl transition-transform duration-300 ${
					menuOpen ? "translate-x-0" : "-translate-x-full"
				}`}
			>
				{navItems.map((item) => (
					<a
						href={item.path}
						key={item.title}
						className="uppercase hover:text-secondary transition"
						onClick={() => setMenuOpen(false)} // close menu on link click
					>
						{item.title}
					</a>
				))}
			</div>
		</>
	);
};

export default Navbar;
