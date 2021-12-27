import { Container, Grid, TextField } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import FoodTabs from './FoodTabs';

const Shop = () => {
	return (
		<Container maxWidth='xl'>
			<div style={{ marginTop: '100px' }}>
				<Grid
					container
					sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
					<Grid item sm={12} lg={6}>
						<h2>Resto Soup</h2>
						<p style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
							{new Date().toLocaleDateString('en-US', {
								weekday: 'long',
								year: 'numeric',
								month: 'long',
								day: 'numeric',
							})}
						</p>
					</Grid>
					<Grid item sm={12} lg={6} style={{ textAlign: 'right' }}>
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
								padding: '0 15px',
								background: '#333',
								width: '250px',
								marginLeft: 'auto',
								borderRadius: '20px',
							}}>
							<Image
								src='/images/icons/search.svg'
								alt=''
								width='18'
								height='18'
							/>
							<input
								style={{
									border: '0',
									background: 'transparent',
									color: '#fff',
									padding: '13px 10px',
								}}
								type='text'
								placeholder='Search foods here...'
							/>
						</div>
					</Grid>
				</Grid>
				<FoodTabs />
			</div>
		</Container>
	);
};

export default Shop;
