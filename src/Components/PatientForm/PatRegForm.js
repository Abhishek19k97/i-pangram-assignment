import React, {useContext} from 'react'
import { Formik, Form, FieldArray } from 'formik'
import * as Yup from 'yup'
import '../../App.css'
import FormikControl from '../FormsUI/FormikControl'
import { Button } from '@material-ui/core'
import { useNavigate } from "react-router-dom"
import { FormContext } from '../../App';

const PatRegForm = () => {
  const navigate = useNavigate()

  const diagnosedRadioOption = [
    { id: 'diagnosedRadioOption 1', key: 'Not relevent', value: 'Not relevent' },
    { id: 'diagnosedRadioOption 2', key: 'Yes', value: 'Yes' },
    { id: 'diagnosedRadioOption 3', key: 'No', value: 'No' }
  ]

  const previousProblemRadioOption = [
    { id: 'previousProblemRadioOption 1', key: 'Not relevent', value: 'Not relevent' },
    { id: 'previousProblemRadioOption 2', key: 'Yes', value: 'Yes' },
    { id: 'previousProblemRadioOption 3', key: 'No', value: 'No' }
  ]

  const mentalTraumaRadioOption = [
    { id: 'mentalTraumaRadioOption 1', key: 'Not relevent', value: 'Not relevent' },
    { id: 'mentalTraumaRadioOption 2', key: 'Yes', value: 'Yes' },
    { id: 'mentalTraumaRadioOption 3', key: 'No', value: 'No' }
  ]

  const problemFrequencyRadioOption = [
    { id: 'problemFrequencyRadioOption 1', key: 'Not relevent', value: 'Not relevent' },
    { id: 'problemFrequencyRadioOption 2', key: 'Daily', value: 'Daily' },
    { id: 'problemFrequencyRadioOption 3', key: 'Several times a Week', value: 'Several times a Week' },
    { id: 'problemFrequencyRadioOption 4', key: 'A Few times/month', value: 'A Few times/month' },
    { id: 'problemFrequencyRadioOption 5', key: 'A Few times/year', value: 'A Few times/year' }
  ]

  const problemCauseCheckboxOption = [
    { id: 'problemCauseCheckboxOption 1', key: 'Not relevent', value: 'Not relevent' },
    { id: 'problemCauseCheckboxOption 2', key: 'When lying down', value: 'When lying down' },
    { id: 'problemCauseCheckboxOption 3', key: 'Under standing', value: 'Under standing' },
    { id: 'problemCauseCheckboxOption 4', key: 'In walking', value: 'In walking' }
  ]

  const intensityOfProblemRadioOption = [
    { id: 'intensityOfProblemRadioOption 1', key: '1', value: '1' },
    { id: 'intensityOfProblemRadioOption 2', key: '2', value: '2' },
    { id: 'intensityOfProblemRadioOption 3', key: '3', value: '3' },
    { id: 'intensityOfProblemRadioOption 4', key: '4', value: '4' },
    { id: 'intensityOfProblemRadioOption 5', key: '5', value: '5' },
    { id: 'intensityOfProblemRadioOption 6', key: '6', value: '6' },
    { id: 'intensityOfProblemRadioOption 7', key: '7', value: '7' },
    { id: 'intensityOfProblemRadioOption 8', key: '8', value: '8' },
    { id: 'intensityOfProblemRadioOption 9', key: '9', value: '9' },
    { id: 'intensityOfProblemRadioOption 10', key: '10', value: '10' }
  ]

  const initialValues = {
    RegForms:  [
      {
        description: '',
        diagnosedRadioOption: '',
        previousProblemRadioOption: '',
        mentalTraumaRadioOption: '',
        problemFrequencyRadioOption: '',
        problemCauseCheckboxOption: {
          checkboxOptions: [],
          additinalInfo: ''
        },
        intensityOfProblemRadioOption: '',
      }
    ]
  }

  const validationSchema = Yup.object({
    RegForms: Yup.array()
      .of(
        Yup.object().shape({
          description: Yup.string().required('Required'),
          diagnosedRadioOption: Yup.string().required('Required'),
          previousProblemRadioOption: Yup.string().required('Required'),
          mentalTraumaRadioOption: Yup.string().required('Required'),
          problemFrequencyRadioOption: Yup.string().required('Required'),
          // problemCauseCheckboxOption: Yup.array().required('Required'),
          intensityOfProblemRadioOption: Yup.string().required('Required'),
        })  
      )
  })
  const formValContext = useContext(FormContext)

  console.log('FormStore data', formValContext.formState)
  const onSubmit = values => {
    formValContext.formDispatch({type:'submit', payload: values});
    console.log('Form data', values)
    navigate('summary')
  }

  return (
    <div className='form-container'>
      
    <div className='form-container-header'>
      <h2>
          Pain & Functional Description
      </h2>
      <p>
          The description of the current situation gives your Optimum
          <br />
          Trainer a picture of and clues to the underlying causes of your problems
      </p>
    </div>  

    <div className='form-container-body'>

      <Formik
        initialValues={formValContext.formState || initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {formik => (
            <Form>
            <FieldArray name='RegForms'>
                {
                  fieldArrayProps => {
                    const { push, form } = fieldArrayProps
                    const { values } = form
                    const { RegForms } = values
                    return (
                      <>
                        {
                          RegForms.map((RegForm, index) => (
                            <div className='form-container-form-body' key={index}>
                              <FormikControl
                                control='input'
                                label='If you have problems with pain/aches, stiffness, weakness or functional problems, describe this/these below. (List the symptoms in descending order with the most troublesome first)'
                                name={`RegForms[${index}].description`}
                                className='input-text'
                              />
                              <FormikControl
                                control='radio'
                                label='Have you been diagnosed with this problem?'
                                name={`RegForms[${index}].diagnosedRadioOption`}
                                options={diagnosedRadioOption}
                                className='radio-space-around'
                              />
                              <FormikControl
                                control='radio'
                                label='Did the problem start after a physical trauma?'
                                name={`RegForms[${index}].previousProblemRadioOption`}
                                options={previousProblemRadioOption}
                                className='radio-space-around'
                              /> 
                              <FormikControl
                                control='radio'
                                label='Did the problem start after a mental trauma?'
                                name={`RegForms[${index}].mentalTraumaRadioOption`}
                                options={mentalTraumaRadioOption}
                                className='radio-space-around'
                              />
                              <FormikControl
                                control='radio'
                                label='How often do you experience the problem'
                                name={`RegForms[${index}].problemFrequencyRadioOption`}
                                options={problemFrequencyRadioOption}
                              />
                              <FormikControl
                                control='checkbox'
                                label='When do you experience the problem?'
                                name={`RegForms[${index}].problemCauseCheckboxOption.checkboxOptions`}
                                options={problemCauseCheckboxOption}
                                className='checkbox'
                              />
                              <FormikControl
                                control='input'
                                label=''
                                name={`RegForms[${index}].problemCauseCheckboxOption.additinalInfo`}
                                placeholder='Other? For example in rotations, side bends, wing stairs, when working with the arms above the head'
                                className='input-text'
                              />
                              <FormikControl
                                control='radio'
                                label='How intense is the experience of the problem on average on a 0-10 scale?'
                                name={`RegForms[${index}].intensityOfProblemRadioOption`}
                                options={intensityOfProblemRadioOption}
                                />
                            </div>  
                          ))
                        }
                        <div className='add-button-container'>
                          <button type="button" onClick={()=>push({
                              description: '',
                              diagnosedRadioOption: '',
                              previousProblemRadioOption: '',
                              mentalTraumaRadioOption: '',
                              problemFrequencyRadioOption: '',
                              problemCauseCheckboxOption: {
                                checkboxOptions: [],
                                additinalInfo: ''
                              },
                              intensityOfProblemRadioOption: '',
                            })}>+</button>
                        </div>  
                      </>
                    )
                  }
                }
              </FieldArray>
            <Button color="primary" variant="contained" type='submit'>Next</Button>
          </Form>
        )}
        </Formik>

      </div>

    </div>  
  )
}

export default PatRegForm