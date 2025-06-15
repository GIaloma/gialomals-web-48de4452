# 🚀 Google Consent Mode v2 + Google Tag Manager Implementation Guide

## ✅ What's Been Implemented

### 1. **Google Consent Mode v2** (Advanced)
- **Full GDPR compliance** with consent-first approach
- **4 consent types implemented:**
  - `ad_storage` - For advertising cookies
  - `ad_user_data` - For user data in advertising
  - `ad_personalization` - For personalized ads
  - `analytics_storage` - For analytics cookies
  - `functionality_storage` - For functional cookies
  - `personalization_storage` - For personalization
  - `security_storage` - Always granted for fraud prevention

### 2. **Google Tag Manager Setup**
- **Container code** added to both `<head>` and `<body>` sections
- **Consent integration** with automatic updates
- **URL passthrough** enabled for cookieless measurement
- **Ads data redaction** for privacy protection

### 3. **Cookie Banner Integration**
- **Bilingual support** (English + Spanish)
- **3 consent options:** Accept All, Analytics Only, Essential Only
- **Granular controls** in configuration modal
- **Automatic consent updates** to Google systems

---

## 🔧 Required Configuration Steps

### Step 1: Replace Google Tag Manager Container ID

**IMPORTANT:** You need to replace `GTM-XXXXXXX` with your actual GTM container ID in `index.html`:

```html
<!-- Find these lines in index.html and replace GTM-XXXXXXX -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXXX');</script>

<!-- Also replace in noscript tag -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
```

**Replace `GTM-XXXXXXX` with your actual container ID (e.g., `GTM-ABCD123`)**

### Step 2: Google Tag Manager Configuration

#### A. Create Consent Mode Variables in GTM:
1. Go to **Variables** → **New** → **User-Defined Variables**
2. Create these **Data Layer Variables**:
   - `consent_ad_storage`
   - `consent_analytics_storage`
   - `consent_ad_user_data`
   - `consent_ad_personalization`

#### B. Configure Google Analytics 4 Tag:
1. **Tag Type:** Google Analytics: GA4 Configuration
2. **Measurement ID:** `G-G15VKZG5HH`
3. **Trigger:** Add consent check trigger
4. **Built-in Variables:** Enable all consent-related variables

#### C. Set up Conversion Linker (Optional):
- **Tag Type:** Conversion Linker
- **Enable:** ✅ "Enable cross-domain linking"
- **Trigger:** All Pages (with consent check)

### Step 3: Verify Implementation

