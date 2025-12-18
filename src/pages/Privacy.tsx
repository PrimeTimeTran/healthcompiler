import { Layout } from "@/components/layout/Layout";

const Privacy = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-secondary/50 to-background overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.1),transparent_50%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Legal
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground">
              Last Updated: February 21, 2024
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Introduction</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Health Compiler, Inc. is committed to protecting the privacy of your information. This Privacy Statement describes Health Compiler, Inc.'s ("we", "our" or "the Company") privacy practices with respect to information collected from users who access our website at https://www.healthcompiler.com/ or any website owned, operated, licensed or controlled by us ("Site"), or otherwise share personal information with us (collectively: "Users").
              </p>
              
              <div className="p-6 bg-secondary/30 rounded-xl border border-border/50 mb-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">Acceptance of Privacy Policy</h3>
                <p className="text-muted-foreground leading-relaxed">
                  By using the Site, you signify your acceptance of this Privacy Policy. If you do not agree to the terms of this Privacy Policy, please do not use the Site. Your continued use of the Site following the posting of changes to these terms will mean that you accept those changes.
                </p>
              </div>
            </div>

            {/* Section 1 */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 text-primary font-bold">1</span>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Information Collected</h2>
              </div>
              
              <div className="space-y-6 pl-0 md:pl-14">
                <p className="text-muted-foreground leading-relaxed">
                  Health Compiler, Inc. offers a variety of applications and services that are collectively referred to as the "Services". Health Compiler, Inc. collects information from individuals who visit Health Compiler, Inc.'s web sites ("Health Compiler, Inc. Visitors") and any web site where Health Compiler, Inc.'s product(s) are installed ("Customer Web Site Visitors") and individuals who register to use the Services ("Customers").
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  When expressing an interest in obtaining additional information about the Services or registering to use the Services, Health Compiler, Inc. requires you to provide Health Compiler, Inc. with contact information, such as name, company name, address, phone number, and email address ("Required Contact Information"). When purchasing the Services, Health Compiler, Inc. may require you to provide Health Compiler, Inc. with billing information, such as billing name and address, credit card number, and the number of employees within the organization that will be using the Services ("Billing Information"). Health Compiler, Inc. may also ask you to provide additional information, such as company annual revenues, number of employees, or industry ("Optional Information"). Required Contact Information, Billing Information, and Optional Information are referred to collectively as "Data About Health Compiler, Inc.'s Customers."
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  As you navigate Health Compiler, Inc.'s web site or a web site of Health Compiler, Inc.'s Customers, Health Compiler, Inc. may collect information through the use of commonly-used information-gathering tools, such as cookies ("Web Site Navigational Information"). Web Site Navigational Information includes, but is not limited to, standard information from your web browser (such as browser type and browser language), your Internet Protocol ("IP") address, and the actions you take on Health Compiler, Inc.'s web site or a web site of Health Compiler, Inc.'s Customers (such as the Web pages viewed and the links clicked).
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  We do not knowingly collect personally identifying information from anyone under the age of 13.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 text-primary font-bold">2</span>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Use of Information Collected</h2>
              </div>
              
              <div className="space-y-6 pl-0 md:pl-14">
                <p className="text-muted-foreground leading-relaxed">
                  Health Compiler, Inc. uses data about Health Compiler, Inc. Customers to perform the services requested. For example, if you fill out a "Contact Us" web form, Health Compiler, Inc. will use the information provided to contact you about your interest in the Services.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Health Compiler, Inc. may also use data about Health Compiler, Inc. customers for marketing purposes. For example, Health Compiler, Inc. may use information you provide to contact you to further discuss your interest in the services and to send you information regarding Health Compiler, Inc. and its partners, such as information about promotions or events.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  We do not rent, sell, or share Users' information with third parties except as described in this Privacy Policy.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Health Compiler, Inc. does not store any credit card information on Health Compiler's server. However Health Compiler Inc. may leverage third party payment services, which may use credit card information solely to check the financial qualifications of prospective Customers and to collect payment for the Services.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Health Compiler, Inc. uses Web Site Navigational Information, gathered from its own website, to operate and improve Health Compiler, Inc.'s Web site and for advertising purposes.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Health Compiler, Inc. will not own or use information collected from Customer Web Site Visitors, except to better the Health Compiler, Inc. product(s) and/or to fix any bugs in a product(s). The information collected from Customer Web Site Visitors will be solely owned and used by Customer. Notwithstanding the foregoing, Health Compiler, Inc. may use and analyze the information collected from Customer Web Site Visitors in order to improve its product(s) and/or to fix any bugs in a product(s).
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 text-primary font-bold">3</span>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Web Site Navigational Information</h2>
              </div>
              
              <div className="space-y-6 pl-0 md:pl-14">
                <p className="text-muted-foreground leading-relaxed">
                  Health Compiler, Inc. uses commonly-used information-gathering tools, such as cookies and Web beacons, to collect Web Site Navigational Information. This section describes how Web Site Navigational Information is gathered.
                </p>

                <div className="p-6 bg-card rounded-xl border border-border/50">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Cookies</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Health Compiler, Inc. uses cookies to make interactions with Health Compiler, Inc. and Customers' Web sites easy and meaningful. When you visit Health Compiler, Inc. and/or Customers' Web sites, Health Compiler, Inc.'s servers send a cookie to your computer. Standing alone, cookies do not personally identify you. They merely recognize your Web browser.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Health Compiler, Inc. uses cookies that are mostly session-based. Session cookies exist only during one session. They disappear from your computer when you close your browser software or turn off your computer. Some cookies last longer, such as those used in connection with interest-based advertising, which is described below.
                  </p>
                </div>

                <div className="p-6 bg-card rounded-xl border border-border/50">
                  <h3 className="text-lg font-semibold text-foreground mb-3">IP Addresses</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    When you visit Health Compiler, Inc.'s and/or Customers' Web sites, Health Compiler, Inc.'s collects your Internet Protocol ("IP") addresses to track and aggregate information. For example, Health Compiler, Inc. uses IP addresses to monitor navigation of the Web site.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Web Site Navigational Information and similar data about your visits to our site is also being collected to provide advertising tailored to your individual interests. For example, through "remarketing" programs, ad networks and related entities use cookies and similar technology to provide our advertisements to our visitors when they are on participating third-party websites. You may choose whether to have your information collected for this purpose. To learn more about interest-based advertising, including how to opt out, visit the Network Advertising Initiative opt-out page.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    The trademarks, designs and logos displayed on this site are owned by the respective companies.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 text-primary font-bold">4</span>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Sharing of Information Collected</h2>
              </div>
              
              <div className="space-y-6 pl-0 md:pl-14">
                <p className="text-muted-foreground leading-relaxed">
                  Health Compiler, Inc. will solely own, but not share Data About Health Compiler, Inc. Customers. As stated in Section 2 of this Privacy Policy, Health Compiler, Inc. reserves the right to use or disclose information gathered/provided on from Health Compiler, Inc. Visitors and/or Customer Web Site Visitors if required by law or if Health Compiler, Inc. reasonably believes that use or disclosure is necessary to protect Health Compiler, Inc.'s rights and/or to comply with a judicial proceeding, court order, or legal process.
                </p>

                <div className="p-6 bg-card rounded-xl border border-border/50">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Disclosures to Third Parties Assisting In Our Operations</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Health Compiler, Inc, may share your Personal Information under confidentiality agreements with other companies that work with, or on behalf of, Health Compiler, Inc. to provide products and services. These companies may use your Personal Information to assist Health Compiler, Inc. in its operations. However, these companies do not have any independent right to share this information.
                  </p>
                </div>

                <div className="p-6 bg-card rounded-xl border border-border/50">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Business Transfers</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We may share your Personal Information with other business entities in connection with the sale, assignment, merger or other transfer of all or a portion of Health Compiler, Inc.'s business to such business entity. We will require any such successor business entity to honor the terms of this Privacy Policy.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 5 */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 text-primary font-bold">5</span>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Customer Data</h2>
              </div>
              
              <div className="space-y-6 pl-0 md:pl-14">
                <p className="text-muted-foreground leading-relaxed">
                  Health Compiler, Inc. employs stringent security measures to safeguard Customer Data from unauthorized access, maintain data accuracy, and aid in ensuring its proper use. We employ industry standard procedures and policies aligned with regulatory requirements such as HIPAA, GDPR, ISO 27001, and others to ensure the safety of the information we collect and retain, and to prevent its unauthorized use, and we require all third parties to comply with similar security requirements, in accordance with this Privacy Policy. The employees of Health Compiler are also trained to comprehend and comply with these controls, and our Privacy Policy practices and guidelines are communicated to them.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  In order to safeguard customer's sensitive information, Health Compiler, Inc. employs a comprehensive set of security measures, including but not limited to secure file transfers through HTTPS, data encryption, access management, authentication and authorization protocols, and data masking & anonymization techniques.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Although we take reasonable measures to safeguard information in accordance with legal and regulatory requirements, we cannot be held liable for the actions of those who acquire unauthorized access or abuse our Site, and we make no express, implied, or other warranty that such access will be prevented.
                </p>
              </div>
            </div>

            {/* Section 6 */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 text-primary font-bold">6</span>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Retention</h2>
              </div>
              
              <div className="space-y-6 pl-0 md:pl-14">
                <p className="text-muted-foreground leading-relaxed">
                  We will retain your personal information for as long as necessary to provide our services, and as necessary to comply with our legal obligations, resolve disputes, and enforce our policies. Retention periods will be determined taking into account the type of information that is collected and the purpose for which it is collected, bearing in mind the requirements applicable to the situation and the need to destroy outdated, unused information at the earliest reasonable time. Under applicable regulations, we will keep records containing client personal data, account opening documents, communications and anything else as required by applicable laws and regulations.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  We may rectify, replenish or remove incomplete or inaccurate information, at any time and at our own discretion.
                </p>
              </div>
            </div>

            {/* Section 7 */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 text-primary font-bold">7</span>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Children's Privacy Protection</h2>
              </div>
              
              <div className="space-y-6 pl-0 md:pl-14">
                <div className="p-6 bg-card rounded-xl border border-border/50">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Under Age 13</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Health Compiler, Inc. understands the importance of protecting children's privacy in the interactive online world. The Site is not designed for, or intentionally targeted at, children under 13 years of age. It is not our policy to intentionally collect or maintain information about anyone under the age of 13. No one under the age of 13 should submit any Personal Information to Health Compiler, Inc. or the Site.
                  </p>
                </div>

                <div className="p-6 bg-card rounded-xl border border-border/50">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Under Age 18</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Minors under 18 years of age may have the Personal Information that they have provided to Health Compiler, Inc. through the Site deleted by sending an email to support@compile.health requesting deletion. Please note that, while we make reasonable efforts to comply with such requests, deletion of your personal information does not ensure complete and comprehensive removal of that data from all systems.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 8 */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 text-primary font-bold">8</span>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Advertisement</h2>
              </div>
              
              <div className="space-y-6 pl-0 md:pl-14">
                <p className="text-muted-foreground leading-relaxed">
                  We may use a third-party advertising technology to serve advertisements when you access the Site. This technology uses your information with regards to your use of the Services to serve advertisements to you (e.g., by placing third-party cookies on your web browser).
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  You may opt-out of many third-party ad networks, including those operated by members of the Network Advertising Initiative ("NAI") and the Digital Advertising Alliance ("DAA"). For more information about this practice by NAI and DAA members, and your choices regarding having this information used by these companies, including how to opt-out of third-party ad networks operated by NAI and DAA members, please visit their respective websites: http://optout.networkadvertising.org/#!/ and http://optout.aboutads.info/#!/.
                </p>
              </div>
            </div>

            {/* Section 9 */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 text-primary font-bold">9</span>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Changes to this Privacy Statement</h2>
              </div>
              
              <div className="space-y-6 pl-0 md:pl-14">
                <p className="text-muted-foreground leading-relaxed">
                  Health Compiler, Inc. reserves the right to change this Privacy Statement. All amended terms automatically take effect immediately after they are initially posted on the Site.
                </p>
              </div>
            </div>

            {/* Section 10 */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 text-primary font-bold">10</span>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Contacting Us</h2>
              </div>
              
              <div className="pl-0 md:pl-14">
                <div className="p-6 bg-secondary/30 rounded-xl border border-border/50">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Questions regarding this Privacy Statement should be directed to Health Compiler, Inc. Privacy by mailing:
                  </p>
                  <div className="space-y-2 text-foreground">
                    <p className="font-medium">Health Compiler, Inc. Privacy</p>
                    <p>2261 Market Street #4632</p>
                    <p>San Francisco, CA 94114</p>
                    <p className="mt-4">Phone: <a href="tel:+14088837902" className="text-primary hover:underline">+1-(408) 883-7902</a></p>
                    <p>Email: <a href="mailto:support@compile.health" className="text-primary hover:underline">support@compile.health</a></p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;