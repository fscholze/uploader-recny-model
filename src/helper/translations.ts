export const getLanguageModelText = (
  model: LanguageModel
): { title: string; description: string } => {
  switch (model) {
    case 'FHG':
      return {
        title: 'powšitkowny klasiski model',
        description: 'hišće njeje přistupne - Fraunhofer recIKTS'
      }
    case 'HF':
      return {
        title: 'powšitkowny KI model (doporučene)',
        description:
          'za powŝitkowne rozmołwy - HuggingFace Whisper "small" wusměrjene na Hornjoserbšćinu'
      }
    case 'FB':
      return { title: 'wjacerěčny KI model', description: 'za powŝitkowne rozmołwy - Facebook MMS' }
    case 'BOZA_MSA':
      return {
        title: 'klasiski model za bože mšě',
        description: 'wusměrjene na cyrkwinsku rěč - Fraunhofer recIKTS'
      }
    case 'DEVEL':
      return { title: 'simulator', description: 'jenož za wuwiwarjow' }
  }
}

export const getOutputFormatText = (
  format: OutputFormat
): { title: string; description: string } => {
  switch (format) {
    case 'TXT':
      return { title: 'txt', description: 'ryzy tekst - bjez markěrowanjow' }
    case 'SRT':
      return { title: 'srt', description: 'podtitle za widejo - z markěrowanjemi' }
  }
}

export const getLexFormatText = (format: LexFormat): { title: string; description: string } => {
  switch (format) {
    case 'SAMPA':
      return { title: 'lex', description: 'TODO' }
    case 'KALDI':
      return { title: 'klex', description: 'TODO' }
    case 'UASR':
      return { title: 'ulex', description: 'TODO' }
  }
}
