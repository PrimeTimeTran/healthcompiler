import { Layout } from "@/components/layout/Layout";

const Terms = () => {
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
              Terms of Service
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
              <div className="p-6 bg-secondary/30 rounded-xl border border-border/50 space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Welcome to Health Compiler! These Terms of Service ("Terms") govern your use of Health Compiler Inc.'s ("Health Compiler", "we", or "us") offerings for direct care providers, including any related software or services (the "Service"), which are made available through our website, https://www.healthcompiler.com/, and any associated sites or mobile applications (collectively, the "Platform"). Your access and use of the Service are subject to these Terms. By accessing or using the Service, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use the Service.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  By accepting these Terms through an online order document or executing an order form referencing these Terms (each an "Order Form"), you affirm that you have read, understood, and agree to be bound by these Terms. You also confirm that you are of legal age to enter into a binding contract with Health Compiler and have the authority to do so on behalf of any entity you represent. If you do not agree to these Terms, you may not access or use the Service.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  For certain customers, these Terms may be part of another agreement, such as an enterprise master services agreement ("MSA"). In case of any conflict between these Terms and the MSA, the MSA will prevail.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  The Service is provided as software-as-a-service ("SaaS"), meaning it is accessed through the Platform and not installed locally on your devices. This ensures efficient delivery but requires uniform application of these Terms. For inquiries, please contact us at support@compile.health.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Please review these Terms carefully, as they may be updated periodically. We reserve the right to revise and update these Terms at our discretion. Material changes will be notified to you through the Platform or via the contact information you provided. Revised Terms will be effective thirty (30) days after such notice, unless a longer notice period is required by Applicable Law. Your continued use of the Service after the effective date constitutes acceptance of the updated Terms. If you reject the updated Terms within the notice period, the previous terms will remain in effect unless terminated according to their terms.
                </p>
              </div>
            </div>

            {/* Section 1 */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 text-primary font-bold">1</span>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">The Health Compiler Service and Platform</h2>
              </div>
              
              <div className="space-y-6 pl-0 md:pl-14">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">1.1 Access and Usage</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Subject to the terms of these Terms of Service, any applicable Order Form or MSA referencing these Terms, and any supplementary terms provided by Health Compiler, you may access and use the Health Compiler Service specified in the relevant Order Form or MSA through the Platform during the Service Term solely for your internal business purposes, including the provision of medical services to your Members.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">1.2 Software Usage</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Your use of any software and associated documentation provided via the Service ("Software") is governed by these Terms. Health Compiler grants you a non-exclusive license to use the Software solely to enable your use of the Service, provided you comply with these Terms. Some Software may be subject to open source licenses, available upon request, which may override certain terms herein.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">1.3 User Accounts</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To access certain features, you may need to register an Account with Health Compiler. By registering, you agree to provide accurate information and to keep it updated. You are responsible for maintaining the confidentiality of your Account information. You must be at least eighteen years old and not barred from using the Services. You agree not to create multiple Accounts or use false information.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">1.4 Ownership of Account</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    You acknowledge that you have no ownership interest in your Account, and all rights to it belong to Health Compiler. You are responsible for providing necessary equipment and software for accessing the Services and for any associated fees. You may link your Account to Third-Party Accounts, subject to certain conditions.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">1.5 Usage Restrictions</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    You agree to use the Service and Platform only for lawful purposes and in accordance with these Terms. You may not use the Services for commercial purposes not permitted by these Terms or to violate any laws. Additionally, you agree not to assist others in violating these Terms or engage in prohibited conduct outlined herein.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">1.6 Member Responsibilities</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    You are responsible for your Members' use of the Services and must provide necessary support, training, and communication. You are liable for your Members' actions as if they were your own.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">1.7 Reservation of Rights</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Health Compiler and its licensors retain all rights to the Services, excluding User Data. No intellectual property rights are granted beyond those expressly provided herein.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">1.8 Changes to the Service</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Health Compiler reserves the right to modify, augment, or change the Services at any time without notice, subject to these Terms.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">1.9 Content Disclaimer</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Content provided through the Services is at your own risk, and Health Compiler is not liable for any damages arising from its use. Health Compiler does not guarantee the accuracy or completeness of any Content. Content should not be construed as medical advice.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">1.10 Third-Party Materials</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Health Compiler provides links to Third-Party Websites, Applications, and Ads for convenience and is not responsible for their content or availability. Your use of Third-Party resources is at your own risk.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">1.11 Third-Party Payment Processor</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Health Compiler uses third-party Payment Processors for financial transactions. By using the Services for financial transactions, you agree to abide by the terms of the Payment Processor and authorize Health Compiler to share relevant information with them.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 text-primary font-bold">2</span>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">User Information</h2>
              </div>
              
              <div className="space-y-6 pl-0 md:pl-14">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">2.1 Definition</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    "User Data" encompasses all data, information, communications, files, and other materials uploaded, submitted, or provided to the Services by you or on your behalf, including data pertaining to your Members and their interactions. User Data belongs to you (and your Members, if applicable), and Health Compiler does not claim ownership or rights beyond those explicitly granted in these Terms or any other agreement with Health Compiler.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">2.2 Use of User Data</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Health Compiler requires certain rights to use User Data to operate the Services effectively and fulfill its obligations. You consent to Health Compiler using User Data for operating and improving the Services, as well as creating aggregated and anonymized data for statistical purposes. Health Compiler may also share User Data with third-party service providers engaged in supporting the Services.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">2.3 Protection and Privacy</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Health Compiler acknowledges the sensitive nature of User Data and has implemented reasonable safeguards to protect it. Additional terms apply to Protected Health Information (PHI) under a Business Associate Agreement (BAA), as outlined in Section 2.4
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">2.4 HIPAA and Business Associate Agreement</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The Health Compiler Service is HIPAA-compliant regarding any PHI within User Data. The use and disclosure of PHI are governed by the BAA and Privacy Policy. In case of conflict, the BAA prevails.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">2.5 Disclaimers</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    You acknowledge that User Data's content is solely determined by you and/or your Members. Health Compiler disclaims liability for any errors or inaccuracies in User Data to the fullest extent permitted by law.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">2.6 Storage</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Health Compiler is not obligated to store User Data unless expressly agreed otherwise. Health Compiler retains the right to impose reasonable limits on data storage and usage at its discretion, subject to the terms of the BAA.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">2.7 External Data</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Data integration with external systems such as Elation, Spruce and others are included. However, any disruptions in data retrieval or modifications in their API interfaces may pose difficulties for the analytics dashboard within the Health Compiler system. In the event of such challenges, Health Compiler will collaborate with its clients and the external system providers to offer support and solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 text-primary font-bold">3</span>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Licensing and Ownership</h2>
              </div>
              
              <div className="space-y-6 pl-0 md:pl-14">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">3.1 Health Compiler's Intellectual Property Rights</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Except for User Data, you acknowledge that Health Compiler and its licensors own and retain all rights, title, and interest in the Services, including information, content, computer code, concepts, operational methods, moral rights, documentation, and software, along with all Intellectual Property Rights therein. "Intellectual Property Rights" encompass all forms of intellectual property and proprietary rights, including patents, trademarks, copyrights, trade secrets, and other confidential information. Health Compiler reserves all rights not expressly granted in these Terms.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">3.2 Trademarks</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The name of Health Compiler and related stylizations, graphics, logos, service marks, and trade names used in connection with the Services are the trademarks of Health Compiler and may not be used without permission in connection with your or any third-party products or services. Any third-party trademarks, service marks, and trade names appearing in the Services are the property of their respective owners.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">3.3 License to User Data</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Subject to the terms of the BAA, you grant Health Compiler a sublicensable, non-exclusive, fully paid, royalty-free, worldwide license to use, reproduce, modify, adapt, publicly perform, and publicly display User Data and associated Intellectual Property Rights solely for the purposes outlined in Section 2.2. You warrant that you have all necessary rights, licenses, consents, and permissions to grant this license.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">3.4 Feedback</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    By submitting Feedback to Health Compiler, you acknowledge that it is at your own risk, and we have no obligations, including confidentiality obligations, regarding such Feedback. You warrant that you have all necessary rights to submit the Feedback. You grant Health Compiler a fully paid, royalty-free, perpetual, irrevocable, worldwide, non-exclusive right and license to use, reproduce, perform, display, distribute, adapt, modify, reformat, create derivative works of, and otherwise exploit the Feedback commercially or non-commercially, in connection with the operation and maintenance of the Services and/or our business.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 text-primary font-bold">4</span>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Fees and Payment Terms</h2>
              </div>
              
              <div className="space-y-6 pl-0 md:pl-14">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">4.1 Fees</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    You commit to paying Health Compiler the Fees associated with the Health Compiler Services or any other services provided by Health Compiler ("Fees") as outlined in your Order Form or as mutually agreed upon in writing between you and Health Compiler (referred to as the "Pricing"). However, Health Compiler reserves the right to increase the Fees by up to three percent (3%) each anniversary of your acceptance of these Terms of Service (referred to as the "Annual Pricing Change"). You consent to the Annual Pricing Change without the need for prior notice from Health Compiler. Invoices detailing the Fees owed under the applicable Pricing will be regularly provided by Health Compiler. All Fees paid are non-refundable and non-creditable.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">4.2 Changes to Pricing</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Alongside the Annual Pricing Change, Health Compiler may modify or update its pricing schedules. Such changes or updates will automatically take effect upon their posting. If such alterations affect the Fees you owe, Health Compiler will notify you in writing at the contact information associated with your Account, and the changes will become effective thirty (30) days after notification. If you disagree with the new pricing, you may terminate these Terms of Service as per Section 7.2 (Termination by You). Otherwise, your continued use of the Health Compiler Service indicates your acceptance of the revised pricing schedule. Health Compiler retains the right to offer the Health Compiler Service or certain features free of charge, without limiting its right to charge fees for other services, features, or functionalities as described herein.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">4.3 Additional Offerings</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Throughout the Service Term (defined below), Health Compiler may present you with Additional Offerings. You have the choice to accept or decline any Additional Offerings as per the associated terms and conditions. If you accept any Additional Offerings, any extra Fees will be added to the applicable Order Form and Pricing and will follow the same payment terms and conditions, unless otherwise specified in writing by Health Compiler.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">4.4 Payment Terms</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Unless stated otherwise in an applicable Order Form, all Fees must be paid within thirty (30) days of the invoice date. Payments should be made in United States dollars. You can specify an electronic payment method when registering an Account with Health Compiler for the Services; otherwise, payment will be made using the method described in the invoice. Late payments will accrue interest at a rate of 1.5% of the outstanding balance per month or the maximum rate permitted by law, whichever is lower, from the due date until paid. You agree to maintain accurate and up-to-date payment information provided to Health Compiler.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">4.5 Payment Provider</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To sign up for the Services, you must provide Health Compiler with a valid credit card or bank account through an automated clearing house (ACH). Your Payment Provider agreement governs your use of the designated credit card or bank account. By providing your payment information, you authorize Health Compiler to invoice your Account immediately for all due fees and charges, without requiring additional notice or consent. If you choose to pay via ACH, you authorize Health Compiler to initiate electronic credit and debit entries to your designated account in accordance with the payment terms of the Agreement.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">4.6 Taxes</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Each party is responsible for all taxes imposed on them in connection with the Agreement. If Health Compiler is obligated to collect or pay taxes on your behalf, such amounts will be added to the Fees and follow the same payment terms, unless otherwise specified.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 5 */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 text-primary font-bold">5</span>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Limited Warranty; Disclaimer of Warranties</h2>
              </div>
              
              <div className="space-y-6 pl-0 md:pl-14">
                <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
                  <p className="text-foreground font-semibold">Please review this section CAREFULLY.</p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">5.1 Limited Warranty</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Health Compiler assures that the Health Compiler Service aligns substantially with the operational features and documentation accessible on the Site. Additionally, Health Compiler commits to delivering the Health Compiler Service in accordance with generally accepted industry standards. Should there be an alleged breach of this limited warranty, you must notify Health Compiler within thirty (30) days of the incident giving rise to the claim. Health Compiler will then exert commercially reasonable efforts to rectify the breach as the sole and exclusive remedy for such breach.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">5.2 Disclaimer of Warranties and Conditions</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Except as expressly provided in Section 5.1, Health Compiler disclaims all warranties, representations, and conditions, whether express or implied, statutory or otherwise, including implied warranties or conditions of merchantability, fitness for a particular purpose, non-infringement, and those arising from a course of dealing or usage of trade in connection with the Services. You acknowledge that your use of the Services is at your own risk, as they are provided on an "as-is" and "as available" basis, with all faults. You understand and agree that Health Compiler is not responsible for the actions of third parties, including operators of external sites and other users of the Services, and that any risk of harm from such third parties lies solely with you. While using the Services, you may access materials hosted by third parties, and you acknowledge that accessing such materials is done at your own risk.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">5.3 Health Data Disclaimer</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The Services may allow you to communicate with your Members. You acknowledge that Health Compiler is not responsible for the content of these communications. Health Compiler does not provide medical advice, diagnosis, or treatment, and is not a licensed medical professional or healthcare provider. The content of the Services, including but not limited to text, graphics, images, and other material, is for informational and/or commercial purposes only. The Services are not a substitute for professional medical advice, diagnosis, or treatment, and any reliance on the Services is at your own risk. By accepting these Terms, you acknowledge and agree that Health Compiler shall not be liable for any damages arising from the improper use of the Services, including any injuries or harm that may result from relying on information provided through the Services.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 6 */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 text-primary font-bold">6</span>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Indemnification and Limitations of Liability</h2>
              </div>
              
              <div className="space-y-6 pl-0 md:pl-14">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">6.1 Indemnification by You</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    You agree to indemnify, defend, and hold harmless Health Compiler and its affiliates against any claims, damages, losses, liabilities, costs, and expenses arising from: (a) your use of the Services, (b) breach of these Terms by you or your Members, (c) any breach or alleged breach by you or your Members of third-party rights, (d) User Data or inaccuracies therein, and (e) any dispute or litigation caused by your actions or those of anyone using your Account.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">6.2 Limitation of Liability</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Except where prohibited by law, Health Compiler shall not be liable for any indirect, special, incidental, or consequential damages arising from these Terms, including loss of revenue, profits, or data. Health Compiler's aggregate liability under these Terms shall not exceed the amount paid by you to Health Compiler for the Services in the twelve (12) months before the event giving rise to the claim. The limitations apply even if Health Compiler has been advised of the possibility of such damages. Some jurisdictions don't allow certain limitations, so some of the above may not apply to you.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">6.3 Time Limitation on Claims</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Any cause of action or claim arising out of or related to these Terms or the Services must be commenced within one (1) year after such cause of action accrued. Otherwise, such cause of action or claim is permanently barred.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 7 */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 text-primary font-bold">7</span>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Term and Termination</h2>
              </div>
              
              <div className="space-y-6 pl-0 md:pl-14">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">7.1 Service Term</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The Agreement starts on the Effective Date and continues for the period specified in the Order Form ("Initial Service Term"). The Agreement renews automatically for successive renewal periods equal to the Initial Service Term ("Renewal Service Terms"), unless either party provides written notice of non-renewal at least thirty (30) days before the expiration of the then-current Service Term. The Initial Service Term and any Renewal Service Terms are collectively referred to as the "Service Term."
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">7.2 Termination by You</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    You may terminate these Terms of Service (a) as set forth herein, (b) within thirty (30) days upon written notice if Health Compiler commits a material breach and fails to cure it after notice, or (c) within thirty (30) days upon written notice if Health Compiler suspends your Account pursuant to Section 1.5 for more than thirty (30) days.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">7.3 Termination by Health Compiler</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Health Compiler may terminate these Terms of Service upon written notice at any time without cause upon sixty (60) days written notice. Health Compiler may terminate these Terms of Service upon written notice immediately if you breach any provisions of Section 3 regarding licensing and ownership.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">7.4 Effects of Termination</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Upon termination, your Account will be deactivated, and you will have no further access to the Services or your Account. Health Compiler may delete data in your Account (other than retained under the BAA) within thirty (30) days. Health Compiler is not liable to you for termination of these Terms. All provisions of these Terms that should survive termination will survive, including licensing provisions, warranty disclaimers, and limitations of liability.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">7.5 Refunds on Termination</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Unless otherwise provided in an applicable Order Form, no refunds of any fees paid to Health Compiler will be granted upon termination.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 8 */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 text-primary font-bold">8</span>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Dispute Resolution by Binding Arbitration</h2>
              </div>
              
              <div className="space-y-6 pl-0 md:pl-14">
                <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
                  <p className="text-foreground font-semibold">PLEASE READ THIS SECTION CAREFULLY—IT MAY SIGNIFICANTLY AFFECT YOUR LEGAL RIGHTS, INCLUDING YOUR RIGHT TO FILE A LAWSUIT IN COURT.</p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">8.1 Initial Dispute Resolution</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We are available via our customer support portal to address any concerns. Most concerns may be quickly resolved in this manner. The parties agree to use best efforts to settle any dispute through informal negotiation before pursuing formal dispute resolution.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">8.2 Arbitration</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Any dispute arising from or relating to these Terms or your use of the Services that is not resolved through informal negotiation shall be resolved by binding arbitration conducted by the American Arbitration Association ("AAA") in Santa Clara County, California. The Federal Arbitration Act, Federal arbitration law, and the AAA rules apply.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">8.3 Limitations and Exceptions</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Either party may seek equitable relief for the protection of intellectual property rights or confidentiality obligations. You and Health Compiler retain the ability to seek remedies in small claims court if the claim qualifies and remains on an individual, non-representative, non-class basis.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">8.4 Class Action Waiver</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    You agree to pursue any claims against Health Compiler on an individual basis only, not as a class member or representative. There will be no class arbitration, class action, private attorney general action, or consolidation with other arbitrations.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 9 */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 text-primary font-bold">9</span>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Miscellaneous</h2>
              </div>
              
              <div className="space-y-6 pl-0 md:pl-14">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">9.1 Assignment</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    You may not assign or transfer these Terms without Health Compiler's prior written consent. Health Compiler may assign these Terms without your consent to an affiliate, or in connection with a merger, acquisition, corporate restructuring, or sale of all or substantially all of its assets.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">9.2 Severability</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    If any provision of these Terms is found invalid or unenforceable, the remaining provisions will continue to be valid and enforceable. If a provision is found overbroad, that provision will be enforced to the maximum extent permitted by law.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">9.3 Notice</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We may provide notices to you via the Platform, electronic mail, or postal mail. Notices to Health Compiler should be sent to: Health Compiler, Inc., 2261 Market Street #4632, San Francisco, CA 94114, Attn: Legal Department.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">9.4 Waiver</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    A waiver of any term is effective only if in writing and does not waive that term or any other term for the future.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">9.5 Entire Agreement</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    These Terms, any MSA and applicable Order Forms, the Privacy Policy, and the BAA constitute the entire agreement between you and Health Compiler and supersede all prior agreements. Additional terms in purchase orders or other documents are rejected and superseded by these Terms.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">9.6 Governing Law; Venue</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    These Terms will be governed by California law without regard to conflicts of law rules. Any dispute not subject to arbitration shall be brought in the courts located in Santa Clara County, California, and both parties consent to such jurisdiction and venue.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">9.7 Government Use</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    If you are a U.S. government entity or using the Services on behalf of one, this clause governs the treatment of Health Compiler Services as a commercial item under federal acquisition regulations.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">9.8 Export</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The Services may be subject to U.S. export control laws. You may not use, export, import, or transfer the Services except as authorized by U.S. law and the laws of the jurisdiction where you obtained the Services.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="mt-16 p-6 bg-secondary/30 rounded-xl border border-border/50">
              <h2 className="text-xl font-semibold text-foreground mb-4">Questions?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                For inquiries about these Terms of Service, please contact us:
              </p>
              <div className="space-y-2 text-foreground">
                <p className="font-medium">Health Compiler, Inc.</p>
                <p>2261 Market Street #4632</p>
                <p>San Francisco, CA 94114</p>
                <p className="mt-4">Email: <a href="mailto:support@compile.health" className="text-primary hover:underline">support@compile.health</a></p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;