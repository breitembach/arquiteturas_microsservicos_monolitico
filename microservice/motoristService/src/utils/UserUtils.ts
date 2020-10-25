
export const getFirstName = (fullName: string): string => {
  if (fullName.trim().indexOf(' ') >= 0) {
    return fullName.trim().split(' ')[0]
  } else {
    return fullName
  }
}

export const getFamilyName = (fullName: string): string => {
  if (fullName.trim().indexOf(' ') >= 0) {
    return fullName.split(' ').slice(1).join(' ')
  } else {
    return ''
  }
}
