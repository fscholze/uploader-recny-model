export const getLanguageModelText = (
  model: LanguageModel
): { title: string; description: string } => {
  switch (model) {
    case 'FHG':
      return { title: 'FHG powšitkowne', description: 'Fraunhofer recIKTS - powšitkowny model' }
    case 'HF':
      return { title: 'HuggingFace', description: 'HuggingFace Whsiper' }
    case 'FB':
      return { title: 'Facebook', description: 'Facebook MMS' }
    case 'BOZA_MSA':
      return { title: 'FHG bože mšě', description: 'Fraunhofer recIKTS - model za bože mšě' }
    case 'DEVEL':
      return { title: 'Wuwiće', description: 'Ryzy simulacija - nic wužiwać' }
  }
}

export const getOutputFormatText = (
  format: OutputFormat
): { title: string; description: string } => {
  switch (format) {
    case 'TXT':
      return { title: 'txt', description: 'Ryzy tekst' }
    case 'SRT':
      return { title: 'srt', description: 'Podtitle za widejo' }
  }
}
