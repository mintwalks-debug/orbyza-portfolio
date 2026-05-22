import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const formRef = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_dummy';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_dummy';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'public_key_dummy';

    if (serviceId === 'your_service_id_here') {
      console.log('Dummy email submission:', {
        name: formRef.current.user_name.value,
        email: formRef.current.user_email.value,
        message: formRef.current.message.value,
      });
      setTimeout(() => setStatus('success'), 1000);
      return;
    }

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(() => {
        setStatus('success');
        formRef.current.reset();
      }, (error) => {
        console.error(error);
        setStatus('error');
      });
  };

  return (
    <section id="contact" style={{ width: '100vw', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="glass-panel" style={{ width: '90%', maxWidth: '600px', padding: '3rem', zIndex: 10 }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center' }}>Got an idea? Let's make it real.</h2>
        
        <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '2rem' }}>
          <a href="tel:+919352047100" style={{ padding: '10px 20px', borderRadius: 'var(--border-radius-btn)', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', gap: '10px' }}>
            📞 +91 93520 47100
          </a>
          <a href="tel:+917297016879" style={{ padding: '10px 20px', borderRadius: 'var(--border-radius-btn)', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', gap: '10px' }}>
            📞 +91 72970 16879
          </a>
        </div>

        <form ref={formRef} onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input 
            type="text" 
            name="user_name" 
            placeholder="Name" 
            required 
            style={{ padding: '15px', borderRadius: '8px', border: 'none', background: 'rgba(255,255,255,0.1)', color: '#fff', outline: 'none' }}
          />
          <input 
            type="email" 
            name="user_email" 
            placeholder="Email" 
            required 
            style={{ padding: '15px', borderRadius: '8px', border: 'none', background: 'rgba(255,255,255,0.1)', color: '#fff', outline: 'none' }}
          />
          <textarea 
            name="message" 
            placeholder="Tell us about your project" 
            rows="5"
            required
            style={{ padding: '15px', borderRadius: '8px', border: 'none', background: 'rgba(255,255,255,0.1)', color: '#fff', outline: 'none', resize: 'vertical' }}
          ></textarea>
          
          <button 
            type="submit" 
            disabled={status === 'sending'}
            style={{
              padding: '15px', 
              borderRadius: '8px', 
              border: 'none', 
              background: 'linear-gradient(45deg, var(--color-primary), var(--color-secondary))', 
              color: '#fff', 
              fontWeight: 'bold',
              marginTop: '10px',
              opacity: status === 'sending' ? 0.7 : 1
            }}
          >
            {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
