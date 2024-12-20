"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import logo from "@/public/svg/119-120/SVG/3.svg";
import upperElement from "@/public/svg/119-120/SVG/5.svg";
import underElement from "@/public/svg/119-120/SVG/6.svg";
import lineElement from "@/public/svg/119-120/SVG/4.svg";
import background from "@/public/svg/119-120/SVG/8.svg";
import backgroundFrame from "@/public/svg/119-120/SVG/7.svg";

import icnSvg from "@/public/svg/119-120/SVG/1.svg";
import icnLogo from "@/public/svg/119-120/SVG/2.svg";

import ciscoLogo from "@/public/svg/129/SVG/2.svg";
import ciscoSvg from "@/public/svg/129/SVG/3.svg";

import videoLogo from "@/public/svg/130-127/SVG/2.svg";
import videoSvg from "@/public/svg/130-127/SVG/1.svg";

import protoSvg from "@/public/svg/122/SVG/1.svg";

import ddsSvg from "@/public/svg/120B/SVG/1.svg";

import robotoSvg from "@/public/svg/120C/SVG/1.svg";

interface Iitems {
	id: number;
	name: string;
	modalTitle?: string;
	modalDescription?: string;
	itLogo?: string;
	svg: string;
}
const items: Iitems[] = [
	{
		id: 1,
		name: "Кабинет «Операторское мастерство»",
		modalTitle: "130 Кабинет «Операторское мастерство»",
		modalDescription:
			"В этой зоне студенты могут обучаться основам операторского искусства, работе с камерой, съемочному процессу и монтажу видео. Демонстрация: Презентация видеопроектов, созданных студентами, обзор профессионального оборудования. Мастер-класс: Основы работы с видеокамерой и техники композиции кадра. Интерактив: Гости могут сами попробовать снять короткий видеоролик или участвовать в создании небольшого проекта.",
		itLogo: videoLogo,
		svg: videoSvg,
	},
	{
		id: 2,
		name: "Лаборатория «Сетевая академия Cisco»",
		modalTitle: "129 Лаборатория «Сетевая академия Cisco»",
		modalDescription:
			"Лаборатория предоставляет практические навыки по построению, настройке и диагностике сетевых систем, используя курсы и оборудование Cisco. Демонстрация: Настройка сетевых соединений, виртуальные лаборатории для отработки команд и настройки маршрутизаторов. Мастер-класс: Установка и базовая настройка маршрутизаторов и коммутаторов. Интерактив: Участники могут пройти короткий тест, основанный на программе Cisco, и получить базовые навыки сетевой настройки.",
		itLogo: ciscoLogo,
		svg: ciscoSvg,
	},
	{
		id: 3,
		name: "Кабинет «Операторское мастерство»",
		modalTitle: "130 Кабинет «Операторское мастерство»",
		modalDescription:
			"В этой зоне студенты могут обучаться основам операторского искусства, работе с камерой, съемочному процессу и монтажу видео. Демонстрация: Презентация видеопроектов, созданных студентами, обзор профессионального оборудования. Мастер-класс: Основы работы с видеокамерой и техники композиции кадра. Интерактив: Гости могут сами попробовать снять короткий видеоролик или участвовать в создании небольшого проекта.",
		itLogo: videoLogo,
		svg: videoSvg,
	},
	{
		id: 4,
		name: "Лаборатория 3D моделирования и прототипирования",
		modalTitle: "122 Лаборатория 3D моделирования и прототипирования",
		modalDescription:
			"Лаборатория предоставляет студентам возможность работать с программами для 3D-моделирования и использовать оборудование для создания прототипов, таких как 3D-принтеры. Демонстрация: Показ моделей, разработанных и напечатанных на 3D-принтере, процесс работы на 3D-принтере. Мастер-класс: Основы создания 3D-модели в программе и подготовка её для печати. Интерактив: Гости смогут создать простую 3D-модель и увидеть, как она печатается, или выбрать готовую модель для наблюдения за процессом печати.",
		svg: protoSvg,
	},
	{
		id: 5,
		name: "Информационные кабельные сети",
		modalTitle: "119-120А Информационные кабельные сети",
		modalDescription:
			"Эта зона для демонстрации проектирования и создания информационных кабельных сетей, которые являются основой цифровой инфраструктуры. Демонстрация: Установка и тестирование кабельных соединений, настройка сетевого оборудования. Мастер-класс: Основы монтажа кабельных сетей и проверка соединений на пропускную способность. Интерактив: Гости смогут попробовать самостоятельно провести тестирование соединений с использованием инструментов, доступных в центре.",
		itLogo: icnLogo,
		svg: icnSvg,
	},
	{
		id: 6,
		name: "Информационные кабельные сети",
		modalTitle: "119-120А Информационные кабельные сети",
		modalDescription:
			"Эта зона для демонстрации проектирования и создания информационных кабельных сетей, которые являются основой цифровой инфраструктуры. Демонстрация: Установка и тестирование кабельных соединений, настройка сетевого оборудования. Мастер-класс: Основы монтажа кабельных сетей и проверка соединений на пропускную способность. Интерактив: Гости смогут попробовать самостоятельно провести тестирование соединений с использованием инструментов, доступных в центре.",
		itLogo: icnLogo,
		svg: icnSvg,
	},
	{
		id: 7,
		name: "Digital Development Studio",
		svg: ddsSvg,
	},
	{
		id: 8,
		name: "Электроника и мобильная робототехника",
		modalTitle: "120С Электроника и мобильная робототехника",
		modalDescription:
			"Лаборатория электроники и мобильной робототехники ориентирована на практическое освоение микропроцессорных технологий, основ программирования и механики для разработки роботизированных систем. Демонстрация: Презентация созданных студентами проектов, таких как роботизированных систем и системы автоматизации, а также  собственной платформа Mine Circuit — виртуальная среда на базе Minecraft, которая обеспечивает безопасное пространство для изучения электроники. Платформа позволяет студентам осваивать основы схемотехники в интерактивном 3D-формате, делая обучение интересным и доступным. Мастер-класс: Программирование простого движения робота, работа на платформе Mine Circuit. Интерактив: Гости смогут управлять роботами или даже запрограммировать простую команду для робота и собрать виртуальную схему с помощью Mine Circuit.",
		svg: robotoSvg,
	},
];

