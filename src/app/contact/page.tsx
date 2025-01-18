import ContactForm from '@/components/contact/contact-form';
import { ContactFormSkeleton } from '@/components/contact/contact-form-skeltons';
import ContactInfo from '@/components/contact/contact-info';
import { Suspense } from 'react';

export default function ContactPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
        <ContactInfo />
          
          <Suspense fallback={<ContactFormSkeleton />}>
            <ContactForm />
          </Suspense>
        </div>
      </div>
    </div>
  );
}