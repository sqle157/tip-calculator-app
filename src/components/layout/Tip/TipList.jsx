import TipItem from './TipItem';

function TipList() {
	const tipOptions = [5, 10, 15, 25, 50, 'Custom'];

	return (
		<>
			{tipOptions.map((option, index) => (
				<TipItem key={index} value={option} index={index} />
			))}
		</>
	);
}
export default TipList;
