import { Dispatch, SetStateAction } from 'react'

const useLocalStorageName = (setName: Dispatch<SetStateAction<string | null>>) => {
  if (typeof window !== 'undefined') {
    const storedName = window.localStorage.getItem('name')
    if (!storedName) {
      window.location.href = '/Login'
    }
    setName(storedName)
  }
}

export default useLocalStorageName
