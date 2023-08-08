import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  const wallpaper = "/assets/images/wallpaper.png"; // Substitua pelo caminho correto da imagem

  return (
    <main className="bg-[#c2c2c2]">
      <section className={`bg-contain bg-center bg-no-repeat bg-opacity-75`} style={{ backgroundImage: `url('${wallpaper}')` }}>
        <div className="w-screen h-screen flex flex-col items-center justify-center">
      
          <SignIn />
        </div>
      </section>
    </main>
  );
}
