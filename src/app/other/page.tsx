import Link from "next/link";
import Image from "next/image";
import style from "./style.module.css";

export default function Other() {
  return (
    <main>
      <h1 className="title">Other page</h1>
      <p className="msg">これは別のページです.</p>
      <div>
        <Image src="/sample.jpg" alt="画像です" width={200} height={200} />
      </div>
      <div>
        <Link href="/">go back!!!</Link>
      </div>
    </main>
  );
}
