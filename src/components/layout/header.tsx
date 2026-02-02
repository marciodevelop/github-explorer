"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/../public/logo.svg";
import { usePathname, useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { repoSelectedStore } from "@/store/repo-selected-store";

export function Header() {
  const { back } = useRouter();
  const { clearSelectedRepo } = repoSelectedStore()
  const pathname = usePathname();

  const handleBackPage = () => {
    back()
    clearSelectedRepo()
  };

  const isRepositoryPath = pathname.includes("repository");

  return (
    <header className="w-full bg-[#24292E] hidden md:flex md:justify-between md:items-center px-4">
      <div className="flex flex-col justify-center max-w-317.25 h-18  text-white">
        <Link href="/">
          <Image alt="logo" src={Logo} />
        </Link>
      </div>
      {isRepositoryPath && (
        <button
          type="button"
          className="flex items-center text-white hover:text-gray-300 transition gap-2"
          onClick={handleBackPage}
        >
          <ChevronLeft size={18} />
          Voltar
        </button>
      )}
    </header>
  );
}
