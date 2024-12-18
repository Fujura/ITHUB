"use client";
import ItemList from "@/components/itemList";
import logo from "../public/svg/logo.svg";
import scheme from "../public/svg/scheme.svg";
import { motion } from "motion/react";

import Image from "next/image";
export default function Home() {
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
				>
					<Image src={scheme} alt="ithub scheme" width={500} />
				</motion.div>
			</h1>
			<ItemList />
		</div>
	);
}
