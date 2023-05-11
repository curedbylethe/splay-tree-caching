import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/firebase/config';
import { Post } from '@/types/post';

// define the type for the hook's return value
type UsePostResult = {
    post: Post | null; // a single post or null if not found
    loading: boolean; // a boolean indicating if the data is loading
    error: any; // an error object if there is any
};

// define the hook function that takes an id parameter
const usePost = (id: string): UsePostResult => {
    // initialize the state variables
    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<any>(null);

    // define a function to fetch the post from firestore
    const fetchPost = async () => {
        try {
            // get the reference to the document with the given id
            const postRef = doc(db, 'posts', id);
            // get the document from the reference
            const docSnapshot = await getDoc(postRef);
            // check if the document exists
            if (docSnapshot.exists()) {
                // get the data from the document and map it to a post object
                const postData = docSnapshot.data() as Post;
                postData.id = docSnapshot.id; // add the id field
                // update the state with the fetched post
                setPost(postData);
            } else {
                // set post to null if not found
                setPost(null);
            }
            // set loading to false
            setLoading(false);
        } catch (err) {
            // handle any errors
            console.error(err);
            setError(err);
            setLoading(false);
        }
    };

    // use useEffect to call fetchPost once when the component mounts or when the id changes
    useEffect(() => {
        fetchPost();
    }, [id]);

    // return the state variables from the hook
    return { post, loading, error };
};

export default usePost;
