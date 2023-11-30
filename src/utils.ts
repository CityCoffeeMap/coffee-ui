export const randomNumber = (min: number, max: number) => {
  min = Math.ceil(min)
  max = Math.ceil(max)
  return Math.floor(Math.random() * (max - min) + min)
}
