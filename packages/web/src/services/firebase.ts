import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
    User as FirebaseUser
} from 'firebase/auth';
import {
    getFirestore,
    collection,
    doc,
    setDoc,
    getDoc,
    getDocs,
    query,
    where,
    addDoc,
    updateDoc,
    deleteDoc
} from 'firebase/firestore';
import {
    FirebaseService,
    AuthService,
    FirestoreService,
    User,
    CommitmentData,
    TaskData,
    ConversationData,
    MockFirebaseService
} from '@neurospark/shared';

// Replace with your actual Firebase config
const firebaseConfig = {
    apiKey: "mock-api-key",
    authDomain: "mock-app.firebaseapp.com",
    projectId: "mock-app-id",
    storageBucket: "mock-app.appspot.com",
    messagingSenderId: "000000000000",
    appId: "mock-app-id"
};

// Web-specific implementation of the Firebase service
export class WebFirebaseService implements FirebaseService {
    private app;
    private firebaseAuth;
    private firebaseFirestore;
    private googleProvider;

    constructor() {
        try {
            this.app = initializeApp(firebaseConfig);
            this.firebaseAuth = getAuth(this.app);
            this.firebaseFirestore = getFirestore(this.app);
            this.googleProvider = new GoogleAuthProvider();
        } catch (error) {
            console.error("Error initializing Firebase", error);
            throw error;
        }
    }

    auth: AuthService = {
        signInWithEmail: async (email: string, password: string): Promise<User> => {
            const result = await signInWithEmailAndPassword(this.firebaseAuth, email, password);
            return this.mapFirebaseUserToUser(result.user);
        },

        signUpWithEmail: async (email: string, password: string): Promise<User> => {
            const result = await createUserWithEmailAndPassword(this.firebaseAuth, email, password);
            return this.mapFirebaseUserToUser(result.user);
        },

        signInWithGoogle: async (): Promise<User> => {
            const result = await signInWithPopup(this.firebaseAuth, this.googleProvider);
            return this.mapFirebaseUserToUser(result.user);
        },

        logOut: async (): Promise<void> => {
            return signOut(this.firebaseAuth);
        },

        getCurrentUser: (): User | null => {
            const currentUser = this.firebaseAuth.currentUser;
            return currentUser ? this.mapFirebaseUserToUser(currentUser) : null;
        }
    };

    firestore: FirestoreService = {
        createUserProfile: async (userId: string, userData: any): Promise<void> => {
            return setDoc(doc(this.firebaseFirestore, 'users', userId), userData);
        },

        getUserProfile: async (userId: string): Promise<any | null> => {
            const docRef = doc(this.firebaseFirestore, 'users', userId);
            const docSnap = await getDoc(docRef);
            return docSnap.exists() ? docSnap.data() : null;
        },

        createCommitment: async (userId: string, commitmentData: CommitmentData): Promise<string> => {
            const commitmentsRef = collection(this.firebaseFirestore, 'commitments');
            const docRef = await addDoc(commitmentsRef, {
                ...commitmentData,
                userId,
                createdAt: new Date()
            });
            return docRef.id;
        },

        getUserCommitments: async (userId: string): Promise<any[]> => {
            const commitmentsRef = collection(this.firebaseFirestore, 'commitments');
            const q = query(commitmentsRef, where('userId', '==', userId));
            const querySnapshot = await getDocs(q);

            const commitments: any[] = [];
            querySnapshot.forEach((doc) => {
                commitments.push({ id: doc.id, ...doc.data() });
            });

            return commitments;
        },

        updateCommitment: async (commitmentId: string, data: Partial<CommitmentData>): Promise<void> => {
            const docRef = doc(this.firebaseFirestore, 'commitments', commitmentId);
            return updateDoc(docRef, data);
        },

        deleteCommitment: async (commitmentId: string): Promise<void> => {
            const docRef = doc(this.firebaseFirestore, 'commitments', commitmentId);
            return deleteDoc(docRef);
        },

        createTask: async (commitmentId: string, taskData: TaskData): Promise<string> => {
            const tasksRef = collection(this.firebaseFirestore, 'tasks');
            const docRef = await addDoc(tasksRef, {
                ...taskData,
                commitmentId,
                createdAt: new Date()
            });
            return docRef.id;
        },

        getCommitmentTasks: async (commitmentId: string): Promise<any[]> => {
            const tasksRef = collection(this.firebaseFirestore, 'tasks');
            const q = query(tasksRef, where('commitmentId', '==', commitmentId));
            const querySnapshot = await getDocs(q);

            const tasks: any[] = [];
            querySnapshot.forEach((doc) => {
                tasks.push({ id: doc.id, ...doc.data() });
            });

            return tasks;
        },

        updateTask: async (taskId: string, data: Partial<TaskData>): Promise<void> => {
            const docRef = doc(this.firebaseFirestore, 'tasks', taskId);
            return updateDoc(docRef, data);
        },

        deleteTask: async (taskId: string): Promise<void> => {
            const docRef = doc(this.firebaseFirestore, 'tasks', taskId);
            return deleteDoc(docRef);
        },

        saveConversation: async (userId: string, conversationData: ConversationData): Promise<string> => {
            const conversationsRef = collection(this.firebaseFirestore, 'conversations');
            const docRef = await addDoc(conversationsRef, {
                ...conversationData,
                userId,
                createdAt: new Date()
            });
            return docRef.id;
        },

        getUserConversations: async (userId: string): Promise<any[]> => {
            const conversationsRef = collection(this.firebaseFirestore, 'conversations');
            const q = query(conversationsRef, where('userId', '==', userId));
            const querySnapshot = await getDocs(q);

            const conversations: any[] = [];
            querySnapshot.forEach((doc) => {
                conversations.push({ id: doc.id, ...doc.data() });
            });

            return conversations;
        }
    };

    private mapFirebaseUserToUser(firebaseUser: FirebaseUser): User {
        return {
            id: firebaseUser.uid,
            email: firebaseUser.email || undefined,
            displayName: firebaseUser.displayName || undefined,
            photoURL: firebaseUser.photoURL || undefined
        };
    }
}

// Factory function to create Firebase service
export function createFirebaseService(): FirebaseService {
    try {
        return new WebFirebaseService();
    } catch (error) {
        console.warn("Using mock Firebase implementation", error);
        return new MockFirebaseService();
    }
} 