import { ProductProps } from './Product.props';
import styles from './Product.module.css';
import cn from 'classnames';
import React, { useState } from 'react';
import { Button, Card, Divider, Rating, Review, ReviewForm, Tag } from '..';
import { declOfNum, priceRu } from '../../helpers/helpers';
import Image from 'next/image';

export const Product = ({ product, className, ...props }: ProductProps): JSX.Element => {
	const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);
	const [isMoreOpened, setIsMoreOpened] = useState<boolean>(false);
	return (
		<div {...props}>
			<Card className={cn(styles.product, className)} >
				<div className={styles.logo}>
					<Image
						src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
						alt={product.title}
						width={70}
						height={70}
					/>
				</div>
				<div className={styles.title}>{product.title}</div>
				<div className={styles.price}>
					{priceRu(product.price)}
					{product.oldPrice && <Tag className={styles.oldPrice} size='s' color='green'>{priceRu(product.price - product.oldPrice)}</Tag>}
				</div>
				<div className={styles.credit}>
					{priceRu(product.credit)}/
					<span className={styles.month}>мес</span>
				</div>
				<div className={styles.rating}><Rating rating={product.reviewAvg ?? product.initialRating} /></div>
				<div className={styles.tag}>{product.categories.map(c => <Tag key={c} size='s' color='ghost' className={styles.categorytag}>{c}</Tag>)}</div>
				<div className={styles.priceTitle}>цена</div>
				<div className={styles.creditTitle}>в кредит</div>
				<div className={styles.rateTitle}>{product.reviewCount} {declOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}</div>

				<Divider className={styles.hr} />

				<div className={styles.description}>{product.description}</div>
				<div className={styles.feature}>
					{product.characteristics.map(c => (
						<div key={c.name} className={styles.characteristics}>
							<span className={styles.characteristicsName}>{c.name}</span>
							<span className={styles.characteristicsDots}></span>
							<span className={styles.characteristicsValue}>{c.value}</span>
						</div>
					))}
				</div>
				<div className={styles.advBlock}>
					{product.advantages &&
						<div className={styles.advantages}>
							<div className={styles.advantagesTitle}>Преимущества</div>
							<div className={styles.advantagesList}>{product.advantages}</div>
						</div>
					}
					{product.disadvantages &&
						<div className={styles.disadvantages}>
							<div className={styles.disadvantagesTitle}>Недостатки</div>
							<div className={styles.disadvantagesList}>{product.disadvantages}</div>
						</div>
					}
				</div>

				<Divider className={cn(styles.hr, styles.hr2)} />

				{product.html &&
					<>
						<div
							className={cn(styles.seoText, {
								[styles.seoTextOpened]: isMoreOpened,
								[styles.seoTextClosed]: !isMoreOpened,
							})}
							dangerouslySetInnerHTML={{ __html: product.html }}
						></div>
						<Divider
							className={cn(styles.hr, styles.hr3, {
								[styles.hrOpened]: isMoreOpened,
								[styles.hrClosed]: !isMoreOpened,
							})}
						/>
					</>
				}

				<div className={styles.actions}>
					<Button
						appearance='primary'
						onClick={() => setIsMoreOpened(!isMoreOpened)}
					>Подробнее о курсе</Button>
					<Button
						appearance='ghost'
						arrow={isReviewOpened ? 'down' : 'right'}
						className={styles.reviewButton}
						onClick={() => setIsReviewOpened(!isReviewOpened)}
					> {product.reviewCount > 0 ? `Читать отзывы (${product.reviewCount})` : 'Оставить отзыв'}</Button>
				</div>
			</Card>
			<Card color='blue' className={cn(styles.reviews, {
				[styles.opened]: isReviewOpened,
				[styles.closed]: !isReviewOpened,
			})}>
				{product.reviews.map(r => (
					<div key={r._id} >
						<Review review={r} />
						<Divider className={styles.hr} />
					</div>
				))}


				<ReviewForm productId={product._id} />
			</Card>
		</div >
	);
};