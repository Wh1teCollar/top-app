import { GetStaticProps } from 'next';
import React, { useState } from 'react';
import { Htag } from '../components';
import { withLayout } from '../layout/Layout';
import axios from 'axios';
import { MenuItem } from '../intefaces/menu.interface';

function Search(): JSX.Element {

	const [rating, setRating] = useState<number>(1);

	return (
		<>
			<Htag tag='h1'>Search</Htag>
			<hr />
		</>
	);
}

export default withLayout(Search);

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