# Custom Contact Form Setup

## Overview
This implementation replaces the Fillout forms with a custom contact form that connects directly to your Airtable database. The form maintains the same visual style and dimensions as the original Fillout form.

## Features
- ✅ Custom form matching your website's design
- ✅ Direct Airtable integration
- ✅ Bilingual support (Spanish and English)
- ✅ Form validation and error handling
- ✅ Success/error feedback
- ✅ Google Analytics event tracking
- ✅ GDPR-compliant cookie consent
- ✅ Responsive design

## Environment Setup

To make the form work properly, you need to add your Airtable API key to your environment variables.

### Required Environment Variable
Add this to your `.env.local` file (or your deployment environment):

```bash
AIRTABLE_API_KEY=your_airtable_api_key_here
```

### Getting Your Airtable API Key
1. Go to [Airtable Account Settings](https://airtable.com/account)
2. Go to the "Developer" tab
3. Generate a new personal access token
4. Copy the token and add it to your environment variables

## Implementation Details

### Files Created/Modified:
1. **src/components/ContactForm.tsx** - New custom form component
2. **pages/api/contact-form.ts** - New API endpoint for form submissions
3. **src/components/Contact-es.tsx** - Updated to use custom form
4. **src/components/Contact.tsx** - Updated to use custom form

### Airtable Integration:
- **Base ID**: `appm1vsnLsbKwoEHC`
- **Table ID**: `tblETJBTKXn3Y5yy1`
- **Table Name**: "Formulario Contacto pagina web"

### Form Fields Mapped:
- Full Name → `Full Name` (singleLineText)
- Email → `Email` (email)
- Subject → `Subject` (singleLineText)
- Message → `Message` (multilineText)
- Submission Date → `Submission Date` (dateTime) - Auto-filled
- Language → `Language` (singleSelect) - Auto-filled
- Status → `Status` (singleSelect) - Auto-filled as "New"
- Source Page → `Source Page` (singleLineText) - Auto-filled
- Accept Cookies → `Accept Cookies` (checkbox)
- ID → `ID` (singleLineText) - Auto-generated unique ID

## Testing
1. Make sure your environment variable is set
2. Deploy the changes
3. Test both Spanish and English forms
4. Verify submissions appear in your Airtable base
5. Check that error handling works (try submitting invalid data)

## Features Included

### Form Validation
- Required field validation
- Email format validation
- Cookie consent requirement
- Real-time feedback

### User Experience
- Loading states during submission
- Success confirmation messages
- Clear error messages
- Smooth animations and transitions

### Analytics Integration
- Google Analytics event tracking on successful submissions
- Event data includes language preference

### Security
- Server-side validation
- Input sanitization
- Error handling without exposing sensitive information

## Styling
The form maintains the exact same visual styling as your website:
- Matches existing color scheme (gialoma-gold, gialoma-darkgray, etc.)
- Same hover effects and transitions
- Responsive design
- Consistent with your current design system

## Troubleshooting

### Form Not Submitting
1. Check that `AIRTABLE_API_KEY` is properly set in your environment
2. Verify the API endpoint is accessible at `/api/contact-form`
3. Check browser console for any JavaScript errors

### Submissions Not Appearing in Airtable
1. Verify your Airtable API key has write permissions
2. Check that the base ID and table ID are correct
3. Look at server logs for any API errors

### Styling Issues
1. Ensure all Tailwind classes are available
2. Check that the ContactForm component is properly imported
3. Verify the container dimensions match the original Fillout form

## Notes
- The form automatically detects the language based on the `language` prop
- All form submissions are marked as "New" status in Airtable
- The form includes links to your privacy policy and terms of service
- Cookie consent is required for form submission