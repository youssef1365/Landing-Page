import React, { useState, useEffect, useRef } from 'react';
import { siteConfig } from '../config/siteConfig';

export default function ApplicationForms({ userType }) {
  const { forms } = siteConfig;
  const [submitted, setSubmitted] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  const currentForm = userType === 'seller' ? forms.sellerForm : forms.buyerForm;

  const initState = (fields) =>
    fields.reduce((acc, f) => ({ ...acc, [f.name]: '' }), {});

  const [formData, setFormData] = useState(() => initState(currentForm.fields));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const renderField = (field, value) => {
    const base = { name: field.name, value, onChange: handleChange, placeholder: field.placeholder };
    if (field.type === 'select') {
      const options =
        field.name === 'industry' ? forms.selectOptions.industries :
        field.name === 'budgetRange' ? forms.selectOptions.budgetRanges :
        forms.selectOptions.timelines;
      return (
        <select {...base} required={field.required}>
          <option value="">{field.placeholder}</option>
          {options.map((o, i) => <option key={i} value={o}>{o}</option>)}
        </select>
      );
    }
    if (field.type === 'textarea') {
      return <textarea {...base} rows={3} required={field.required} />;
    }
    return <input {...base} type={field.type} required={field.required} />;
  };

  const pairs = [];
  for (let i = 0; i < currentForm.fields.length; i += 2) {
    pairs.push(currentForm.fields.slice(i, i + 2));
  }

  return (
    <>
      <section className="appforms" ref={ref} id="ApplicationForms">
        <div className={`appforms-inner ${visible ? 'visible' : ''}`}>

          <div className="appforms-left">
            <div className="left-label">
              <span className="label-line" />
              <span className="label-text">Join the Programme</span>
            </div>
            <h2>Apply to the West Africa Market Entry Programme</h2>
            <p className="left-desc">
              A selective programme connecting companies with pre-qualified West African buyers, distributors and partners.
            </p>

            {userType === 'seller' && (
              <div className="steps">
                {forms.sellerForm.processSteps.map((step, i) => (
                  <div key={i} className="step-row">
                    <span className="step-num">{i + 1}</span>
                    <span className="step-text">{step}</span>
                  </div>
                ))}
              </div>
            )}

            {userType === 'buyer' && (
              <div className="exclusivity">
                {forms.buyerForm.exclusivityNotice}
              </div>
            )}

            {userType === 'seller' && (
              <div className="notice-box">
                {forms.sellerForm.notice}
              </div>
            )}
          </div>

          <div className="appforms-right">
            <div className="form-card">
              <div className="form-card-header">
                <h3>{currentForm.heading}</h3>
                <p>{currentForm.description}</p>
              </div>

              {submitted ? (
                <div className="success-msg">
                  <span className="success-icon">✓</span>
                  <p>{forms.submitSuccessMessage}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="form">
                  {pairs.map((pair, pi) => (
                    <div key={pi} className={`form-row ${pair.length === 1 ? 'single' : ''}`}>
                      {pair.map((field) => (
                        <div key={field.name} className="form-group">
                          <label>
                            {field.label}
                            {field.required && <span className="required">*</span>}
                          </label>
                          {renderField(field, formData[field.name])}
                        </div>
                      ))}
                    </div>
                  ))}
                  <button type="submit" className="submit-btn">
                    {currentForm.ctaButton}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

      <style jsx>{`
        .appforms {
          background: #f8fafc;
          padding: 120px 80px;
          position: relative;
        }

        .appforms::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #c8a84b, #1a6e4a, #2a5298);
        }

        .appforms-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.9s ease, transform 0.9s ease;
        }

        .appforms-inner.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .left-label {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 28px;
        }

        .label-line {
          display: inline-block;
          width: 32px;
          height: 2px;
          background: #1a6e4a;
          flex-shrink: 0;
        }

        .label-text {
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          color: #94a3b8;
          text-transform: uppercase;
        }

        .appforms-left h2 {
          font-size: 2.4rem;
          font-weight: 300;
          color: #0b1220;
          margin: 0 0 16px 0;
          line-height: 1.2;
          letter-spacing: -0.02em;
        }

        .left-desc {
          font-size: 0.95rem;
          color: #64748b;
          line-height: 1.7;
          margin: 0 0 40px 0;
        }

        .steps {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-bottom: 28px;
        }

        .step-row {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .step-num {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #0b1220;
          color: white;
          font-size: 0.75rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .step-text {
          font-size: 0.88rem;
          color: #475569;
          font-weight: 500;
        }

        .notice-box {
          padding: 16px 20px;
          background: white;
          border-left: 3px solid #c8a84b;
          border-radius: 4px;
          font-size: 0.85rem;
          color: #475569;
          line-height: 1.6;
        }

        .exclusivity {
          padding: 16px 20px;
          background: white;
          border-left: 3px solid #1a6e4a;
          border-radius: 4px;
          font-size: 0.85rem;
          color: #475569;
          line-height: 1.6;
          margin-bottom: 28px;
        }

        .form-card {
          background: white;
          border-radius: 16px;
          border: 1px solid #e2e8f0;
          overflow: hidden;
          box-shadow: 0 4px 24px rgba(0,0,0,0.06);
        }

        .form-card-header {
          padding: 32px 36px 24px;
          border-bottom: 1px solid #f1f5f9;
        }

        .form-card-header h3 {
          font-size: 1.2rem;
          font-weight: 700;
          color: #0b1220;
          margin: 0 0 8px 0;
        }

        .form-card-header p {
          font-size: 0.85rem;
          color: #94a3b8;
          margin: 0;
          line-height: 1.5;
        }

        .form {
          padding: 28px 36px 36px;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .form-row.single {
          grid-template-columns: 1fr;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-group label {
          font-size: 0.78rem;
          font-weight: 600;
          color: #334155;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        .required {
          color: #1a6e4a;
          margin-left: 3px;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          padding: 10px 14px;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          font-size: 0.9rem;
          font-family: inherit;
          color: #0b1220;
          background: #fafafa;
          transition: all 0.2s ease;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #1a6e4a;
          background: white;
          box-shadow: 0 0 0 3px rgba(26, 110, 74, 0.08);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 90px;
        }

        .submit-btn {
          margin-top: 8px;
          padding: 14px;
          background: #0b1220;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .submit-btn:hover {
          background: #1a6e4a;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(26, 110, 74, 0.3);
        }

        .success-msg {
          padding: 60px 36px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          text-align: center;
        }

        .success-icon {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: #1a6e4a;
          color: white;
          font-size: 1.5rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .success-msg p {
          font-size: 0.95rem;
          color: #475569;
          line-height: 1.6;
          margin: 0;
          max-width: 300px;
        }

        @media (max-width: 768px) {
          .appforms { padding: 80px 24px; }
          .appforms-inner { grid-template-columns: 1fr; gap: 40px; }
          .appforms-left h2 { font-size: 1.8rem; }
          .form-row { grid-template-columns: 1fr; }
          .form-card-header, .form { padding-left: 24px; padding-right: 24px; }
        }
      `}</style>
    </>
  );
}