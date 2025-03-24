// Calendar service for integrating with various calendar providers

// Types
export type CalendarProvider = 'google' | 'microsoft' | 'apple';

interface CalendarEvent {
    id?: string;
    title: string;
    description?: string;
    start: Date;
    end: Date;
    location?: string;
    allDay?: boolean;
}

// Google Calendar API
const GOOGLE_API_BASE = 'https://www.googleapis.com/calendar/v3';
const GOOGLE_AUTH_URL = 'https://accounts.google.com/o/oauth2/v2/auth';
const GOOGLE_SCOPE = 'https://www.googleapis.com/auth/calendar';
const GOOGLE_REDIRECT_URI = `${window.location.origin}/calendar/auth/google/callback`;

// Microsoft Graph API for Calendar
const MS_API_BASE = 'https://graph.microsoft.com/v1.0';
const MS_AUTH_URL = 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize';
const MS_SCOPE = 'Calendars.ReadWrite';
const MS_REDIRECT_URI = `${window.location.origin}/calendar/auth/microsoft/callback`;

// Google Calendar Integration
export const googleCalendar = {
    // Start Google OAuth flow
    authorize: (clientId: string) => {
        const authUrl = new URL(GOOGLE_AUTH_URL);
        authUrl.searchParams.append('client_id', clientId);
        authUrl.searchParams.append('redirect_uri', GOOGLE_REDIRECT_URI);
        authUrl.searchParams.append('response_type', 'token');
        authUrl.searchParams.append('scope', GOOGLE_SCOPE);

        // Store the current URL to return to after auth
        localStorage.setItem('calendar_auth_return_url', window.location.href);

        // Redirect to Google auth
        window.location.href = authUrl.toString();
    },

    // Handle auth callback
    handleAuthCallback: () => {
        // Get token from URL hash
        const hash = window.location.hash.substring(1);
        const params = new URLSearchParams(hash);
        const accessToken = params.get('access_token');

        if (accessToken) {
            // Store token
            localStorage.setItem('google_calendar_token', accessToken);

            // Return to previous page
            const returnUrl = localStorage.getItem('calendar_auth_return_url') || '/calendar';
            window.location.href = returnUrl;
            return accessToken;
        }

        return null;
    },

    // List calendars
    listCalendars: async (accessToken: string) => {
        try {
            const response = await fetch(`${GOOGLE_API_BASE}/users/me/calendarList`, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            });

            if (!response.ok) {
                throw new Error('Failed to fetch calendars');
            }

            const data = await response.json();
            return data.items;
        } catch (error) {
            console.error('Error listing calendars:', error);
            throw error;
        }
    },

    // Add event to calendar
    addEvent: async (accessToken: string, calendarId: string, event: CalendarEvent) => {
        try {
            const eventData = {
                summary: event.title,
                description: event.description || '',
                start: {
                    dateTime: event.start.toISOString(),
                    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
                },
                end: {
                    dateTime: event.end.toISOString(),
                    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
                },
                location: event.location || '',
            };

            const response = await fetch(`${GOOGLE_API_BASE}/calendars/${calendarId}/events`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(eventData)
            });

            if (!response.ok) {
                throw new Error('Failed to add event');
            }

            return await response.json();
        } catch (error) {
            console.error('Error adding event:', error);
            throw error;
        }
    },

    // Get events from calendar
    getEvents: async (accessToken: string, calendarId: string, from: Date, to: Date) => {
        try {
            const timeMin = from.toISOString();
            const timeMax = to.toISOString();

            const response = await fetch(
                `${GOOGLE_API_BASE}/calendars/${calendarId}/events?timeMin=${timeMin}&timeMax=${timeMax}`,
                {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`
                    }
                }
            );

            if (!response.ok) {
                throw new Error('Failed to fetch events');
            }

            const data = await response.json();
            return data.items.map((item: any) => ({
                id: item.id,
                title: item.summary,
                description: item.description,
                start: new Date(item.start.dateTime || item.start.date),
                end: new Date(item.end.dateTime || item.end.date),
                location: item.location,
                allDay: !item.start.dateTime
            }));
        } catch (error) {
            console.error('Error fetching events:', error);
            throw error;
        }
    }
};

// Microsoft Calendar Integration
export const microsoftCalendar = {
    // Start Microsoft OAuth flow
    authorize: (clientId: string) => {
        const authUrl = new URL(MS_AUTH_URL);
        authUrl.searchParams.append('client_id', clientId);
        authUrl.searchParams.append('redirect_uri', MS_REDIRECT_URI);
        authUrl.searchParams.append('response_type', 'token');
        authUrl.searchParams.append('scope', MS_SCOPE);

        // Store the current URL to return to after auth
        localStorage.setItem('calendar_auth_return_url', window.location.href);

        // Redirect to Microsoft auth
        window.location.href = authUrl.toString();
    },

    // Handle auth callback
    handleAuthCallback: () => {
        // Get token from URL hash
        const hash = window.location.hash.substring(1);
        const params = new URLSearchParams(hash);
        const accessToken = params.get('access_token');

        if (accessToken) {
            // Store token
            localStorage.setItem('microsoft_calendar_token', accessToken);

            // Return to previous page
            const returnUrl = localStorage.getItem('calendar_auth_return_url') || '/calendar';
            window.location.href = returnUrl;
            return accessToken;
        }

        return null;
    },

    // List calendars
    listCalendars: async (accessToken: string) => {
        try {
            const response = await fetch(`${MS_API_BASE}/me/calendars`, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            });

            if (!response.ok) {
                throw new Error('Failed to fetch calendars');
            }

            const data = await response.json();
            return data.value;
        } catch (error) {
            console.error('Error listing calendars:', error);
            throw error;
        }
    },

    // Add event to calendar
    addEvent: async (accessToken: string, calendarId: string, event: CalendarEvent) => {
        try {
            const eventData = {
                subject: event.title,
                body: {
                    contentType: 'text',
                    content: event.description || ''
                },
                start: {
                    dateTime: event.start.toISOString(),
                    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
                },
                end: {
                    dateTime: event.end.toISOString(),
                    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
                },
                location: {
                    displayName: event.location || ''
                },
                isAllDay: event.allDay || false
            };

            const response = await fetch(`${MS_API_BASE}/me/calendars/${calendarId}/events`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(eventData)
            });

            if (!response.ok) {
                throw new Error('Failed to add event');
            }

            return await response.json();
        } catch (error) {
            console.error('Error adding event:', error);
            throw error;
        }
    },

    // Get events from calendar
    getEvents: async (accessToken: string, calendarId: string, from: Date, to: Date) => {
        try {
            const startDateTime = from.toISOString();
            const endDateTime = to.toISOString();

            const response = await fetch(
                `${MS_API_BASE}/me/calendars/${calendarId}/calendarView?startDateTime=${startDateTime}&endDateTime=${endDateTime}`,
                {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`,
                        'Prefer': 'outlook.timezone="UTC"'
                    }
                }
            );

            if (!response.ok) {
                throw new Error('Failed to fetch events');
            }

            const data = await response.json();
            return data.value.map((item: any) => ({
                id: item.id,
                title: item.subject,
                description: item.bodyPreview,
                start: new Date(item.start.dateTime + 'Z'),
                end: new Date(item.end.dateTime + 'Z'),
                location: item.location.displayName,
                allDay: item.isAllDay
            }));
        } catch (error) {
            console.error('Error fetching events:', error);
            throw error;
        }
    }
};

