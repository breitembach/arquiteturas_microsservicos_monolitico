import lodash from 'lodash'

export const isValidLatLng = (lat: number, lng: number): boolean => {
  if (!lodash.isNumber(lat) || !lodash.isNumber(lng)) {
    return false
  }
  if (lat < -90 || lat > 90) {
    return false
  } else if (lng < -180 || lng > 180) {
    return false
  }
  return true
}

export const isValidLat = (lat: number): boolean => {
  if (!lodash.isNumber(lat)) {
    return false
  }
  if (lat < -90 || lat > 90) {
    return false
  }
  return true
}

export const isValidLng = (lng: number): boolean => {
  if (!lodash.isNumber(lng)) {
    return false
  }
  if (lng < -180 || lng > 180) {
    return false
  }
  return true
}
