import { FormGroup, FormControlLabel, Checkbox, Tooltip } from '@mui/material'
import { FC } from 'react'
import { getLexFormatText } from '../helper/translations'
import { possibleLexFormats } from '../types/constants'

export const WariantaSelector: FC<{
  lexFormat: LexFormat
  isDisabled: boolean
  onChangeLexFormat: (format: LexFormat) => void
}> = ({ lexFormat, isDisabled, onChangeLexFormat }) => {
  return (
    <FormGroup>
      {possibleLexFormats.map((item) => (
        <Tooltip key={item} title={getLexFormatText(item).description}>
          <FormControlLabel
            key={item}
            control={
              <Checkbox
                disabled={isDisabled}
                checked={lexFormat === item}
                onChange={(e) => {
                  if (e.target.checked) onChangeLexFormat(item)
                }}
              />
            }
            label={getLexFormatText(item).title}
          />
        </Tooltip>
      ))}
    </FormGroup>
  )
}
