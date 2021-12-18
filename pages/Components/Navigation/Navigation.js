import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import { Container, Grid } from '@mui/material';
import styles from '../../../styles/Navigation.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function ButtonAppBar() {
	return (
		<AppBar position='sticky' color='transparent' className={styles.navbar}>
			<Container maxWidth='xl'>
				<Grid container spacing={2} sx={{ alignItems: 'center' }}>
					<Grid item md={2}>
						<Image src='/images/logo.svg' alt='logo' height={52} width={182} />
					</Grid>
					<Grid item md={8} sx={{ textAlign: 'right' }} className={styles.menu}>
						<Link href='/pizza'>
							<a>Pizza</a>
						</Link>
						<Link href='/rolls'>
							<a>Rolls</a>
						</Link>
						<Link href='/business-lunches'>
							<a>Business lunches</a>
						</Link>
						<Link href='/snacks'>
							<a>Snacks</a>
						</Link>
						<Link href='/desserts'>
							<a>Desserts</a>
						</Link>
						<Link href='/drinks'>
							<a>Drinks</a>
						</Link>
					</Grid>
					<Grid item md={2} className={styles.controller}>
						<Button>
							<Image
								src='/images/icons/search.svg'
								width={16}
								height={16}
								alt=''
							/>
						</Button>
						<Button>
							<Image
								src='/images/icons/bell.svg'
								width={16}
								height={16}
								alt=''
							/>
						</Button>
						<Button className={styles.loginBtn}>
							<Image
								src='/images/icons/login.svg'
								width={16}
								height={16}
								alt=''
							/>
							Login
						</Button>
					</Grid>
				</Grid>
			</Container>
		</AppBar>
	);
}
