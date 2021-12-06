import { TopLeveCategory, TopPageModel } from '../../intefaces/page.interface';
import { ProductModel } from '../../intefaces/product.interface';

export interface TopPageComponentProps extends Record<string, unknown> {
	firstCategory: TopLeveCategory;
	page: TopPageModel;
	products: ProductModel[];
}