// Local/Apple Calendar Integration (via iCal)
export const localCalendar = {
    // Add event to local calendar (creates downloadable ICS file)
    addEvent: (event: CalendarEvent) => {
        try {
            // Create iCalendar content
            const icsContent = [
                'BEGIN:VCALENDAR',
                'VERSION:2.0',
                'CALSCALE:GREGORIAN',
                'METHOD:PUBLISH',
                'BEGIN:VEVENT',
                `UID:${new Date().getTime()}@neurospark.app`,
                `SUMMARY:${event.title}`,
                event.description ? `DESCRIPTION:${event.description}` : '',
                `DTSTART:${formatIcsDate(event.start)}`,
                `DTEND:${formatIcsDate(event.end)}`,
                event.location ? `LOCATION:${event.location}` : '',
                `DTSTAMP:${formatIcsDate(new Date())}`,
                'END:VEVENT',
                'END:VCALENDAR'
            ].filter(Boolean).join('\r\n');

            // Create download link
            const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `${event.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.ics`;

            // Trigger download
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            return true;
        } catch (error) {
            console.error('Error creating ICS file:', error);
            throw error;
        }
    }
};

// Helper function to format date for ICS files
function formatIcsDate(date: Date): string {
    return date.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/g, '');
}

export default {
    googleCalendar,
    microsoftCalendar,
    localCalendar
}; 