import Image from 'next/image';

const Info = ({ image, title, subTitle }) => {
	return (
		<div style={{ textAlign: 'center' }}>
			<p>
				<Image src={image} width='30' height='30' alt='' />
			</p>
			<h3>{title}</h3>
			<p style={{ color: 'rgba(255, 255, 255, 0.6)' }}>{subTitle}</p>
		</div>
	);
};

export default Info;
