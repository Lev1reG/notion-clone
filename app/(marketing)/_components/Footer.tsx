import { Button } from "@/components/ui/button";
import Logo from "./Logo";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex items-center w-full p-6 bg-background z-50 dark:bg-[#1F1F1F]">
      <Logo />
      <div className="md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground">
        <Button variant="ghost" size="sm">
          <Link href="https://github.com/Lev1reG/notion-clone">
            Github Repository
          </Link>
        </Button>
        <Button variant="ghost" size="sm">
          <Link href="https://derentanaphan.pages.dev">Made by Deren</Link>
        </Button>
      </div>
    </div>
  );
};

export default Footer;
