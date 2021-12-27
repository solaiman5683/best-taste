import styles from '../../../styles/Shop.module.css';
import FoodItem from './FoodItem';

const Foods = ({ item }) => {
	return (
		<div className={styles.foodGrid}>
			{[...Array(item)].map((_, index) => (
				<FoodItem key={index} />
			))}
		</div>
	);
};

export default Foods;
