# World Indian Business & Culture Foundation (WIBCF) - PRD

## Original Problem Statement
Build a professional, international-standard 12-page website for WORLD INDIAN BUSINESS & CULTURE FOUNDATION - a Pan-Asia focused non-profit organization.

## Updates Implemented (January 2026)

### Phase 1: Initial MVP
- 12-page website implementation
- Contact and Membership forms with database storage
- Professional NGO design

### Phase 2: Asia Focus & Branding Update
- Updated messaging throughout to focus on Asian countries
- Implemented official WIBCF logo
- Updated domain references to wibcf.org
- Updated email to info@wibcf.org
- Leadership page: Founder (Mr. Ravichandren Raman) with "Coming Soon" for Advisory Board, Country Coordinators, and Global Ambassadors
- Media page converted to "Coming Soon"
- Scroll-to-top fix implemented
- Footer description updated to Pan-Asia focus

## User Personas
1. **Pan-Asian Business Leaders** - Indian-origin entrepreneurs across Asian countries
2. **Cultural Ambassadors** - Promoting Indian heritage in Asia
3. **Policy Makers** - Government officials in Malaysia and Asian economies
4. **Young Professionals** - Emerging leaders in the region
5. **Potential Partners** - Asian organizations interested in collaboration

## Core Requirements (Static)
- 12 Pages: Home, About, Leadership, Programs, Research, Media, Contact, Membership + Legal pages
- White + Navy Blue (#0A192F) + Gold (#C5A059) theme
- Pan-Asia focused messaging
- Official WIBCF logo integrated
- Malaysia headquarters with Pan-Asia operations

## What's Been Implemented ✅

### Backend
- FastAPI with MongoDB
- Contact form API (POST/GET /api/contact)
- Membership inquiry API (POST/GET /api/membership-inquiry)
- Newsletter subscription API

### Frontend
1. **HomePage** - Asia-focused hero, mission statement, focus areas
2. **AboutPage** - Pan-Asian vision and mission
3. **LeadershipPage** - Founder (Mr. Ravichandren Raman) with full bio; Advisory Board, Coordinators, Ambassadors marked "Coming Soon"
4. **ProgramsPage** - 5 program placeholders (unchanged)
5. **ResearchPage** - Asian SDG alignment focus
6. **MediaPage** - Converted to "Coming Soon" layout
7. **ContactPage** - info@wibcf.org, Malaysia headquarters
8. **MembershipPage** - Asian country options
9-12. **Legal Pages** - Updated with wibcf.org references

### Design Updates
- Official WIBCF logo in header and footer
- Scroll-to-top on navigation
- Pan-Asia focused footer description
- Updated country lists to Asian countries

## Known Issues
- "Made with Emergent" badge appears in preview environment (will not appear on production domain wibcf.org)
- Minor scroll offset (77px) on navigation clicks (due to fixed header - acceptable)

## Prioritized Backlog
### P0 - COMPLETED ✅
- All Phase 2 updates implemented

### P1 (High Priority) - Future
- Add actual founder photo
- Cookie consent banner
- SEO meta tags optimization

### P2 (Medium Priority) - Future
- Newsletter signup in footer
- Admin dashboard for inquiries
- Google Analytics

## Next Tasks
1. Upload actual founder photo to replace placeholder
2. Deploy to production domain wibcf.org
3. Implement cookie consent banner
4. Add SEO meta tags
