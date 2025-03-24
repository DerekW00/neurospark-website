import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useUserPreferences } from '@/hooks/useUserPreferences';
import { useToast } from '@/hooks/use-toast';

// Component for users to customize notification settings
const NotificationSettings = () => {
    const { preferences, updatePreferences, loading } = useUserPreferences();
    const { toast } = useToast();

    // Local state for form
    const [notificationsEnabled, setNotificationsEnabled] = useState(true);
    const [taskReminders, setTaskReminders] = useState(true);
    const [dailyRecap, setDailyRecap] = useState(true);
    const [weeklyPlanning, setWeeklyPlanning] = useState(true);
    const [customTimings, setCustomTimings] = useState(false);
    const [morningTime, setMorningTime] = useState('08:00');
    const [middayTime, setMiddayTime] = useState('12:00');
    const [eveningTime, setEveningTime] = useState('18:00');
    const [saving, setSaving] = useState(false);

    // Load preferences when available
    useEffect(() => {
        if (!loading && preferences) {
            const { notifications } = preferences;
            setNotificationsEnabled(notifications.enabled);
            setTaskReminders(notifications.taskReminders);
            setDailyRecap(notifications.dailyRecap);
            setWeeklyPlanning(notifications.weeklyPlanning);

            // Check if custom timings are set
            const hasCustomTimings = notifications.customTimings &&
                (notifications.customTimings.morning ||
                    notifications.customTimings.midday ||
                    notifications.customTimings.evening);

            setCustomTimings(!!hasCustomTimings);

            if (hasCustomTimings) {
                setMorningTime(notifications.customTimings?.morning || '08:00');
                setMiddayTime(notifications.customTimings?.midday || '12:00');
                setEveningTime(notifications.customTimings?.evening || '18:00');
            }
        }
    }, [preferences, loading]);

    // Save notification settings
    const handleSave = async () => {
        setSaving(true);

        try {
            // Prepare notification settings
            const notificationSettings = {
                enabled: notificationsEnabled,
                taskReminders,
                dailyRecap,
                weeklyPlanning,
                customTimings: customTimings ? {
                    morning: morningTime,
                    midday: middayTime,
                    evening: eveningTime
                } : undefined
            };

            // Update preferences
            await updatePreferences({
                notifications: notificationSettings
            });

            toast({
                title: "Settings saved",
                description: "Your notification preferences have been updated.",
            });
        } catch (error) {
            console.error('Error saving notification settings:', error);
            toast({
                title: "Error saving settings",
                description: "Please try again.",
                variant: "destructive"
            });
        } finally {
            setSaving(false);
        }
    };

    // Toggle notifications master switch
    const handleToggleNotifications = (checked: boolean) => {
        setNotificationsEnabled(checked);
        if (!checked) {
            // Disable all notifications if master switch is off
            setTaskReminders(false);
            setDailyRecap(false);
            setWeeklyPlanning(false);
        }
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>
                    Configure when and how you receive notifications and reminders.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                        <Label htmlFor="notifications">Enable Notifications</Label>
                        <p className="text-sm text-muted-foreground">
                            Turn on/off all notifications from the app.
                        </p>
                    </div>
                    <Switch
                        id="notifications"
                        checked={notificationsEnabled}
                        onCheckedChange={handleToggleNotifications}
                    />
                </div>

                <div className="space-y-4">
                    <h3 className="text-sm font-medium">Notification Types</h3>

                    <div className="grid gap-3">
                        <div className="flex items-center justify-between">
                            <Label
                                htmlFor="task-reminders"
                                className={!notificationsEnabled ? "text-muted-foreground" : ""}
                            >
                                Task Reminders
                            </Label>
                            <Switch
                                id="task-reminders"
                                checked={taskReminders}
                                onCheckedChange={setTaskReminders}
                                disabled={!notificationsEnabled}
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <Label
                                htmlFor="daily-recap"
                                className={!notificationsEnabled ? "text-muted-foreground" : ""}
                            >
                                Daily Progress Recap
                            </Label>
                            <Switch
                                id="daily-recap"
                                checked={dailyRecap}
                                onCheckedChange={setDailyRecap}
                                disabled={!notificationsEnabled}
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <Label
                                htmlFor="weekly-planning"
                                className={!notificationsEnabled ? "text-muted-foreground" : ""}
                            >
                                Weekly Planning Reminder
                            </Label>
                            <Switch
                                id="weekly-planning"
                                checked={weeklyPlanning}
                                onCheckedChange={setWeeklyPlanning}
                                disabled={!notificationsEnabled}
                            />
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <Label
                            htmlFor="custom-timings"
                            className={!notificationsEnabled ? "text-muted-foreground" : ""}
                        >
                            Custom Notification Times
                        </Label>
                        <Switch
                            id="custom-timings"
                            checked={customTimings}
                            onCheckedChange={setCustomTimings}
                            disabled={!notificationsEnabled}
                        />
                    </div>

                    {customTimings && notificationsEnabled && (
                        <div className="grid grid-cols-3 gap-4 mt-4">
                            <div className="space-y-2">
                                <Label htmlFor="morning-time">Morning</Label>
                                <Input
                                    id="morning-time"
                                    type="time"
                                    value={morningTime}
                                    onChange={(e) => setMorningTime(e.target.value)}
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="midday-time">Midday</Label>
                                <Input
                                    id="midday-time"
                                    type="time"
                                    value={middayTime}
                                    onChange={(e) => setMiddayTime(e.target.value)}
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="evening-time">Evening</Label>
                                <Input
                                    id="evening-time"
                                    type="time"
                                    value={eveningTime}
                                    onChange={(e) => setEveningTime(e.target.value)}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </CardContent>
            <CardFooter>
                <Button onClick={handleSave} disabled={saving}>
                    {saving ? 'Saving...' : 'Save Preferences'}
                </Button>
            </CardFooter>
        </Card>
    );
};

export default NotificationSettings; 