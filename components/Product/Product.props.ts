import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ProductModel } from '../../intefaces/product.interface';


export interface ProductProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	product: ProductModel
}