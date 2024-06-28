"use client";
import Table from "./components/table";
import DisplayImage from "./components/displayImage";
import BackArrow from "./components/backarrow";
import Next from "./components/next";
import Back from "./components/back";
import "@/app/globals.css";

export default function SpaceshipPage(): JSX.Element {
	return (
		<div className=' min-h-screen text-white flex justify-center items-center flex-col gap-8 '>
			<BackArrow />
			<DisplayImage />
			<Table />
			<Next />
			<Back />
		</div>
	);
}
