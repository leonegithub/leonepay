"use client"

import React, { useState} from "react";
import { ToastContainer, toast} from "react-toastify";

type Response = {
    "ExitCode": number,
    "ExitDescription": string,
    "ReturnedObject": string
    "ReturnedError": string[]
}

function Supporto(){
    const [data, setData] = useState<Response | null>(null);
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    async function HandleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        formData.append("reparto", "amministrazione");
        formData.append("lingua", "IT");

        const url = "https://php.leone.it/api/SendContatto2.php";
        const fetchOptions = {
            method: "POST",
            headers: {
                Authorization: "Bearer wlfca9P8Zn0zQt4zwpcDne4KJROqEOAzIy3dr0Eyxhbzhqz4ydddgjc"
            },
            body: formData
        }

        try {
            const response = await fetch(url, fetchOptions);
            const result = await response.json();
            setData(result);
            console.log(data);
            if (data?.ExitCode === 0) {
                toast.success(data.ReturnedObject);
            } else {
                toast.error(data?.ReturnedError.join("<br/>"))
            }
        } finally {
            setIsSubmitting(false);
        }
    }
    return (
        <form className="container  mx-auto px-4 bg-white rounded-lg mt-10 mb-10" onSubmit={HandleSubmit}>
            <h1 className="font-bold blue pt-15 my-5">Contattaci</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-5">
                <div>
                    <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
                        Nome *
                    </label>
                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        required
                        disabled={isSubmitting}
                        className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                    />
                </div>
                <div>
                    <label htmlFor="cognome" className="block text-sm font-medium text-gray-700 mb-1">
                        Cognome *
                    </label>
                    <input
                        type="text"
                        id="cognome"
                        name="cognome"
                        required
                        disabled={isSubmitting}
                        className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email *
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        disabled={isSubmitting}
                        className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                    />
                </div>

                <div className="md:col-span-2">
                    <label htmlFor="messaggio" className="block text-sm font-medium text-gray-700 mb-1">
                        Messaggio *
                    </label>
                    <textarea
                        id="messaggio"
                        name="messaggio"
                        required
                        disabled={isSubmitting}
                        rows={4}
                        className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                    />
                </div>
            </div>
            <div>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-blue text-white px-6 py-2 rounded-md font-bold hover:blue disabled:opacity-50"
                >
                    Invia
                </button>
            </div>
            <ToastContainer />
        </form>
    );
}

export default Supporto;