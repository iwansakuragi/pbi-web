// lib/api.ts

// Environment variable dengan fallback
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'

// Base API Response Interface
export interface ApiResponse<T> {
  data: T
  message?: string
  status: 'success' | 'error'
  meta?: {
    current_page: number
    total: number
    per_page: number
    last_page: number
  }
}

// Article Types
export interface Article {
  id: number
  slug: string
  title: string
  excerpt: string
  content: string
  featured_image: string | null
  author: string
  published_at: string
  category: string
  views: number
  reading_time: number
  created_at: string
  updated_at: string
}

export interface ArticleListResponse extends ApiResponse<Article[]> {
  meta?: {
    current_page: number
    total: number
    per_page: number
    last_page: number
  }
}

// Event Types
export interface Event {
  id: number
  slug: string
  title: string
  description: string
  date: string
  location: string
  image: string | null
  registration_link: string | null
  created_at: string
  updated_at: string
}

// Ganti interface dengan type untuk menghindari empty interface
export type EventListResponse = ApiResponse<Event[]>

// Practitioner Types
export interface Practitioner {
  id: number
  name: string
  certificate_number: string
  province: string
  city: string
  certification_status: 'active' | 'expired' | 'pending' | 'revoked'
  profile_photo: string | null
  contact_number: string | null
  email: string | null
  address: string | null
  experience_years: number
  created_at: string
  updated_at: string
}

export interface PractitionerListResponse extends ApiResponse<Practitioner[]> {
  meta?: {
    current_page: number
    total: number
    per_page: number
    last_page: number
  }
}

// Certificate Types
export interface Certificate {
  certificate_number: string
  holder_name: string
  issue_date: string
  expiry_date: string
  status: 'valid' | 'expired' | 'revoked'
  practitioner_id: number
  created_at: string
  updated_at: string
}

// Ganti interface dengan type untuk menghindari empty interface
export type CertificateVerificationResponse = ApiResponse<Certificate>

// Statistics Types
export interface Statistics {
  total_members: number
  total_certificates: number
  total_provinces: number
  total_cities: number
  active_practitioners: number
  pending_certifications: number
}

// Ganti interface dengan type untuk menghindari empty interface
export type StatisticsResponse = ApiResponse<Statistics>

// Auth Types
export interface LoginCredentials {
  email: string
  password: string
}

export interface AuthResponse {
  access_token: string
  token_type: string
  expires_in: number
  user: {
    id: number
    name: string
    email: string
    role: string
  }
}

// Registration Types
export interface RegistrationData {
  // Personal Data
  name: string
  nik: string
  date_of_birth: string
  gender: 'male' | 'female'
  
  // Contact & Address
  email: string
  phone: string
  address: string
  province: string
  city: string
  postal_code: string
  
  // Practice Information
  experience_years: number
  practice_location: string
  education_background: string
  
  // Agreement
  agree_to_terms: boolean
  agree_to_data_processing: boolean
}

// Registration Types
export interface RegistrationData {
  // Personal Data
  name: string
  nik: string
  date_of_birth: string
  gender: 'male' | 'female'
  
  // Contact & Address
  email: string
  phone: string
  address: string
  province: string
  city: string
  postal_code: string
  
  // Practice Information
  experience_years: number
  practice_location: string
  education_background: string
  
  // Agreement
  agree_to_terms: boolean
  agree_to_data_processing: boolean
}

// GANTI interface dengan type untuk menghindari empty interface
export type RegistrationResponse = ApiResponse<{
  id: number
  registration_number: string
  status: 'pending' | 'approved' | 'rejected'
}>

// API Client Functions

/**
 * Fetch public statistics
 */
export async function fetchStatistics(): Promise<Statistics> {
  const res = await fetch(`${API_BASE_URL}/api/statistics`, {
    next: { revalidate: 300 } // 5 minutes
  })
  
  if (!res.ok) {
    throw new Error('Failed to fetch statistics')
  }
  
  const data: StatisticsResponse = await res.json()
  return data.data
}

/**
 * Fetch articles with pagination and filters
 */
export async function fetchArticles(params?: {
  page?: number
  per_page?: number
  category?: string
  search?: string
}): Promise<ArticleListResponse> {
  const queryParams = {
    page: params?.page || 1,
    per_page: params?.per_page || 10,
    ...params
  }
  
  const queryString = new URLSearchParams(
    Object.entries(queryParams).reduce((acc, [key, value]) => {
      if (value !== undefined && value !== null) {
        acc[key] = String(value)
      }
      return acc
    }, {} as Record<string, string>)
  ).toString()
  
  const res = await fetch(`${API_BASE_URL}/api/articles?${queryString}`, {
    next: { revalidate: 60 } // ISR 60s
  })
  
  if (!res.ok) {
    throw new Error('Failed to fetch articles')
  }
  
  return res.json()
}

