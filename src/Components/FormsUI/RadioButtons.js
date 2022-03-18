import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

function RadioButtons(props) {
  const { label, name, options, className, ...rest } = props
  return (
    <div className={`form-control ${className}`}>
      <label>{label}</label>
      <div>
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
      </div>  
      <ErrorMessage component={TextError} name={name} />
    </div>
  )
}

export default RadioButtons
