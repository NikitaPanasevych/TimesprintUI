'use client';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles.module.scss';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';
import { toggleDrawer } from '@/redux/features/drawer-slice';
import { toggleSearch } from '@/redux/features/search.slice';
import { RootState } from '@/redux/store';
import { logout } from '@/redux/features/authSlice';

export default function Header() {
	const dispatch = useDispatch();
	const isAuth = useSelector((state: RootState) => state.authReducer.isAuthenticated);

	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<div className={styles.header_links}>
					<div onClick={() => dispatch(toggleDrawer())} className={styles.header_links_icon}>
						<MenuIcon sx={{ color: 'white' }} />
					</div>
					<div onClick={() => dispatch(toggleSearch())} className={styles.header_links_icon}>
						<SearchIcon sx={{ color: 'white' }} />
					</div>
				</div>
				<div className={styles.header_center}>
					<Link href="/">Timesprint</Link>
				</div>
				<div className={styles.header_btns}>
					{!isAuth ? (
						<button className={styles.header_btns_signup}>
							<Link href="/auth/enter-email">Sign Up</Link>
						</button>
					) : (
						<button onClick={() => dispatch(logout())} className={styles.header_btns_signup}>
							<span>Logout</span>
						</button>
					)}
				</div>
			</header>
		</div>
	);
}