/**
 * Fetch single article by slug
 */
export async function fetchArticle(slug: string): Promise<Article> {
  const res = await fetch(`${API_BASE_URL}/api/articles/${slug}`, {
    next: { revalidate: 60 }
  })
  
  if (!res.ok) {
    throw new Error('Article not found')
  }
  
  const data: ApiResponse<Article> = await res.json()
  return data.data
}

/**
 * Fetch upcoming events
 */
export async function fetchEvents(params?: {
  upcoming?: boolean
  page?: number
  per_page?: number
}): Promise<EventListResponse> {
  const queryParams = {
    upcoming: true,
    page: params?.page || 1,
    per_page: params?.per_page || 10,
    ...params
  }
  
  const queryString = new URLSearchParams(
    Object.entries(queryParams).reduce((acc, [key, value]) => {
      if (value !== undefined && value !== null) {
        acc[key] = String(value)
      }
      return acc
    }, {} as Record<string, string>)
  ).toString()
  
  const res = await fetch(`${API_BASE_URL}/api/events?${queryString}`, {
    next: { revalidate: 60 }
  })
  
  if (!res.ok) {
    throw new Error('Failed to fetch events')
  }
  
  return res.json()
}

/**
 * Fetch single event by slug
 */
export async function fetchEvent(slug: string): Promise<Event> {
  const res = await fetch(`${API_BASE_URL}/api/events/${slug}`, {
    next: { revalidate: 60 }
  })
  
  if (!res.ok) {
    throw new Error('Event not found')
  }
  
  const data: ApiResponse<Event> = await res.json()
  return data.data
}

/**
 * Verify certificate by number
 */
export async function verifyCertificate(certificateNumber: string): Promise<Certificate> {
  const res = await fetch(`${API_BASE_URL}/api/verify-certificate`, {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({ certificate_number: certificateNumber })
  })
  
  if (!res.ok) {
    const error = await res.json().catch(() => ({ message: 'Verification failed' }))
    throw new Error(error.message || 'Verification failed')
  }
  
  const data: CertificateVerificationResponse = await res.json()
  return data.data
}

/**
 * Search practitioners with filters
 */
export async function searchPractitioners(params?: {
  search?: string
  province?: string
  city?: string
  status?: string
  page?: number
  per_page?: number
}): Promise<PractitionerListResponse> {
  const queryParams = {
    page: params?.page || 1,
    per_page: params?.per_page || 12,
    ...params
  }
  
  const queryString = new URLSearchParams(
    Object.entries(queryParams).reduce((acc, [key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        acc[key] = String(value)
      }
      return acc
    }, {} as Record<string, string>)
  ).toString()
  
  const res = await fetch(`${API_BASE_URL}/api/members?${queryString}`)
  
  if (!res.ok) {
    throw new Error('Failed to search practitioners')
  }
  
  return res.json()
}

/**
 * Submit registration form
 */
export async function submitRegistration(data: RegistrationData): Promise<RegistrationResponse> {
  const res = await fetch(`${API_BASE_URL}/api/register`, {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(data)
  })
  
  if (!res.ok) {
    const error = await res.json().catch(() => ({ message: 'Registration failed' }))
    throw new Error(error.message || 'Registration failed')
  }
  
  return res.json()
}

/**
 * Submit contact form
 */
export async function submitContactForm(data: {
  name: string
  email: string
  subject: string
  message: string
}): Promise<ApiResponse<{ id: number }>> {
  const res = await fetch(`${API_BASE_URL}/api/contact`, {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(data)
  })
  
  if (!res.ok) {
    const error = await res.json().catch(() => ({ message: 'Failed to send message' }))
    throw new Error(error.message || 'Failed to send message')
  }
  
  return res.json()
}

// Auth Functions (for member portal)
export async function login(credentials: LoginCredentials): Promise<AuthResponse> {
  const res = await fetch(`${API_BASE_URL}/api/auth/login`, {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
  
  if (!res.ok) {
    const error = await res.json().catch(() => ({ message: 'Login failed' }))
    throw new Error(error.message || 'Login failed')
  }
  
  return res.json()
}

export async function logout(token: string): Promise<void> {
  const res = await fetch(`${API_BASE_URL}/api/auth/logout`, {
    method: 'POST',
    headers: { 
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json'
    }
  })
  
  if (!res.ok) {
    throw new Error('Logout failed')
  }
}

// Helper function for authenticated requests
export async function authenticatedFetch<T>(
  endpoint: string,
  token: string,
  options: RequestInit = {}
): Promise<T> {
  const res = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      ...options.headers,
    },
  })
  
  if (!res.ok) {
    const error = await res.json().catch(() => ({ message: 'Request failed' }))
    throw new Error(error.message || 'Request failed')
  }
  
  return res.json()
}