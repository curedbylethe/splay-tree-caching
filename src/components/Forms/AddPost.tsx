'use client';

import addData from "@/firebase/addData";
import {useState} from "react";

interface FormDataTypes {title: string, body: string}

const AddPost = () => {
    const formData: FormDataTypes = {title: '', body: ''};
    const [title, setTitle] = useState<string>('');
    const [body, setBody] = useState<string>('');

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }

    const handleBodyChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setBody(e.target.value);
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) : Promise<any> => {
        e.preventDefault();
        formData.title = title;
        formData.body = body;
        const {result, error} = await addData(title, formData);
        if (error) {
            console.log(error);
        } else {
            setBody('');
            setTitle('');
        }
    }

    return (
        <div className="w-96">
            <form onSubmit={handleSubmit} className="flex flex-col">
                <div className="mb-5">
                    <label htmlFor="title" className="mr-3">Title</label>
                    <input type="text" id="title" name="title" value={title}
                           onChange={(e) => handleTitleChange(e)}
                           className="border-b-2 border-b-orange-300
                           focus:outline-none"
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="body" className="mr-3">Body</label>
                    <textarea id="body" name="body" value={body}
                              onChange={(e) => handleBodyChange(e)}
                              className="border-b-2 border-b-orange-300
                              focus:outline-none"
                    />
                </div>
                <button
                    className="border-2 border-orange-400
                     bg-gradient-to-r from-orange-500 via-red-500 to-purple-500
                      text-white
                      w-fit
                      px-14
                      py-1"
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default AddPost;
