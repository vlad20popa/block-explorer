import Image from "next/image";

export default function Logo() {
  return (
    <div>
      <Image
        src="/icons/whitelogo.svg"
        alt="logo"
        className="m-auto py-4"
        width={48}
        height={40.72}
      />
      <hr className="border-delimiter-purple" />
    </div>
  );
}
