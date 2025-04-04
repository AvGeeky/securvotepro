import * as React from "react";
import { Link } from "react-router-dom";

export function AboutPage() {
    return (
        <main
            className="min-h-screen w-screen overflow-x-hidden bg-gradient-to-b from-purple-950 via-purple-800 to-pink-800 text-white"
            role="main"
            aria-label="About SecUrVote"
        >
            <div className="w-screen max-w-[1400px] mx-auto px-4 lg:px-8 py-16 lg:py-24">
                <section className="flex flex-col lg:flex-row gap-8 lg:gap-16">
                    {/* Title Section */}
                    <div className="lg:w-1/4">
                        <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8 lg:mb-0 lg:sticky lg:top-24">
                            About SecurVote
                        </h1>
                    </div>

                    {/* Content Section */}
                    <div className="lg:w-3/4 space-y-8">
                        {/* Introduction */}
                        <div className="prose prose-lg prose-invert">
                            <p className="text-xl leading-relaxed">
                                SecurVote is a cutting-edge, secure digital voting platform designed to ensure
                                privacy, authenticity, and tamper-proof election processes. Leveraging advanced
                                cryptographic techniques, SecurVote provides a trustworthy and transparent voting
                                experience.
                            </p>
                        </div>

                        {/* Key Features Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                                <h2 className="text-xl font-semibold text-sky-300 mb-3">RSA-Encrypted Voting</h2>
                                <p className="text-gray-100">
                                    Votes are encrypted using a two-stage RSA encryption process—first with
                                    an vote keypair, then signed with a user keypair, ensuring vote integrity
                                    and authenticity. This vote is added to a voteblock, along with the magic-id and a HMAC hashed Secret-Id (SC-'n').
                                    Session management for each user logged in, is done by the means of a JWT (JSON Web Token), which contains their authentication
                                    levels, and is encrypted with an admin keypair, to prevent anyone from decrypting / modifying it to gain illegitimate access.


                                </p>
                            </div>

                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                                <h2 className="text-xl font-semibold text-sky-300 mb-3">Immutable Blockchain Ledger</h2>
                                <p className="text-gray-100">
                                    Each VoteBlock is encrypted and stored in an immutable MongoDB-backed blockchain,
                                    preventing tampering and ensuring full transparency. Each block on the ledger contains the hash of the
                                    previous block, and hence if anyone tries to delete any vote by hacking onto the ledger, the whole ledger loses its
                                    validity. Anyone can check the current validity of the ledger in real time from the 'Verify' page in our homepage.
                                </p>
                            </div>

                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                                <h2 className="text-xl font-semibold text-sky-300 mb-3">Secure Vote Counting</h2>
                                <p className="text-gray-100">
                                    During verification, the magic-id is used to retrieve the Secret-Id from the database which is compared with the
                                    decrypted HMAC hashed Secret-Id, to verify the uniqueness of votes (Secret Id's are unique). The signature is verified
                                    with the user keypair next, and then the voteblocks are stripped of their personal identifiable information, randomised,
                                    and then the vote keypair is used to decrypt the votes and find out the results.
                                    </p>
                            </div>

                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                                <h2 className="text-xl font-semibold text-sky-300 mb-3">Multi-Factor Authentication</h2>
                                <p className="text-gray-100">
                                    Users authenticate through email OTP verification and PBKDF2-secured username-password login,
                                    adding an extra layer of security to prevent unauthorized voting.
                                    A vote keypair is generated during the creation of the election, and is encrypted with a passphrase provided by the admin during its creation.
                                    This passphrase is required to view results, meaning no brute force attempt by anyone, even with access to the server, can access the results.

                                </p>
                            </div>
                        </div>

                        {/* Mission Statement */}
                        <div className="bg-gradient-to-r from-blue-600/20 to-green-500/20 rounded-xl p-8 mt-12">
                            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
                            <p className="text-lg text-gray-100">
                                To revolutionize digital elections by implementing a highly secure, cryptographically verifiable,
                                and user-friendly voting platform that upholds democratic integrity.
                            </p>
                        </div>

                        {/* Technical Highlights */}
                        <div className="mt-12">
                            <h2 className="text-2xl font-bold text-white mb-6">Technical Highlights</h2>
                            <ul className="space-y-4 text-gray-100">
                                <li className="flex items-start">
                                    <span className="text-sky-300 mr-2">•</span>
                                    Two-stage RSA encryption for vote confidentiality
                                </li>
                                <li className="flex items-start">
                                    <span className="text-sky-300 mr-2">•</span>
                                    HMAC-generated ‘Magic ID’ for ensuring vote uniqueness
                                </li>
                                <li className="flex items-start">
                                    <span className="text-sky-300 mr-2">•</span>
                                    MongoDB-backed blockchain ledger for immutable vote storage
                                </li>
                                <li className="flex items-start">
                                    <span className="text-sky-300 mr-2">•</span>
                                    Supabase-stored private keys for vote decryption security
                                </li>
                                <li className="flex items-start">
                                    <span className="text-sky-300 mr-2">•</span>
                                    Multi-factor authentication using email OTP and PBKDF2 hashing
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Back to Home Button */}
                <div className="flex justify-center mt-16">
                    <Link
                        to="/"
                        className="inline-block px-8 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                        BACK TO HOME
                    </Link>
                </div>
            </div>
        </main>
    );
}