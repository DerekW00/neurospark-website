import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
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

// iOS-specific implementation of the Firebase service
export class IOSFirebaseService implements FirebaseService {
    auth: AuthService = {
        signInWithEmail: async (email: string, password: string): Promise<User> => {
            const result = await auth().signInWithEmailAndPassword(email, password);
            return this.mapFirebaseUserToUser(result.user);
        },

        signUpWithEmail: async (email: string, password: string): Promise<User> => {
            const result = await auth().createUserWithEmailAndPassword(email, password);
            return this.mapFirebaseUserToUser(result.user);
        },

        signInWithGoogle: async (): Promise<User> => {
            // iOS Google sign-in implementation would go here
            // This is a simplified version, in a real app you would need to use the GoogleSignIn library
            throw new Error('Google Sign-In not implemented for iOS yet');
        },

        logOut: async (): Promise<void> => {
            return auth().signOut();
        },

        getCurrentUser: (): User | null => {
            const currentUser = auth().currentUser;
            return currentUser ? this.mapFirebaseUserToUser(currentUser) : null;
        }
    };

    firestore: FirestoreService = {
        createUserProfile: async (userId: string, userData: any): Promise<void> => {
            return firestore().collection('users').doc(userId).set(userData);
        },

        getUserProfile: async (userId: string): Promise<any | null> => {
            const docSnap = await firestore().collection('users').doc(userId).get();
            return docSnap.exists ? docSnap.data() : null;
        },

        createCommitment: async (userId: string, commitmentData: CommitmentData): Promise<string> => {
            const docRef = await firestore().collection('commitments').add({
                ...commitmentData,
                userId,
                createdAt: firestore.FieldValue.serverTimestamp()
            });
            return docRef.id;
        },

        getUserCommitments: async (userId: string): Promise<any[]> => {
            const querySnapshot = await firestore()
                .collection('commitments')
                .where('userId', '==', userId)
                .get();

            return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        },

        updateCommitment: async (commitmentId: string, data: Partial<CommitmentData>): Promise<void> => {
            return firestore().collection('commitments').doc(commitmentId).update(data);
        },

        deleteCommitment: async (commitmentId: string): Promise<void> => {
            return firestore().collection('commitments').doc(commitmentId).delete();
        },

        createTask: async (commitmentId: string, taskData: TaskData): Promise<string> => {
            const docRef = await firestore().collection('tasks').add({
                ...taskData,
                commitmentId,
                createdAt: firestore.FieldValue.serverTimestamp()
            });
            return docRef.id;
        },

        getCommitmentTasks: async (commitmentId: string): Promise<any[]> => {
            const querySnapshot = await firestore()
                .collection('tasks')
                .where('commitmentId', '==', commitmentId)
                .get();

            return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        },

        updateTask: async (taskId: string, data: Partial<TaskData>): Promise<void> => {
            return firestore().collection('tasks').doc(taskId).update(data);
        },

        deleteTask: async (taskId: string): Promise<void> => {
            return firestore().collection('tasks').doc(taskId).delete();
        },

        saveConversation: async (userId: string, conversationData: ConversationData): Promise<string> => {
            const docRef = await firestore().collection('conversations').add({
                ...conversationData,
                userId,
                createdAt: firestore.FieldValue.serverTimestamp()
            });
            return docRef.id;
        },

        getUserConversations: async (userId: string): Promise<any[]> => {
            const querySnapshot = await firestore()
                .collection('conversations')
                .where('userId', '==', userId)
                .get();

            return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        }
    };

    private mapFirebaseUserToUser(firebaseUser: any): User {
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
        return new IOSFirebaseService();
    } catch (error) {
        console.warn("Using mock Firebase implementation", error);
        return new MockFirebaseService();
    }
} 