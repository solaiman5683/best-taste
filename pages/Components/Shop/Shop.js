import { Container, Grid, TextField } from '@mui/material';
import React from 'react';

const Shop = () => {
	return (
		<Container maxWidth='xl'>
			<hr style={{ opacity: '0.2', width: '50%', margin: '20px auto' }} />
			<div>
				<Grid container>
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
					<Grid item sm={12} lg={6}>
						<TextField
							id='outlined-basic'
							label='Outlined'
							variant='outlined'
						/>
					</Grid>
				</Grid>
			</div>
		</Container>
	);
};

export default Shop;
