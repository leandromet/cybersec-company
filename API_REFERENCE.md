# API Reference - Okanagan GeoTechSolutions

## Base URL
- Development: `http://localhost:3001`
- Production: `https://api.okanagantechgeo.ca`

## Authentication

All protected endpoints require a Bearer token in the Authorization header:
```
Authorization: Bearer <your_jwt_token>
```

### Authentication Endpoints

#### POST /auth/login
Login with email and password.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "securepassword"
}
```

**Response:**
```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "clp123456789",
    "email": "user@example.com",
    "name": "John Doe",
    "role": "CLIENT"
  }
}
```

#### POST /auth/register
Register a new user account.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "securepassword",
  "name": "John Doe",
  "company": "ABC Corp",
  "phone": "+1-250-555-0123"
}
```

#### GET /auth/profile
Get current user profile (requires authentication).

**Response:**
```json
{
  "id": "clp123456789",
  "email": "user@example.com",
  "name": "John Doe",
  "role": "CLIENT",
  "company": "ABC Corp",
  "phone": "+1-250-555-0123",
  "createdAt": "2024-01-15T10:30:00Z"
}
```

## Contact Management

#### POST /contacts
Submit a contact form inquiry.

**Request Body:**
```json
{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "company": "XYZ Ltd",
  "phone": "+1-250-555-0456",
  "subject": "Security Assessment Inquiry",
  "message": "We need a cybersecurity assessment for our business."
}
```

**Response:**
```json
{
  "id": "clp987654321",
  "status": "NEW",
  "createdAt": "2024-01-15T14:20:00Z",
  "message": "Contact form submitted successfully"
}
```

#### GET /contacts
List all contacts (admin only).

**Query Parameters:**
- `page` (number): Page number (default: 1)
- `limit` (number): Items per page (default: 10)
- `status` (string): Filter by status (NEW, IN_PROGRESS, RESOLVED, CLOSED)

**Response:**
```json
{
  "data": [
    {
      "id": "clp987654321",
      "name": "Jane Smith",
      "email": "jane@example.com",
      "company": "XYZ Ltd",
      "subject": "Security Assessment Inquiry",
      "status": "NEW",
      "createdAt": "2024-01-15T14:20:00Z"
    }
  ],
  "meta": {
    "total": 25,
    "page": 1,
    "limit": 10,
    "totalPages": 3
  }
}
```

## Services

#### GET /services
List all available services.

**Response:**
```json
{
  "data": [
    {
      "id": "clp111111111",
      "name": "Security Assessment",
      "description": "Comprehensive cybersecurity evaluation",
      "category": "ASSESSMENT",
      "price": "1500.00",
      "duration": "1-2 weeks",
      "features": [
        "Network vulnerability scan",
        "Policy review",
        "Risk assessment report"
      ],
      "isActive": true
    }
  ]
}
```

#### GET /services/:id
Get detailed information about a specific service.

**Response:**
```json
{
  "id": "clp111111111",
  "name": "Security Assessment",
  "description": "Comprehensive cybersecurity evaluation for small and medium businesses.",
  "category": "ASSESSMENT",
  "price": "1500.00",
  "duration": "1-2 weeks",
  "features": [
    "Network vulnerability scanning",
    "Security policy review",
    "Risk assessment report",
    "Remediation recommendations"
  ],
  "isActive": true,
  "createdAt": "2024-01-01T00:00:00Z"
}
```

## Security Assessments

#### POST /assessments
Request a security assessment.

**Request Body:**
```json
{
  "companyName": "ABC Corporation",
  "industry": "Professional Services",
  "employeeCount": 25,
  "currentSecurity": {
    "hasFirewall": true,
    "hasAntivirus": true,
    "hasBackups": false,
    "hasTraining": false
  },
  "serviceId": "clp111111111",
  "scheduledDate": "2024-02-01T09:00:00Z"
}
```

**Response:**
```json
{
  "id": "clp222222222",
  "status": "PENDING",
  "riskLevel": "MEDIUM",
  "createdAt": "2024-01-15T16:45:00Z",
  "message": "Assessment request submitted successfully"
}
```

