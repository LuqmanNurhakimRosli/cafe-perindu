import Link from "next/link"
import LogoDesk from "@/public/printforge-logo.svg";
import LogoMob from "@/public/printforge-logo-icon.svg";


export default function Navbar() {
  return (
    <header className="w-full bg-white">
      <nav className="flex justify-between px-6 py-4">
        <Link href="/">
          <div className="relative cursor-pointer">
            {/* Desktop Logo */}
            <img
              src={ LogoDesk.src}
              alt="PrintForge Logo"
              className="w-[200px] h-auto hidden md:block"
            />
            {/* Mobile Logo */}
            <img
              src={LogoMob.src}
              alt="PrintForge Logo"
              className="w-[40px] h-auto block md:hidden"
            />
          </div>
        </Link>
        <ul className="flex items-center gap-2.5">
          <li className="text-sm uppercase cursor-pointer">
            <Link href="/3d-models">3D Models</Link>
          </li>
          <li className="text-sm uppercase cursor-pointer">
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}