import React, { useReducer } from 'react';
import { Htag, Tag, HhData, Advantages, Card, Sort, Product } from '../../components/index';
import { TopPageComponentProps } from './TopPageComponent.props';
import styles from './TopPageComponent.module.css';
import { TopLeveCategory } from '../../intefaces/page.interface';
import { SortEnum } from '../../components/Sort/Sort.props';
import { sortReducer } from './sort.reduser';

export const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps): JSX.Element => {
	const [{ products: sortedProducts, sort }, dispathSort] = useReducer(sortReducer, { products, sort: SortEnum.Rating });
	const setSort = (sort: SortEnum) => {
		dispathSort({ type: sort });
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.title}>
				<Htag tag='h1'>{page.title}</Htag>
				{products && <Tag color='grey' size='m'> {products.length}</Tag>}
				<Sort sort={sort} setSort={setSort} />
			</div>

			<div>
				{sortedProducts && sortedProducts.map(p => (<Product product={p} key={p._id} />))}
			</div>

			<div className={styles.hhTitle}>
				<Htag tag='h2'>Вакансии {page.category}</Htag>
				<Tag color='red' size='m'>hh.ru</Tag>
			</div>
			{firstCategory == TopLeveCategory.Courses && page.hh && <HhData {...page.hh} />}

			{page.advantages && page.advantages.length > 0 && <>
				<Htag tag='h2'>Преимущества</Htag>
				<Advantages advantages={page.advantages} />
			</>}

			{page.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{ __html: page.seoText }} />}
			<Htag tag='h2'>Получаемые навыки</Htag>
			{page.tags.map(t => <Tag color='primary' key={t}>{t}</Tag>)}
		</div>
	);
};