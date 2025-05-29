import React from "react";

function PrivacyPolicy() {
  return (
    <>
      <div className="container-xxl py-5">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          {/* <h6 className="section-title text-center text-primary text-uppercase">
            
          </h6> */}
          <h1 className="mb-2">
            <span className="text-primary text-uppercase">Privacy Policy</span>
          </h1>
            <p className="text-center text-muted">
            Effective Date: 27/05/2025
          </p>
        </div>
        <div className="container py-5">
         
        

          <div className="accordion" id="privacyAccordion">
            {/* Section 1 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                >
                  1. Information We Collect
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                data-bs-parent="#privacyAccordion"
              >
                <div className="accordion-body">
                  <ul>
                    <li>
                      <strong>Personal Information:</strong> Name, contact,
                      ID/passport, payment info.
                    </li>
                    <li>
                      <strong>Booking Details:</strong> Reservation info,
                      preferences, feedback.
                    </li>
                    <li>
                      <strong>Technical Data:</strong> IP, browser, device info,
                      cookies.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                >
                  2. How We Use Your Information
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#privacyAccordion"
              >
                <div className="accordion-body">
                  <ul>
                    <li>To manage bookings and communicate with you</li>
                    <li>To process payments securely</li>
                    <li>To meet legal and regulatory requirements</li>
                    <li>To improve guest services and experience</li>
                    <li>To send marketing (only with your consent)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                >
                  3. Sharing of Information
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#privacyAccordion"
              >
                <div className="accordion-body">
                  <p>
                    We do <strong>not</strong> sell or rent your data. We may
                    share it with:
                  </p>
                  <ul>
                    <li>Payment processors</li>
                    <li>Government authorities when legally required</li>
                    <li>Trusted service providers (e.g. booking engines)</li>
                    <li>Legal advisors if needed</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                >
                  4. Data Retention
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                data-bs-parent="#privacyAccordion"
              >
                <div className="accordion-body">
                  <p>
                    We retain your personal information only as long as
                    necessary for legal, operational, or customer service
                    purposes.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 5 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFive">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                >
                  5. Data Security
                </button>
              </h2>
              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                data-bs-parent="#privacyAccordion"
              >
                <div className="accordion-body">
                  <p>
                    We use security measures (physical, digital, managerial) to
                    protect your data from unauthorized access or misuse.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 6 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingSix">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSix"
                >
                  6. Your Rights
                </button>
              </h2>
              <div
                id="collapseSix"
                className="accordion-collapse collapse"
                data-bs-parent="#privacyAccordion"
              >
                <div className="accordion-body">
                  <p>You may request to:</p>
                  <ul>
                    <li>Access, update, or delete your data</li>
                    <li>Withdraw consent (if applicable)</li>
                    <li>Restrict or object to processing</li>
                    <li>File a complaint with a regulatory authority</li>
                  </ul>
                  <p>
                    Contact us at{" "}
                    <strong>lakesideinnnainital@redeffmail.com</strong> or call{" "}
                    <strong>+91 7448756748</strong> to make a request.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 7 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingSeven">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSeven"
                >
                  7. Cookies and Tracking
                </button>
              </h2>
              <div
                id="collapseSeven"
                className="accordion-collapse collapse"
                data-bs-parent="#privacyAccordion"
              >
                <div className="accordion-body">
                  <p>
                    We use cookies and similar technologies to enhance your
                    browsing experience. You can manage cookie preferences in
                    your browser settings.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 8 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingEight">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseEight"
                >
                  8. Third-Party Links
                </button>
              </h2>
              <div
                id="collapseEight"
                className="accordion-collapse collapse"
                data-bs-parent="#privacyAccordion"
              >
                <div className="accordion-body">
                  <p>
                    Our website may contain links to other websites. We are not
                    responsible for the privacy practices or content of external
                    sites.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 9 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingNine">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseNine"
                >
                  9. Updates to This Policy
                </button>
              </h2>
              <div
                id="collapseNine"
                className="accordion-collapse collapse"
                data-bs-parent="#privacyAccordion"
              >
                <div className="accordion-body">
                  <p>
                    We may update this policy. Changes will be posted on this
                    page with a new effective date.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 10 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTen">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTen"
                >
                  10. Contact Us
                </button>
              </h2>
              <div
                id="collapseTen"
                className="accordion-collapse collapse"
                data-bs-parent="#privacyAccordion"
              >
                <div className="accordion-body">
                  <ul>
                    <li>
                      <strong>Lake Site Inn</strong>
                    </li>
                    <li>Mall Rd, Mallital, Nainital, Uttarakhand 263001</li>
                    <li>
                      <strong>Email:</strong> lakesideinnnainital@redeffmail.com
                    </li>
                    <li>
                      <strong>Phone:</strong> +91 7448756748
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PrivacyPolicy;
