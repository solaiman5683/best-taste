import { Box, Button, Container, Grid } from '@mui/material';
import Image from 'next/image';

const Promo = () => {
	return (
		<Container maxWidth='xl' sx={{ my: 20 }}>
			<Box sx={{ textAlign: 'center' }}>
				<h1>Business Lunch</h1>
				<p>order before 03:00PM</p>
			</Box>
			<Grid container sx={{ alignItems: 'center' }}>
				<Grid item xs={12} md={5}>
					<Box sx={{ borderBottom: '1px solid #FF2F30', my: 5 }}>
						<h2>On the first:</h2>
						<p>
							Soup noodles, borscht, hodgepodge, cream cheese soup with
							mushrooms
						</p>
					</Box>
					<Box sx={{ borderBottom: '1px solid #FF2F30', my: 5 }}>
						<h2>On the second:</h2>
						<p>
							Pork chop, eggplant pasta, salmon steak, Thai chicken, baked
							potatoes, risotto
						</p>
					</Box>
					<Box sx={{ borderBottom: '1px solid #FF2F30', my: 5 }}>
						<h2>Salads:</h2>
						<p>Funzoza, caesar, spring, pineapple</p>
					</Box>
					<Box sx={{ borderBottom: '1px solid #FF2F30', my: 5 }}>
						<h2>Beverages:</h2>
						<p>Coffee, fruit tea, cranberry juice, apple-cherry compote</p>
					</Box>
				</Grid>
				<Grid item xs={12} md={7} sx={{ textAlign: 'right' }}>
					<Image
						src='/images/chief.png'
						width='577.36px'
						height='504.14px'
						alt=''
					/>
				</Grid>
			</Grid>
			<Box sx={{ textAlign: 'center', mt: 5 }}>
				<Button className='btn'>Order Now</Button>
			</Box>
		</Container>
	);
};

export default Promo;
