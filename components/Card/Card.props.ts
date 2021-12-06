import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from 'react';


export interface CardProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: ReactNode;
	color?: 'white' | 'blue'
}