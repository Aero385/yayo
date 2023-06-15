import Link from "next/link";

export default function Logo() {
  return (
    <Link href={'/'} className="flex gap-1">
      <img className="w-24" src='logo.svg' alt="logo"/>
    </Link>
  );
}