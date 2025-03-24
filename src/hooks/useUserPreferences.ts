import { useState, useEffect } from 'react';
import { useAuth } from '@/lib/contexts/AuthContext';
import firebase from '@/services/firebase';

// Define types for user preferences
export interface UserPreferences {
    // A/B testing for goal setting UX style
    goalSettingStyle: 'formal' | 'conversational';
    // Calendar integration preferences
    calendarIntegration: {
        googleCalendar?: {
            enabled: boolean;
            token?: string;
        };
        microsoftCalendar?: {
            enabled: boolean;
            token?: string;
        };
        appleCalendar?: {
            enabled: boolean;
        };
    };
    // Notification preferences
    notifications: {
        enabled: boolean;
        taskReminders: boolean;
        dailyRecap: boolean;
        weeklyPlanning: boolean;
        customTimings?: {
            morning?: string; // Time in "HH:MM" format
            midday?: string;
            evening?: string;
        };
    };
    // LLM model preferences
    llmPreferences: {
        provider: 'openai' | 'anthropic' | 'perplexity';
        apiKey?: string;
        defaultModel?: string;
    };
}

// Default preferences
const defaultPreferences: UserPreferences = {
    goalSettingStyle: Math.random() < 0.5 ? 'formal' : 'conversational', // Randomly assign for A/B testing
    calendarIntegration: {
        googleCalendar: {
            enabled: false,
        },
        microsoftCalendar: {
            enabled: false,
        },
        appleCalendar: {
            enabled: false,
        },
    },
    notifications: {
        enabled: true,
        taskReminders: true,
        dailyRecap: true,
        weeklyPlanning: true,
    },
    llmPreferences: {
        provider: 'openai',
        defaultModel: 'gpt-3.5-turbo',
    },
};

export const useUserPreferences = () => {
    const { currentUser } = useAuth();
    const [preferences, setPreferences] = useState<UserPreferences>(defaultPreferences);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Load user preferences
    useEffect(() => {
        const loadPreferences = async () => {
            if (!currentUser) {
                // If not logged in, use local preferences
                const storedPrefs = localStorage.getItem('userPreferences');
                if (storedPrefs) {
                    try {
                        setPreferences({
                            ...defaultPreferences,
                            ...JSON.parse(storedPrefs)
                        });
                    } catch (e) {
                        console.error('Failed to parse local preferences', e);
                    }
                }
                setLoading(false);
                return;
            }

            try {
                // Get preferences from Firebase
                const userDoc = await firebase.getUserProfile(currentUser.uid);
                if (userDoc && userDoc.preferences) {
                    setPreferences({
                        ...defaultPreferences, // Fallback defaults
                        ...userDoc.preferences // Override with stored preferences
                    });
                } else {
                    // First time user, save default preferences
                    await firebase.saveUserPreferences(currentUser.uid, defaultPreferences);
                }
                setError(null);
            } catch (err) {
                console.error('Error loading preferences:', err);
                setError('Failed to load preferences');
            } finally {
                setLoading(false);
            }
        };

        loadPreferences();
    }, [currentUser]);

    // Update preferences
    const updatePreferences = async (newPreferences: Partial<UserPreferences>) => {
        try {
            const updatedPreferences = {
                ...preferences,
                ...newPreferences
            };

            setPreferences(updatedPreferences);

            if (currentUser) {
                // Save to Firebase if logged in
                await firebase.saveUserPreferences(currentUser.uid, updatedPreferences);
            } else {
                // Otherwise save to localStorage
                localStorage.setItem('userPreferences', JSON.stringify(updatedPreferences));
            }

            setError(null);
            return true;
        } catch (err) {
            console.error('Error updating preferences:', err);
            setError('Failed to update preferences');
            return false;
        }
    };

    return {
        preferences,
        loading,
        error,
        updatePreferences
    };
};

export default useUserPreferences; 