#### Using Google Tag Assistant:
1. Install [Google Tag Assistant Chrome Extension](https://chrome.google.com/webstore/detail/tag-assistant-legacy-by/kejbdjndbnbjgmefkgdddjlbokphdefk)
2. Visit your website
3. Check that:
   - ✅ Consent Mode is working
   - ✅ GTM container is firing
   - ✅ GA4 loads only after consent

#### Using Browser Console:
```javascript
// Check if consent functions are available
console.log(window.gtagConsent);

// Check current consent state (English)
console.log(window.GialomaCookiesEn?.getConsent());

// Check current consent state (Spanish)
console.log(window.GialomaCookies?.getConsent());
```

---

## 🎯 Google Consent Mode Features

### **Default State (Before User Choice)**
```javascript
gtag('consent', 'default', {
  'ad_storage': 'denied',
  'ad_user_data': 'denied', 
  'ad_personalization': 'denied',
  'analytics_storage': 'denied',
  'functionality_storage': 'denied',
  'personalization_storage': 'denied',
  'security_storage': 'granted' // Always granted
});
```

### **Consent Update Functions**
- `window.gtagConsent.grantAll()` - Grant all consents
- `window.gtagConsent.grantAnalytics()` - Grant only analytics
- `window.gtagConsent.denyAll()` - Deny all optional consents
- `window.gtagConsent.update(obj)` - Custom consent object

### **Privacy Features Enabled**
- ✅ **URL Passthrough:** Maintains conversion tracking without cookies
- ✅ **Ads Data Redaction:** Removes sensitive data when ad consent denied
- ✅ **IP Anonymization:** All IP addresses anonymized
- ✅ **Secure Cookies:** SameSite=Secure flag enabled

---

## 🌍 Multilingual Support

### English Version (`/en` routes):
- Uses `CookieBanner.tsx`
- Stores consent in `gialoma_cookie_consent`
- Accessible via `window.GialomaCookiesEn`

### Spanish Version (default routes):
- Uses `CookieBanner-es.tsx`
- Stores consent in `gialoma_cookie_consent`
- Accessible via `window.GialomaCookies`

### Available Functions in Both Languages:
```javascript
// Get current consent
window.GialomaCookies.getConsent()

// Track events (only if analytics consent granted)
window.GialomaCookies.trackContactForm()
window.GialomaCookies.trackServiceInquiry('automation')
window.GialomaCookies.trackResourceDownload('whitepaper')

// Check consent status
window.GialomaCookies.hasAnalyticsConsent() // boolean
window.GialomaCookies.hasMarketingConsent() // boolean

// Open preferences modal
window.GialomaCookies.updatePreferences()
```

---

## 📊 Event Tracking Examples

### Automatic Events:
- `cookie_consent` - When user makes consent choice
- `page_view` - When GA4 loads (if analytics consent granted)

### Custom Events Available:
```javascript
// Contact form submission
window.GialomaCookies.trackContactForm();

// Service inquiry
window.GialomaCookies.trackServiceInquiry('calendar-sync');

// Resource download
window.GialomaCookies.trackResourceDownload('pricing-guide');

// Custom event
window.GialomaCookies.trackEvent('custom_event', {
  event_category: 'engagement',
  custom_parameter: 'value'
});
```

---

## 🔒 GDPR Compliance Features

### ✅ **Consent Management**
- Users can accept all, analytics only, or essential only
- Granular control in settings modal
- Consent stored locally with expiration

### ✅ **Data Minimization**
- No data collection before consent
- Only necessary data collected based on consent level
- Automatic data redaction when consent denied

### ✅ **User Rights**
- Easy consent withdrawal
- Clear information about data usage
- Links to privacy policy and cookie policy

### ✅ **Technical Safeguards**
- Secure cookie flags
- IP anonymization
- Do Not Track header respect
- Cross-origin privacy protection

---

## 🚨 Important Notes

1. **GTM Container ID:** Must be replaced with your actual ID
2. **Testing:** Test in incognito mode to verify consent flow
3. **GDPR Compliance:** Ensure your privacy policy matches implementation
4. **Performance:** Consent mode maintains good Core Web Vitals
5. **Analytics:** Google Analytics 4 required (Universal Analytics deprecated)

---

## 📋 Testing Checklist

- [ ] Replace `GTM-XXXXXXX` with actual container ID
- [ ] Verify GTM container loads
- [ ] Test consent banner appears on first visit
- [ ] Test all three consent options work
- [ ] Verify GA4 only loads with analytics consent
- [ ] Check console for any errors
- [ ] Test in both English and Spanish
- [ ] Verify event tracking works
- [ ] Test consent persistence across page loads
- [ ] Validate Google Tag Assistant shows green status

---

## 🆘 Troubleshooting

### GTM Not Loading:
- Check container ID is correct
- Verify no ad blockers interfering
- Check browser console for errors

### Consent Not Updating:
- Check `window.gtagConsent` exists
- Verify dataLayer is defined
- Check consent functions are called

### Analytics Not Loading:
- Ensure analytics consent is granted
- Check GA4 measurement ID is correct
- Verify no duplicate gtag scripts

### Cookie Banner Not Showing:
- Check for existing consent cookie
- Verify component is imported correctly
- Check z-index conflicts

---

For additional support, check the browser console logs which show detailed consent status updates and any errors.
