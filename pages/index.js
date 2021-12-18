import styles from '../styles/Home.module.css';
// import '@material-tailwind/react/tailwind.css';
import HeadTag from './Components/Head/HeadTag';
import Hero from './Components/Hero/Hero';
import Navigation from './Components/Navigation/Navigation';

export default function Home() {
	return (
		<div className={styles.container}>
			<HeadTag />
			<Navigation />
			<Hero />
		</div>
	);
}
