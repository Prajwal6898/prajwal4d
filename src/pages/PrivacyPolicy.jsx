import { Link } from 'react-router-dom'
import './PrivacyPolicy.css'

function PrivacyPolicy() {
  const lastUpdated = 'December 15, 2024'
  const developerName = 'Prajwal 4D'
  const contactEmail = 'prajwalkumar6898@gmail.com'

  return (
    <div className="page">
      <header>
        <div className="header-inner">
          <Link to="/" className="logo">Prajwal 4D</Link>
          <nav>
            <Link to="/">Home</Link>
          </nav>
        </div>
      </header>

      <div className="content">
        <div className="policy-container">
          <article className="policy-content">
            <h1>Privacy Policy</h1>
            <p className="last-updated">Last updated: {lastUpdated}</p>

            <section>
              <h2>Introduction</h2>
              <p>
                Welcome to {developerName}. This Privacy Policy explains how we collect, use, disclose,
                and safeguard your information when you use our mobile applications ("Apps").
                Please read this privacy policy carefully. By using our Apps, you agree to the
                collection and use of information in accordance with this policy.
              </p>
            </section>

            <section>
              <h2>Information We Collect</h2>

              <h3>Information Collected Automatically</h3>
              <p>When you use our Apps, we may automatically collect certain information, including:</p>
              <ul>
                <li><strong>Device Information:</strong> Device type, operating system version, unique device identifiers, and mobile network information</li>
                <li><strong>Usage Data:</strong> Information about how you interact with our Apps, including features used, time spent, and crash reports</li>
                <li><strong>Log Data:</strong> IP address, access times, app features accessed, and other system activity</li>
              </ul>

              <h3>Information You Provide</h3>
              <p>We may collect information that you voluntarily provide, such as:</p>
              <ul>
                <li>Email address (if you contact us for support)</li>
                <li>Feedback and correspondence</li>
                <li>In-app purchase history</li>
              </ul>
            </section>

            <section>
              <h2>Third-Party Services</h2>
              <p>Our Apps may use third-party services that collect information used to identify you. These services have their own privacy policies:</p>

              <h3>Google AdMob / Google AdSense</h3>
              <p>
                We use Google AdMob/AdSense to display advertisements in our Apps. Google may collect
                and use data for personalized advertising. This includes:
              </p>
              <ul>
                <li>Device identifiers (Advertising ID)</li>
                <li>IP address</li>
                <li>Location data (if permission granted)</li>
                <li>App usage and interaction data</li>
              </ul>
              <p>
                For more information, please review{' '}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                  Google's Privacy Policy
                </a>{' '}
                and{' '}
                <a href="https://support.google.com/admob/answer/6128543" target="_blank" rel="noopener noreferrer">
                  Google AdMob's policies
                </a>.
              </p>

              <h3>Google Play Services</h3>
              <p>
                Our Apps use Google Play Services for various functionalities including in-app purchases,
                authentication, and analytics. Please refer to{' '}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                  Google's Privacy Policy
                </a>{' '}
                for more details.
              </p>

              <h3>Analytics Services</h3>
              <p>
                We may use analytics services such as Google Analytics for Firebase to help us
                understand how our Apps are used. These services collect information sent by your
                device, including usage data and events.
              </p>
            </section>

            <section>
              <h2>In-App Purchases</h2>
              <p>
                Our Apps may offer in-app purchases. All payment transactions are processed by
                Google Play Store. We do not collect or store your payment card details.
                Payment information is handled according to{' '}
                <a href="https://payments.google.com/payments/apis-secure/get_legal_document?ldo=0&ldt=privacynotice" target="_blank" rel="noopener noreferrer">
                  Google Payments Privacy Notice
                </a>.
              </p>
              <p>
                We may receive confirmation of purchases, including the items purchased and
                transaction IDs, to unlock premium features and verify your purchase status.
              </p>
            </section>

            <section>
              <h2>How We Use Your Information</h2>
              <p>We use the collected information to:</p>
              <ul>
                <li>Provide, operate, and maintain our Apps</li>
                <li>Improve, personalize, and expand our Apps</li>
                <li>Understand and analyze how you use our Apps</li>
                <li>Develop new products, services, features, and functionality</li>
                <li>Display relevant advertisements</li>
                <li>Process in-app purchases and transactions</li>
                <li>Send you technical notices and support messages</li>
                <li>Detect, prevent, and address technical issues</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2>Data Sharing and Disclosure</h2>
              <p>We may share your information in the following situations:</p>
              <ul>
                <li><strong>Service Providers:</strong> With third-party vendors who perform services on our behalf (advertising, analytics)</li>
                <li><strong>Legal Requirements:</strong> If required by law or in response to valid requests by public authorities</li>
                <li><strong>Business Transfers:</strong> In connection with any merger, sale of company assets, or acquisition</li>
                <li><strong>With Your Consent:</strong> For any other purpose with your consent</li>
              </ul>
              <p>We do not sell your personal information to third parties.</p>
            </section>

            <section>
              <h2>Data Retention</h2>
              <p>
                We retain your information only for as long as necessary to fulfill the purposes
                outlined in this Privacy Policy, unless a longer retention period is required or
                permitted by law. Analytics data is typically retained for 14 months.
              </p>
            </section>

            <section>
              <h2>Data Security</h2>
              <p>
                We implement appropriate technical and organizational security measures to protect
                your information against unauthorized access, alteration, disclosure, or destruction.
                However, no method of transmission over the internet or electronic storage is 100%
                secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2>Children's Privacy</h2>
              <p>
                Our Apps are not intended for children under 13 years of age. We do not knowingly
                collect personal information from children under 13. If you are a parent or guardian
                and believe your child has provided us with personal information, please contact us
                so we can take necessary action.
              </p>
              <p>
                For Apps that are family-friendly or may be used by children, we comply with
                the Children's Online Privacy Protection Act (COPPA) and do not collect personal
                information from children without parental consent.
              </p>
            </section>

            <section>
              <h2>Your Rights and Choices</h2>
              <p>Depending on your location, you may have the following rights:</p>
              <ul>
                <li><strong>Access:</strong> Request access to your personal data</li>
                <li><strong>Correction:</strong> Request correction of inaccurate data</li>
                <li><strong>Deletion:</strong> Request deletion of your personal data</li>
                <li><strong>Opt-out of Personalized Ads:</strong> You can opt out of personalized advertising by adjusting your device settings or through Google's ad settings</li>
                <li><strong>Data Portability:</strong> Request a copy of your data in a portable format</li>
              </ul>

              <h3>Opting Out of Personalized Ads</h3>
              <p>To opt out of personalized advertising:</p>
              <ul>
                <li><strong>Android:</strong> Go to Settings → Google → Ads → Opt out of Ads Personalization</li>
                <li>Visit <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">Google Ad Settings</a></li>
              </ul>
            </section>

            <section>
              <h2>International Data Transfers</h2>
              <p>
                Your information may be transferred to and processed in countries other than your
                country of residence. These countries may have data protection laws that are
                different from the laws of your country. By using our Apps, you consent to the
                transfer of information to countries outside your country of residence.
              </p>
            </section>

            <section>
              <h2>Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any
                changes by posting the new Privacy Policy on this page and updating the "Last
                updated" date. You are advised to review this Privacy Policy periodically for
                any changes.
              </p>
            </section>

            <section>
              <h2>Contact Us</h2>
              <p>
                If you have any questions, concerns, or requests regarding this Privacy Policy
                or our data practices, please contact us at:
              </p>
              <ul className="contact-info">
                <li><strong>Developer:</strong> {developerName}</li>
                <li><strong>Email:</strong> <a href={`mailto:${contactEmail}`}>{contactEmail}</a></li>
              </ul>
            </section>

            <section>
              <h2>Consent</h2>
              <p>
                By using our Apps, you consent to our Privacy Policy and agree to its terms.
              </p>
            </section>
          </article>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy
