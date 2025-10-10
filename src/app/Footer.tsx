import Link from "next/link";
import "./footer.css";

export default function Footer() {
    return (
        <footer className="bg-gray-200 blue">
            {/* Widgets */}
            <section className="py-4 md:py-5 xl:py-6">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-6 md:grid-cols-12 gap-3">
                        <div className="col-span-3 md:col-span-4">
                            <div className="link-wrapper">
                                <div className="mb-1 font-bold">Services</div>
                                <ul className="m-0 list-none pl-0">
                                    <li className="mb-1">
                                        <Link href={"/services/downloads"}>Downloads</Link>
                                    </li>
                                    <li className="mb-1">
                                        <Link href={`/services/newlist`}>Newlist</Link>
                                    </li>
                                    {/*  <li className="mb-1">
                    <Link href={`/services/customer-support`}>
                      Customer support
                    </Link>
                  </li> */}
                                </ul>
                            </div>
                        </div>
                        <div className="col-span-3 md:col-span-4">
                            <div className="link-wrapper">
                                <div className="mb-1 font-bold">Scientific publications</div>
                                <ul className="m-0 list-none pl-0">
                                    <Link className="mb-1" href={`/products/publications`}>
                                        Orthodontics
                                    </Link>
                                </ul>
                            </div>
                        </div>
                        <div className="col-span-3 md:col-span-4">
                            <div className="link-wrapper">
                                <div className="mb-1 font-bold">Quality</div>
                                <ul className="m-0 list-none pl-0">
                                    <li className="mb-1">
                                        <Link href={`/quality/safety-sheets`}>Safety sheets</Link>
                                    </li>
                                    <li className="mb-1">
                                        <Link href={`/quality/quality-system`}>Quality system</Link>
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
                    <div className="grid grid-cols-6 md:grid-cols-12 gap-3 items-start sm:items-center">
                        <div className="col-span-3 md:col-span-4">
                            <div className="link-wrapper">
                                <strong>LeoneAmerica Dental Products, Inc</strong>
                                <br />
                                1400 Graves Ave. Unit A | Oxnard, CA 93030
                                <br />
                                info@leoneamerica.com
                                <br />
                            </div>
                        </div>
                        <div className="col-span-3 md:col-span-4 flex">
                            <em className="max-w-80 pt-4">
                                Sole distributor of Leone SpA orthodontic products in the USA,
                                Canada, and Puerto Rico
                            </em>
                        </div>
                        <div className="col-span-3 md:col-span-4 flex">
                            <div className="social-media-wrapper text-4xl">
                                <ul className="m-0 socials-list list-none pl-0 flex justify-start sm:justify-end gap-3 xl:gap-4">
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