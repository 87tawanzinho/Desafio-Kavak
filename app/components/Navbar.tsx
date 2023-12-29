'use client'
import Image from 'next/image'
import Link from 'next/link'
import menu from '@/public/images/menu.png'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [menuModal, setMenuModal] = useState(false)
  const [ILogged, setILogged] = useState<string>('')

  useEffect(() => {
    const localStorageIsDefined = typeof localStorage !== 'undefined' && typeof window !== 'undefined'
    const userIsLogged = localStorageIsDefined ? localStorage.getItem('id') : false
    if (userIsLogged) {
      setILogged(userIsLogged)
    }
  }, []) // Run only once on component mount

  const outAccount = () => {
    window.location.href = '/'
    setMenuModal(false)
    window.localStorage.removeItem('id')
    window.localStorage.removeItem('name')
    console.log('outing')
  }
  return (
    <header className='flex justify-between items-center px-0 lg:px-40 border-2 border-b-gray-200'>
      <div>
        <img
          src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAflBMVEX///8AAABycnIvLy/R0dH8/Pw8PDyMjIwEBAT5+fnMzMz09PTp6emVlZXX19eurq7v7++7u7tgYGBxcXGjo6Pg4OAqKirl5eVmZmZRUVE2Nja1tbUiIiJMTEwbGxuenp56enqDg4NaWlpDQ0MRERGHh4dHR0cXFxeQkJDExMSVAnlGAAAJMklEQVR4nO2bW0PrKhCFE1vciVpvVbdWt9br0f//B0/TJrAWDNSm7vNy1vekCRCyAsPMQKtKCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgjxP8S5XQpXu5QW32FnRSeHnrv07hXcnlylD7s+Cv/NF6Hs4nxLL2+h8GHre318n3mDWejIzWly9xy6efhnZw3qwE1y87hG2rhxV81fw3+nWPa9/NQjLDsL7/1UZ2bRLyg/Te4usbmznQcCVJ7wHcdPrq/Stq/r+iv8d4mlT/KPXDVzSNr6O21dP9l1ihr8xtYmVvUyJQ3Ose03Q93VWx96Zdx1KNzUy/zXcNUXa+uvf67+3XkcrCYWNnfxrdcmShosV+/iOUvrntIzVzMDNCgMBFct4KlNuHHcVZyZdUrj4BS7OWIYFDTgIfaQfFdX/dnc8Jxghdv8M+9xwIC2z+tLpjktaXCHzR1ZtbdQ0ICGmGGwj5IBQrbpOvvMRyh1E9rtJTTNaUEDsq9/xvgaOQ0c2/kHo+rH5tZjeCwYkKa+tLvjqjNsGKbSoKA1EAoakH0dMwwKGtxh219pTW/YwKj9qpswN9N1fFMK212Eun7qLY1KOQ1cdYHW4GWXV/fkNKim2NUP45tO/Cf3i5sDh6JZjUsDt/IBoNNf4fqtv26Y0/w4mGBzGdm3kNWgPMQ6/T2wps+KtTpIptegLUy9eap4VgOaWLfjIo+cBhfY9p3RNho28nICh9YDP7HENDT8ApdTc5qdCw029/snNXBhpHcYQwz0b+rPcP0KLUJiRZwj99tHKI6n3uU3NXDd48KNgzECZDXgIZZ2iYcBmfIaerWIa7nq2dS29zW8qInomXHQ4tNK/nkRWwP3hl01VvorkqB+DnfOsFf3cb2T0OkGtT2qaVAny3xGA1iHmlUnRuYhbA2esEPztBZN++gTPMDlx7gieFHNavp6XqP2YnNqa0ABTX08NhVjasCvaFiaGX+2LkTyXOD1KMog9/sgpJsoiOp45XoZDZ6xyq/R6ShDgy5+g1dcppVY/zUwXygiwn5FEd7vcH1Sx3zxGxkaOFa0Ph6pgD0OzsnSGK7re6oBhEj0USkfcI13luH6PQ+rjsVWDSrwquIH7a8BxMzNKoRJhpgxDGj9zGRI0AdoSNvHRIMmMqeWBhTQNG01FnTeBw0oBE6HmOPwcOAlaBVlyjzgAzQ4fa/itjrYnFoagFeVGJ6dMDSgITZL8uSONfK9gCWLwq0g4h++7BNQb7XFGWaIDQ2m2M23PSQwNKAhZlmaeW3yEUpQZqfPB0QZND88Wl6IA/84V9SAZlziiOyAMRfQca+TfHpk2BCIAc306gKUaXyS2h3XqUXsStCzUw1I0TEZtEDSEDnutVGD1jd0mV/D4I0WgPUHJb8B3o9CTbKOxXEAy2kzJpFa0oCGmJlIxXFOodNFmMA0XzZO1g1cgenLQdQp26KcBg5zkpkAdbwGX9iJG8PzusPA8BxipwY3ach9ue0GAnUatH3HB05z5jTWwFHMNiqDltPAOfxa1hCjqfIeuTfeMrk4vdqSDwDZSfI17sgid+tnRgO2o8Ym4T4a8PplWEQKbjq/BN1cP8Sj/ZmXigN90HYZZyDJnHo/KtaARtV+FjHVgCZknThfYI377RBKOMF+HPnTp/gcnL7RnKly/nRiD7aZrT00iJa1z7j4IdnttUQhRGrqtyAa2bpLcgUhvUSLTBd3ueoALw1xVaIB+aJJiL6PBlW8/EcukrW+UW8ovWot+zXExW71MIhM+lQYuaFDejVdG2HSNtZ+8D4asDV75tKUH3H9i0Qu8ECSZ+F3qFJfyhkd6GPyVANyZ9+ScwH7acBRIUXOwRto/CSM0qEwezI+MARXU8ys+VQYdeAyowHq1+wVOZsxE63Yy1DUQXDT4PpG3jWIZrvAEGSbzoDjYw+ntgbxpB0fOpsa8CCGTCEYNnJPaU2n9KpBLpHqB5CrjPx7Og4i4xlciR/RgD34kCBq8bsuhg5vhqWd4X6IzWIDSTdc35rNhxwCBJpF0/hEzGBP4kk72iQYGrjWzqyToZ9NjzrWPc+s6Y59h827wj4a3X3ayLlplWLCj4wGjl2QyHrvqUG0RzDs5dIUGe4/rTsTh0hDJ41cKYwSzL32AaoZl3fuhJlP5CNjY3dYcvsLuAYORowsladdf784RBraSXLmy/AMijR6X+MyLt9xmNNg6zbIXhqQL7TZQzcTqd1Wo+MttJX7D1M+3juBj0VB1Ea109rkIqcBTlrasvkJDSjnswlNzURqPayFNCz9SQjHpr/BczaUebjflKZFNvCY3WsjF3zkzntGgyj3160BZiK1o7dFNFPAEyQnElZxOo0y2fR+ijFkUKhLGqP5w31nSiOMO4GRP39A7stFNpFamwMBtkxpePvEkOOp3AdRrBfwSKcW8PzBD5zEyWtAfZ/kE6nrdGFXIXcCBc1c5qxG72tQ8MWcYet0DgUWF2PLfj8N0O9ZOYUU40Zcx2/V4MEDUA9SMnQapVcsXUg9D885Db4wK/06ziJkNbjGxu1dkJ7ek8xliubD9ccQ3NEhvvW6YzhUCNoJPpN1Zx7x+hkN2B0nZ9gxw75/bbflrWlyIrVvePNOrm1bbLUFk8SmkjWgSTsuwZzXILcSZKMTCpHgXGu/qv4z/O+4aeukT/92dhImOqNJftXFiNlg7bkOPNsaZI97QE66wfTWydC9odx3z/SaXmOiAZnrmzEWoaCBvQlmnytfExaqhgzgOiEBZhI866Z0tjuzGMVntg/Qeud+CFOioIGdESw9YmEXXC8ZuURqycOdm7Mh/v0CzazGbqlISQNXpxhbDoHcCZQZ7UrnTqMkj48O2+Q04Bi62EGbkgbG4Yi38q/2KOsfDEcbOu6iqKAc8ZpBSvJbHvJRm3af3zMZ5/MfoseXfzAVZf1hAXmCc2ZUZkvmwwxW0990kY9aMFgZbucHG+Zzoz9fw92+zME2id9DhfltKHwMXuwM2rwt/wZwNRK5A+s6yULiWig1n//sL0bT1sa27+vt9AvY6nvZ4qjNv/yr2e3Nu8zff+2BP1NHCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgjx3/EvS9xf4OxxHz4AAAAASUVORK5CYII='
          alt='Logo-Kavak'
          className='h-14 lg:h-20'
        />
      </div>

      <div className='hidden lg:flex gap-8 text-gray-600'>
        <Link href='/'>Inicio</Link>
        <a href='https://www.linkedin.com/in/thiago-tawan/' target='_blank'>
          Linkedin
        </a>
        <a href='https://github.com/87tawanzinho' target='_blank'>
          Github
        </a>

        {!ILogged ? (
          <Link href='/Login' className='text-red-600'>
            Entrar
          </Link>
        ) : (
          <div className='flex gap-4'>
            <Link href='/Dashboard' className='text-green-900'>
              Dashboard
            </Link>

            <Link href='/' className='text-red-600' onClick={outAccount}>
              Sair
            </Link>
          </div>
        )}
      </div>

      <div className='flex lg:hidden'>
        {menuModal ? (
          <div className='absolute h-full w-full bg-white top-0 left-0'>
            <p
              className='px-4 font-bold text-2xl absolute end-0 top-2 text-red-700'
              onClick={() => setMenuModal(false)}
            >
              X
            </p>
          </div>
        ) : (
          <Image src={menu} alt='menu' className='h-7 w-7 mr-2' onClick={() => setMenuModal(true)} />
        )}
      </div>

      {menuModal && (
        <div className=' fixed h-full w-full top-0 left-0  pt-24 text-center bg-white z-50'>
          {!ILogged ? (
            <div>
              <p className='font-bold text-xl'>Nós lhe damos as boas vindas</p>
              <p>Faça login para poder criar um novo veiculo</p>

              <Link href='/Login' onClick={() => setMenuModal(false)}>
                <button className='mt-4 w-11/12 bg-black text-white'>Login</button>
              </Link>
            </div>
          ) : (
            <div>
              <p>Você é incrível 💘</p>
              <div className='flex items-center gap-2 mt-8 p-8 flex-wrap justify-center'>
                <div className='flex flex-col gap-4'>
                  <Link href='/'>
                    <button>Inicio</button>
                  </Link>
                  <Link href='/Dashboard'>
                    {' '}
                    <button className='bg-green-300 border-none'>Dashboard</button>
                  </Link>
                  <Link href='https://github.com/87tawanzinho' target='blank'>
                    <button className='bg-violet-300 border-none'>Github</button>
                  </Link>
                  <Link href='https://www.linkedin.com/in/thiago-tawan/' target='blank'>
                    <button className='bg-blue-300 border-none'>Linkedin</button>
                  </Link>
                  <Link href='/'>
                    <button className='bg-red-300 border-none' onClick={outAccount}>
                      Sair da sua conta
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </header>
  )
}
