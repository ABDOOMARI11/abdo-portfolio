import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";


const Header = () => {
  return (
    <header className="py-0  mb-4 text-white">
      <div className="container mx-auto flex justify-between items-center"> 
        <Link href="/">
          <img src="/assets/logo (2).png" alt="Logo" className="h-16 xl:h-24" />
        </Link>
        <div className="hidden xl:flex items-center gap-8">
            <Nav/>
            
        </div>

        <div className="xl:hidden"><MobileNav/></div>
        
      </div>
    </header>
  );
}

export default Header;
