import PropTypes from 'prop-types';
import { useContext } from 'react';
import CalculatorContext from '../../context/CalculatorContext';

function Input({ placeholder, className, value, step }) {
	const { handleOnChange, handleTipOption, removeActive } = useContext(CalculatorContext);

	// Don't allow special character value
	const handleSpecial = (e) => {
		if (e.code === 'Minus' || e.code === 'Plus' || e.which === 69) {
			e.preventDefault();
		}

		// Prevent char . on first type
		if (e.currentTarget.value === '' || e.currentTarget.valueAsNumber === 0) {
			if (e.key === '.') {
				e.preventDefault();
			}
		}
	};

	return (
		<input
			type='number'
			placeholder={placeholder}
			className={className}
			value={value}
			onKeyDown={handleSpecial}
			onChange={
				className !== 'tip--custom tip'
					? (e) => handleOnChange(e)
					: (e) => handleTipOption(e, e.target.value)
			}
			onClick={className === 'tip--custom tip' ? (e) => removeActive(e.target) : null}
			step={step}
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
