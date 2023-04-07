import Link from 'next/link'

type Props = {
    category: string,
    isActive?: boolean,
}

function NavLink({category, isActive}: Props) {
  return (
    <Link href={`/news/${category}`} className={`navLink ${isActive && 'underline decoration-[#dbbadd] underline-offset-4 font-bold scale-[1.35]'}`}>
        {category}
    </Link>
  )
}

export default NavLink