import firebase_app from "./config";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { db } from "./config";

type PostData = {
    title: string,
    body: string,
}

export default async function addData(id: string, data: PostData): Promise<{ result: any, error: any }> {
    let result = null;
    let error = null;

    try {
        result = await setDoc(doc(db, "posts", id), data, {
            merge: true,
        });
    } catch (e) {
        error = e;
    }

    return { result, error };
}
