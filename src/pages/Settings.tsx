import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Bell, Calendar, Mail, Moon, User } from 'lucide-react';

const Settings = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Profile updated",
        description: "Your profile has been updated successfully.",
      });
    }, 1000);
  };

  const handleSavePreferences = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Preferences saved",
        description: "Your preferences have been updated successfully.",
      });
    }, 1000);
  };

  const handleDisconnectCalendar = () => {
    toast({
      title: "Calendar disconnected",
      description: "Your Google Calendar has been disconnected.",
    });
  };

  const handleDeleteAccount = () => {
    // Show confirmation dialog before deleting
    if (confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
      toast({
        title: "Account deleted",
        description: "Your account has been deleted successfully.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold tracking-tight mb-8">Settings</h1>

          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="mb-8">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="preferences">Preferences</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="integrations">Integrations</TabsTrigger>
              <TabsTrigger value="account">Account</TabsTrigger>
            </TabsList>

            {/* Profile Settings */}
            <TabsContent value="profile">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                  <CardDescription>
                    Update your personal information
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSaveProfile} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" defaultValue="Alex Johnson" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" defaultValue="alex@example.com" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea
                        id="bio"
                        placeholder="Tell us a bit about yourself"
                        defaultValue="Software developer trying to stay focused!"
                      />
                    </div>

                    <Button type="submit" className="w-full" disabled={loading}>
                      {loading ? "Saving..." : "Save Changes"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Preferences Settings */}
            <TabsContent value="preferences">
              <Card>
                <CardHeader>
                  <CardTitle>App Preferences</CardTitle>
                  <CardDescription>
                    Customize your NeuroSpark experience
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSavePreferences} className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <Moon className="h-4 w-4" />
                            <Label htmlFor="dark-mode">Dark Mode</Label>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Enable dark mode for comfortable viewing
                          </p>
                        </div>
                        <Switch id="dark-mode" defaultChecked />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="time-format">Time Format</Label>
                        <Select defaultValue="12hour">
                          <SelectTrigger>
                            <SelectValue placeholder="Select time format" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="12hour">12-hour (am/pm)</SelectItem>
                            <SelectItem value="24hour">24-hour</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="task-view">Default Task View</Label>
                        <Select defaultValue="list">
                          <SelectTrigger>
                            <SelectValue placeholder="Select default view" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="list">List View</SelectItem>
                            <SelectItem value="calendar">Calendar View</SelectItem>
                            <SelectItem value="kanban">Kanban View</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="task-size">Default Microtask Size</Label>
                        <Select defaultValue="15min">
                          <SelectTrigger>
                            <SelectValue placeholder="Select default task size" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="5min">5 minutes</SelectItem>
                            <SelectItem value="10min">10 minutes</SelectItem>
                            <SelectItem value="15min">15 minutes</SelectItem>
                            <SelectItem value="20min">20 minutes</SelectItem>
                            <SelectItem value="30min">30 minutes</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <Button type="submit" className="w-full" disabled={loading}>
                      {loading ? "Saving..." : "Save Preferences"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Notifications Settings */}
            <TabsContent value="notifications">
              <Card>
                <CardHeader>
                  <CardTitle>Notification Settings</CardTitle>
                  <CardDescription>
                    Control when and how you receive notifications
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <Bell className="h-4 w-4" />
                            <Label htmlFor="task-reminders">Task Reminders</Label>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Receive notifications before scheduled tasks
                          </p>
                        </div>
                        <Switch id="task-reminders" defaultChecked />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <Bell className="h-4 w-4" />
                            <Label htmlFor="daily-summary">Daily Summary</Label>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Receive a daily summary of your tasks
                          </p>
                        </div>
                        <Switch id="daily-summary" defaultChecked />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <Mail className="h-4 w-4" />
                            <Label htmlFor="email-notifications">Email Notifications</Label>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Receive important updates via email
                          </p>
                        </div>
                        <Switch id="email-notifications" defaultChecked />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="reminder-time">Default Reminder Time</Label>
                        <Select defaultValue="15min">
                          <SelectTrigger>
                            <SelectValue placeholder="Select reminder time" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="5min">5 minutes before</SelectItem>
                            <SelectItem value="10min">10 minutes before</SelectItem>
                            <SelectItem value="15min">15 minutes before</SelectItem>
                            <SelectItem value="30min">30 minutes before</SelectItem>
                            <SelectItem value="1hour">1 hour before</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <Button type="submit" className="w-full">
                      Save Notification Settings
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Integrations Settings */}
            <TabsContent value="integrations">
              <Card>
                <CardHeader>
                  <CardTitle>Connected Services</CardTitle>
                  <CardDescription>
                    Manage your connected accounts and services
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center">
                          <Calendar className="h-5 w-5 text-red-600" />
                        </div>
                        <div>
                          <h3 className="font-medium">Google Calendar</h3>
                          <p className="text-sm text-muted-foreground">Connected</p>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handleDisconnectCalendar}
                      >
                        Disconnect
                      </Button>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <svg className="h-5 w-5 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 16.5L6 12.5L7.41 11.09L10 13.67L16.59 7.08L18 8.5L10 16.5Z" fill="currentColor" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-medium">Microsoft Outlook</h3>
                          <p className="text-sm text-muted-foreground">Not connected</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Connect
                      </Button>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                          <svg className="h-5 w-5 text-purple-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.82 4.1a10 10 0 0 0-7.32-1.8 10 10 0 0 0-7.3 1.8A10 10 0 0 0 1.4 11.4c.4 1.8 1.27 3.3 2.7 4.46V20a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-2h6v2a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4.14c1.43-1.17 2.3-2.67 2.7-4.46a10 10 0 0 0-3-7.3zm-1.82 7.4c0 1.12-.38 1.96-1 2.65V9.3c.5.46 1 1.26 1 2.2z" fill="currentColor" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-medium">Apple Calendar</h3>
                          <p className="text-sm text-muted-foreground">Not connected</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Connect
                      </Button>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-muted-foreground">
                    These integrations help sync your tasks across different platforms.
                  </p>
                </CardFooter>
              </Card>
            </TabsContent>

            {/* Account Settings */}
            <TabsContent value="account">
              <Card>
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                  <CardDescription>
                    Manage your account and subscription
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="p-4 border rounded-lg bg-muted/50">
                    <h3 className="font-medium mb-2">Current Plan</h3>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-semibold text-lg">Free Plan</p>
                        <p className="text-sm text-muted-foreground">
                          3 active commitments, basic features
                        </p>
                      </div>
                      <Button variant="outline">Upgrade</Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="current-password">Current Password</Label>
                    <Input id="current-password" type="password" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="new-password">New Password</Label>
                    <Input id="new-password" type="password" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm New Password</Label>
                    <Input id="confirm-password" type="password" />
                  </div>

                  <Button className="w-full">Change Password</Button>

                  <div className="pt-4 border-t">
                    <h3 className="font-medium text-destructive mb-2">Danger Zone</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Once you delete your account, there is no going back.
                      Please be certain.
                    </p>
                    <Button
                      variant="destructive"
                      onClick={handleDeleteAccount}
                    >
                      Delete Account
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Settings;
