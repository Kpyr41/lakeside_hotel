import React from "react";

function TermCondition() {
  return (
    <>
      <div className="container-xxl py-5">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          {/* <h6 className="section-title text-center text-primary text-uppercase">
            
          </h6> */}
          <h1 className="mb-2">
            <span className="text-primary text-uppercase">Term And Condition</span>
          </h1>
        </div>
        <div className="container py-5">
         

          <div className="accordion" id="termsAccordion">
            {/* Check-in / Check-out */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingCheckin">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseCheckin"
                  aria-expanded="true"
                >
                  1. Check-in / Check-out
                </button>
              </h2>
              <div
                id="collapseCheckin"
                className="accordion-collapse collapse show"
                data-bs-parent="#termsAccordion"
              >
                <div className="accordion-body">
                  <ul>
                    <li>
                      <strong>Standard Check-in:</strong> 12:00 PM
                    </li>
                    <li>
                      <strong>Standard Check-out:</strong> 10:00 AM
                    </li>
                    <li>
                      Early check-in and late check-out are subject to
                      availability and may incur extra charges.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Cancellation and Prepayment */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingCancellation">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseCancellation"
                  aria-expanded="false"
                >
                  2. Cancellation and Prepayment
                </button>
              </h2>
              <div
                id="collapseCancellation"
                className="accordion-collapse collapse"
                data-bs-parent="#termsAccordion"
              >
                <div className="accordion-body">
                  <p>
                    Cancellation policies vary depending on the type of
                    accommodation and booking dates. Some policies may allow
                    free cancellation up to a certain time before arrival, while
                    others may result in forfeiting deposits or full booking
                    amounts. Optional room insurance may be available at the
                    time of booking for more flexible cancellations.
                  </p>
                </div>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingPayment">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapsePayment"
                  aria-expanded="false"
                >
                  3. Payment Methods
                </button>
              </h2>
              <div
                id="collapsePayment"
                className="accordion-collapse collapse"
                data-bs-parent="#termsAccordion"
              >
                <div className="accordion-body">
                  <p>
                    Cash is accepted. Credit card pre-authorization may be
                    required prior to or at check-in. Final payment is due at
                    check-in unless otherwise stated.
                  </p>
                </div>
              </div>
            </div>

            {/* Pets */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingPets">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapsePets"
                  aria-expanded="false"
                >
                  4. Pets
                </button>
              </h2>
              <div
                id="collapsePets"
                className="accordion-collapse collapse"
                data-bs-parent="#termsAccordion"
              >
                <div className="accordion-body">
                  <p>
                    Pets are generally not allowed. Please contact the hotel in
                    advance regarding service animals.
                  </p>
                </div>
              </div>
            </div>

            {/* Age Requirement */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingAge">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseAge"
                  aria-expanded="false"
                >
                  5. Age Requirement
                </button>
              </h2>
              <div
                id="collapseAge"
                className="accordion-collapse collapse"
                data-bs-parent="#termsAccordion"
              >
                <div className="accordion-body">
                  <p>
                    There is no specific minimum age requirement for check-in.
                    However, minors must be accompanied by a responsible adult.
                  </p>
                </div>
              </div>
            </div>

            {/* ID Requirements */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingID">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseID"
                  aria-expanded="false"
                >
                  6. Identification Requirements
                </button>
              </h2>
              <div
                id="collapseID"
                className="accordion-collapse collapse"
                data-bs-parent="#termsAccordion"
              >
                <div className="accordion-body">
                  <p>
                    All guests are required to present a valid government-issued
                    photo ID and a credit card at check-in.
                  </p>
                </div>
              </div>
            </div>

            {/* Damage and Liability */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingDamage">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseDamage"
                  aria-expanded="false"
                >
                  7. Damage, Theft, and Liability
                </button>
              </h2>
              <div
                id="collapseDamage"
                className="accordion-collapse collapse"
                data-bs-parent="#termsAccordion"
              >
                <div className="accordion-body">
                  <ul>
                    <li>
                      Guests are responsible for any damage to hotel property
                      caused during their stay.
                    </li>
                    <li>
                      Lake Site Inn is not liable for damage or theft of
                      vehicles parked in the hotel's parking areas.
                    </li>
                    <li>
                      The hotel is not liable for events beyond its control,
                      such as weather conditions, flight delays, or labor
                      strikes.
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

export default TermCondition;
