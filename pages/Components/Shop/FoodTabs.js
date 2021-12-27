import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Foods from './Foods';

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}>
			{value === index && <Box sx={{ p: 3 }}>{children}</Box>}
		</div>
	);
}

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

export default function FoodTabs() {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	console.log(value);
	return (
		<Box sx={{ width: '100%', marginTop: '30px' }}>
			<Box sx={{ borderBottom: 1, borderColor: '#ff2f2f50' }}>
				<Tabs
					value={value}
					onChange={handleChange}
					textColor='inherit'
					component='div'
					aria-label='basic tabs example'>
					<Tab label='Hot Dishes' {...a11yProps(0)} />
					<Tab label='Cold Dishes' {...a11yProps(1)} />
					<Tab label='Soup' {...a11yProps(2)} />
					<Tab label='Grill' {...a11yProps(3)} />
					<Tab label='Appetizer' {...a11yProps(4)} />
					<Tab label='Dessert' {...a11yProps(5)} />
				</Tabs>
			</Box>
			<TabPanel component='div' value={value} index={0}>
				<Foods item={9} />
			</TabPanel>
			<TabPanel value={value} index={1}>
				<Foods item={6} />
			</TabPanel>
			<TabPanel value={value} index={2}>
				<Foods item={5} />
			</TabPanel>
			<TabPanel value={value} index={3}>
				<Foods item={4} />
			</TabPanel>
			<TabPanel value={value} index={4}>
				<Foods item={2} />
			</TabPanel>
			<TabPanel value={value} index={5}>
				<Foods item={7} />
			</TabPanel>
		</Box>
	);
}
