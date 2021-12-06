import { ReviewFormProps } from './ReviewForm.props';
import styles from './ReviewForm.module.css';
import cn from 'classnames';
import { Button, Input, Rating, TextArea } from '..';
import React from 'react';
import CloseIcon from './close.svg';
import { IReviewForm } from './ReviewForm.interface';
import { useForm, Controller } from 'react-hook-form';

export const ReviewForm = ({ productId, className, ...props }: ReviewFormProps): JSX.Element => {
	const { register, control, handleSubmit, formState: { errors } } = useForm<IReviewForm>();
	const onSubmit = (data: IReviewForm) => { console.log(data); };

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className={cn(styles.reviewForm, className)} {...props}>
				<Input
					{...register('name', { required: { value: true, message: 'Заполните имя' } })}
					className={styles.name}
					placeholder={'Имя'}
					error={errors.name}
				/>
				<Input
					{...register('title')}
					className={styles.title}
					placeholder={'Заголовок'}
				/>
				<div className={styles.rating}>
					<span className={styles.rateText}>Оценка:</span>
					<Controller
						control={control}
						name='rating'
						defaultValue={0}
						render={({ field }) => (
							<Rating
								isEditable
								rating={field.value}
								setRating={field.onChange}
								ref={field.ref}
							/>
						)}
					/>
				</div>
				<TextArea
					{...register('description')}
					className={styles.description}
					placeholder={'Текст отзыва'}
				/>
				<div className={styles.submit}>
					<Button appearance='primary'>Отправить</Button>
					<span className={styles.info}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
				</div>
			</div>
			<div className={styles.success}>
				<div className={styles.successTitle}>Ваш отзыв отправлен</div>
				<div>
					Спасибо, Ваш отзвыв будет опобликован после проверки.
				</div>
				<CloseIcon className={styles.close} />
			</div>
		</form >
	);
};