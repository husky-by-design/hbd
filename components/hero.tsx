import Image from "next/image";
import hbdText from "../public/hbd-logo.svg";

export default function Hero() {
  return (
    <div className="bg-white">
      <div className="mx-auto w-80 my-6">
        <Image layout="intrinsic" src={hbdText} />
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-base font-semibold text-purple-600 tracking-wide uppercase">
            Creative Solutions
          </h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Husky by Design
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Coming soon
          </p>
        </div>
      </div>
    </div>
  );
}
