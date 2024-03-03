import { Category } from "./category";

export interface Student {
    id?: string;
    name: string;
    username: string;
    password: string;
    email: string;
    age: number;
    gradeLevel: string;
    completedCourses: Category[];
    incompleteCourses: Category[];
    voiceActor?: string;
  };