import { faker } from "@faker-js/faker";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Story from "./Story";

function Stories() {
	const [suggestions, setSuggestions] = useState([]);
	const { data: session } = useSession();
	useEffect(() => {
		const suggestions = [...Array(20)].map((_, i) => ({
			id: i,
			address: faker.address.cityName(),
			avatar: faker.internet.avatar(),
			company: faker.company.companyName(),
			dob: faker.date.birthdate(),
			email: faker.internet.email(),
			name: faker.name.findName(),
			phone: faker.phone.phoneNumber(),
			username: faker.internet.userName(),
			website: faker.internet.domainName(),
		}));

		setSuggestions(suggestions);
	}, []);
	return (
		<div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
			{session && (
				<Story
					img={session?.user?.image}
					username={session?.user?.username}
				/>
			)}

			{suggestions.map((profile) => (
				<Story
					key={profile.id}
					img={profile.avatar}
					username={profile.username}
				/>
			))}
		</div>
	);
}

export default Stories;
