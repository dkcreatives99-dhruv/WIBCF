# World Indian Business & Culture Foundation - PRD

## Original Problem Statement
Build a professional, international-standard 12-page website for WORLD INDIAN BUSINESS & CULTURE FOUNDATION - a global non-profit organization focused on:
- Global Indian business collaboration
- Cultural diplomacy
- Research & policy dialogue
- Sustainable development goals (SDGs)
- Leadership networking
- Cross-border trade & investment cooperation

## User Personas
1. **Global Indian Diaspora Leaders** - Business executives and entrepreneurs seeking networking opportunities
2. **Cultural Ambassadors** - Individuals promoting Indian heritage internationally
3. **Policy Makers** - Government and institutional officials interested in trade dialogues
4. **Young Professionals** - Emerging leaders looking for mentorship and development
5. **Potential Partners/Donors** - Organizations interested in collaboration

## Core Requirements (Static)
- 12 Pages: Home, About, Leadership, Programs, Research, Media, Contact, Membership, Terms, Privacy, Disclaimer, Security, Cookies
- Premium, Institutional, Clean NGO-style design
- White + Navy Blue (#0A192F) + Gold (#C5A059) theme
- Fully responsive (Desktop + Tablet + Mobile)
- Simple membership inquiry form (no auth)
- Contact form with database storage
- SEO optimized structure

## What's Been Implemented ✅ (January 2026)
### Backend
- FastAPI server with MongoDB
- Contact form API (`POST /api/contact`, `GET /api/contact`)
- Membership inquiry API (`POST /api/membership-inquiry`, `GET /api/membership-inquiry`)
- Newsletter subscription API (`POST /api/newsletter/subscribe`)
- Health check endpoint

### Frontend (12 Pages)
1. **HomePage** - Hero with international flags, About preview, Mission statement, Focus Areas (Bento grid), Stats, Global Presence, CTAs
2. **AboutPage** - Vision, Mission, Core Values (7 values), Why We Exist
3. **LeadershipPage** - Founders, Advisory Board, Country Coordinators, Global Ambassadors
4. **ProgramsPage** - Coming Soon banner, 5 future program placeholders
5. **ResearchPage** - Reports & Papers, SDG Alignment (8, 9, 17), Policy Papers
6. **MediaPage** - News, Press Releases, Media Mentions
7. **ContactPage** - Contact form, Contact info, Map placeholder
8. **MembershipPage** - Benefits, Inquiry form
9-12. **Legal Pages** - Terms, Privacy, Disclaimer, Security, Cookies

### Design Implementation
- Typography: Playfair Display (headings), Inter (body), Barlow Condensed (accents)
- Glassmorphic sticky header
- Massive footer with social links
- Professional animations and hover effects
- data-testid attributes for testing

## Prioritized Backlog
### P0 (Critical) - COMPLETED ✅
- All 12 pages implemented
- Backend APIs functional
- Forms with database storage

### P1 (High Priority) - Future
- SEO meta tags optimization
- Cookie consent banner integration
- Image optimization/lazy loading
- Add actual content/photos from client

### P2 (Medium Priority) - Future
- Newsletter signup in footer
- Admin dashboard for viewing inquiries
- Multi-language support
- Google Analytics integration

### P3 (Nice to Have) - Future
- Event calendar integration
- Blog/News CMS
- Member portal
- Online donation system

## Next Tasks
1. Add actual content (replace placeholders with real leadership photos/bios)
2. Implement cookie consent banner
3. Add SEO meta tags to all pages
4. Set up Google Analytics
5. Create admin dashboard for managing inquiries
