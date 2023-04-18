import { useCallback, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface Props {
  error: string
}

const GeoLocationErrorToast = ({ error }: Props) => {
  const showToast = useCallback(() => {
    let toastMessage = `${error}: 위치 정보를 가져오는 데 실패했습니다.`

    if (error === 'PERMISSION_DENIED') {
      toastMessage = `${error}: 위치 권한이 거부되었습니다.\n현재 위치로 설정하고 싶다면 위치 권한을 허용해주세요.`
    }

    toast.error(toastMessage)
  }, [error])

  useEffect(() => {
    if (error) {
      showToast()
    }
  }, [error, showToast])

  return <ToastContainer style={{ whiteSpace: 'pre-line', lineHeight: '20px' }} />
}

export default GeoLocationErrorToast
