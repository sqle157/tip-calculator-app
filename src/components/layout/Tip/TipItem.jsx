import PropTypes from 'prop-types';
import Input from '../../shared/Input';
import CalculatorContext from '../../../context/CalculatorContext';
import { useContext } from 'react';

function TipItem({ value, index }) {
	const { handleTipOption, customTip, msg, currentInput } = useContext(CalculatorContext);
	return (
		<>
			{index !== 5 ? (
				<button className='tip' onClick={(e) => handleTipOption(e, value)}>
					{value}%
				</button>
			) : (
				<Input
					value={customTip}
					placeholder={value}
					className={
						msg && currentInput.includes('tip--custom')
							? 'tip--custom tip error'
							: 'tip--custom tip'
					}
					step={'any'}
				/>
			)}
		</>
	);
}

TipItem.propTypes = {
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default TipItem;
