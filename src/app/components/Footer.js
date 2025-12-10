import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="relative text-white">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/assets/manali.jpg"
                    alt="Footer Background"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/70" /> {/* Overlay */}
            </div>

            {/* Footer Content */}
            <div className="relative container mx-auto px-6 py-12 grid md:grid-cols-4 sm:grid-cols-2 gap-10 z-10">
                {/* Logo */}
                <div>
                    <Link href="/"><div className="text-4xl font-bold mb-4 text-cyan-600">Solang Valley</div></Link>
                    <p className="text-gray-300 text-base ">
                        Solang Valley is a famous sport destination hill station. The Valley is situated in Manali in Himachal Pradesh. The elevation of the valley is 2,560 m. It offers a perennial, winter and summer sport activities to have fun with family and friends.
                    </p>
                </div>

                {/* Recent Posts */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Recent Posts</h3>
                    <div className="space-y-4">
                        {/* Blog Item */}
                        <Link href="/blog/seven-things-to-do-in-manali" className="flex items-center gap-3 group ">
                            <div className="w-14 h-14 relative flex-shrink-0 rounded overflow-hidden">
                                <Image
                                    src="/assets/sln.jpg"
                                    alt="Blog thumbnail"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <p className="text-gray-300 text-sm group-hover:text-cyan-500 transition leading-snug">
                                Seven Things To Do In Manali
                            </p>
                        </Link>

                        <Link href="/blog/best-places-to-visit-in-manali-solang-valley" className="flex items-center gap-3 group ">
                            <div className="w-14 h-14 relative flex-shrink-0 rounded overflow-hidden">
                                <Image
                                    src="/assets/solaa.jpg"
                                    alt="Blog thumbnail"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <p className="text-gray-300 text-sm group-hover:text-cyan-500 transition leading-snug">
                               Best places to visit in Manali: Solang Valley
                            </p>
                        </Link>

                    
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-3 text-gray-300">
                        <li><Link href="/" className="hover:text-cyan-500 transition">Home</Link></li>
                        <li><Link href="/about" className="hover:text-cyan-500 transition">About</Link></li>
                        <li><Link href="/nearby-places" className="hover:text-cyan-500 transition">Nearby Places</Link></li>
                        <li><Link href="/scenic-view" className="hover:text-cyan-500 transition">Scenic View</Link></li>
                        <li><Link href="/blog" className="hover:text-cyan-500 transition">Blog</Link></li>
                    </ul>
                </div>

                {/* Map */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Map</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13487.355234119386!2d77.156847!3d32.316184!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39048725a6136a93%3A0x95049c93f3995845!2sSolang%20Valley!5e0!3m2!1sen!2sus!4v1764407939652!5m2!1sen!2sus"
                        referrerPolicy="no-referrer-when-downgrade"
                        width="100%"
                        height="200"
                        allowFullScreen=""
                        loading="lazy"
                        className="rounded-lg border-0"
                    ></iframe>
                </div>
            </div>

            {/* Bottom Copyright */}
            <div className="relative border-t border-gray-600/40 text-center py-4 text-sm text-gray-400 z-10">
                © {new Date().getFullYear()} All Rights Reserved | Built by{" "}
                <Link href="https://www.proactivedigital.in/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-cyan-600">Proactive</Link> |{" "}
                {/* <Link href="/disclaimer" className="text-blue-400 hover:text-cyan-600">Disclaimer</Link> */}
            </div>
        </footer>
    );
}
