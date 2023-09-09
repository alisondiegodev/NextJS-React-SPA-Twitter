import Content from "../../componentes/Content";
import { SessionProvider } from "next-auth/react";
export default function Home() {
  return (
    <div className="content">
      <SessionProvider>
        <Content />
      </SessionProvider>
    </div>
  );
}
