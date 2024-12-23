import { Iitems } from "@/interface/IItems";
import icnSvg from "@/public/svg/119-120/SVG/1.svg";
import icnLogo from "@/public/svg/119-120/SVG/2.svg";

import ciscoLogo from "@/public/svg/129/SVG/2.svg";
import ciscoSvg from "@/public/svg/129/SVG/3.svg";

import videoLogo from "@/public/svg/130-127/SVG/2.svg";
import videoSvg from "@/public/svg/130-127/SVG/1.svg";

import protoSvg from "@/public/svg/122/SVG/1.svg";

import ddsSvg from "@/public/svg/120B/SVG/1.svg";

import robotoSvg from "@/public/svg/120C/SVG/1.svg";

export const items: Iitems[] = [
	{
		id: 1,
		name: "Кабинет «Операторское мастерство»",
		modalTitle: "127 Кабинет «Операторское мастерство»",
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
		modalTitle: "119 Лаборатория GPON и ip телефонии",
		modalDescription:
			"Эта зона для демонстрации проектирования и создания информационных кабельных сетей, которые являются основой цифровой инфраструктуры. Демонстрация: Установка и тестирование кабельных соединений, настройка сетевого оборудования. Мастер-класс: Основы монтажа кабельных сетей и проверка соединений на пропускную способность. Интерактив: Гости смогут попробовать самостоятельно провести тестирование соединений с использованием инструментов, доступных в центре.",
		itLogo: icnLogo,
		svg: icnSvg,
	},
	{
		id: 6,
		name: "Информационные кабельные сети",
		modalTitle: "120А Информационные кабельные сети",
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