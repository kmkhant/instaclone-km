import Image from "next/image";

function Story({ img, username }) {
	return (
		<div className="flex flex-col items-center">
			<div className="flex items-center justify-center rounded-full h-10 w-10 ring-[2px] ring-red-400 ring-offset-[2.5px] hover:scale-110 transition transform duration-200 ease-out cursor-pointer">
				<Image
					src={img}
					alt={`${username} profile`}
					width={48}
					height={48}
					objectFit="contain"
					className="rounded-full"
				/>
			</div>

			<div className="w-16 text-center">
				<p className="text-sm overflow-hidden text-ellipsis mt-2">
					{username}
				</p>
			</div>
		</div>
	);
}

export default Story;
