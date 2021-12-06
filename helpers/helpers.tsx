import CoursesIcon from './icons/courses.svg';
import ServicesIcon from './icons/cloud.svg';
import ProductsIcon from './icons/box.svg';
import BooksIcon from './icons/book.svg';
import { TopLeveCategory } from '../intefaces/page.interface';
import { firstLevelMenuItem } from '../intefaces/menu.interface';
import { resourceUsage } from 'process';

export const firstLevelMenu: firstLevelMenuItem[] = [
	{ route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLeveCategory.Courses },
	{ route: 'services', name: 'Сервисы', icon: <ServicesIcon />, id: TopLeveCategory.Services },
	{ route: 'books', name: 'Книги', icon: <BooksIcon />, id: TopLeveCategory.Books },
	{ route: 'products', name: 'Товары', icon: <ProductsIcon />, id: TopLeveCategory.Products }
];

export const priceRu = (price: number): string => price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ').concat(' ₴');

export const butifyNumber = (hhnumber: number): string => hhnumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

export const declOfNum = (number: number, titles: [string, string, string]): string => {
	const cases = [2, 0, 1, 1, 1, 2]
	return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
};