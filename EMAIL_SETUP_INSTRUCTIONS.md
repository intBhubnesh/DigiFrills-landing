# Email Setup Instructions for DigiFrills Contact Form

This document provides instructions for setting up the email functionality for the DigiFrills contact form using EmailJS.

## Overview

The contact form in the QuoteSection component is configured to send emails to digifrills@gmail.com using EmailJS. To make this work, you need to:

1. Create an EmailJS account
2. Set up an email service
3. Create an email template
4. Update the code with your EmailJS credentials

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (allows up to 200 emails per month)
3. Verify your email address

## Step 2: Set Up an Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the instructions to connect your email account
5. Name your service "service_digifrills" (or update the code to match your service ID)

## Step 3: Create an Email Template

1. In your EmailJS dashboard, go to "Email Templates"
2. Click "Create New Template"
3. Name your template "template_digifrills" (or update the code to match your template ID)
4. Design your email template with the following variables:
   - `{{to_email}}` - The recipient email (digifrills@gmail.com)
   - `{{from_name}}` - The name of the person submitting the form
   - `{{from_email}}` - The email of the person submitting the form
   - `{{phone}}` - The phone number provided
   - `{{subject}}` - The subject of the inquiry
   - `{{budget}}` - The budget provided
   - `{{message}}` - The message content

Here's a sample template:

```html
<!DOCTYPE html>
<html>
<head>
    <title>New Quote Request from DigiFrills Website</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }
        h1 {
            color: #0260EB;
        }
        .field {
            margin-bottom: 15px;
        }
        .label {
            font-weight: bold;
        }
        .message {
            background-color: #f9f9f9;
            padding: 15px;
            border-radius: 5px;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>New Quote Request</h1>
        <p>You have received a new quote request from the DigiFrills website.</p>
        
        <div class="field">
            <span class="label">Name:</span> {{from_name}}
        </div>
        
        <div class="field">
            <span class="label">Email:</span> {{from_email}}
        </div>
        
        <div class="field">
            <span class="label">Phone:</span> {{phone}}
        </div>
        
        <div class="field">
            <span class="label">Subject:</span> {{subject}}
        </div>
        
        <div class="field">
            <span class="label">Budget:</span> {{budget}}
        </div>
        
        <div class="message">
            <span class="label">Message:</span>
            <p>{{message}}</p>
        </div>
    </div>
</body>
</html>
```

5. Save your template

## Step 4: Update the Code with Your EmailJS Credentials

1. In your EmailJS dashboard, go to "Account" > "API Keys"
2. Copy your Public Key
3. Open the `src/sections/QuoteSection.tsx` file
4. Update the following lines with your actual credentials:

```javascript
const serviceId = 'service_digifrills'; // Your EmailJS service ID
const templateId = 'template_digifrills'; // Your EmailJS template ID
const publicKey = 'your_public_key'; // Replace with your actual public key
```

## Testing the Form

After completing the setup:

1. Run your application locally
2. Fill out the contact form
3. Submit the form
4. Check the email account connected to your EmailJS service to verify that you received the email

## Troubleshooting

If emails are not being sent:

1. Check the browser console for any errors
2. Verify that your EmailJS credentials are correct
3. Make sure your email service is properly connected
4. Check your EmailJS dashboard for any failed email attempts
5. Ensure your email template is properly configured

## Additional Resources

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS React Integration](https://www.emailjs.com/docs/examples/reactjs/)
