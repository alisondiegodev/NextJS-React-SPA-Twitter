import Link from "next/link";
import Content from "../../../componentes/Content";

export default function Home() {
  return (
    <div className="content">
      <Content />
      <h1>test</h1>
      <Link href="/home">LOGIN</Link>
    </div>
  );
}
