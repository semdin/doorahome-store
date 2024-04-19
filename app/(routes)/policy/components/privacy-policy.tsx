"use client";

export function PrivacyPolicy() {
  return (
    <div className="space-y-10 pb-10 my-5">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Privacy Policy</h1>
      </div>

      {/* Section 1: Introduction */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">1. Introduction</h2>
        <p>
          Thank you for visiting Ceraste.com. Your privacy is important to us,
          and we are committed to protecting the personal information that you
          share with us. Should you have any queries regarding this policy or
          our privacy practices, feel free to contact us at (contact
          information).
        </p>
      </section>

      {/* Section 2: Information Collection */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">2. Information Collection</h2>
        <p>
          While using Ceraste.com, we may collect various types of information,
          including:
        </p>
        <ul className="list-disc pl-5">
          <li>
            <span className="font-semibold">Personal Data:</span>
            <ul className="list-disc pl-5">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Mailing address</li>
            </ul>
          </li>
          <li>
            <span className="font-semibold">Usage Data:</span>
            <ul className="list-disc pl-5">
              <li>Browser type and version</li>
              <li>IP address</li>
              <li>Pages visited</li>
              <li>Date and time of visit</li>
            </ul>
          </li>
        </ul>
      </section>

      {/* Section 3: Use of Collected Information */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">
          3. Use of Collected Information
        </h2>
        <p>We use the information collected for several purposes, such as:</p>
        <ul className="list-disc pl-5">
          <li>Providing and improving our services</li>
          <li>Communicating with you</li>
          <li>Analyzing usage to enhance the user experience</li>
          <li>Addressing technical issues and providing support</li>
        </ul>
      </section>

      {/* Section 4: Disclosure of Information */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">4. Disclosure of Information</h2>
        <p>
          We may disclose your personal information under the following
          circumstances:
        </p>
        <ul className="list-disc pl-5">
          <li>Compliance with legal obligations</li>
          <li>Protection of Ceraste.com rights and properties</li>
          <li>Prevention of potential misconduct</li>
          <li>Ensuring the personal safety of users and the public</li>
        </ul>
      </section>

      {/* Section 5: Data Security */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">5. Data Security</h2>
        <p>
          We prioritize the security of your data but acknowledge that no
          electronic transmission or storage method is entirely secure. We
          strive to use commercially acceptable means to protect your personal
          data.
        </p>
      </section>

      {/* Section 6: Cookies */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">6. Cookies</h2>
        <p>
          Ceraste.com uses cookies to improve your browsing experience. By using
          our website, you consent to our use of cookies.
        </p>
      </section>

      {/* Section 7: Changes to This Policy */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">7. Changes to This Policy</h2>
        <p>
          We may update this privacy policy from time to time. Any changes will
          be posted on this page, and we encourage you to review our privacy
          policy periodically.
        </p>
      </section>

      {/* Section 8: Contact Us */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">8. Contact Us</h2>
        <p>
          If you have any questions regarding this privacy policy, please
          contact us at:
        </p>
        <ul className="list-disc pl-5">
          <li>Email: info@naturalwoods.co</li>
          <li>Phone: +17328125665</li>
        </ul>
      </section>
    </div>
  );
}

export default PrivacyPolicy;
