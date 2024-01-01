import { Dispatch, SetStateAction } from 'react'

const useLocalStorageId = (setUserId: Dispatch<SetStateAction<string | null>>) => {
  if (typeof window !== 'undefined') {
    const userId = window.localStorage.getItem('id')
    if (!userId) {
      window.location.href = '/Login'
    }
    setUserId(userId)
  }
}

export default useLocalStorageId
