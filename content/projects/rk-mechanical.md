---
title: RK Mechanical - Enterprise Inventory Management System
description: Built a comprehensive multi-million dollar inventory tracking system with RFID integration, centralizing operations across multiple locations
technologies:
  - React
  - JavaScript
  - Django
  - Python
  - Docker
  - Microsoft Graph
  - Algolia
  - RFID
  - PostgreSQL
featured: true
status: completed
startDate: 2021-01-01
endDate: 2022-12-01
liveUrl: ''
githubUrl: ''
imageUrl: /images/projects/rk-mechanical.jpg
---

# RK Mechanical - Enterprise Inventory Management System

## The Challenge

RK Mechanical, a large-scale mechanical contracting company, was managing millions of dollars in inventory across multiple locations using disconnected spreadsheets and manual processes. This led to inventory discrepancies, inefficient tracking, and significant time waste.

### Key Problems

- **Inventory Visibility**: No real-time view of inventory across locations
- **Manual Tracking**: Spreadsheet-based system prone to errors and delays
- **Asset Location**: Difficulty tracking equipment movement between job sites
- **Search Inefficiency**: Finding specific items took hours instead of seconds
- **Integration Gaps**: Disconnected systems for inventory, email, and search

## The Solution

I led the development of a comprehensive enterprise inventory management system that centralized operations, integrated RFID tracking, and provided real-time visibility across all locations. The solution combined modern web technologies with enterprise integrations to create a seamless user experience.

### Technical Architecture

**Single Page Application (SPA)**

- Built responsive frontend using **React** and **JavaScript**
- Implemented component-based architecture for reusability
- Created intuitive UI for inventory management workflows
- Optimized for both desktop and mobile devices

**Backend Services**

- Developed RESTful APIs using **Django** and **Python**
- Implemented microservices architecture for scalability
- Created robust data validation and business logic layer
- Built comprehensive authentication and authorization

**RFID Integration**

- Integrated RFID readers for automated inventory tracking
- Implemented real-time asset location updates
- Created check-in/check-out workflows
- Built reporting dashboard for inventory movements

**Enterprise Search**

- Integrated **Algolia** for lightning-fast search
- Implemented faceted search with filters
- Created autocomplete and typo-tolerance
- Indexed millions of inventory items

**Email Integration**

- Integrated **Microsoft Graph API** for email functionality
- Automated inventory notifications and alerts
- Created email-based approval workflows
- Built reporting and analytics distribution

**Containerization**

- Deployed services using **Docker** containers
- Implemented container orchestration
- Created consistent development and production environments
- Simplified deployment and scaling

## Technologies Used

- **Frontend**: React, JavaScript, HTML5, CSS3
- **Backend**: Django, Python, RESTful APIs
- **Database**: PostgreSQL
- **Search**: Algolia
- **Integration**: Microsoft Graph API, RFID Systems
- **DevOps**: Docker, CI/CD pipelines
- **Architecture**: SPA, Microservices

## Key Outcomes

### Centralized Multi-Location Inventory

Successfully centralized inventory management across **5 locations**, providing real-time visibility into millions of dollars of assets.

### Dramatic Time Savings

- **90% reduction** in time spent searching for inventory
- **75% reduction** in manual data entry
- **50% faster** inventory audits

### Improved Accuracy

- Reduced inventory discrepancies by **85%**
- Real-time RFID tracking eliminated manual errors
- Automated alerts prevented stockouts

### Enhanced Productivity

- Employees spend less time on inventory tasks
- Faster job site equipment deployment
- Reduced equipment rental costs through better utilization

### Scalable Architecture

- Microservices enable independent scaling
- Docker containers ensure consistent deployments
- System handles 10,000+ daily transactions

## Technical Highlights

### Microservices Architecture

Decomposed the system into independent services:

- Inventory service for asset management
- Search service powered by Algolia
- Notification service using Microsoft Graph
- RFID integration service
- Reporting and analytics service

### Real-Time RFID Tracking

- Automated check-in/check-out with RFID readers
- Real-time location updates
- Movement history and audit trails
- Integration with existing RFID infrastructure

### Advanced Search Capabilities

- Sub-second search across millions of items
- Faceted filtering (location, category, status, etc.)
- Autocomplete suggestions
- Typo-tolerant search
- Custom ranking algorithms

### Microsoft Graph Integration

- Automated email notifications for low stock
- Approval workflows via email
- Calendar integration for scheduled audits
- User authentication with Azure AD

## Impact

The inventory management system transformed RK Mechanical's operations, turning a chaotic manual process into a streamlined, automated system. The company now has complete visibility into their multi-million dollar inventory, enabling better decision-making and significant cost savings.

### Business Value

- **Cost Savings**: $500K+ annual savings from reduced equipment rental and better utilization
- **Time Savings**: 1,000+ hours saved monthly across all locations
- **Accuracy**: 85% reduction in inventory discrepancies
- **Efficiency**: 90% faster inventory searches

## Lessons Learned

- **User-Centered Design**: Involving end-users early led to higher adoption rates
- **Integration Matters**: Connecting existing systems (RFID, email) was crucial for success
- **Search is Critical**: Fast, accurate search dramatically improves user experience
- **Microservices Win**: Independent services allowed for easier maintenance and scaling
- **Docker Simplifies**: Containerization made deployment and scaling significantly easier

This project demonstrated the power of combining modern web technologies with enterprise integrations to solve real business problems. The system continues to serve RK Mechanical's growing inventory needs while providing a foundation for future enhancements.
