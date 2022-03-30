import logo from './assets/logo.svg';
import { CalculatorProvider } from './context/CalculatorContext';
import TipSection from './components/layout/TipSection';
import ResultSection from './components/layout/ResultSection';

function App() {
	return (
		<CalculatorProvider>
			<img className='logo' src={logo} alt='' />
			<div className='container'>
				<div className='grid'>
					<TipSection />
					<ResultSection />
				</div>
			</div>
		</CalculatorProvider>
	);
}

export default App;
