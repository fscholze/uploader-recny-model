import { FormGroup, FormControlLabel, Checkbox } from '@mui/material'
import { FC } from 'react'

const possibleModels: LanguageModel[] = ['FHG', 'HF', 'FB', 'Boza-Msa']

export const LanguageModelSelector: FC<{
  languageModel: LanguageModel
  onChangeLanguageModel: (model: LanguageModel) => void
}> = ({ languageModel, onChangeLanguageModel }) => {
  return (
    <FormGroup>
      {possibleModels.map((model) => (
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
          label={model}
        />
      ))}
    </FormGroup>
  )
}
