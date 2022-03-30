import { createContext, useState } from 'react';

const CalculatorContext = createContext();

export const CalculatorProvider = ({ children }) => {
	// Variables for calculating tips
	const [bill, setBill] = useState('');
	const [selected, setSelected] = useState(0);
	const [customTip, setCustomTip] = useState('');
	const [tipAmount, setTipAmount] = useState('0.00');
	const [total, setTotal] = useState('0.00');
	const [people, setPeople] = useState('');

	// Variables for handling active states
	const [msg, setMsg] = useState('');
	const [error, setError] = useState(false);
	const [currentInput, setCurrentInput] = useState('');
	const [currentTip, setCurrentTip] = useState(null); // Store the previous tip option
	const [isReset, setIsReset] = useState(false);

	// Handle Bill and People input
	const handleOnChange = (e) => {
		const value = e.target.value;

		// console.log(value);
		setIsReset(true);

		if (e.target.classList.contains('bill')) {
			setBill(value);
		} else if (e.target.classList.contains('people')) {
			if (value !== '' && Number(value) > 0) {
				setMsg('');
				setError(false);
			} else if (value !== '' && Number(value) === 0) {
				setMsg("Can't be 0");
				setError(true);
			}
			setPeople(value);
		}

		setCurrentInput(e.target.className);
	};

	// Handle Tip Option Click (5,10,20,25,50,Custom)
	const handleTipOption = (e, value) => {
		// console.log(value);
		setIsReset(true);
		removeActive(e.target);

		if (!e.target.classList.contains('tip--custom')) {
			e.target.classList.add('active');
			setSelected(value);
		} else if (e.target.classList.contains('tip--custom')) {
			// Limit the maximum amount of tip percentage
			if (Number(value) >= 0 && Number(value) <= 50) {
				setCustomTip(value);
			} else {
				setCustomTip(customTip);
			}
		}
		setCurrentTip(e.target);
		// console.log(value);
	};

	// Calculate Tip Amount and Total per person
	const calculateAmount = () => {
		const tip =
			currentTip !== null && currentTip.classList.contains('tip--custom')
				? customTip
				: selected;
		if (people !== '' && bill !== '') {
			if (Number(people) > 0 && tip >= 0 && Number(bill) > 0) {
				setTipAmount(((Number(bill) * (tip / 100)) / Number(people)).toFixed(2));
				setTotal(((Number(bill) + tipAmount * people) / Number(people)).toFixed(2));
			}
		}
	};

	// Remove Active Class From Tip Option
	const removeActive = (currentTarget) => {
		if (
			// clear active class if current target is a different option
			currentTip !== null &&
			currentTip !== currentTarget &&
			!currentTip.classList.contains('tip--custom')
		) {
			currentTip.classList.remove('active');
		} else if (
			// clear custom tip if current target is one of the default options
			currentTip !== null &&
			currentTip !== currentTarget &&
			currentTip.classList.contains('tip--custom')
		) {
			setCustomTip('');
		} else if (
			// if custom tip option is clicked consecutively, don't change the value unless the current target is one of the default options (5,10,20,25,50)
			currentTip !== null &&
			currentTip === currentTarget &&
			currentTip.classList.contains('tip--custom')
		) {
			setCustomTip(currentTarget.value);
		}
	};

	// Reset all fields
	const reset = () => {
		setBill('');
		setSelected(0);
		setCustomTip('');
		setTipAmount('0.00');
		setTotal('0.00');
		setPeople('');
		setMsg('');
		setError(false);
		setCurrentInput('');
		setCurrentTip(null);
		setIsReset(false);
		removeActive();
	};

	return (
		<CalculatorContext.Provider
			value={{
				bill,
				people,
				tipAmount,
				msg,
				error,
				currentInput,
				total,
				customTip,
				isReset,
				handleOnChange,
				handleTipOption,
				calculateAmount,
				removeActive,
				reset,
			}}>
			{children}
		</CalculatorContext.Provider>
	);
};

export default CalculatorContext;
