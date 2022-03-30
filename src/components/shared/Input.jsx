import PropTypes from 'prop-types';
import { useContext } from 'react';
import CalculatorContext from '../../context/CalculatorContext';

function Input({ placeholder, className, value }) {
	const { handleOnChange, handleTipOption, removeActive } = useContext(CalculatorContext);

	// Don't allow negative value
	const handleNegative = (e) => {
		if (e.code === 'Minus') {
			e.preventDefault();
		}
	};

	return (
		<input
			type='number'
			min={0}
			max={50}
			placeholder={placeholder}
			className={className}
			value={value}
			onKeyDown={handleNegative}
			onChange={
				className !== 'tip--custom tip'
					? (e) => handleOnChange(e)
					: (e) => handleTipOption(e, e.target.value)
			}
			onClick={className === 'tip--custom tip' ? (e) => removeActive(e.target) : null}
			required
		/>
	);
}

Input.propTypes = {
	placeholder: PropTypes.string.isRequired,
	className: PropTypes.string.isRequired,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Input.defaultProps = {
	placeholder: '',
	className: '',
};

export default Input;
