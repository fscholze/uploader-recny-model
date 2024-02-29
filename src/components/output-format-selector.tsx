import { FormGroup, FormControlLabel, Checkbox, Tooltip } from '@mui/material'
import { FC } from 'react'
import { getOutputFormatText } from '../helper/translations'

const possibleOutputFormats: OutputFormat[] = ['TXT', 'SRT']

export const OutputFormatSelector: FC<{
  outputFormat: OutputFormat
  onChangeOutputFormat: (format: OutputFormat) => void
}> = ({ outputFormat, onChangeOutputFormat }) => {
  return (
    <FormGroup>
      {possibleOutputFormats.map((format) => (
        <Tooltip key={format} title={getOutputFormatText(format).description}>
          <FormControlLabel
            key={format}
            control={
              <Checkbox
                checked={outputFormat === format}
                onChange={(e) => {
                  if (e.target.checked) onChangeOutputFormat(format)
                }}
              />
            }
            label={getOutputFormatText(format).title}
          />
        </Tooltip>
      ))}
    </FormGroup>
  )
}
