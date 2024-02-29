export const getLanguageModelText = (
  model: LanguageModel
): { title: string; description: string } => {
  switch (model) {
    case 'FHG':
      return { title: 'Frauenhofer HG', description: 'Frauenhofer ...' }
    case 'HF':
      return { title: 'HF', description: 'HHHFFF' }
    case 'FB':
      return { title: 'Fachhochschule Bern', description: 'Online platforma Facebook' }
    case 'BOZA_MSA':
      return { title: 'Boza MSA', description: 'Kemse' }
  }
}

export const getOutputFormatText = (
  format: OutputFormat
): { title: string; description: string } => {
  switch (format) {
    case 'TXT':
      return { title: 'Tekst', description: 'Normalny Tekst' }
    case 'SRT':
      return { title: 'SRT', description: 'Untertiteldateiformate für Videoinhalte' }
  }
}
