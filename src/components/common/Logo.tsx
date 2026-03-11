import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary shadow-lg shadow-primary/20 transition-transform hover:scale-105 active:scale-95">
        <span className="text-xl font-bold text-primary-foreground">AG</span>
      </div>
      <span className="hidden text-2xl font-black tracking-tighter text-foreground sm:block">
        ANTIGRAVITY<span className="text-primary">SHOP</span>
      </span>
    </Link>
  );
}
