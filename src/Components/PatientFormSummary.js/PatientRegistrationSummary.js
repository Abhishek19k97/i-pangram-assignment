import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom"
import { FormContext } from '../../App';
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  Button
} from '@material-ui/core';


const PatientRegistrationSummary = () => {

  const navigate = useNavigate()

  const formValContext = useContext(FormContext)

  console.log('FormStore data', formValContext.formState)

  const mapObjPropToLabel = {
        description: 'If you have problems with pain/aches, stiffness, weakness or functional problems, describe this/these below. (List the symptoms in descending order with the most troublesome first)',
        diagnosedRadioOption: 'Have you been diagnosed with this problem?',
        previousProblemRadioOption: 'Did the problem start after a physical trauma?',
        mentalTraumaRadioOption: 'Did the problem start after a mental trauma?',
        problemFrequencyRadioOption: 'How often do you experience the problem',
        problemCauseCheckboxOption: 'When do you experience the problem?',
        intensityOfProblemRadioOption: 'How intense is the experience of the problem on average on a 0-10 scale?'
  }

  const formArrayData = []

  formValContext.formState.RegForms.forEach((obj, index) => {
    for (const property in obj) {
      console.log(! (typeof obj[property] === 'object') )
      if (!(typeof obj[property] === 'object')) {
        formArrayData.push(
          <TableRow key={`${property}${index}`}>
            <TableCell variant="head">{mapObjPropToLabel[property]}</TableCell>
            <TableCell>{obj[property]}</TableCell>
          </TableRow>
        )
      } else {
        const newArr =[]
        for (const prop in obj[property]) {
          if (typeof obj[property][prop] === 'string') {
            newArr.push(obj[property][prop])
          } else {
            newArr.push(...obj[property][prop])
          }
        }
        formArrayData.push(
          <TableRow key={`${property}${index}`}>
            <TableCell variant="head">{mapObjPropToLabel[property]}</TableCell>
            <TableCell>{newArr.join(', ')}</TableCell>
          </TableRow>  
        )
      }
    }
  })

  return (
    <div>
      <Table>
        <TableBody>
          {
            formArrayData.map(el => el)
          }
        </TableBody>
      </Table>
      <div class="button-cotainer">
        <Button color="primary" variant="contained" onClick={()=> navigate(-1)}>Back</Button>
      </div>
    </div>
  )
}

export default PatientRegistrationSummary