/**
 * Shared code between client and server
 * Useful to share types between client and server
 * and/or small pure JS functions that can be used on both client and server
 */

/**
 * Example response type for /api/demo
 */
export interface DemoResponse {
  message: string;
}

/**
 * Contact form request and response types
 */
export interface ContactFormRequest {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

export interface ContactFormResponse {
  success: boolean;
  message: string;
}
