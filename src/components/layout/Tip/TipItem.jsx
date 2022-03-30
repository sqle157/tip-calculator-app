import PropTypes from 'prop-types';
import Input from '../../shared/Input';
import CalculatorContext from '../../../context/CalculatorContext';
import { useContext } from 'react';

function TipItem({ value, index }) {
	const { handleTipOption, customTip } = useContext(CalculatorContext);
	return (
		<>
			{index !== 5 ? (
				<button className='tip' onClick={(e) => handleTipOption(e, value)}>
					{value}%
				</button>
			) : (
				<Input value={customTip} placeholder={value} className={'tip--custom tip'} />
			)}
		</>
	);
}

TipItem.propTypes = {
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default TipItem;
