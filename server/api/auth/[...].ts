import { NuxtAuthHandler } from "#auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { fireAuth } from "@/server/api/lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default NuxtAuthHandler({
  secret: process.env.NUXT_SECRET,
  pages: {
    signIn: "/login-register",
  },
  providers: [
    CredentialsProvider.default({
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "(hint: jsmith)",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "(hint: hunter2)",
        },
      },
      authorize(credentials: any) {
        signInWithEmailAndPassword(
          fireAuth,
          credentials.email,
          credentials.password
        )
          .then((data) => {console.log(data)})
          .catch((error) => {console.log(error)});
        // if (credentials?.username === user.username && credentials?.password === user.password) {
        //   // Any object returned will be saved in `user` property of the JWT
        //   return user
        // } else {
        //   // eslint-disable-next-line no-console
        //   console.error('Warning: Malicious login attempt registered, bad credentials provided')

        //   // If you return null then an error will be displayed advising the user to check their details.
        //   return null

        //   // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        // }
      },
    }),
  ],
});