#### GET /assessments
List security assessments (requires authentication).

**Response:**
```json
{
  "data": [
    {
      "id": "clp222222222",
      "companyName": "ABC Corporation",
      "industry": "Professional Services",
      "riskLevel": "MEDIUM",
      "status": "IN_PROGRESS",
      "scheduledDate": "2024-02-01T09:00:00Z",
      "service": {
        "name": "Security Assessment",
        "category": "ASSESSMENT"
      }
    }
  ]
}
```

## Blog

#### GET /blog
List published blog posts.

**Query Parameters:**
- `page` (number): Page number
- `limit` (number): Items per page
- `category` (string): Filter by category
- `tag` (string): Filter by tag

**Response:**
```json
{
  "data": [
    {
      "id": "clp333333333",
      "title": "5 Essential Cybersecurity Tips for Small Businesses",
      "slug": "5-essential-cybersecurity-tips-small-businesses",
      "excerpt": "Learn the fundamental security practices every small business should implement.",
      "category": "SECURITY_TIPS",
      "tags": ["small-business", "security", "tips"],
      "publishedAt": "2024-01-10T12:00:00Z",
      "coverImage": "/images/blog/cybersecurity-tips.jpg"
    }
  ],
  "meta": {
    "total": 15,
    "page": 1,
    "limit": 10
  }
}
```

#### GET /blog/:slug
Get a specific blog post by slug.

**Response:**
```json
{
  "id": "clp333333333",
  "title": "5 Essential Cybersecurity Tips for Small Businesses",
  "slug": "5-essential-cybersecurity-tips-small-businesses",
  "content": "Full blog post content in markdown format...",
  "excerpt": "Learn the fundamental security practices...",
  "category": "SECURITY_TIPS",
  "tags": ["small-business", "security", "tips"],
  "coverImage": "/images/blog/cybersecurity-tips.jpg",
  "publishedAt": "2024-01-10T12:00:00Z",
  "createdAt": "2024-01-08T14:30:00Z",
  "updatedAt": "2024-01-09T10:15:00Z"
}
```

## Testimonials

#### GET /testimonials
List active testimonials.

**Response:**
```json
{
  "data": [
    {
      "id": "clp444444444",
      "name": "Sarah Johnson",
      "company": "Vernon Medical Clinic",
      "position": "Practice Manager",
      "content": "Okanagan GeoTechSolutions helped us implement PIPEDA compliance and secure our patient data. Their expertise is invaluable.",
      "rating": 5,
      "isActive": true
    }
  ]
}
```

## Error Responses

All API endpoints return consistent error responses:

```json
{
  "statusCode": 400,
  "message": "Validation failed",
  "error": "Bad Request",
  "details": [
    {
      "field": "email",
      "message": "Email must be a valid email address"
    }
  ]
}
```

### Common HTTP Status Codes

- `200` - Success
- `201` - Created
- `400` - Bad Request (validation errors)
- `401` - Unauthorized (invalid or missing token)
- `403` - Forbidden (insufficient permissions)
- `404` - Not Found
- `429` - Too Many Requests (rate limited)
- `500` - Internal Server Error

## Rate Limits

- **Contact forms**: 5 submissions per 15 minutes per IP
- **Authentication**: 10 attempts per 15 minutes per IP
- **General API**: 100 requests per 15 minutes per user
- **Public endpoints**: 200 requests per 15 minutes per IP

## CORS Policy

The API allows requests from:
- `http://localhost:3000` (development)
- `https://okanagantechgeo.ca` (production)

## Data Validation

All input data is validated using industry-standard validation rules:

- **Email**: Must be valid email format
- **Phone**: Canadian phone number format preferred
- **Passwords**: Minimum 8 characters, must include uppercase, lowercase, and numbers
- **File uploads**: Maximum 10MB, allowed types: PDF, DOC, DOCX, TXT, PNG, JPG, JPEG

## Webhooks

For advanced integrations, webhooks are available for:
- New contact submissions
- Assessment status changes
- User registrations

Contact support@okanagantechgeo.ca for webhook configuration.
