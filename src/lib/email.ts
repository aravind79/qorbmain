import emailjs from '@emailjs/browser';

// Replace these with your actual EmailJS credentials
// You can get these from https://dashboard.emailjs.com/
export const EMAILJS_CONFIG = {
    SERVICE_ID: 'service_vti2wzn',
    TEMPLATE_ID: 'template_do4hfoj',
    PUBLIC_KEY: 'a2ehpyReZ49n8JtMw',
};

export const sendEmail = async (formElement: HTMLFormElement) => {
    try {
        const result = await emailjs.sendForm(
            EMAILJS_CONFIG.SERVICE_ID,
            EMAILJS_CONFIG.TEMPLATE_ID,
            formElement,
            EMAILJS_CONFIG.PUBLIC_KEY
        );
        return { success: true, text: result.text };
    } catch (error: any) {
        console.error('EmailJS Error:', error);
        return { success: false, error: error.text || 'Failed to send email' };
    }
};
