import Image from 'next/image';
import styles from '../../../styles/Shop.module.css';

const FoodItem = () => {
	return (
		<div className={styles.foodItem}>
			<div className={styles.foodImage}>
				<Image src='/images/Images.png' height='200px' width='200px' alt='' />
			</div>
			<h3>Spicy seasoned seafood noodles</h3>
			<h4>$ 2.69</h4>
			<p>20 Bowls Available</p>
		</div>
	);
};

export default FoodItem;
