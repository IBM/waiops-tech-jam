export function setCookie(name: string, value: string, days: number) {
  const expires = new Date()

  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000)

  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`
}

export function getCookie(name: string): string | null {
  const searchPrefix = name + "="
  const cookieArray = document.cookie.split(';')

  for (let i = 0; i < cookieArray.length; i++) {
    const cookieEntry = cookieArray[i].trim()

    if (cookieEntry.indexOf(searchPrefix) === 0) {
      return cookieEntry.substring(searchPrefix.length, cookieEntry.length)
    }
  }

  return null
}
