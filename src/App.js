import React, {useReducer} from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import PatientRegistrationSummary from './Components/PatientFormSummary.js/PatientRegistrationSummary';
import PatRegForm from './Components/PatientForm/PatRegForm';

const initialState = undefined

const reducer = (state, action) => {
  console.log('type', action.type)
  console.log('payload', action.payload)
  switch (action.type) {
    case 'submit':
      console.log('submit case bloack ran')
      return {...action.payload}
    default:
      console.log('default case bloack ran')
      return state
  }
}

export const FormContext = React.createContext()

function App() {
  const [formData, dispatch] = useReducer(reducer, initialState)
  return (
    <div className='App'>
      <FormContext.Provider value= {{formState: formData, formDispatch: dispatch}}>
        <Routes>
          <Route path='/' element={<PatRegForm />}></Route>
          <Route path='/summary' element={<PatientRegistrationSummary />}></Route>
        </Routes>  
      </FormContext.Provider>
    </div>  
  )
}

export default App
