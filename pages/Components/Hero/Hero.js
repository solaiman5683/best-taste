import { Container, Grid } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import styles from '../../../styles/Hero.module.css';
import Info from '../Info';

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
					<Grid container>
						<Grid item sm={4}>
							<Info
								image='/images/icons/clock.svg'
								title='Delivery with 10am - 10pm'
								subTitle='Opening Hours'
							/>
						</Grid>

						<Grid item sm={4}>
							<Info
								image='/images/icons/direction.svg'
								title='30/4 Jatrabari, Dhaka'
								subTitle='Restaurant Address'
							/>
						</Grid>

						<Grid item sm={4}>
							<Info
								image='/images/icons/call.svg'
								title='+880 165-5555-887'
								subTitle='Call us at this Number'
							/>
						</Grid>
					</Grid>
				</Grid>
				<Grid item sm={12} lg={6} sx={{ textAlign: 'right' }}>
					<Image src='/images/hero.svg' height='685' width='685' alt='Hero' />
				</Grid>
			</Grid>
		</Container>
	);
};

export default Hero;
