import React from "react";

const Loading: () => JSX.Element = () => {
	return (
		<div className=' fixed flex items-center justify-center h-screen w-full bg-[rgba(0,0,0,0.8)]'>
			<div className='size-10 bg-white rounded-[9999999px] drop-shadow-[0_0_20px_white] animate-bounce pulse'></div>
		</div>
	);
};

export default Loading;
