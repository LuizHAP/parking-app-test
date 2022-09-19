import Link from 'next/link'

import Image from 'next/image'
import * as S from './styles'

export function Header() {
  return (
    <S.Container>
      <Link href="/">
        <Image src="/img/parking.svg" alt="Logo" width="50%" height="50%" />
      </Link>
    </S.Container>
  )
}
