import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
	// Configure one or more authenication providers
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
	],
	theme: {
		logo: "https://links.papareact.com/sq0",
		brandColor: "#F13287",
		colorScheme: "auto",
	},
	pages: {
		signIn: "/auth/signin",
	},
	callbacks: {
		async session({ session, token, user }) {
			session.user.username = session.user.name
				.split(" ")
				.join("")
				.toLocaleLowerCase();

			// Khaing Myel Khant
			// khaingmyelkhant

			session.user.uid = token.sub;
			return session;
		},
	},
});
