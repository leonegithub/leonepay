'use client';

import { useState, useRef, useEffect, KeyboardEvent } from 'react';

interface PinCodeProps {
    length?: number;
    onComplete?: (code: string) => void;
}

export default function PinCode({ length = 4, onComplete }: PinCodeProps) {
    const [code, setCode] = useState<string[]>(Array(length).fill(''));
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    useEffect(() => {
        // Focus sul primo input al mount
        inputRefs.current[0]?.focus();
    }, []);

    const handleChange = (index: number, value: string) => {
        // Accetta solo numeri e lettere
        if (value && !/^[a-zA-Z0-9]$/.test(value)) return;

        const newCode = [...code];
        newCode[index] = value.toUpperCase();
        setCode(newCode);

        // Se è stato inserito un valore, passa al prossimo input
        if (value && index < length - 1) {
            inputRefs.current[index + 1]?.focus();
        }

        // Se tutti i campi sono riempiti, chiama onComplete
        if (newCode.every(digit => digit !== '') && onComplete) {
            onComplete(newCode.join(''));
        }
    };

    const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Backspace') {
            if (!code[index] && index > 0) {
                // Se il campo è vuoto, torna indietro
                inputRefs.current[index - 1]?.focus();
            } else {
                // Cancella il valore corrente
                const newCode = [...code];
                newCode[index] = '';
                setCode(newCode);
            }
        } else if (e.key === 'ArrowLeft' && index > 0) {
            inputRefs.current[index - 1]?.focus();
        } else if (e.key === 'ArrowRight' && index < length - 1) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handlePaste = (e: React.ClipboardEvent) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text').slice(0, length);

        if (!/^[a-zA-Z0-9]+$/.test(pastedData)) return;

        const newCode = [...code];
        pastedData.split('').forEach((char, i) => {
            if (i < length) {
                newCode[i] = char.toUpperCase();
            }
        });
        setCode(newCode);

        // Focus sull'ultimo input riempito o il successivo
        const nextIndex = Math.min(pastedData.length, length - 1);
        inputRefs.current[nextIndex]?.focus();

        // Se tutti i campi sono riempiti, chiama onComplete
        if (newCode.every(digit => digit !== '') && onComplete) {
            onComplete(newCode.join(''));
        }
    };

    return (
        <div className="flex flex-col items-center justify-center py-20 bg-white">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-semibold text-gray-900 mb-2">
                    Inserisci il codice
                </h1>
                <p className="text-gray-500">
                    Digita il codice a 4 caratteri
                </p>
            </div>

            <div className="flex gap-4">
                {code.map((digit, index) => (
                    <input
                        key={index}
                        ref={(el) => { inputRefs.current[index] = el; }}
                        type="text"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleChange(index, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        onPaste={handlePaste}
                        className="w-16 h-20 text-center text-3xl font-semibold border-2 border-gray-300 rounded-xl focus:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 bg-white uppercase"
                    />
                ))}
            </div>
        </div>
    );
}
