import { QuestionTemp } from "./questionTemp";

export interface CategoryTemp {
  topic: string;
  correct: number;
  wrong: number;
  questions: QuestionTemp[];
}
