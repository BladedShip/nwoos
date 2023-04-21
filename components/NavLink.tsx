import Link from 'next/link'

type Props = {
    category: string,
    isActive?: boolean,
}

function NavLink({category, isActive}: Props) {
  return (
    <Link href={`/news/${category}`} className={`navLink ${isActive && 'underline decoration-[#dbbadd] underline-offset-4 font-bold scale-125 hover:scale-125'}`}>
        {category}
    </Link>
  )
}

export default NavLink