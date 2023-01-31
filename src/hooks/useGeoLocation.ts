import { useState, useEffect } from 'react'

interface ILocation {
  latitude: number
  longitude: number
}

export const useGeoLocation = (options = {}) => {
  const [location, setLocation] = useState<ILocation>()
  const [error, setError] = useState('')

  const handleSuccess = (pos: GeolocationPosition) => {
    const { latitude, longitude } = pos.coords

    setLocation({
      latitude,
      longitude,
    })
  }

  const handleError = (err: GeolocationPositionError) => {
    const geoLocationErrorMessage =
      {
        1: 'PERMISSION_DENIED',
        2: 'POSITION_UNAVAILABLE',
        3: 'TIMEOUT',
      }[err.code] ?? 'ERROR'

    setError(geoLocationErrorMessage)
  }

  useEffect(() => {
    const { geolocation } = navigator

    if (!geolocation) {
      setError('Geolocation is not supported.')
      return
    }

    geolocation.getCurrentPosition(handleSuccess, handleError, options)
  }, [options])

  return { location, error }
}
