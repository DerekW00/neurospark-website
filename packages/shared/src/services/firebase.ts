// Platform-agnostic Firebase API

// Types
export interface User {
    id: string;
    email?: string;
    displayName?: string;
    photoURL?: string;
}

export interface AuthService {
    signInWithEmail: (email: string, password: string) => Promise<User>;
    signUpWithEmail: (email: string, password: string) => Promise<User>;
    signInWithGoogle?: () => Promise<User>;
    logOut: () => Promise<void>;
    getCurrentUser: () => User | null;
}

export interface CommitmentData {
    title: string;
    description?: string;
    dueDate?: Date;
    tags?: string[];
    [key: string]: any;
}

export interface TaskData {
    title: string;
    description?: string;
    completed?: boolean;
    dueDate?: Date;
    [key: string]: any;
}

export interface ConversationData {
    title: string;
    messages: any[];
    [key: string]: any;
}

export interface FirestoreService {
    // Users
    createUserProfile: (userId: string, userData: any) => Promise<void>;
    getUserProfile: (userId: string) => Promise<any | null>;

    // Commitments
    createCommitment: (userId: string, commitmentData: CommitmentData) => Promise<string>;
    getUserCommitments: (userId: string) => Promise<any[]>;
    updateCommitment: (commitmentId: string, data: Partial<CommitmentData>) => Promise<void>;
    deleteCommitment: (commitmentId: string) => Promise<void>;

    // Tasks
    createTask: (commitmentId: string, taskData: TaskData) => Promise<string>;
    getCommitmentTasks: (commitmentId: string) => Promise<any[]>;
    updateTask: (taskId: string, data: Partial<TaskData>) => Promise<void>;
    deleteTask: (taskId: string) => Promise<void>;

    // Conversations
    saveConversation: (userId: string, conversationData: ConversationData) => Promise<string>;
    getUserConversations: (userId: string) => Promise<any[]>;
}

export interface FirebaseService {
    auth: AuthService;
    firestore: FirestoreService;
}

// Mock implementation for development
export class MockFirebaseService implements FirebaseService {
    private mockDb = {
        users: {} as Record<string, any>,
        commitments: [] as any[],
        tasks: [] as any[],
        conversations: [] as any[]
    };

    private currentUser: User | null = null;

    auth: AuthService = {
        signInWithEmail: async (email: string, password: string): Promise<User> => {
            this.currentUser = { id: 'mock-user-id', email };
            return this.currentUser;
        },

        signUpWithEmail: async (email: string, password: string): Promise<User> => {
            this.currentUser = { id: 'mock-user-id', email };
            return this.currentUser;
        },

        signInWithGoogle: async (): Promise<User> => {
            this.currentUser = { id: 'mock-user-id', email: 'mock@example.com', displayName: 'Mock User' };
            return this.currentUser;
        },

        logOut: async (): Promise<void> => {
            this.currentUser = null;
        },

        getCurrentUser: (): User | null => {
            return this.currentUser;
        }
    };

    firestore: FirestoreService = {
        createUserProfile: async (userId: string, userData: any): Promise<void> => {
            this.mockDb.users[userId] = userData;
        },

        getUserProfile: async (userId: string): Promise<any | null> => {
            return this.mockDb.users[userId] || null;
        },

        createCommitment: async (userId: string, commitmentData: CommitmentData): Promise<string> => {
            const id = `commitment-${this.mockDb.commitments.length + 1}`;
            this.mockDb.commitments.push({
                id,
                userId,
                ...commitmentData,
                createdAt: new Date()
            });
            return id;
        },

        getUserCommitments: async (userId: string): Promise<any[]> => {
            return this.mockDb.commitments.filter(c => c.userId === userId);
        },

        updateCommitment: async (commitmentId: string, data: Partial<CommitmentData>): Promise<void> => {
            const index = this.mockDb.commitments.findIndex(c => c.id === commitmentId);
            if (index !== -1) {
                this.mockDb.commitments[index] = {
                    ...this.mockDb.commitments[index],
                    ...data
                };
            }
        },

        deleteCommitment: async (commitmentId: string): Promise<void> => {
            const index = this.mockDb.commitments.findIndex(c => c.id === commitmentId);
            if (index !== -1) {
                this.mockDb.commitments.splice(index, 1);
            }
        },

        createTask: async (commitmentId: string, taskData: TaskData): Promise<string> => {
            const id = `task-${this.mockDb.tasks.length + 1}`;
            this.mockDb.tasks.push({
                id,
                commitmentId,
                ...taskData,
                createdAt: new Date()
            });
            return id;
        },

        getCommitmentTasks: async (commitmentId: string): Promise<any[]> => {
            return this.mockDb.tasks.filter(t => t.commitmentId === commitmentId);
        },

        updateTask: async (taskId: string, data: Partial<TaskData>): Promise<void> => {
            const index = this.mockDb.tasks.findIndex(t => t.id === taskId);
            if (index !== -1) {
                this.mockDb.tasks[index] = {
                    ...this.mockDb.tasks[index],
                    ...data
                };
            }
        },

        deleteTask: async (taskId: string): Promise<void> => {
            const index = this.mockDb.tasks.findIndex(t => t.id === taskId);
            if (index !== -1) {
                this.mockDb.tasks.splice(index, 1);
            }
        },

        saveConversation: async (userId: string, conversationData: ConversationData): Promise<string> => {
            const id = `conversation-${this.mockDb.conversations.length + 1}`;
            this.mockDb.conversations.push({
                id,
                userId,
                ...conversationData,
                createdAt: new Date()
            });
            return id;
        },

        getUserConversations: async (userId: string): Promise<any[]> => {
            return this.mockDb.conversations.filter(c => c.userId === userId);
        }
    };
}

// Factory function to create the appropriate Firebase service
export function createFirebaseService(): FirebaseService {
    // This will be implemented differently for web and iOS
    return new MockFirebaseService();
} 