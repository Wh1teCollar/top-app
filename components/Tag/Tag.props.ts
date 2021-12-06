import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from 'react';


export interface TagProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: ReactNode;
	size?: 's' | 'm';
	color?: 'ghost' | 'red' | 'grey' | 'green' | 'primary';
	href?: string;
}