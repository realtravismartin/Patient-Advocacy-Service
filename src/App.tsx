import './App.css'

function App() {
  return (
    <div className="app">
      <section className="hero">
        <div className="container">
          <h1>Patient Advocacy Solutions - We Get Your Care Approved Fast</h1>
          <p className="subtitle">
            Expert advocacy to navigate insurance approvals and get you the care you need, when you need it.
          </p>
          <button className="cta-button">Get Started Today</button>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>How We Help You</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📋</div>
              <h3>Prior Authorization</h3>
              <p>
                We handle all the paperwork and follow-up with your insurance company to get your procedures approved quickly.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💬</div>
              <h3>Appeals Support</h3>
              <p>
                If your claim is denied, we fight on your behalf with expert appeals and documentation to overturn decisions.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>Cost Negotiation</h3>
              <p>
                We negotiate with providers and insurers to reduce your out-of-pocket costs and find financial assistance options.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Urgent Care Coordination</h3>
              <p>
                For time-sensitive treatments, we expedite approvals and coordinate with all parties to prevent delays.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <div className="container">
          <h2>How It Works</h2>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Share Your Case</h3>
                <p>
                  Tell us about your medical needs, insurance coverage, and what approvals you need. It takes just a few minutes.
                </p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>We Take Action</h3>
                <p>
                  Our experienced advocates contact your insurance company, submit required documentation, and follow up persistently.
                </p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Get Approved</h3>
                <p>
                  You receive updates throughout the process and get the green light for your care, typically within days not weeks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="insurance-section">
        <div className="container">
          <h2>Insurance Coverage</h2>
          <p>
            We work with all major insurance providers to ensure you get the care you deserve. Our team has years of experience navigating complex insurance systems and we negotiate on your behalf because you shouldn't be expected to pay full price for necessary medical care.
          </p>
          <button className="cta-button">Start Your Case</button>
          <p className="insurance-note">
            Note: We currently work with all major private insurance providers. We do not work with Medicare or Medicaid at this time.
          </p>
        </div>
      </section>
    </div>
  )
}

export default App
