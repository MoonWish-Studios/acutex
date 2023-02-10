import Link from "next/link"

interface NavLinkTypes {
  href: string
  text: string
  currentPath: string | null
}
export default function NavLink({
  href,
  text,
  currentPath,
  className,
}: {
  href: string
  text: string
  currentPath: any
  className?: string
}) {
  return (
    <Link
      href={href}
      className={`text-[1.03rem] font-[350] text-black1 hover:underline first-letter underline-offset-8
        px-2 md:px-3 transition decoration-gray py-1 ${className}  ${
        href === currentPath && "md:underline "
      }`}
      about={`${text} Link`}
    >
      {text}
    </Link>
  )
}
