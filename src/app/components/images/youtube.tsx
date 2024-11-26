import Link from "next/link";
import Image from "next/image";

type Props = {
  size: number;
};

export const youtube = ({ size }: Props) => {
  return (
    <Link href="https://www.youtube.com/@DSWWHEEL">
      <Image
        src={"youtube.svg"}
        alt="videos de tutors"
        width={size}
        height={size}
        quality={100}
        className="hover:scale-110 transition-all duration-10 ease-in-out hover:opacity-20"
      />
    </Link>
  );
};