const ItemList = () => {
	const [selectedItem, setSelectedItem] = useState<Iitems | null>(null);

	useEffect(() => {
		if (selectedItem) {
			document.body.style.overflow = "hidden"; // Блокируем прокрутку
		} else {
			document.body.style.overflow = "auto"; // Разрешаем прокрутку
		}
	}, [selectedItem]);
	const openModal = (item: Iitems) => {
		if (item) setSelectedItem(item);
	};

	const closeModal = () => {
		setSelectedItem(null);
	};

	// Закрытие окна при клике на фон
	const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
		const target = e.target as HTMLElement; // Приводим e.target к HTMLElement
		if (target.id === "modal-background") {
			closeModal();
		}
	};

	return (
		<div className="bg-[#2f2178] text-white  p-2 sm:p-6 rounded-lg max-w-xl mx-auto">
			{items.map((item) => (
				<motion.div
					key={item.id}
					initial={{ opacity: 0, translateY: 200 }} // Изначальное положение элемента ниже
					animate={{ opacity: 1, translateY: 0 }} // Когда элемент появляется, он сдвигается в нормальное положение
					viewport={{ once: true }} // Анимация произойдет только один раз, когда элемент появится в поле зрения
					transition={{
						duration: 0.5,
						ease: "easeInOut",
						delay: Number(`0.${item.id}`),
					}} // Плавное движение
				>
					<div
						className="flex items-center bg-[#4b39c3] my-3 p-3 rounded-3xl cursor-pointer hover:bg-[#3b2a9c] animate-fadeIn duration-500 transition-opacity"
						onClick={() => openModal(item)}
					>
						<span className="bg-[#ffcb05] text-[#2f2178] font-bold rounded-full min-w-9 w-9 h-9 flex items-center justify-center mr-4">
							{item.id}
						</span>
						<span className="text-sm sm:text-lg">{item.name}</span>
					</div>
				</motion.div>
			))}

			{/* Модальное окно с обработкой клика на фон */}
			{selectedItem && (
				<div
					id="modal-background"
					className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
					onClick={handleBackgroundClick}
				>
					<div
						style={{
							backgroundImage: `url(${background.src})`,
							backgroundSize: "cover",
							backgroundPosition: "center",
						}}
						className="relative bg-white text-white p-6 rounded-lg max-w-md w-full shadow-lg transform transition-all duration-300 scale-95 opacity-0 animate-[fadeIn_0.3s_ease-out_forwards]
					  h-[700px] max-h-[90vh] overflow-y-auto overflow-x-hidden -z-10 "
					>
						{/* Статичный фон и вставки */}
						<div className="fixed inset-0 ">
							<div
								style={{
									backgroundImage: `url(${backgroundFrame.src})`,
									backgroundSize: "cover",
									backgroundPosition: "center",
								}}
								className="absolute inset-0 z-[-1] m-8"
							></div>

							<motion.div
								initial={{ opacity: 0, translateX: -200 }} // Изначальное положение элемента ниже
								whileInView={{ opacity: 1, translateX: 0 }} // Когда элемент появляется, он сдвигается в нормальное положение
								viewport={{ once: true }} // Анимация произойдет только один раз, когда элемент появится в поле зрения
								transition={{ duration: 0.4, ease: "easeInOut" }} // Плавное движение
							>
								<Image
									src={upperElement}
									alt="Upper Element"
									className="absolute top-0 left-0 w-[120px] h-auto z-[-1]"
								/>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, translateX: 100 }} // Изначальное положение элемента сдвиг в сторону
								whileInView={{ opacity: 1, translateX: 0 }} // Когда элемент появляется, он сдвигается в нормальное положение
								viewport={{ once: true }} // Анимация произойдет только один раз, когда элемент появится в поле зрения
								transition={{ duration: 0.4, ease: "easeInOut" }} // Плавное движение
								className="absolute bottom-0 right-0"
							>
								<Image
									src={underElement}
									alt="Under Element"
									className="w-[120px] h-auto z-[-1]"
								/>
							</motion.div>

							<motion.div
								initial={{ opacity: 0 }} // Изначальное положение элемента ниже
								whileInView={{ opacity: 1 }} // Когда элемент появляется, он сдвигается в нормальное положение
								viewport={{ once: true }} // Анимация произойдет только один раз, когда элемент появится в поле зрения
								transition={{ duration: 0.6, ease: "easeInOut" }} // Плавное движение
							>
								<Image
									src={lineElement}
									alt="Line Element"
									className="absolute bottom-2 left-8 h-24 w-auto z-[-1]"
								/>
							</motion.div>

							<button
								onClick={closeModal}
								className="flex absolute top-0.5 right-2
							text-3xl z-50"
							>
								x
							</button>
						</div>

						{/* Контент модалки с SVG и фоном */}
						<motion.div
							initial={{ opacity: 0, scale: 0 }} // Изначальное положение элемента ниже
							animate={{ opacity: 1, scale: 1 }} // Когда элемент появляется, он сдвигается в нормальное положение
							viewport={{ once: true }} // Анимация произойдет только один раз, когда элемент появится в поле зрения
							transition={{ duration: 0.8, ease: "easeInOut" }} // Плавное движение
							className="flex flex-col items-center relative"
						>
							<Image
								src={logo}
								alt="logo"
								width={200}
								height={100}
								className="mt-10 w-[60%]"
							/>
							{selectedItem.itLogo && (
								<Image
									src={selectedItem.itLogo}
									width={180}
									alt={selectedItem.name}
									className="mt-10"
								/>
							)}
							<Image
								src={selectedItem.svg}
								width={160}
								alt={selectedItem.name}
								className="mt-10"
							/>
						</motion.div>

						{/* Текстовый контент, который появляется после прокрутки */}
						<div className="mt-40 pt-10 pb-10">
							<motion.div
								initial={{ opacity: 0, translateY: 200 }} // Изначальное положение элемента ниже
								whileInView={{ opacity: 1, translateY: 0 }} // Когда элемент появляется, он сдвигается в нормальное положение
								viewport={{ once: true }} // Анимация произойдет только один раз, когда элемент появится в поле зрения
								transition={{ duration: 0.4, ease: "easeInOut" }} // Плавное движение
							>
								<h2
									className="text-2xl font-bold mb-4 text-center"
									style={{ fontFamily: "Ubuntu, sans-serif" }}
								>
									{selectedItem.modalTitle}
								</h2>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, translateY: 250 }} // Изначальное положение элемента ниже
								whileInView={{ opacity: 1, translateY: 0 }} // Когда элемент появляется, он сдвигается в нормальное положение
								viewport={{ once: true }} // Анимация произойдет только один раз, когда элемент появится в поле зрения
								transition={{ duration: 0.4, ease: "easeInOut" }} // Плавное движение
							>
								<p
									className="mb-4 min-w-[100%]"
									style={{ fontFamily: "Ubuntu, sans-serif" }}
								>
									{selectedItem.modalDescription}
								</p>
							</motion.div>
							<motion.div
								initial={{ opacity: 0 }} // Изначальное положение элемента ниже
								whileInView={{ opacity: 1 }} // Когда элемент появляется, он сдвигается в нормальное положение
								viewport={{ once: true }} // Анимация произойдет только один раз, когда элемент появится в поле зрения
								transition={{ duration: 1, ease: "easeInOut" }} // Плавное движение
							>
								<button
									onClick={closeModal}
									className="bg-[#2f2178] text-white px-4 py-2 rounded hover:bg-[#1f1658] transition-colors duration-300"
								>
									Закрыть
								</button>
							</motion.div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default ItemList;
