import { FieldValue } from '@angular/fire/firestore';
import { Employee, Recruiter } from 'app/models/backend/user/roles';

export interface User {
  uid: string;
  name: string;
  photoUrl: string;
  email: string;
  country: string;
  about?: string;
  roleId: string;
  role: Employee | Recruiter;
  created: FieldValue;
  updated?: FieldValue;
}
