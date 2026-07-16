/**
 * Contact + Newsletter form handlers (vanilla JS)
 */
const config = window.SITE_CONFIG || {};

function showEl(id) {
  document.getElementById(id)?.classList.remove('hidden');
}
function hideEl(id) {
  document.getElementById(id)?.classList.add('hidden');
}

// —— Contact form ——
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    hideEl('contact-success');
    hideEl('contact-error');

    const fd = new FormData(contactForm);
    const data = {
      full_name: String(fd.get('full_name') || '').trim(),
      email: String(fd.get('email') || '').trim(),
      company_name: String(fd.get('company_name') || '').trim(),
      phone_number: String(fd.get('phone_number') || '').trim(),
      service: String(fd.get('service') || '').trim(),
      problems: String(fd.get('problems') || '').trim(),
      found_us: String(fd.get('found_us') || '').trim(),
      additional_info: String(fd.get('additional_info') || '').trim(),
    };

    const errors = {};
    if (!data.full_name) errors.full_name = true;
    if (!data.email || !/\S+@\S+\.\S+/.test(data.email)) errors.email = true;
    if (!data.company_name) errors.company_name = true;
    if (!data.phone_number) errors.phone_number = true;
    if (!data.service) errors.service = true;
    if (!data.problems) errors.problems = true;
    if (!data.found_us) errors.found_us = true;

    contactForm.querySelectorAll('[data-error]').forEach((el) => el.classList.add('hidden'));
    Object.keys(errors).forEach((key) => {
      document.querySelector(`[data-error="${key}"]`)?.classList.remove('hidden');
    });
    if (Object.keys(errors).length) return;

    const btn = contactForm.querySelector('[type="submit"]');
    const original = btn?.textContent;
    if (btn) {
      btn.disabled = true;
      btn.textContent = (typeof window.t === 'function' && window.t('contact.form.submitting')) || 'Wird gesendet...';
    }

    try {
      const res = await fetch(config.contactWebhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          timestamp: new Date().toISOString(),
          source: 'contact_form',
        }),
      });
      if (!res.ok) throw new Error(`Status ${res.status}`);
      contactForm.reset();
      showEl('contact-success');
      hideEl('contact-form-fields');
    } catch (err) {
      console.error(err);
      showEl('contact-error');
    } finally {
      if (btn) {
        btn.disabled = false;
        btn.textContent = original;
      }
    }
  });
}

// —— Newsletter form ——
const newsletterForm = document.getElementById('newsletter-form');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    hideEl('newsletter-success');
    hideEl('newsletter-error');
    hideEl('newsletter-exists');

    const email = String(new FormData(newsletterForm).get('email') || '')
      .toLowerCase()
      .trim();
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      showEl('newsletter-error');
      return;
    }

    const btn = newsletterForm.querySelector('[type="submit"]');
    const original = btn?.textContent;
    if (btn) {
      btn.disabled = true;
      btn.textContent = (typeof window.t === 'function' && window.t('contact.form.submitting')) || 'Wird gesendet...';
    }

    try {
      if (config.supabaseUrl && config.supabaseAnonKey) {
        const { createClient } = await import('https://esm.sh/@supabase/supabase-js@2.39.7');
        const supabase = createClient(config.supabaseUrl, config.supabaseAnonKey);
        const { error } = await supabase.from('newsletter_subscriptions').insert({ email });
        if (error) {
          if (error.code === '23505') {
            showEl('newsletter-exists');
            return;
          }
          throw error;
        }
      }

      try {
        await fetch(config.newsletterWebhook, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email,
            timestamp: new Date().toISOString(),
            source: 'newsletter_signup',
          }),
        });
      } catch (webhookErr) {
        console.error('Webhook error:', webhookErr);
      }

      newsletterForm.reset();
      showEl('newsletter-success');
    } catch (err) {
      console.error(err);
      showEl('newsletter-error');
    } finally {
      if (btn) {
        btn.disabled = false;
        btn.textContent = original;
      }
    }
  });
}
