export const formatSecondsToReadableDuration = (seconds: number): string => {
  const hours = `0${Math.floor(seconds / 3600)}`.slice(-2)
  const minutes = `0${Math.floor((seconds % 3600) / 60)}`.slice(-2)
  const remainingSeconds = `0${seconds % 60}`.slice(-2)
  return `${hours}:${minutes}:${remainingSeconds}`
}
