import { useContactForm } from '@/hooks/useContactForm';
import type { ContactPageData } from '@/types';

export interface ContactFormProps {
  readonly labels: ContactPageData['formLabels'];
  readonly projectTypes: ContactPageData['projectTypes'];
}

const inputStyle: React.CSSProperties = {
  width:           '100%',
  backgroundColor: '#242424',
  color:           '#f5f5f5',
  border:          'none',
  borderBottom:    '2px solid #353535',
  padding:         '12px 0',
  fontSize:        '14px',
  outline:         'none',
  fontFamily:      "'Inter', sans-serif",
  transition:      'border-color 0.2s',
};

const labelStyle: React.CSSProperties = {
  display:      'block',
  color:        '#666666',
  fontSize:     '10px',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.2em',
  marginBottom: '6px',
};

const errorStyle: React.CSSProperties = {
  color:     '#ff6b6b',
  fontSize:  '11px',
  marginTop: '4px',
};

export default function ContactForm({ labels, projectTypes }: ContactFormProps) {
  const { values, errors, isSubmitting, isSuccess, handleChange, handleSubmit } = useContactForm();

  if (isSuccess) {
    return (
      <div
        className="py-16 text-center"
        style={{ color: '#00e5ff' }}
      >
        <p className="text-xl font-semibold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          MESSAGE SENT
        </p>
        <p className="text-sm" style={{ color: '#a0a0a0' }}>
          Response within 12 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-8">
      {/* Full Name */}
      <div>
        <label htmlFor="fullName" style={labelStyle}>{labels.fullName}</label>
        <input
          id="fullName"
          type="text"
          value={values.fullName}
          onChange={(e) => handleChange('fullName', e.target.value)}
          style={inputStyle}
          onFocus={(e) => ((e.target as HTMLInputElement).style.borderBottomColor = '#00e5ff')}
          onBlur={(e)  => ((e.target as HTMLInputElement).style.borderBottomColor = errors.fullName ? '#ff6b6b' : '#353535')}
        />
        {errors.fullName && <p style={errorStyle}>{errors.fullName}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" style={labelStyle}>{labels.email}</label>
        <input
          id="email"
          type="email"
          value={values.email}
          onChange={(e) => handleChange('email', e.target.value)}
          style={inputStyle}
          onFocus={(e) => ((e.target as HTMLInputElement).style.borderBottomColor = '#00e5ff')}
          onBlur={(e)  => ((e.target as HTMLInputElement).style.borderBottomColor = errors.email ? '#ff6b6b' : '#353535')}
        />
        {errors.email && <p style={errorStyle}>{errors.email}</p>}
      </div>

      {/* Project Type */}
      <div>
        <label htmlFor="projectType" style={labelStyle}>{labels.projectType}</label>
        <select
          id="projectType"
          value={values.projectType}
          onChange={(e) => handleChange('projectType', e.target.value)}
          style={{ ...inputStyle, cursor: 'pointer' }}
        >
          <option value="" disabled>SELECT ONE</option>
          {projectTypes.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
        {errors.projectType && <p style={errorStyle}>{errors.projectType}</p>}
      </div>

      {/* Inquiry Details */}
      <div>
        <label htmlFor="inquiryDetails" style={labelStyle}>{labels.inquiryDetails}</label>
        <textarea
          id="inquiryDetails"
          rows={5}
          value={values.inquiryDetails}
          onChange={(e) => handleChange('inquiryDetails', e.target.value)}
          style={{ ...inputStyle, resize: 'vertical' }}
          onFocus={(e) => ((e.target as HTMLTextAreaElement).style.borderBottomColor = '#00e5ff')}
          onBlur={(e)  => ((e.target as HTMLTextAreaElement).style.borderBottomColor = errors.inquiryDetails ? '#ff6b6b' : '#353535')}
        />
        {errors.inquiryDetails && <p style={errorStyle}>{errors.inquiryDetails}</p>}
      </div>

      {/* Submit */}
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-10 py-4 text-xs font-bold uppercase tracking-[0.15em] transition-colors disabled:opacity-50"
          style={{ backgroundColor: '#00e5ff', color: '#131313', border: 'none', cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
        >
          {isSubmitting ? 'SENDING...' : labels.submitButton}
        </button>
      </div>
    </form>
  );
}
