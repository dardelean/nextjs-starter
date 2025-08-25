import Link from "next/link";

export default function Home() {
  return (
    <main className="main">
      <div>
        <h2>Hello World</h2>
        <p>Hello from AWS EB</p>
      </div>
      <Link href="/about">About</Link>
    </main>
  );
}
