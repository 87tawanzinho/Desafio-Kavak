import { Dispatch, SetStateAction } from 'react'

const outAccount =
  (setMenuModal: Dispatch<SetStateAction<boolean>>) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault() // Prevent the default behavior of the anchor element
    window.location.href = '/'
    setMenuModal(false)
    window.localStorage.removeItem('id')
    window.localStorage.removeItem('name')
    window.localStorage.removeItem('token')
  }

export default outAccount
