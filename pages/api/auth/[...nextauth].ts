import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../src/app/FirebaseConfig';

export const authOptions = {

    pages: {
        signIn: '/login' // kada se bude pristupilo loginu, rediktovat ce nextauth na "nas" login 
    },
    providers:[
        CredentialsProvider({
            name: 'Credentials',
            credentials: {},
            async authorize(credentials): Promise<any>{
                return await signInWithEmailAndPassword(auth, (credentials as any).email || '', (credentials as any).password || '')
                .then(userCredential =>{
                    if(userCredential.user){ // ako funkcija vrati usera, onda nam ga vraca citavog
                        return userCredential.user;
                    }
                    return null; // ako nema usera, onda vraca null
                })
                .catch(error => (console.log(error)))
            }
        })
    ]
}

export default NextAuth(authOptions);