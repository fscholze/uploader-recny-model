import { FormGroup, FormControlLabel, Checkbox, Tooltip } from '@mui/material'
import { FC } from 'react'
import { getLanguageModelText } from '../helper/translations'

const possibleModelsDefault: Partial<LanguageModel>[] = ['BOZA_MSA', 'HF']
const possibleModelsExperimental: LanguageModel[] = ['FB', 'FHG', 'DEVEL']

export const LanguageModelSelector: FC<{
  languageModel: LanguageModel
  isDisabled: boolean
  experimentalOptions?: boolean
  onChangeLanguageModel: (model: LanguageModel) => void
}> = ({ experimentalOptions = false, languageModel, isDisabled, onChangeLanguageModel }) => {
  return (
    <FormGroup>
      {(experimentalOptions ? possibleModelsExperimental : possibleModelsDefault).map((model) => (
        <Tooltip key={model} title={getLanguageModelText(model).description}>
          <FormControlLabel
            key={model}
            control={
              <Checkbox
                disabled={isDisabled}
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
