import Link from "next/link";
import { Button } from "../components/Button";
import { NextCustomPage } from "../types/next";

const HomePage: NextCustomPage = () => {
  return (
    <div className="flex h-screen items-center justify-center gap-2.5  ">
      {/* arget="_blank"  คือการกำหนดให้ เมื่อกดที่ลิงค์แล้ว ให้เปิดหน้าใหม่ */}
      <Link href="https://youtube.com" target="_blank">
        <Button className="bg-red-600 text-white ">Youtube</Button>
      </Link>
      <Link href="/pokedex">
        <Button>Pokedex</Button>
      </Link>
    </div>
  );
};

export default HomePage;
