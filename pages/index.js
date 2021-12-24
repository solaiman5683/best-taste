import styles from '../styles/Home.module.css';
import HeadTag from './Components/Head/HeadTag';
import Hero from './Components/Hero/Hero';
import Navigation from './Components/Navigation/Navigation';
import Shop from './Components/Shop/Shop';

export default function Home() {
	return (
		<div className={styles.container}>
			<HeadTag />
			<Navigation />
			<Hero />

			<Shop />
		</div>
	);
}
