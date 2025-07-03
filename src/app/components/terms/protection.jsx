import MaxContainer from "../common/maxcontainer";

const DataPolicyContent = () => {
  return (
    <section className="py-[12rem] bg-[#EFFFEE] text-[#002E20]">
      <MaxContainer>
        <div className="max-w-[130rem] px-[7rem] sm:px-[2.5rem] mx-auto">
          {/* Policy Title and Effective Date */}
          <h1 className="sub_header_i">
            DATA STORAGE, RETENTION, AND BREACH MANAGEMENT POLICY
          </h1>
          <p className="p_i mt-[1rem]">
            Omo Offa Ni Mi Development Union
            <br />
            Effective Date: June 20, 2025
          </p>

          {/* 1. INTRODUCTION Section */}
          <div className="mt-[2.5rem]">
            <h2 className="sub_header_ii">1. INTRODUCTION</h2>
            <p className="mt-[1rem] p_i mb-[1.3rem]">
              Omo Offa Ni Mi Development Union (“the Union”) recognises the
              critical importance of safeguarding personal data, especially
              given the vulnerable demographics it serves, which include
              low-income beneficiaries, orphans, widows, internally displaced
              persons, and other at-risk populations. In line with its
              humanitarian mandate, the Union processes personal data such as
              identity information, financial conditions, health-related needs,
              and demographic profiles. Consequently, ensuring the security,
              confidentiality, integrity, and lawful handling of such data is
              central to maintaining the trust of our beneficiaries, staff,
              partners, and donors.
            </p>
            <p className="mt-[1rem] p_i mb-[1.3rem]">
              This commitment is grounded in the provisions of the Nigeria Data
              Protection Act (NDPA) 2023, particularly Section 39, which imposes
              legal duties on data controllers and processors to implement
              appropriate technical and organisational measures to prevent,
              detect, and respond to security breaches. Section 39 also mandates
              timely breach notification to the Nigeria Data Protection
              Commission (NDPC) and affected data subjects where the breach is
              likely to result in harm. Omo Offa Ni Mi Development Union
              therefore adopts this Policy as a guiding instrument for
              implementing internal controls that support data protection,
              privacy assurance, and statutory compliance.
            </p>
          </div>

          {/* Secure Storage of Personal Data Section */}
          <div className="mt-[2.5rem]">
            <h2 className="sub_header_ii">
              1. Secure Storage of Personal Data
            </h2>
            <p className="mt-[1rem] p_i mb-[1.3rem]">
              The Union implements secure storage procedures that are designed
              to safeguard both electronic and physical forms of personal data
              throughout the data lifecycle. All electronic data, including
              those collected through our beneficiary registration portal,
              monitoring dashboards, and cloud-based aid distribution records,
              are stored on password-protected and encrypted servers. These
              systems are regularly updated and maintained with firewalls,
              malware protection, and user authentication controls. Sensitive
              physical records, such as paper-based forms or signed
              declarations, are stored in locked cabinets within
              restricted-access offices, where only authorised personnel can
              gain entry.
            </p>
            <p className="mt-[1rem] p_i mb-[1.3rem]">
              In furtherance of our legal obligations under NDPA Section 39(1),
              the Union applies the principle of “data minimisation” in
              storage—only retaining data necessary for the performance of our
              lawful programmes. We maintain a Data Asset Register listing all
              systems and repositories holding personal data, and each entry is
              classified by sensitivity level, retention requirement, and access
              control status. The Union’s IT and data management team conducts
              quarterly risk assessments to identify any potential security
              vulnerabilities in our storage systems and recommends remediation
              measures as necessary.
            </p>
          </div>

          {/* Lawful Retention and Disposal of Personal Data Section */}
          <div className="mt-[2.5rem]">
            <h2 className="sub_header_ii">
              2. Lawful Retention and Disposal of Personal Data
            </h2>
            <p className="mt-[1rem] p_i mb-[1.3rem]">
              Retention of personal data is governed by the principle of purpose
              limitation, meaning that data shall only be retained for the
              specific, legitimate, and lawful purpose for which it was
              collected. The Union classifies all data by category (e.g.,
              beneficiary, donor, financial, HR) and assigns each a retention
              period as prescribed by law, donor guidelines, or operational
              necessity. For instance, donor contribution records are retained
              for a minimum of seven years for audit purposes, while temporary
              aid registration data may be retained for just two years following
              project closure.
            </p>
            <p className="mt-[1rem] p_i mb-[1.3rem]">
              Once the applicable retention period has lapsed, personal data is
              securely disposed of using methods that prevent unauthorised
              recovery or reconstruction. For digital data, this involves
              data-wiping software certified for secure deletion; for paper
              records, this involves shredding or incineration. The Union also
              ensures that all backup copies and mirrored datasets are
              concurrently purged. Each deletion action is logged in our Data
              Disposal Register, which is maintained by the Data Protection
              Officer (DPO) and reviewed during our internal compliance audits.
              This process ensures our continued compliance with NDPA Section
              39(1)(d) regarding the lawful and secure disposal of personal
              data.
            </p>
          </div>

          {/* Identification, Containment, and Management of Data Breaches Section */}
          <div className="mt-[2.5rem]">
            <h2 className="sub_header_ii">
              3. Identification, Containment, and Management of Data Breaches
            </h2>
            <p className="mt-[1rem] p_i mb-[1.3rem]">
              The Union adopts a proactive and structured approach to
              identifying and managing data breaches. A data breach may include
              unauthorised access, loss, alteration, disclosure, or destruction
              of personal data, whether resulting from internal error, malicious
              attacks, or third-party compromise. All staff and contractors are
              trained during onboarding and annually thereafter to detect signs
              of potential breaches—such as suspicious login attempts, system
              anomalies, phishing emails, or device theft—and to report such
              incidents immediately to the DPO.
            </p>
            <p className="mt-[1rem] p_i mb-[1.3rem]">
              Upon receipt of a breach report, the DPO initiates a rapid
              response procedure that includes system containment (e.g.,
              disabling compromised user accounts), internal notification to
              relevant teams, and root cause investigation. A Breach Incident
              Report is generated within 72 hours to assess the impact, identify
              affected data subjects, evaluate the likelihood of harm, and
              recommend remedial measures. These measures may include password
              resets, system patching, increased monitoring, and user
              notification. In severe cases, a breach committee composed of IT,
              legal, and executive officers may be convened to ensure a
              coordinated response.
            </p>
          </div>

          {/* Notification of Data Breaches to Relevant Authorities and Affected Data Subjects Section */}
          <div className="mt-[2.5rem]">
            <h2 className="sub_header_ii">
              4. Notification of Data Breaches to Relevant Authorities and
              Affected Data Subjects
            </h2>
            <p className="mt-[1rem] p_i mb-[1.3rem]">
              Where a data breach is likely to result in harm, discrimination,
              identity theft, reputational damage, or financial loss to the data
              subject, Omo Offa Ni Mi Development Union is under a legal
              obligation to notify both the Nigeria Data Protection Commission
              (NDPC) and the affected individuals without delay and in any event
              within 72 hours of becoming aware of the breach. This is in line
              with NDPA Section 39(2)(b). Our breach notification procedure
              includes a clear outline of the nature of the breach, categories
              and approximate number of affected data subjects and records, and
              the remedial actions taken or proposed to mitigate the risks.
            </p>
            <p className="mt-[1rem] p_i mb-[1.3rem]">
              Notifications to affected data subjects are drafted in clear,
              simple language and are delivered through email, SMS, or direct
              phone calls (as appropriate based on the data subject’s access and
              literacy level). These notifications include guidance on steps the
              data subjects can take to protect themselves, such as changing
              passwords, monitoring financial accounts, or contacting their
              local programme officer for further assistance. Where the breach
              poses a serious threat to public health or safety, Omo Offa Ni Mi
              Development Union may also issue a public advisory via its website
              or partner networks.
            </p>
            <p className="mt-[1rem] p_i mb-[1.3rem]">
              The Union keeps a Data Breach Register that logs every
              breach—whether reportable or not—including date, nature, affected
              systems, response actions, and lessons learned. This register is
              subject to periodic review by the Data Governance Committee to
              ensure continual improvement in breach prevention and response
              strategies.
            </p>
          </div>

          {/* Scope and Applicability Section */}
          <div className="mt-[2.5rem]">
            <h2 className="sub_header_ii">5. Scope and Applicability</h2>
            <p className="mt-[1rem] p_i mb-[1.3rem]">
              This Policy applies universally to all personnel, volunteers,
              contractors, interns, and third-party service providers engaged by
              the Union in any capacity that involves the handling of personal
              data. Whether collecting beneficiary information in the field,
              managing donor records, processing salaries, or integrating
              digital tools into programme delivery, all actors must adhere
              strictly to the principles and procedures set forth in this
              policy.
            </p>
            <p className="mt-[1rem] p_i mb-[1.3rem]">
              Furthermore, the Union’s third-party vendors—such as cloud storage
              providers, CRM systems, monitoring consultants, or field
              enumerators—are required to sign a Data Processing Agreement (DPA)
              that binds them to equivalent standards of data security,
              retention, and breach reporting. These contracts also include
              liability clauses and inspection rights to verify compliance. Any
              breach of this policy or failure to report a known incident shall
              be treated as a disciplinary offence and may result in legal or
              contractual sanctions.
            </p>
          </div>

          {/* 2. DATA STORAGE POLICY Section */}
          <div className="mt-[2.5rem]">
            <h2 className="sub_header_ii">2. DATA STORAGE POLICY</h2>

            {/* 2.1 Storage Principles Subsection */}
            <div className="mt-[1.5rem]">
              <h3 className="sub_header_ii">2.1 Storage Principles</h3>

              <h4 className="sub_header_ii mt-[1.5rem]">Confidentiality:</h4>
              <p className="mt-[1rem] p_i mb-[1.3rem]">
                The confidentiality of personal data held by Omo Offa Ni Mi
                Development Union is a cornerstone of our data protection
                framework. We ensure that all personal data—whether belonging to
                beneficiaries, staff, partners, or donors—is accessible only to
                authorised personnel with a legitimate, documented need to
                access such data. Access rights are determined based on job
                function and are reviewed regularly by the Data Protection
                Officer (DPO) to prevent excessive or outdated access
                privileges. Confidentiality agreements are executed by all staff
                and volunteers who may access personal or sensitive data.
              </p>
              <p className="mt-[1rem] p_i mb-[1.3rem]">
                To enforce confidentiality, the Union employs strict user
                authentication protocols across its digital platforms, including
                unique login credentials, role-based access restrictions, and
                logging of all data interactions. Staff found accessing data
                beyond their assigned scope are subject to disciplinary
                procedures, and any suspected confidentiality breach must be
                reported immediately in line with our breach reporting protocol.
                Where third-party processors are involved, contractual
                provisions ensure they are bound by equivalent confidentiality
                obligations.
              </p>

              <h4 className="sub_header_ii mt-[1.5rem]">Integrity:</h4>
              <p className="mt-[1rem] p_i mb-[1.3rem]">
                Omo Offa Ni Mi Development Union upholds data integrity by
                ensuring that personal data remains accurate, reliable, and
                unaltered unless authorised. To protect data against tampering,
                falsification, or unauthorised alteration, we implement a
                combination of logical controls (such as audit trails) and
                technical safeguards (including data encryption and version
                control systems). All inputs into our data systems are subject
                to validation checks and periodic verification.
              </p>
              <p className="mt-[1rem] p_i mb-[1.3rem]">
                Our operational teams, particularly those managing beneficiary
                databases and programme records, are trained to report any
                suspected data anomalies. Where errors are detected, they are
                corrected in accordance with a controlled data amendment
                process, which ensures proper documentation and preserves
                original records for audit purposes. Routine internal audits are
                conducted quarterly to detect inconsistencies and reinforce the
                credibility of the data stored under our custody.
              </p>

              <h4 className="sub_header_ii mt-[1.5rem]">Availability:</h4>
              <p className="mt-[1rem] p_i mb-[1.3rem]">
                Data availability ensures that personal data is accessible when
                required for lawful, programmatic, or administrative purposes.
                The Union designs its data infrastructure with redundancy,
                backup, and disaster recovery capabilities to mitigate any
                interruptions caused by hardware failure, cyberattacks, or
                natural disasters. Critical data, including those related to aid
                distribution, medical assessments, and legal obligations, are
                backed up in real-time or through scheduled replication
                processes.
              </p>
              <p className="mt-[1rem] p_i mb-[1.3rem]">
                To support uninterrupted service delivery, especially in remote
                areas with digital connectivity challenges, we implement both
                online and offline data access protocols. Cloud-hosted platforms
                are selected for their reliability, uptime guarantees, and
                compliance with recognised data protection standards. Our IT
                unit conducts routine restoration drills to ensure data can be
                promptly retrieved and restored in the event of an operational
                disruption.
              </p>
            </div>

            {/* 2.2 Storage Methods Subsection */}
            <div className="mt-[2.5rem]">
              <h3 className="sub_header_ii">2.2 Storage Methods</h3>
              <p className="mt-[1rem] p_i mb-[1.3rem]">
                Omo Offa Ni Mi Development Union employs a hybrid model of
                physical and electronic storage systems, with clear standards
                for each method to ensure that data remains protected throughout
                its lifecycle.
              </p>

              <h4 className="sub_header_ii mt-[1.5rem]">
                Electronic Data Storage:
              </h4>
              <p className="mt-[1rem] p_i mb-[1.3rem]">
                Electronic records form the core of our data infrastructure and
                are hosted on access-controlled cloud environments that meet
                national and international data protection standards. Data
                servers are hosted within Nigeria or other jurisdictions with
                adequacy decisions or approved cross-border data transfer
                mechanisms. All databases are encrypted at rest and in transit
                using AES-256 encryption protocols, and security patches are
                applied regularly to prevent known vulnerabilities.
              </p>
              <p className="mt-[1rem] p_i mb-[1.3rem]">
                We use enterprise-grade software systems and secure cloud
                applications for beneficiary enrolment, monitoring and
                evaluation, HR management, and donor reporting. All electronic
                systems are integrated with role-based access controls (RBAC),
                usage logging, and auto-lockout mechanisms to prevent
                unauthorised intrusion. Data stored in these systems is
                replicated periodically to disaster recovery (DR) sites to
                ensure business continuity.
              </p>

              <h4 className="sub_header_ii mt-[1.5rem]">
                Physical Data Storage:
              </h4>
              <p className="mt-[1rem] p_i mb-[1.3rem]">
                Despite our digital orientation, certain documents—such as
                hardcopy consent forms, ID card photocopies, and signed
                agreements—are maintained in physical format due to regulatory,
                legal, or beneficiary accessibility constraints. These records
                are stored in locked filing cabinets housed within
                restricted-access administrative areas. Only staff with
                designated clearance levels may retrieve or handle these files,
                and all retrievals are logged manually or electronically.
              </p>
              <p className="mt-[1rem] p_i mb-[1.3rem]">
                Physical records are periodically inventoried to ensure
                completeness and accuracy. Once digitised and lawfully retained,
                physical records are reviewed for secure destruction in line
                with our Data Retention and Disposal Schedule. No physical data
                shall be removed from official premises without documented
                authorisation from a supervisor and notification to the DPO.
              </p>

              <h4 className="sub_header_ii mt-[1.5rem]">System Safeguards:</h4>
              <p className="mt-[1rem] p_i mb-[1.3rem]">
                To protect both digital and physical data repositories, Omo Offa
                Ni Mi Development Union enforces a multi-layered security model.
                All digital systems require strong password authentication
                protocols, including password rotation, complexity requirements,
                and automatic timeout after periods of inactivity. Where
                available, multi-factor authentication (MFA) is mandated for
                system administrators and staff handling sensitive or large
                volumes of data.
              </p>
              <p className="mt-[1rem] p_i mb-[1.3rem]">
                We also deploy enterprise-class antivirus and anti-malware
                software on all endpoint devices and servers. Firewalls and
                Intrusion Detection Systems (IDS) are installed at the network
                level to monitor and block malicious traffic, while Virtual
                Private Networks (VPNs) are used for remote access by authorised
                personnel. Each system is routinely scanned for vulnerabilities,
                and any system upgrade must pass an IT security review before
                deployment.
              </p>
            </div>

            {/* 2.3 Access Controls Subsection */}
            <div className="mt-[2.5rem]">
              <h3 className="sub_header_ii">2.3 Access Controls</h3>
              <p className="mt-[1rem] p_i mb-[1.3rem]">
                The Union recognises that even the most secure data systems can
                be compromised if access rights are poorly defined or enforced.
                Therefore, we implement strict access control procedures
                governed by the Principle of Least Privilege (PoLP), which
                ensures that each user is granted the minimum level of access
                necessary for their official duties.
              </p>
              <p className="mt-[1rem] p_i mb-[1.3rem]">
                All access to personal data must be approved in writing by the
                relevant department head or data controller, and records of such
                approvals are maintained in the Union’s Data Access Register.
                Access privileges are reviewed semi-annually or upon role
                changes, project termination, or contract expiry. Staff
                onboarding includes mandatory data access and confidentiality
                training, while offboarding includes revocation of all system
                credentials and retrieval of any data-bearing devices.
              </p>
              <p className="mt-[1rem] p_i mb-[1.3rem]">
                The Union’s Data Protection Officer (DPO) or appointed IT
                Security Officer maintains a comprehensive Data Access Log that
                records each access to sensitive datasets, including the user
                ID, time, purpose, and nature of data accessed. These logs are
                reviewed monthly for irregularities, and any suspicious activity
                is flagged for immediate investigation.
              </p>
              <p className="mt-[1rem] p_i mb-[1.3rem]">
                In the event of an unauthorised access attempt, our security
                systems generate real-time alerts to the DPO and lock the
                affected account pending investigation.
              </p>
            </div>
          </div>

          {/* 3. DATA RETENTION POLICY Section */}
          <div className="mt-[2.5rem]">
            <h2 className="sub_header_ii">3. DATA RETENTION POLICY</h2>

            {/* 3.1 Retention Principles Subsection */}
            <div className="mt-[1.5rem]">
              <h3 className="sub_header_ii">3.1 Retention Principles</h3>
              <p className="mt-[1rem] p_i mb-[1.3rem]">
                Omo Offa Ni Mi Development Union maintains a clear principle
                that personal data shall only be retained for the minimum period
                required to achieve the specific and lawful purpose for which it
                was collected. This approach is informed by the principles of
                purpose limitation and storage limitation enshrined under
                Section 39(1)(a) of the NDPA 2023. Once data has served its
                intended use—whether for beneficiary identification, programme
                monitoring, reporting to donors, or legal compliance—it must
                either be securely deleted or irreversibly anonymised. We also
                recognise that unduly prolonged retention can increase the risk
                of misuse, unauthorised access, or breach.
              </p>
              <p className="mt-[1rem] p_i mb-[1.3rem]">
                To ensure compliance, all departments and programme units of the
                Union must classify data at the point of collection and assign a
                predefined retention period based on its category. These
                retention periods must be embedded into each unit’s Standard
                Operating Procedures (SOPs) and reviewed annually by the Data
                Protection Officer (DPO). If any data must be retained beyond
                the standard timeframe—for example, due to an ongoing
                investigation, litigation, or donor request—such extension must
                be justified in writing and approved by the Executive Director
                or Legal Officer. This ensures accountability and consistency
                across our data handling practices.
              </p>
              <p className="mt-[1rem] p_i mb-[1.3rem]">
                In strict accordance with NDPA Section 39(1)(d), once data is no
                longer necessary, the Union is obliged to ensure it is securely
                erased or transformed into an anonymised dataset that can no
                longer identify any data subject. The anonymisation process
                follows irreversible techniques such as pseudonym removal,
                encryption stripping, or data aggregation. Such datasets may be
                retained for statistical or research purposes without violating
                the rights of the original data subjects.
              </p>
            </div>

            {/* 3.2 Retention Periods Subsection */}
            <div className="mt-[2.5rem]">
              <h3 className="sub_header_ii">3.2 Retention Periods</h3>
              <p className="mt-[1rem] p_i mb-[1.3rem]">
                The Union uses a retention schedule that aligns with regulatory
                requirements, sectoral standards, donor frameworks, and the
                principles of proportionality and fairness. Retention periods
                are assigned based on the sensitivity of the data, legal or
                operational necessity, and potential risk of prolonged storage.
                These periods are subject to annual review and may be revised
                where the legal basis or processing purpose changes.
              </p>

              {/* Data Type Retention Table */}
              <div className="overflow-x-auto mt-[1rem]">
                <table className="min-w-full bg-white border border-gray-200">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Data Type
                      </th>
                      <th className="px-4 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Retention Period
                      </th>
                      <th className="px-4 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Legal/Operational Basis
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-2 border-b border-gray-200 text-sm p_i">
                        Beneficiary registration data
                      </td>
                      <td className="px-4 py-2 border-b border-gray-200 text-sm p_i">
                        5 years from last contact
                      </td>
                      <td className="px-4 py-2 border-b border-gray-200 text-sm p_i">
                        Programme audit and accountability
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border-b border-gray-200 text-sm p_i">
                        Financial transaction records
                      </td>
                      <td className="px-4 py-2 border-b border-gray-200 text-sm p_i">
                        7 years
                      </td>
                      <td className="px-4 py-2 border-b border-gray-200 text-sm p_i">
                        Regulatory compliance and audit requirements
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border-b border-gray-200 text-sm p_i">
                        Volunteer/staff records
                      </td>
                      <td className="px-4 py-2 border-b border-gray-200 text-sm p_i">
                        5 years post-disengagement
                      </td>
                      <td className="px-4 py-2 border-b border-gray-200 text-sm p_i">
                        HR, tax, and employment dispute resolution
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border-b border-gray-200 text-sm p_i">
                        Monitoring and evaluation data
                      </td>
                      <td className="px-4 py-2 border-b border-gray-200 text-sm p_i">
                        5 years
                      </td>
                      <td className="px-4 py-2 border-b border-gray-200 text-sm p_i">
                        Donor reporting, institutional learning
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-sm p_i">
                        CCTV footage (if applicable)
                      </td>
                      <td className="px-4 py-2 text-sm p_i">30–90 days</td>
                      <td className="px-4 py-2 text-sm p_i">
                        Security surveillance and incident monitoring
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-[1rem] p_i mb-[1.3rem]">
                For example, beneficiary registration data is typically retained
                for a period of five years from the date of last contact,
                especially to meet donor audit obligations and programme
                evaluation needs. Retaining this data ensures that the Union can
                provide adequate evidence of service delivery and impact to
                regulatory bodies, donors, and community stakeholders. However,
                after this period, any further retention must be substantiated
                by a lawful basis, failing which the data must be securely
                deleted or anonymised.
              </p>
              <p className="mt-[1rem] p_i mb-[1.3rem]">
                Likewise, financial transaction records—including receipts,
                payment schedules, and account statements—are retained for a
                minimum of seven years in accordance with national tax
                legislation and external audit requirements. This enables the
                Union to demonstrate financial transparency and compliance with
                its fiduciary responsibilities. Any exception to the stated
                retention schedule must be documented in a Retention Override
                Log, reviewed by the DPO and Finance Unit, and reported to the
                Board if applicable.
              </p>
            </div>

            {/* 3.3 Secure Disposal Subsection */}
            <div className="mt-[2.5rem]">
              <h3 className="sub_header_ii">3.3 Secure Disposal</h3>
              <p className="mt-[1rem] p_i mb-[1.3rem]">
                Secure disposal of data is a critical component of the data
                lifecycle and a statutory obligation under NDPA Section
                39(1)(d). The Union mandates that when personal data reaches the
                end of its retention period, it must be permanently and
                irreversibly destroyed using methods appropriate to its format
                and sensitivity. The disposal process must be overseen by
                authorised personnel, documented, and auditable.
              </p>
              <p className="mt-[1rem] p_i mb-[1.3rem]">
                For electronic files, the Union uses enterprise-grade
                data-wiping software that conforms to industry standards such as
                NIST SP 800-88 and DoD 5220.22-M. These tools ensure data is
                overwritten multiple times, leaving no chance of recovery. This
                applies to records stored on internal servers, portable media,
                laptops, or cloud-based repositories. All deletion actions must
                be recorded in a centralised Data Disposal Register, including
                file names, deletion dates, responsible staff, and confirmation
                of wipe verification.
              </p>
              <p className="mt-[1rem] p_i mb-[1.3rem]">
                For physical documents, such as signed consent forms or hardcopy
                assessments, disposal is carried out through cross-cut shredding
                or secure incineration. Where outsourced disposal vendors are
                used, they must provide a certificate of destruction and be
                registered under a lawful waste handling framework. These
                vendors are also bound by non-disclosure clauses in their
                service contracts to ensure confidentiality is preserved even
                during disposal.
              </p>
              <p className="mt-[1rem] p_i mb-[1.3rem]">
                The Union also ensures that backup data, which may exist in
                redundant systems or remote recovery locations, is included in
                the disposal protocol. Backup deletion is carried out after the
                active record has been securely deleted, and both are logged
                simultaneously. No personal data shall remain recoverable after
                the end of its lifecycle unless expressly required by law or a
                binding donor contract. The Data Protection Officer (DPO) is
                responsible for maintaining the Data Destruction Log, conducting
                quarterly audits of destruction records, and reporting any
                anomaly to the Data Governance Committee.
              </p>
            </div>
          </div>

          {/* 4. DATA BREACH MANAGEMENT POLICY Section */}
          <div className="mt-[2.5rem]">
            <h2 className="sub_header_ii">4. DATA BREACH MANAGEMENT POLICY</h2>

            {/* 4.1 Definition Subsection */}
            <div className="mt-[1.5rem]">
              <h3 className="sub_header_ii">4.1 Definition</h3>
              <p className="mt-[1rem] p_i mb-[1.3rem]">
                A data breach is defined as any confirmed or suspected event
                that results in the unauthorised or unlawful access to,
                alteration, disclosure, destruction, loss, or misuse of personal
                data—whether intentional, accidental, internal, or external.
                Such incidents may compromise the confidentiality, integrity, or
                availability of personal information collected or stored by the
                Union in the course of its humanitarian, welfare, or
                administrative operations.
              </p>
              <p className="mt-[1rem] p_i mb-[1.3rem]">
                Data breaches may take several forms, including but not limited
                to:
              </p>
              <ol className="list-decimal pl-4 flex list-inside flex-col gap-[.5rem]">
                <li className="p_i">
                  Cyberattacks: such as phishing, malware, ransomware,
                  brute-force hacking, and denial of service (DoS);
                </li>
                <li className="p_i">
                  Human error: including misdirected emails, misconfigured
                  databases, or uploading beneficiary data to public platforms;
                </li>
                <li className="p_i">
                  Device theft or loss: where smartphones, laptops, or USBs with
                  unencrypted data are stolen or misplaced;
                </li>
                <li className="p_i">
                  System failures or physical intrusions: such as server
                  crashes, exposure due to power outages, burglary, or
                  unauthorised office access.
                </li>
              </ol>
              <p className="mt-[1rem] p_i mb-[1.3rem]">
                Every breach—regardless of scale or origin—must be treated with
                urgency and documented. The Union considers even near-miss
                incidents as opportunities for strengthening internal controls,
                and all staff are obligated to treat data breach response as a
                shared responsibility, not just a technical issue.
              </p>
            </div>

            {/* 4.2 Breach Detection and Reporting Subsection */}
            <div className="mt-[2.5rem]">
              <h3 className="sub_header_ii">
                4.2 Breach Detection and Reporting
              </h3>
              <p className="mt-[1rem] p_i mb-[1.3rem]">
                The Union operates a zero-delay reporting culture regarding data
                breaches. All personnel—including full-time staff, volunteers,
                contractors, and interns—must immediately report any suspected
                or confirmed data breach to the Data Protection Officer (DPO)
                through the following channels:{" "}
                <a
                  href="mailto:dpo@omooffanimi.com"
                  className="text-blue-600 hover:underline"
                >
                  dpo@omooffanimi.com
                </a>
              </p>
              <p className="mt-[1rem] p_i mb-[1.3rem]">
                Reports should be submitted as soon as the incident is
                discovered, without delay, and must include the following
                details:
              </p>
              <ol className="list-decimal pl-4 flex list-inside flex-col gap-[.5rem]">
                <li className="p_i">
                  Date and time the incident occurred or was first detected;
                </li>
                <li className="p_i">
                  A clear description of the event, including the method and
                  nature of the breach;
                </li>
                <li className="p_i">
                  The specific data systems, records, or persons affected;
                </li>
                <li className="p_i">
                  Any suspected cause or contributing factors, if known.
                </li>
              </ol>
              <p className="mt-[1rem] p_i mb-[1.3rem]">
                The DPO is obligated to assess the reported breach within 24
                hours of notification, initiate immediate containment if
                applicable, and determine whether the breach is notifiable under
                NDPA Section 39(2)(b). Failure to report a breach, or an attempt
                to conceal it, constitutes a serious violation of the Union’s
                Code of Conduct and may trigger disciplinary action, including
                termination or legal consequences.
              </p>
              <p className="mt-[1rem] p_i mb-[1.3rem]">
                To support detection, our IT infrastructure includes real-time
                alerting for unauthorised access attempts, abnormal data
                movement, and system compromise. Staff are also trained to
                identify social engineering tactics and technical anomalies as
                early indicators of breach attempts.
              </p>
            </div>

            {/* 4.3 Containment and Investigation Subsection */}
            <div className="mt-[2.5rem]">
              <h3 className="sub_header_ii">
                4.3 Containment and Investigation
              </h3>
              <p className="mt-[1rem] p_i mb-[1.3rem]">
                Following detection, the Data Protection Officer (DPO) shall
                coordinate the containment and investigation of the breach in
                collaboration with the ICT Unit and, where necessary,
                third-party cybersecurity consultants. Containment actions
                include:
              </p>
              <ol className="list-decimal pl-4 flex list-inside flex-col gap-[.5rem]">
                <li className="p_i">
                  Isolating affected systems or devices from the network to
                  prevent further spread;
                </li>
                <li className="p_i">
                  Disabling compromised accounts or credentials;
                </li>
                <li className="p_i">
                  Suspending all processing activities involving the compromised
                  dataset;
                </li>
                <li className="p_i">
                  Revoking third-party access where the incident originates from
                  an external partner.
                </li>
              </ol>
              <p className="mt-[1rem] p_i mb-[1.3rem]">
                Simultaneously, the DPO must launch a formal investigation,
                which shall include:
              </p>
              <ol className="list-decimal pl-4 flex list-inside flex-col gap-[.5rem]">
                <li className="p_i">
                  A root cause analysis to determine how the breach occurred;
                </li>
                <li className="p_i">
                  Forensic assessment of logs, systems, and affected endpoints;
                </li>
                <li className="p_i">
                  Stakeholder interviews and documentation review to understand
                  the breach lifecycle.
                </li>
              </ol>
              <p className="mt-[1rem] p_i mb-[1.3rem]">
                An Incident Report must be generated within 72 hours and should
                contain:
              </p>
              <ol className="list-decimal pl-4 flex list-inside flex-col gap-[.5rem]">
                <li className="p_i">
                  A clear timeline of the breach (from occurrence to detection
                  and containment);
                </li>
                <li className="p_i">
                  The scope and severity, including the number and categories of
                  data subjects affected;
                </li>
                <li className="p_i">
                  An evaluation of potential or actual harm to data subjects;
                </li>
                <li className="p_i">
                  Recommended remedial actions, including technical fixes and
                  policy enhancements.
                </li>
              </ol>
              <p className="mt-[1rem] p_i mb-[1.3rem]">
                This investigation helps the Union identify control failures,
                potential liabilities, and further containment needs, while
                enabling informed notification to regulators and affected
                persons.
              </p>
            </div>

            {/* 4.4 Notification Obligations Subsection */}
            <div className="mt-[2.5rem]">
              <h3 className="sub_header_ii">4.4 Notification Obligations</h3>
              <p className="mt-[1rem] p_i mb-[1.3rem]">
                As required by Section 39(2)(b) of the NDPA, the Union must
                notify the Nigeria Data Protection Commission (NDPC) within 72
                hours of becoming aware of any data breach that is likely to
                result in a risk to the rights and freedoms of individuals. A
                similar obligation exists toward the data subjects where the
                breach may lead to harm such as identity theft, discrimination,
                loss of aid, or reputational injury.
              </p>
              <p className="mt-[1rem] p_i mb-[1.3rem]">
                The notification to NDPC must include the following information:
              </p>
              <ol className="list-decimal pl-4 flex list-inside flex-col gap-[.5rem]">
                <li className="p_i">
                  The nature and scope of the breach, including how it occurred;
                </li>
                <li className="p_i">
                  The categories and approximate volume of personal data and
                  data subjects affected;
                </li>
                <li className="p_i">
                  Measures taken or proposed to mitigate the adverse effects;
                </li>
                <li className="p_i">
                  Contact information for the Union’s DPO.
                </li>
              </ol>
              <p className="mt-[1rem] p_i mb-[1.3rem]">
                For high-risk breaches, direct and timely notification shall
                also be made to affected data subjects using the most effective
                means available—such as email, SMS, direct calls, or in-person
                communication via programme officers. This notification will
                provide:
              </p>
              <ol className="list-decimal pl-4 flex list-inside flex-col gap-[.5rem]">
                <li className="p_i">A summary of the breach;</li>
                <li className="p_i">Potential risks to the individual;</li>
                <li className="p_i">
                  Steps the individual should take to protect themselves (e.g.,
                  changing passwords, placing account alerts);
                </li>
                <li className="p_i">
                  A channel to contact the Union or the DPO for support.
                </li>
              </ol>
              <p className="mt-[1rem] p_i mb-[1.3rem]">
                Where it is not feasible to contact individuals directly (e.g.,
                due to data loss), a public advisory shall be issued on the
                Union’s website and communicated through community liaison
                partners. In no case shall breach notification be delayed beyond
                72 hours unless a valid legal exception applies.
              </p>
            </div>

            {/* 4.5 Recordkeeping and Learning Subsection */}
            <div className="mt-[2.5rem]">
              <h3 className="sub_header_ii">4.5 Recordkeeping and Learning</h3>
              <p className="mt-[1rem] p_i mb-[1.3rem]">
                All breach incidents—whether reportable or not—must be recorded
                in the Union’s Data Breach Register, which is maintained by the
                DPO. Each entry must include:
              </p>
              <ol className="list-decimal pl-4 flex list-inside flex-col gap-[.5rem]">
                <li className="p_i">The date of report and incident;</li>
                <li className="p_i">
                  Type of breach (e.g., confidentiality, integrity, or
                  availability failure);
                </li>
                <li className="p_i">Persons and systems affected;</li>
                <li className="p_i">
                  Immediate actions taken for containment;
                </li>
                <li className="p_i">Outcome of investigation;</li>
                <li className="p_i">
                  Lessons learned and improvements adopted.
                </li>
              </ol>
              <p className="mt-[1rem] p_i mb-[1.3rem]">
                This register serves as a critical internal control mechanism
                and may be subject to external audit or inspection by the NDPC.
                It enables the Union to identify breach trends, recurring
                vulnerabilities, and areas requiring systemic improvement.
              </p>
              <p className="mt-[1rem] p_i mb-[1.3rem]">
                Additionally, the Union shall conduct quarterly reviews of the
                breach management process and host biannual training sessions
                for all staff and volunteers on data security and breach
                prevention. These capacity-building efforts ensure that the
                Union’s personnel remain vigilant, competent, and responsive in
                preventing and managing data incidents. Where a systemic gap is
                identified, the Union will update this policy and operational
                protocols accordingly.
              </p>
            </div>
          </div>

          {/* 5. Roles and Responsibilities Section */}
          <div className="mt-[2.5rem]">
            <h2 className="sub_header_ii">5. Roles and Responsibilities</h2>

            {/* Data Protection Officer (DPO) Subsection */}
            <div className="mt-[1.5rem]">
              <h3 className="sub_header_ii">Data Protection Officer (DPO)</h3>
              <p className="mt-[1rem] p_i mb-[1.3rem]">
                The DPO is the central authority responsible for overseeing the
                Union’s compliance with the NDPA 2023 and related data
                protection standards. The DPO shall enforce this policy, ensure
                the implementation of appropriate safeguards, and act as the
                liaison between the Union and the Nigeria Data Protection
                Commission (NDPC). This includes reporting notifiable data
                breaches within statutory timeframes and cooperating with
                supervisory authorities during investigations or audits.
              </p>
              <p className="mt-[1rem] p_i mb-[1.3rem]">
                The DPO is also tasked with conducting periodic risk
                assessments, organising data protection training, updating
                internal policies to reflect changes in law or practice, and
                managing the Union’s Data Breach Register, Retention Schedule,
                and Access Logs. The DPO must work collaboratively with other
                departments to ensure all new projects undergo data protection
                impact assessments (DPIAs), particularly where high-risk data
                processing is involved (e.g., biometric or financial data of
                beneficiaries).
              </p>
            </div>

            {/* ICT Lead / Systems Administrator Subsection */}
            <div className="mt-[2.5rem]">
              <h3 className="sub_header_ii">
                ICT Lead / Systems Administrator
              </h3>
              <p className="mt-[1rem] p_i mb-[1.3rem]">
                The ICT Lead or designated Systems Administrator is responsible
                for implementing and maintaining the technical and
                organisational security measures necessary to protect personal
                data from unauthorised access, alteration, loss, or destruction.
                This includes deploying firewalls, anti-malware solutions,
                secure user authentication mechanisms, encrypted databases, and
                periodic system backups.
              </p>
              <p className="mt-[1rem] p_i mb-[1.3rem]">
                In the event of a data breach, the ICT Lead plays a critical
                support role in mitigation and containment, helping isolate
                affected systems, restoring data from clean backups, and
                identifying technical root causes. The ICT Lead must also
                collaborate with the DPO in performing system vulnerability
                assessments, managing third-party vendors involved in data
                hosting or processing, and enforcing access control policies
                across devices and networks.
              </p>
            </div>

            {/* Programme Officers Subsection */}
            <div className="mt-[2.5rem]">
              <h3 className="sub_header_ii">Programme Officers</h3>
              <p className="mt-[1rem] p_i mb-[1.3rem]">
                Programme Officers are frontline custodians of personal data
                collected from beneficiaries during enrolment, needs assessment,
                monitoring, and aid distribution. They are responsible for
                ensuring that all personal data collected is relevant, accurate,
                securely recorded, and transmitted using approved platforms.
                They must confirm that consent is obtained where required and
                that physical records are stored securely in designated
                facilities.
              </p>
              <p className="mt-[1rem] p_i mb-[1.3rem]">
                Programme Officers also serve as the first line of defence in
                breach detection. They are mandated to report any incident—such
                as misplacement of beneficiary forms, unauthorised data
                disclosures, or suspicious access—immediately to the DPO. They
                must also restrict data access to authorised personnel and are
                not permitted to transfer data to personal devices or share it
                over unsecured channels (e.g., WhatsApp or personal email)
                without authorisation.
              </p>
            </div>

            {/* All Staff and Volunteers Subsection */}
            <div className="mt-[2.5rem]">
              <h3 className="sub_header_ii">All Staff and Volunteers</h3>
              <p className="mt-[1rem] p_i mb-[1.3rem]">
                Every employee and volunteer of Omo Offa Ni Mi Development Union
                is entrusted with the responsibility of ensuring the safe and
                lawful handling of personal data. This includes following the
                Union’s approved data handling practices, maintaining
                confidentiality, and only accessing data necessary for the
                execution of their assigned duties. Staff are expected to attend
                mandatory data protection training and to consult the DPO when
                in doubt.
              </p>
              <p className="mt-[1rem] p_i mb-[1.3rem]">
                All staff and volunteers are obligated to promptly report any
                actual or suspected data breach—no matter how minor—to the DPO.
                This includes instances of misplaced records, misdirected
                communications, or suspicious digital activity. Failure to
                report or deliberate concealment of such breaches may constitute
                gross misconduct and expose the Union to legal liability.
                Compliance with this Policy shall be reflected in annual
                performance reviews and disciplinary evaluations.
              </p>
            </div>
          </div>

          {/* 6. Review and Amendments Section */}
          <div className="mt-[2.5rem]">
            <h2 className="sub_header_ii">6. Review and Amendments</h2>
            <p className="mt-[1rem] p_i mb-[1.3rem]">
              Omo Offa Ni Mi Development Union recognises that data protection
              is a dynamic and evolving area, and as such, this Policy is a
              living document subject to continuous improvement. The Policy
              shall be reviewed at least once every calendar year or earlier
              where changes in applicable law, regulatory guidance, operational
              realities, or relevant technologies necessitate such a review. The
              responsibility for initiating and coordinating the review lies
              with the Data Protection Officer (DPO), who must engage key
              internal stakeholders such as the ICT Unit, Legal Officer, and
              Programme Leads in the process.
            </p>
            <p className="mt-[1rem] p_i mb-[1.3rem]">
              Where material changes are proposed—such as revisions to data
              retention periods, the introduction of new categories of personal
              data, or significant alterations in the way data is collected,
              stored, or processed—such amendments must undergo a structured
              policy approval process. Substantive changes shall be reviewed and
              approved by the Board of Trustees, or alternatively by a duly
              constituted Data Governance Committee, where applicable. Upon
              approval, updated policies must be version-controlled, signed, and
              communicated to all staff, partners, and affected data processors.
              All staff and volunteers are required to acknowledge the revised
              policy and undertake any refresher training as may be deemed
              necessary.
            </p>
            <p className="mt-[1rem] p_i mb-[1.3rem]">
              To ensure transparency and accountability, a Policy Change Log
              shall be maintained by the DPO, detailing the date of each
              amendment, nature of changes made, and the reason for the update.
              Where the policy revision affects the rights of data subjects, the
              Union shall notify affected individuals and offer them an
              opportunity to understand how these changes may impact the
              handling of their personal data. This ensures alignment with NDPA
              Section 40(3), which requires data controllers to provide
              transparent and accessible privacy practices to data subjects.
            </p>
          </div>

          {/* 7. Contact Section */}
          <div className="mt-[2.5rem]">
            <h2 className="sub_header_ii">7. Contact</h2>
            <p className="mt-[1rem] p_i mb-[1.3rem]">
              For all matters related to personal data, privacy concerns, breach
              notifications, or to exercise data subject rights (such as access,
              correction, or erasure), the designated contact is the Data
              Protection Officer (DPO) of Omo Offa Ni Mi Development Union. The
              DPO serves as the primary liaison between the Union and all
              external parties including beneficiaries, partners, regulatory
              authorities, and third-party processors on matters concerning data
              protection and privacy rights.
            </p>
            <p className="mt-[1rem] p_i mb-[1.3rem]">
              All communications to the DPO should be made using the following
              contact details:
            </p>
            <ul className="list-disc pl-4 flex list-inside flex-col gap-[.5rem]">
              <li className="p_i">Data Protection Officer (DPO)</li>
              <li className="p_i">Omo Offa Ni Mi Development Union</li>
              <li className="p_i">
                Email:{" "}
                <a
                  href="mailto:info@omooffanimi.com"
                  className="text-blue-600 hover:underline"
                >
                  info@omooffanimi.com
                </a>
              </li>
              <li className="p_i">Phone: +2348085085918 or +2348136686235</li>
              <li className="p_i">
                Website:{" "}
                <a
                  href="https://www.omooffanimi.com"
                  className="text-blue-600 hover:underline"
                >
                  www.omooffanimi.com
                </a>
              </li>
              <li className="p_i">
                Data Protection Officer (DPO): Muhammad Naseer Abdullahi, Esq.
              </li>
              <li className="p_i">
                DPO Email:{" "}
                <a
                  href="mailto:dpo@omooffanimi.com"
                  className="text-blue-600 hover:underline"
                >
                  dpo@omooffanimi.com
                </a>
              </li>
            </ul>
            <p className="mt-[1rem] p_i mb-[1.3rem]">
              Requests and inquiries submitted to the DPO must clearly state the
              nature of the concern, the relevant data (where applicable), and
              any supporting documentation. The Union shall acknowledge all
              legitimate requests within 5 working days and issue a substantive
              response in line with legal timelines as specified under the NDPA
              2023 and any other applicable regulation. The DPO also maintains a
              Data Subject Request Log to track and report on the timeliness and
              quality of responses to all personal data inquiries.
            </p>
          </div>
        </div>
      </MaxContainer>
    </section>
  );
};

export default DataPolicyContent;
