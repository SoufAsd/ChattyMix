import { NuxtAuthHandler } from "#auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { fireAuth } from "@/server/api/lib/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

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
        let user;
        credentials.confirmPassword ? user = signUp(credentials) : user = signIn(credentials)
        return user
      },
    }),
  ],
});

async function signUp(credentials: any) {
  let user;
  user = await createUserWithEmailAndPassword(
    fireAuth,
    credentials.email,
    credentials.password
  )
    .then((data) => {
      return {id: data.user.uid, email: data.user.email,password:credentials.password}
    })
    .catch((error) => {
      return null
    });

    return user
}

async function signIn(credentials: any) {
  let user;
  user = await signInWithEmailAndPassword(
    fireAuth,
    credentials.email,
    credentials.password
  )
    .then((data) => {
      return {id: data.user.uid, email: data.user.email,password:credentials.password}
    })
    .catch((error) => {
      return null
    });

    return user
}
