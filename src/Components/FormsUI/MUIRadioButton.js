import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio
} from '@material-ui/core';

const MUIRadioButton = (props) => {
  const { label, name, options, ...rest } = props
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">{label}</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        row
        // defaultValue="female"
        name={name}
      >
        {options.map(option => <FormControlLabel value={option.value} control={<Radio color="primary"  size="small" />} label={option.key} />)}
        {/* <FormControlLabel value={options.value} control={<Radio />} label={label} />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" /> */}
      </RadioGroup>
    </FormControl>



    /* <div className='form-control'>
      <label>{label}</label>
      <Field name={name} >
        {({ field }) => {
          return options.map(option => {
            return (
              <React.Fragment key={`${name}${option.key}`}>
                <input
                  type='radio'
                  id={`${name}${option.id}`}
                  {...field}
                  {...rest}
                  value={option.value}
                  checked={field.value === option.value}
                />
                <label htmlFor={`${name}${option.id}`}>{option.key}</label>
              </React.Fragment>
            )
          })
        }}
      </Field>
      <ErrorMessage component={TextError} name={name} />
    </div> */
  )
}

export default MUIRadioButton