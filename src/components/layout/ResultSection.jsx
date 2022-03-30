import { useContext, useEffect } from 'react';
import CalculatorContext from '../../context/CalculatorContext.js';

function ResultSection() {
	const { total, tipAmount, calculateAmount, reset, isReset, msg } =
		useContext(CalculatorContext);

	// Recalculate everytime a value change
	useEffect(() => {
		calculateAmount();
	}, [calculateAmount]);

	return (
		<div
			className='calculator-results'
			style={{
				marginTop: msg && msg !== "Can't be 0" && window.innerWidth <= 380 ? '3rem' : 0,
			}}>
			<div className='result'>
				<div className='title'>
					<p>Tip Amount</p>
					<span className='person'>/ person</span>
				</div>
				<h1 className='amount'>${tipAmount}</h1>
			</div>

			<div className='result'>
				<div className='title'>
					<p>Total</p>
					<span className='person'>/ person</span>
				</div>
				<h1 className='amount'>${total}</h1>
			</div>

			<button
				disabled={isReset ? false : true}
				type='button'
				className='btn'
				onClick={() => reset()}>
				Reset
			</button>
		</div>
	);
}
export default ResultSection;
