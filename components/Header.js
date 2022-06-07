import Image from "next/image";
import {
	SearchIcon,
	PlusCircleIcon,
	UserGroupIcon,
	HeartIcon,
	PaperAirplaneIcon,
	MenuIcon,
} from "@heroicons/react/outline";

import { HomeIcon } from "@heroicons/react/solid";
import {
	useSession,
	signOut,
	signIn,
} from "next-auth/react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";

function Header() {
	const { data: session } = useSession();
	const [open, setOpen] = useRecoilState(modalState);
	const router = useRouter();
	return (
		<div className="shadow-sm border-b bg-white sticky top-0 z-50">
			<div className="flex justify-between max-w-6xl items-center mx-auto px-3">
				{/* LEFT */}
				<div
					className="relative hidden lg:inline-grid h-24 w-24 cursor-pointer"
					onClick={() => router.push("/")}
				>
					<Image
						src="https://links.papareact.com/ocw"
						layout="fill"
						objectFit="contain"
						alt="logo"
					/>
				</div>
				<div className="relative inline-grid lg:hidden h-10 w-10 flex-shrink-0 cursor-pointer">
					<Image
						src="https://links.papareact.com/jjm"
						layout="fill"
						objectFit="contain"
						alt="logoMini"
					/>
				</div>
				{/* MIDDLE - Search Input Field */}
				<div className="relative mt-1 p-3 rounded-md">
					<div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
						<SearchIcon className="h-5 w-5 text-gray-500" />
					</div>
					<input
						type="text"
						placeholder="Search"
						className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md"
					/>
				</div>
				{/* RIGHT */}
				{session ? (
					<div className="flex items-center space-x-4 pr-3">
						<HomeIcon className="navBtn" />
						<MenuIcon className="h-6 md:hidden" />
						<div className="relative navBtn">
							<PaperAirplaneIcon className="navBtn rotate-45" />
							<div className="absolute -top-1 -right-2 text-xs w-4 h-4  text-white bg-red-500 rounded-full flex items-center justify-center">
								3
							</div>
						</div>
						<PlusCircleIcon
							className="navBtn"
							onClick={() => setOpen(true)}
						/>
						<UserGroupIcon className="navBtn" />
						<HeartIcon className="navBtn" />
						<img
							onClick={signOut}
							src={session?.user?.image}
							alt="profile pic"
							className="h-10 w-10 rounded-full cursor-pointer"
						/>
					</div>
				) : (
					<button onClick={signIn}>Sign In</button>
				)}
			</div>
		</div>
	);
}

export default Header;
