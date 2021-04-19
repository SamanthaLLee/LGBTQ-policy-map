
import styles from './layout.module.css'
import Link from 'next/link'


export default function NavigationBar({
    children,
    home
  }: {
    children: React.ReactNode
    home?: boolean
  }) {
    return(

    <div>
        <Link href="/">
        <a>Home</a>
        </Link>
        <Link href="/">
        <a>About</a>
        </Link>
    </div>

        
    )
  }