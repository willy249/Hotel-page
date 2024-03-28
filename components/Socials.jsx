import Link from "next/link";
import { Instagram, Twitter, Facebook } from "lucide-react";

const Socials = ({ containerStyles }) => {
  return (
    <ul className={`${containerStyles}`}>
      <li>
        <Link href="/">
          <Instagram />
        </Link>
      </li>
      <li>
        <Link href="/">
          <Twitter />
        </Link>
      </li>
      <li>
        <Link href="/">
          <Facebook />
        </Link>
      </li>
    </ul>
  );
};

export default Socials;
