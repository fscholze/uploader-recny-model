import { FormGroup, FormControlLabel, Checkbox } from '@mui/material'
import { FC } from 'react'

const possibleOutputFormats: OutputFormat[] = ['Text', 'srt']

export const OutputFormatSelector: FC<{
  outputFormat: OutputFormat
  onChangeOutputFormat: (format: OutputFormat) => void
}> = ({ outputFormat, onChangeOutputFormat }) => {
  return (
    <FormGroup>
      {possibleOutputFormats.map((format) => (
        <FormControlLabel
          control={
            <Checkbox
              checked={outputFormat === format}
              onChange={(e) => {
                if (e.target.checked) onChangeOutputFormat(format)
              }}
            />
          }
          label={format}
        />
      ))}
    </FormGroup>
  )
}
