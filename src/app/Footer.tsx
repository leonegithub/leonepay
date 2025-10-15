import Link from "next/link";
import "./footer.css";

export default function Footer() {
    return (
        <footer className="bg-gray-200 blue">
            {/* Widgets */}
            <section className="footer-first-section md:py-5 xl:py-6">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        <div className="col-span-1">
                            <div className="link-wrapper">
                                <div className="mb-1 font-bold">Servizi</div>
                                <ul className="m-0 list-none pl-0">
                                    <li className="mb-1">
                                        <Link href={"/services/downloads"}>Downloads</Link>
                                    </li>
                                    <li className="mb-1">
                                        <Link href={`/services/newlist`}>Newlist</Link>
                                    </li>
                                    <li className="mb-1">
                                        <Link href={`/services/customer-support`}>
                                            Assistenza clienti
                                        </Link>
                                    </li>
                                    <li className="mb-1">
                                        <Link href={`/services/customer-support`}>
                                            Area Riservata
                                        </Link>
                                    </li>
                                    <li className="mb-1">
                                        <Link href={`/services/customer-support`}>
                                            Whistleblowing
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="link-wrapper">
                                <div className="mb-1 font-bold">Pubblicazioni scientifiche</div>
                                <ul className="m-0 list-none pl-0">
                                    <li className="mb-1">
                                        <Link href={`/products/publications`}>
                                            Ortodonzia
                                        </Link>
                                    </li>
                                    <li className="mb-1">
                                        <Link href={`/products/publications`}>
                                            Implantologia
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="link-wrapper">
                                <div className="mb-1 font-bold">Qualità</div>
                                <ul className="m-0 list-none pl-0">
                                    <li className="mb-1">
                                        <Link href={`/quality/quality-system`}>Sistema di Qualità</Link>
                                    </li>
                                    <li className="mb-1">
                                        <Link href={`/quality/safety-sheets`}>Schede di Sicurezza</Link>
                                    </li>
                                    <li className="mb-1">
                                        <Link href={`/products/publications`}>
                                            Istruzioni
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="link-wrapper">
                                <div className="mb-1 font-bold">Distributori</div>
                                <ul className="m-0 list-none pl-0">
                                    <li className="mb-1">
                                        <Link href={`/distributors/worldwide`}>
                                            Ortodonzia
                                        </Link>
                                    </li>
                                    <li className="mb-1">
                                        <Link href={`/products/publications`}>
                                            Implantologia
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Social Media */}
            <div className="pb-4">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        <div className="col-span-3 md:col-span-3">
                            <strong>Leone S.p.A.</strong> <br/>
                            Via P. a Quaracchi, 50 - 50019 Sesto Fiorentino, Firenze
                            P. IVA 01686960483 Uff. Reg. Imprese Firenze n. 01686960483
                            <em>Cap. soc. Euro 1.200.000,00 int. vers.</em>
                        </div>
                        <div className="col-span-1 md:col-span-1 md:col-start-4">
                            <div className="social-media-wrapper text-4xl">
                                <ul className="m-0 socials-list list-none pl-0 flex gap-8 xl:gap-4">
                                    <li>
                                        <Link
                                            className="hover:opacity-75"
                                            href={`https://www.instagram.com/leone__america/`}
                                            target="_blank"
                                        >
                                            <i className="fa-brands fa-instagram"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="hover:opacity-75"
                                            href={`https://www.facebook.com/LeoneAmericaDentalProducts/`}
                                            target="_blank"
                                        >
                                            <i className="fa-brands fa-square-facebook"></i>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            className="hover:opacity-75"
                                            href={`https://www.linkedin.com/company/leone-america`}
                                            target="_blank"
                                        >
                                            <i className="fa-brands fa-linkedin"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}