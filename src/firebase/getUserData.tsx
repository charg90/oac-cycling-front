import { doc, getDoc } from 'firebase/firestore'
import { db } from './FirebaseConfig'

export const getUserData = async (uid: string) => {
    try {
        const userRef = doc(db, 'users', uid)
        const user = await getDoc(userRef)
        if (!user.exists) {
            console.log('No such document!')
        } else {
            console.log(user.data())
            return user.data()
        }
    } catch (error) {
        console.log(error)
    }
}
