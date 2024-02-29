import { FormGroup, FormControlLabel, Checkbox, Tooltip } from '@mui/material'
import { FC } from 'react'
import { getLanguageModelText } from '../helper/translations'

const possibleModels: LanguageModel[] = ['FHG', 'HF', 'FB', 'BOZA_MSA']

export const LanguageModelSelector: FC<{
  languageModel: LanguageModel
  onChangeLanguageModel: (model: LanguageModel) => void
}> = ({ languageModel, onChangeLanguageModel }) => {
  return (
    <FormGroup>
      {possibleModels.map((model) => (
        <Tooltip key={model} title={getLanguageModelText(model).description}>
          <FormControlLabel
            key={model}
            control={
              <Checkbox
                checked={languageModel === model}
                onChange={(e) => {
                  if (e.target.checked) onChangeLanguageModel(model)
                }}
              />
            }
            label={getLanguageModelText(model).title}
          />
        </Tooltip>
      ))}
    </FormGroup>
  )
}
