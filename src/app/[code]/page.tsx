"use client"

import PinCode from '@/components/PinCode';
import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

type Data = {
    ExitCode: number,
    ExitDescription: string,
    ReturnedObject: ReturnedObject
}

type ReturnedObject = {
    Codice: string,
    Azienda: string,
    Abilitato: boolean,
    Pagato: boolean,
    DataPagamento: string,
    MotivoDisabilitato: string,
    Importo: number,
    Link: string,
    Documento: string
}

function SendCode() {
    const router = useRouter();
    const params = useParams();
    const initialCode = typeof params.code === 'string' ? params.code : '';
    const [pinKey, setPinKey] = useState<number>(0);

    const checkCode = (code: string) => {
        const url = `https://php.leone.it/api/ws_leone/GetPayLinkFattura.php?IN_LinkCode=${code}&IN_Azienda=LEONE`;
        const fetchOptions = {
            headers: {
                Authorization: "Bearer wlfca9P8Zn0zQt4zwpcDne4KJROqEOAzIy3dr0Eyxhbzhqz4ydddgjc"
            }
        };
        fetch(url, fetchOptions)
            .then((response) => response.json())
            .then((data: Data) => {
                if (data.ExitCode === 0) {
                    toast.success("Codice valido. Redirect su Banca Sella...")
                    router.push(data.ReturnedObject.Link);
                } else {
                    toast.error("Errore: " + data.ExitDescription || "Codice non valido");
                    setPinKey(k => k + 1);
                }
            })
            .catch(() => {
                toast.error("Errore di rete");
                setPinKey(k => k + 1);
            });
    };

    useEffect(() => {
        if (initialCode && initialCode.length === 4) {
            checkCode(initialCode);
        }
    }, [initialCode]);

    return (
        <>
            <PinCode key={pinKey} onComplete={checkCode} />
            <ToastContainer />
        </>
    );
}

export default SendCode;
