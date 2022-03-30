import { useContext } from 'react';
import dollar from '../../assets/icon-dollar.svg';
import person from '../../assets/icon-person.svg';
import Input from '../shared/Input';
import TipList from './Tip/TipList';
import CalculatorContext from '../../context/CalculatorContext';

function TipSection() {
	const { msg, currentInput, bill, people } = useContext(CalculatorContext);
	// console.log(currentInput);
	// console.log(error);
	return (
		<div className='calculator-tips'>
			<div className='bill-wrapper'>
				<div className='label-wrapper'>
					<label className='label'>Bill</label>
					<p className={msg && currentInput.includes('bill') ? 'error-msg d-block' : 'd-none'}>
						{msg}
					</p>
				</div>
				<div className='input'>
					<img className='icon' src={dollar} alt='' />
					<Input
						value={bill}
						placeholder={'0'}
						className={msg && currentInput.includes('bill') ? 'bill error' : 'bill'}
						step={'any'}
					/>
				</div>
			</div>

			<div className='tips-wrapper'>
				<div className='label-wrapper'>
					<label className='label'>Select Tip %</label>
					<p
						className={
							msg && currentInput.includes('tip--custom') ? 'error-msg d-block' : 'd-none'
						}>
						{msg}
					</p>
				</div>
				<TipList />
			</div>

			<div className='people-wrapper'>
				<div className='label-wrapper'>
					<label className='label'>Number of People</label>
					<p
						className={
							msg && currentInput.includes('people') ? 'error-msg d-block' : 'd-none'
						}>
						{msg}
					</p>
				</div>

				<div className='input'>
					<img className='icon' src={person} alt='' />
					<Input
						value={people}
						placeholder={'0'}
						className={msg && currentInput.includes('people') ? 'error people' : 'people'}
						step={'1'}
					/>
				</div>
			</div>
		</div>
	);
}
export default TipSection;
