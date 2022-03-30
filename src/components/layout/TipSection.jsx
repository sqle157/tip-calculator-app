import { useContext } from 'react';
import dollar from '../../assets/icon-dollar.svg';
import person from '../../assets/icon-person.svg';
import Input from '../shared/Input';
import TipList from './Tip/TipList';
import CalculatorContext from '../../context/CalculatorContext';

function TipSection() {
	const { msg, error, currentInput, bill, people } = useContext(CalculatorContext);

	return (
		<div className='calculator-tips'>
			<div className='bill-wrapper'>
				<div className='label-wrapper'>
					<label className='label' htmlFor=''>
						Bill
					</label>
				</div>
				<div className='input'>
					<img className='icon' src={dollar} alt='' />
					<Input value={bill} placeholder={'0'} className={'bill'} />
				</div>
			</div>

			<div className='tips-wrapper'>
				<label className='label' htmlFor=''>
					Select Tip %
				</label>

				<TipList />
			</div>

			<div className='people-wrapper'>
				<div className='label-wrapper'>
					<label className='label' htmlFor=''>
						Number of People
					</label>
					<p className={error && currentInput === 'people' ? 'error-msg d-block' : 'd-none'}>
						{msg}
					</p>
				</div>

				<div className='input'>
					<img className='icon' src={person} alt='' />
					<Input
						value={people}
						placeholder={'0'}
						className={error && currentInput === 'people' ? 'error people' : 'people'}
					/>
				</div>
			</div>
		</div>
	);
}
export default TipSection;
