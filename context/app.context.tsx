import { createContext, PropsWithChildren, useState } from 'react';
import { MenuItem } from '../intefaces/menu.interface';
import { TopLeveCategory } from '../intefaces/page.interface';

export interface IAppContext {
	menu: MenuItem[];
	firstCategory: TopLeveCategory;
	setMenu?: (newMenu: MenuItem[]) => void;
}

export const AppContext = createContext<IAppContext>({ menu: [], firstCategory: TopLeveCategory.Courses });


export const AppContextProvider = ({ menu, firstCategory, children }: PropsWithChildren<IAppContext>): JSX.Element => {
	const [menuState, setMenuState] = useState<MenuItem[]>(menu);
	const setMenu = (newMenu: MenuItem[]) => {
		setMenuState(newMenu);
	};

	return <AppContext.Provider value={{ menu: menuState, firstCategory, setMenu }}>
		{children}
	</AppContext.Provider>;
};