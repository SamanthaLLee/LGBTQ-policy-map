
import Link from 'next/link'

export default function NavigationBar({
  children,
  home
}: {
  children: React.ReactNode
  home?: boolean
}) {
  return (

    <div>
      <ul id="nav">
        <li><Link href="/">
          <a>Home</a>
        </Link></li>
        <li><Link href="/about">
          <a>About</a>
        </Link></li>
        <li><Link href="https://github.com/SamanthaLLee/LGBTQ-policy-map">
          <a>Source</a>
        </Link></li>


      </ul>
    </div>


  )
}