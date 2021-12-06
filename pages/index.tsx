import { GetStaticProps } from 'next';
import React, { useState } from 'react';
import { Htag, Button, P, Tag, Rating, Input, TextArea } from '../components';
import { withLayout } from '../layout/Layout';
import axios from 'axios';
import { MenuItem } from '../intefaces/menu.interface';

function Home({ menu }: HomeProps): JSX.Element {

	const [rating, setRating] = useState<number>(1);

	return (
		<>
			<Htag tag='h1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, harum?</Htag>
			<Htag tag='h2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, harum?</Htag>
			<Htag tag='h3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, harum?</Htag>
			<hr />
			<Button appearance='primary' arrow='right'>Lorem ipsum</Button>
			<Button appearance='ghost' arrow='down'>Lorem ipsum</Button>
			<hr />
			<P size='s'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam, quia!</P>
			<P>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam, quia!</P>
			<P size='l'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam, quia!</P>
			<hr />
			<Tag size='s' color='ghost'>Ghost Small</Tag>
			<Tag color='ghost'>Ghost</Tag>
			<Tag size='s' color='red'>Red Small</Tag>
			<Tag color='red'>Red</Tag>
			<Tag size='s' color='grey'>Grey Small</Tag>
			<Tag color='grey'>Grey</Tag>
			<Tag size='s' color='green'>Green Small</Tag>
			<Tag color='green'>Green</Tag>
			<Tag size='s' color='primary'>Primary Small</Tag>
			<Tag color='primary'>Primary</Tag>
			<hr />
			<P>Rating 4 — not editable</P>
			<Rating rating={4} />
			<hr />
			<P>Rating — editable</P>
			<Rating rating={rating} isEditable setRating={setRating} />
			<hr />
			<Input placeholder='Test' />
			<hr />
			<TextArea placeholder='Test' />
		</>
	);
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const firstCategory = 0;
	const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', { firstCategory });
	return {
		props: {
			menu,
			firstCategory
		}
	};
};

interface HomeProps extends Record<string, unknown> {
	menu: MenuItem[],
	firstCategory: number;
}