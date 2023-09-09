import Content from "../../componentes/Content";
import { SessionProvider } from "next-auth/react";
export default function Home() {
  return (
    <div className="content">
      <SessionProvider>
        <Content />
        <h1>test</h1>
      </SessionProvider>
    </div>
  );
}
