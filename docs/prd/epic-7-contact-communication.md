# Epic 7: Contact & Communication

**Expanded Goal:** Enable visitors to contact Carson through multiple methods including direct links (email, LinkedIn, GitHub, phone) and a functional contact form with email integration via Resend API. This epic converts portfolio visitors into conversations.

## Story 7.1: Build Contact Section Component

As a visitor,
I want to see clear contact options,
so that I can easily reach out to Carson about opportunities.

**Acceptance Criteria:**

1. Contact section component created with Section and Container layout
2. Section heading: "Get In Touch" or similar
3. Two-column layout: contact methods (left) + contact form (right)
4. Single column on mobile with contact methods above form
5. Brief introductory text encouraging visitors to reach out
6. Semantic HTML with proper heading hierarchy
7. Section has distinct visual treatment (background color or border)

## Story 7.2: Add Direct Contact Links

As a visitor,
I want multiple ways to contact Carson,
so that I can choose my preferred communication method.

**Acceptance Criteria:**

1. Email link displayed: carson.workflow@gmail.com (mailto: link)
2. LinkedIn profile link with icon (opens in new tab)
3. GitHub profile link with icon (opens in new tab)
4. Phone number displayed: 636-399-5633 (tel: link for mobile)
5. Each contact method has icon from Lucide React
6. Links styled consistently with hover effects
7. All external links have `rel="noopener noreferrer"`

## Story 7.3: Build Contact Form Component

As a visitor,
I want to fill out a contact form,
so that I can send Carson a message directly from the portfolio.

**Acceptance Criteria:**

1. Contact form component created with React Hook Form
2. Form fields: Name (required), Email (required), Message (required, textarea)
3. Field labels and placeholders provide clear guidance
4. Form uses shadcn/ui Input, Label, and Textarea components
5. Submit button with loading state during submission
6. Form is fully accessible (labels, ARIA attributes, keyboard navigation)
7. Responsive layout with proper spacing

## Story 7.4: Implement Form Validation

As a developer,
I want robust form validation,
so that only valid submissions are sent and users get clear feedback.

**Acceptance Criteria:**

1. Zod schema created for form validation (name, email, message)
2. Email field validates proper email format
3. Message field has minimum length requirement (e.g., 10 characters)
4. Real-time validation provides immediate feedback
5. Error messages display inline below each field
6. Submit button disabled until form is valid
7. Form cannot be submitted with invalid data

## Story 7.5: Integrate Resend API for Email Delivery

As a developer,
I want contact form submissions to send emails via Resend API,
so that Carson receives messages from visitors.

**Acceptance Criteria:**

1. Resend API key added to environment variables
2. Next.js API route created: `/api/contact`
3. API route validates request body using Zod schema
4. Email sent to carson.workflow@gmail.com using Resend SDK
5. Email includes: sender name, sender email, message content
6. Email has professional formatting and subject line
7. API route returns appropriate status codes (200, 400, 500)

## Story 7.6: Implement Rate Limiting for Contact Form

As a developer,
I want rate limiting on the contact form API,
so that the form cannot be abused or spammed.

**Acceptance Criteria:**

1. Rate limiting implemented using Upstash Redis or similar
2. Limit: 3 submissions per IP address per hour
3. Rate limit exceeded returns 429 status with clear message
4. Client-side displays rate limit error to user
5. Rate limit resets after time window expires
6. Implementation does not impact legitimate users
7. Rate limiting configuration is environment-aware (relaxed in development)

## Story 7.7: Add Form Success and Error States

As a visitor,
I want clear feedback after submitting the contact form,
so that I know if my message was sent successfully.

**Acceptance Criteria:**

1. Success state displays confirmation message after successful submission
2. Success message thanks user and sets expectation for response time
3. Form clears after successful submission
4. Error state displays helpful message if submission fails
5. Error message suggests alternative contact methods (email link)
6. Loading state shows spinner/indicator during submission
7. All states are accessible to screen readers

---
