/**
 * Environment configuration for the application
 */

// Environment configuration
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';

// Feature flags
export const ENABLE_ANALYTICS = import.meta.env.VITE_ENABLE_ANALYTICS === 'true';

// App version
export const APP_VERSION = import.meta.env.VITE_APP_VERSION || '1.0.0';

// API endpoints
export const ENDPOINTS = {
    SUBSCRIBE: `${API_BASE_URL}/subscribe`,
}; 