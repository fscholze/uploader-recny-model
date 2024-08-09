export const DEFAULT_LANGUAGE_MODEL: LanguageModel = 'HF'
export const DEFAULT_OUTPUT_FORMAT: OutputFormat = 'SRT'
export const DEFAULT_LEX_FORMAT: LexFormat = 'KALDI'
export const INVALID_DURATION = -1
export const FOOTER_HEIGHT = 80
export const possibleModelsDefault: Partial<LanguageModel>[] = ['BOZA_MSA', 'HF', 'HFBIG']
export const possibleModelsExperimental: LanguageModel[] = ['FB', 'FHG', 'EURO', 'DEVEL']
export const possibleLexFormats: LexFormat[] = ['KALDI', 'SAMPA', 'UASR']
