export default function delay(ms = 1000) {
  let start = Date.now()
  let end = start + ms
  while (start < end) {
    start = Date.now()
  }
}
