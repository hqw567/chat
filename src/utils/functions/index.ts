export function getCurrentDate() {
  const date = new Date()
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()
  return `${year}-${month}-${day}`
}

export function copyToClipboard(text: string) {
  return new Promise((resolve, reject) => {
    try {
      const input: HTMLTextAreaElement = document.createElement('textarea')
      input.setAttribute('readonly', 'readonly')
      input.value = text
      document.body.appendChild(input)
      input.select()
      if (document.execCommand('copy')) document.execCommand('copy')
      document.body.removeChild(input)
      resolve(text)
    } catch (error) {
      reject(error)
    }
  })
}

export function downloadAs(text: string, filename: string) {
  const element = document.createElement('a')
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text))
  element.setAttribute('download', filename)

  element.style.display = 'none'
  document.body.appendChild(element)

  element.click()

  document.body.removeChild(element)
}

export function isFirefox() {
  return typeof navigator !== 'undefined' && /firefox/i.test(navigator.userAgent)
}

export function getDomContentWidth(dom: HTMLElement) {
  const style = window.getComputedStyle(dom)
  const paddingWidth = parseFloat(style.paddingLeft) + parseFloat(style.paddingRight)
  const width = dom.clientWidth - paddingWidth
  return width
}

export function getCSSVar(varName: string) {
  return getComputedStyle(document.body).getPropertyValue(varName).trim()
}
