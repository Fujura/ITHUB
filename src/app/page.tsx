"use client";
import ItemList from "@/components/itemList";
import logo from "../public/svg/logo.svg";
import scheme from "../public/svg/scheme.svg";
import { motion } from "motion/react";

import Image from "next/image";
import { useState } from "react";
import { Iitems } from "@/interface/IItems";
import { items } from "@/data/ItemsData";

export default function Home() {
	const [selectedItem, setSelectedItem] = useState<Iitems | null>(null);
	const openModal = (id: number) => {
		const data = items.filter((item: Iitems) => item.id === id);
		setSelectedItem(data[0]);
		console.log(data);
	};
	return (
		<div className="min-h-screen  bg-[#2f2178] text-white p-6  mx-auto flex flex-col items-center justify-center">
			<h1 className="text-3xl font-bold mb-6 text-[#2f2178] flex flex-col gap-10  items-center">
				<motion.div
					initial={{ opacity: 0, translateY: -200 }} // Изначальное положение элемента ниже
					animate={{ opacity: 1, translateY: 0 }} // Когда элемент появляется, он сдвигается в нормальное положение
					viewport={{ once: true }} // Анимация произойдет только один раз, когда элемент появится в поле зрения
					transition={{ duration: 0.5, ease: "easeInOut" }} // Плавное движение
				>
					<Image src={logo} alt="ithub logo" width={300} />
				</motion.div>
				<motion.div
					initial={{ opacity: 0, scale: 0 }} // Изначальное положение элемента ниже
					animate={{ opacity: 1, scale: 1 }} // Когда элемент появляется, он сдвигается в нормальное положение
					viewport={{ once: true }} // Анимация произойдет только один раз, когда элемент появится в поле зрения
					transition={{ duration: 0.5, ease: "easeInOut" }} // Плавное движение
					className="relative"
				>
					<Image src={scheme} alt="ithub scheme" width={500} />
					<div
						className=" absolute top-10 right-12 w-[70px] h-[40px] text-transparent cursor-pointer"
						onClick={() => openModal(1)}
					>
						1
					</div>
					<div
						className="cursor-pointer absolute top-36 right-0.5 w-[55px] h-[70px]  text-transparent"
						onClick={() => openModal(2)}
					>
						2
					</div>
					<div
						className="cursor-pointer absolute top-36 right-[60px] w-[55px] h-[70px]  text-transparent"
						onClick={() => openModal(3)}
					>
						3
					</div>

					<div
						className="cursor-pointer absolute top-36 right-[140px] w-[90px] h-[50px]  text-transparent"
						onClick={() => openModal(4)}
					>
						4
					</div>

					<div
						className="cursor-pointer absolute top-28 w-[110px] h-[35px]  text-transparent"
						onClick={() => openModal(5)}
					>
						5
					</div>
					<div
						className="cursor-pointer absolute top-20 w-[110px] h-[35px]  text-transparent"
						onClick={() => openModal(6)}
					>
						6
					</div>
					<div
						className="cursor-pointer absolute top-[41px] w-[110px] h-[40px]  text-transparent"
						onClick={() => openModal(7)}
					>
						7
					</div>

					<div
						className="cursor-pointer absolute top-[0] w-[110px] h-[43px]  text-transparent"
						onClick={() => openModal(8)}
					>
						7
					</div>
					<div></div>
				</motion.div>
			</h1>
			<ItemList selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
		</div>
	);
}
