let timer = null

export default (callback = () => {}, timing = 300) => {
  if (timer) clearTimeout(timer)

  timer = setTimeout(callback, timing)
}
