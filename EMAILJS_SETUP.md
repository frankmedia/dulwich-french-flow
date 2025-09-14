# EmailJS Setup Guide

## ✅ What's Already Done
- ✅ EmailJS package installed
- ✅ API keys added to `.env` file
- ✅ Contact form updated with EmailJS integration
- ✅ Form validation and state management added
- ✅ Success/error messages implemented

## 🔧 What You Need to Do

### 1. Go to EmailJS Dashboard
Visit: https://dashboard.emailjs.com/

### 2. Create a Service
1. Click "Add New Service"
2. Choose "Gmail" (or your preferred email provider)
3. Connect your Gmail account
4. **Copy the Service ID** (you'll need this)

### 3. Create an Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

**Subject:** New French Flow Contact Form Submission

**Content:**
```
Hello Frank,

You have received a new contact form submission from your French Flow website:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

French Level: {{french_level}}

Goals:
{{goals}}

Availability:
{{availability}}

---
This message was sent from the French Flow website contact form.
```

**Important:** Make sure to set the "To Email" field in your EmailJS template to: `{{to_email}}`
This will automatically use the email address from your environment variable (frank@orchidbox.com).

4. **Copy the Template ID** (you'll need this)

### 4. Update the Contact Form
In `/src/pages/Contact.tsx`, replace these two lines:

```typescript
// Replace these lines (around line 82-84):
await emailjs.send(
  'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
  'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
  templateParams
);
```

With:
```typescript
await emailjs.send(
  'service_xxxxxxxxx', // Your actual service ID
  'template_xxxxxxxxx', // Your actual template ID
  templateParams
);
```

### 5. Test the Form
1. Go to your contact page
2. Fill out the form
3. Submit it
4. Check your email inbox!

## 🎉 That's It!
Your contact form will now send emails directly to your inbox for free (up to 200 emails/month).

## 📧 Email Format
You'll receive emails with all the form data formatted nicely, including:
- Name and contact details
- French level assessment
- Learning goals
- Availability preferences

## 🔒 Security
- Your private key is safely stored in `.env`
- Only the public key is exposed to the frontend
- EmailJS handles all the email delivery securely
