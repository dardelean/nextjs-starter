import Link from "next/link";

export default function Home() {
  return (
    <main className="main">
      <div>
        <h2>Hello Dan</h2>
      </div>
      <Link href="/about">About</Link>
    </main>
  );
}
