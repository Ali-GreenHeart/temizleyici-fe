"use client"
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Header = ({ }) => {
    const [menuOpen, setMenuOpen] = useState(false); // State to manage the mobile menu

    // Toggle menu visibility
    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <>
            <header className="container mx-auto px-4 py-6 fixed">
                <nav className="flex items-center justify-between">
                    <Link href="/" className="flex items-center space-x-2">
                        <img style={{ width: 40, height: 40 }} src={"/logo.png"} alt="temizleyici" />
                        <span className="text-2xl font-bold text-green-800 dark:text-green-100">Təmİzləyici</span>
                    </Link>

                    {/* Burger Icon for Mobile */}
                    <button
                        className="md:hidden p-2"
                        onClick={toggleMenu}
                    >
                        {menuOpen ? (
                            <X className="h-6 w-6 text-green-600 dark:text-green-400" />
                        ) : (
                            <Menu className="h-6 w-6 text-green-600 dark:text-green-400" />
                        )}
                    </button>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Link href="/features">
                            <Button variant="ghost">Features</Button>
                        </Link>
                        <Link href="/about">
                            <Button variant="ghost">About</Button>
                        </Link>
                        <Link href="/download">
                            <Button variant="ghost">Download</Button>
                        </Link>
                        <ModeToggle />
                    </div>
                </nav>
            </header>

            {/* Mobile Menu */}
            <div className={`md:hidden ${menuOpen ? 'block' : 'hidden'}`}>
                <div className="flex flex-col items-center space-y-4 py-4">
                    <Link href="/features" className="text-lg text-green-800 dark:text-green-100">Features</Link>
                    <Link href="/about" className="text-lg text-green-800 dark:text-green-100">About</Link>
                    <Link href="/download" className="text-lg text-green-800 dark:text-green-100">Download</Link>
                    <ModeToggle />
                </div>
            </div>
        </>
    )
}
export default Header
