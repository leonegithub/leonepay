"use client";

import { useState } from "react";
import { Drawer } from "flowbite-react";
import AccordionComponent from "@/components/Accordion";
import DropdownComponent from "@/components/Dropdown";
import Link from "next/link";
import Image from "next/image";
import logoLeone from '@/../public/logoLeone.png'
import { useAuth } from "@/context/AuthContext";
import "./header.css";
import {
    getOptions1,
    getOptions2,
    getOptions3,
} from "@/components/header-options";

export default function Header() {
    const [show, setShow] = useState(false);
    const { userId, userData } = useAuth();

    const options1 = getOptions1();
    const options2 = getOptions2();
    const options3 = getOptions3();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <header className="flex items-center justify-center">
                <div className="container px-4 mx-auto flex items-center justify-between w-full">
                    <div className="logo">
                        <Link href={`/`}>
                            <Image src={logoLeone} width={125} alt="logo-leone" />
                        </Link>
                    </div>
                    <nav className="nav-menu flex-1 flex justify-center">
                        <ul className="xl:flex  items-center space-x-4">
                            <li>
                                <DropdownComponent options={options1} dropdownLabel="Company" />
                            </li>
                            <li>
                                <DropdownComponent options={options2} dropdownLabel="Products" />
                            </li>
                            <li>
                                <Link href={`/orders`}>Orders</Link>
                            </li>
                            <li>
                                <DropdownComponent options={options3} dropdownLabel="Support" />
                            </li>
                            <li>
                                <Link href={`/events`}>Events</Link>
                            </li>
                        </ul>
                    </nav>
                    {userId ? (
                        <Link href="/personal-area">
                            <div className="hidden xl:flex blue items-center">
                                {userData && `${userData.Nome} ${userData.Cognome}`}
                            </div>
                        </Link>
                    ) : (
                        <Link href="/login">
                            <div className="hidden xl:flex blue items-center">
                                Register / Login
                            </div>
                        </Link>
                    )}
                    <button className="hamburger" onClick={handleShow} aria-label="Menu">
                        <i className="fa-solid fa-bars"></i>
                    </button>
                </div>

                <Drawer
                    open={show}
                    onClose={handleClose}
                    position="right"
                    className="w-80"
                >
                    <div className="p-4">
                        <h2 className="text-xl font-semibold mb-4">Menu</h2>
                        <nav className="mobile-body">
                            <ul>
                                <li>
                                    <AccordionComponent
                                        options={options1}
                                        accordionLabel="Company"
                                    />
                                </li>
                                <li>
                                    <AccordionComponent
                                        options={options2}
                                        accordionLabel="Orthodontics"
                                    />
                                </li>
                                <li>
                                    <Link href={`/orders`}>Orders</Link>
                                </li>
                                <li>
                                    <Link href={`/events`}>Events</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </Drawer>
            </header>
        </>
    );
}