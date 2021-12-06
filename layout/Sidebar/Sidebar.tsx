import { SidebarProps } from './Sidebar.props';
import styles from './Sidebar.module.css';
import React from 'react';
import { Menu } from '../Menu/Menu';
import Logo from '../Logo.svg';
import cn from 'classnames';
import { Search } from '../../components';
import { useRouter } from 'next/router';

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {

	return (
		<div className={cn(className, styles.sidebar)} {...props} >
			<Logo className={styles.logo} />
			<Search />
			<Menu />
		</div>
	);
};

