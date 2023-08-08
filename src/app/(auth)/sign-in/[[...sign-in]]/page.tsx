import { SignIn } from "@clerk/nextjs";
import Image from "next/image";
import wallpaper from '../../../../../public/assets/images/wallpaper.png';


export default function Page() {

  return (
    <main>
      <Image src={wallpaper} alt="" className=""/>
      
      
      <SignIn />;

    </main>

  )

}