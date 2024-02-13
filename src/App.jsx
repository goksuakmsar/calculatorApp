import { useReducer } from 'react'
import './App.css'


const initalState = {
  displayValue: ''
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_DISPLAY':
      return { ...state, displayValue: state.displayValue + action.payload }
    case 'CLEAR_DISPLAY':
      return { ...state, displayValue: '' }
    case 'CALCULATE':
      try {
        return { ...state, displayValue: eval(state.displayValue).toString() }
      } catch (error) {
        return { displayValue: 'Error' }
      }
    default:
      return state
  }
}


function App() {


  const [state, dispatch] = useReducer(reducer, initalState)

  const addToDisplay = (value) => {
    dispatch({ type: 'ADD_TO_DISPLAY', payload: value })
  }
  const clearDisplay = () => {
    dispatch({ type: 'CLEAR_DISPLAY' })
  }
  const calculate = () => {
    dispatch({ type: 'CALCULATE' })
  }

  return (
    <div className='App'>
      <div className="calculator">
        <div>
          <input className="display" type="text" value={state.displayValue} readOnly />
        </div>

        <div className="operators">
          <button onClick={() => { addToDisplay('/') }}>/</button>
          <button onClick={() => { addToDisplay('*') }}>*</button>
          <button onClick={() => { addToDisplay('+') }}>+</button>
          <button onClick={() => { addToDisplay('-') }}>-</button>
          <button onClick={clearDisplay}>C</button>
        </div>

        <div className="digits">
          <button onClick={() => { addToDisplay('1') }}>1</button>
          <button onClick={() => { addToDisplay('2') }}>2</button>
          <button onClick={() => { addToDisplay('3') }}>3</button>
          <button onClick={() => { addToDisplay('4') }}>4</button>
          <button onClick={() => { addToDisplay('5') }}>5</button>
          <button onClick={() => { addToDisplay('6') }}>6</button>
          <button onClick={() => { addToDisplay('7') }}>7</button>
          <button onClick={() => { addToDisplay('8') }}>8</button>
          <button onClick={() => { addToDisplay('9') }}>9</button>
          <button onClick={() => { addToDisplay('0') }}>0</button>
          <button onClick={() => { addToDisplay('.') }}>.</button>
          <button onClick={calculate}>=</button>
        </div>

      </div>

    </div>
  )
}

export default App
