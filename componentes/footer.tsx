import Link from "next/link"
import { User, LogOut, Instagram, Facebook, Youtube, X } from "lucide-react"
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[var(--primary)] text-white border-t-2 border-[var(--secondary)]">
      <div className="max-w-[var(--largura)] mx-auto px-5 py-10">

        {/* col 1 */}
        <div className="flex flex-col items-center">
            <a href="/" className="w-[80px]">
                <Image
                src="/logo-white.svg"
                alt="Digital Educa"
                width={100}
                height={40}
                priority
                />
            </a>
            <div className="sociallinks flex gap-2 items-center mt-5">
                <a href="https://www.instagram.com/soudigitaleduca" target="_blank" className="rounded-full bg-white/20 p-3"><Instagram size={18}/></a>
            </div>
        </div>

      </div>
    </footer>
  )
}