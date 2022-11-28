import Link from "next/link"
import { useRouter } from "next/router"

const styles = {
  color: '#0070f3',
  textDecoration: 'underline'
}

export const ActiveLink = ( {text, href} ) => {


  const { asPath } = useRouter() 

  return (
    <Link style={  asPath === href ? styles : null} href={href}>
      {text}
    </Link>
  )

}
