import { Container, Grid } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import styles from '../../../styles/Hero.module.css';

const Hero = () => {
	return (
		<Container maxWidth='xl'>
			<Grid
				container
				sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
				<Grid item sm={12} lg={6}>
					<h2 className={styles.headerText}>
						Delivery of fresh and{' '}
						<span className={styles.hotFood}>hot food</span>
						<br /> within 40 minutes
					</h2>
				</Grid>
				<Grid item sm={12} lg={6} sx={{ textAlign: 'right' }}>
					<Image src='/images/hero.svg' height='685' width='685' alt='Hero' />
				</Grid>
			</Grid>
		</Container>
	);
};

export default Hero;
