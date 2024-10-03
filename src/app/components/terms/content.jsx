import MaxContainer from "../common/maxcontainer";

const Content = () => {
    return (
        <section className="py-[12rem] bg-[#EFFFEE] text-[#002E20]">
            <MaxContainer>
                <div className="max-w-[130rem] px-[7rem] sm:px-[2.5rem] mx-auto">
                    {/* Privacy Policy Section */}
                    <div>
                        <h1 className="sub_header_i">Privacy Policy</h1>
                        <p className="p_i">At the Omo Offa Nimi Project, we are committed to protecting the privacy and security of your personal information. This policy outlines how we collect, use, and safeguard your data when you register on our platform.</p>
                    </div>

                    {/* Information Collection Section */}
                    <div className="mt-[2.5rem]">
                        <h2 className="sub_header_ii">Information Collection</h2>
                        <p className="mt-[1rem] p_i mb-[1.3rem]">We collect the following information when you register for the Omo Offa Nimi ID Card:</p>
                        <ol className="list-decimal pl-4 flex list-inside flex-col gap-[.5rem]">
                            <li className="p_i">Personal information (name, date of birth, contact details, etc.)</li>
                            <li className="p_i">Lineage information (AGBO ILE)</li>
                            <li className="p_i">Identification documents (passport, driver’s license)</li>
                            <li className="p_i">Biometric data (thumbprint, facial recognition)</li>
                        </ol>
                    </div>

                    {/* How We Use Your Information Section */}
                    <div className="mt-[2.5rem]">
                        <h2 className="sub_header_ii">How we use your information</h2>
                        <p className="mt-[1rem] mb-[1.3rem]">The information you provide will be used for:</p>
                        <ol className="list-decimal pl-4 flex list-inside flex-col gap-[.5rem]">
                            <li className="p_i">Verifying your indigeneship and issuing the Omo Offa Nimi ID Card.</li>
                            <li className="p_i">Maintaining your identity record in our secure database.</li>
                            <li className="p_i">Providing updates and notifications about your registration and card status.</li>
                            <li className="p_i">Facilitating community services and access to community benefits.</li>
                            <li className="p_i">We will never sell or share your personal data with third parties unless required by law.</li>
                        </ol>
                    </div>

                    {/* Data Security Section */}
                    <div className="mt-[3rem]">
                        <h2 className="sub_header_ii mb-[1rem]">Data Security</h2>
                        <p className="p_i">We employ advanced encryption and security measures to ensure the protection of your personal and biometric data. Only authorized personnel can access this information for verification and card issuance purposes.</p>
                    </div>

                    {/* Your Rights Section */}
                    <div className="mt-[2.5rem]">
                        <h2 className="sub_header_ii">Your Rights</h2>
                        <p className="mt-[1rem] mb-[1.3rem]">You have the right to:</p>
                        <ol className="list-decimal pl-4 flex list-inside flex-col gap-[.5rem]">
                            <li className="p_i">Access the personal information we hold about you.</li>
                            <li className="p_i">Request corrections or updates to your information.</li>
                            <li className="p_i">Request the deletion of your data under specific circumstances.</li>
                            <li className="p_i">For any privacy-related inquiries or requests, please contact our data protection officer at Offanimi@gmail.com</li>
                        </ol>
                    </div>

                    {/* Terms of Service Section */}
                    <div className="mt-[3.5rem]">
                        <h3 className="sub_header_i">Terms of Service</h3>
                        <p className="mt-[2rem] mb-[1.5rem]">By registering for the Omo Offa Nimi Project, you agree to the following terms and conditions:</p>
                        <ol className="list-decimal list-outside pl-[2.7rem] sm:pl-[1.5rem] flex flex-col gap-[.5rem]">
                            <li className="p_i"><span className="font-[700]">Eligibility:</span> You must be an indigene of Offa to register for the Omo Offa Nimi ID Card. Proof of lineage (AGBO ILE) is required for verification.</li>
                            <li className="p_i"><span className="font-[700]">Accuracy of Information:</span> You agree to provide accurate and up-to-date information. Falsifying documents or providing false information may result in the termination of your registration.</li>
                            <li className="p_i"><span className="font-[700]">Biometric Data Usage:</span> You consent to the collection of your biometric data (thumbprint and facial recognition) for identity verification purposes.</li>
                            <li className="p_i"><span className="font-[700]">Card Use:</span> The Omo Offa Nimi ID Card is for personal use only and cannot be transferred to another person. Misuse of the card may lead to revocation.</li>
                            <li className="p_i"><span className="font-[700]">Updates to Terms:</span> We reserve the right to update these terms and conditions. Users will be notified of any significant changes to our policies.</li>
                        </ol>

                    </div>

                    {/* Agreement */}
                    <p className="mt-[2rem] mb-[2.5rem] p_i">By registering, you acknowledge that you have read and agreed to our Privacy Policy and Terms of Service.</p>
                    <p className="p_i">For more details, please contact us at Offanimi@gmail.com</p>
                </div>
            </MaxContainer>
        </section>
    );
};

export default Content;
