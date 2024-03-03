import { Question } from "./question";

export interface Category {
    name: string;
    correct: number;
    incorrect: number;
    questions: Question[];
}