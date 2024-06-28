import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import Link from "next/link";

const BackArrow = (): JSX.Element => {
  return (
    <Link href="../">
      <IoIosArrowRoundBack className=" size-[4rem]  -translate-x-1/2 -translate-y-1/2 duration-300 ease-in-out fixed left-[5%] top-[40px] hover:size-[5rem]" />
    </Link>
  );
};

export default BackArrow;
