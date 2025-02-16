export interface User {
  id: string;
  name: string;
  email: string;
  role?: 'admin' | 'user'; // Optional user role
  createdAt?: string; // Optional timestamp
  updatedAt?: string;
}
