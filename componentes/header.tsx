import Link from "next/link"
import { User, LogOut } from "lucide-react"
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-[var(--primary)] text-white">
      <div className="max-w-[var(--largura)] mx-auto px-5 py-4">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <a href="/" className="w-[100px]">
            <Image
            src="/logo-white.svg"
            alt="Digital Educa"
            width={100}
            height={40}
            priority
            className="w-full h-auto"
            />
          </a>

          {/* Navigation Menu */}
          <nav className="hidden items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-200">
              Home
            </Link>
            <Link href="/cursos" className="text-gray-300 hover:text-white transition-colors duration-200">
              Cursos
            </Link>
            <Link href="/trilhas" className="text-gray-300 hover:text-white transition-colors duration-200">
              Trilhas
            </Link>
            <Link href="/blog" className="text-gray-300 hover:text-white transition-colors duration-200">
              Blog
            </Link>
            <Link href="/certificacoes" className="text-gray-300 hover:text-white transition-colors duration-200">
              Certificações
            </Link>
          </nav>

          {/* Right Side Buttons */}
          <div className="flex items-center space-x-4">
            <a href="https:/painel.digitaleduca.com.vc"
              className="text-gray-300 hover:text-white flex items-center space-x-2 text-sm lg:text-lg"
            >
              <User size={16}/>
              <span className="font-bold">ENTRAR</span>
            </a>
            <a href="https:/painel.digitaleduca.com.vc/checkout" className="bg-transparent border-2 border-yellow-500 text-white hover:bg-yellow-500 hover:text-slate-800 transition-all duration-200 flex items-center space-x-2 px-5 py-2 rounded-full cursor-pointer text-sm lg:text-lg">
              <span className="font-bold">ASSINATURA</span>
              <LogOut size={16} />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}