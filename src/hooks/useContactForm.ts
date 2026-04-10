import { useState } from 'react';
import type { ProjectType } from '@/types';

export interface ContactFormValues {
  fullName: string;
  email: string;
  projectType: ProjectType | '';
  inquiryDetails: string;
}

type FormErrors = Partial<Record<keyof ContactFormValues, string>>;

export interface UseContactFormResult {
  readonly values: ContactFormValues;
  readonly errors: FormErrors;
  readonly isSubmitting: boolean;
  readonly isSuccess: boolean;
  readonly handleChange: (field: keyof ContactFormValues, value: string) => void;
  readonly handleSubmit: (e: React.FormEvent) => void;
}

const initialValues: ContactFormValues = {
  fullName:       '',
  email:          '',
  projectType:    '',
  inquiryDetails: '',
};

function validate(values: ContactFormValues): FormErrors {
  const errors: FormErrors = {};
  if (!values.fullName.trim())       errors.fullName       = 'Name is required.';
  if (!values.email.trim())          errors.email          = 'Email is required.';
  else if (!/\S+@\S+\.\S+/.test(values.email)) errors.email = 'Enter a valid email.';
  if (!values.projectType)           errors.projectType    = 'Please select a project type.';
  if (!values.inquiryDetails.trim()) errors.inquiryDetails = 'Please describe your project.';
  return errors;
}

export function useContactForm(): UseContactFormResult {
  const [values, setValues]           = useState<ContactFormValues>(initialValues);
  const [errors, setErrors]           = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess]     = useState(false);

  const handleChange = (field: keyof ContactFormValues, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(values);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setIsSubmitting(true);
    // Replace with real form submission logic (e.g., fetch to API endpoint)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setValues(initialValues);
    }, 1000);
  };

  return { values, errors, isSubmitting, isSuccess, handleChange, handleSubmit };
}
