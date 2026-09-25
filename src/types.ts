export type AppMode = 'practice' | 'test' | 'consolidation';

export interface QuestionTip {
  id?: string;
  type: 'test' | 'study' | 'advice' | 'action-plan';
  title: string;
  content: string;
}

export interface Question {
  id: number;
  section: 'matching' | 'name-matching' | 'summary';
  prompt: string;
  preText?: string;
  postText?: string;
  correctAnswers: string[]; // Allowed valid variations (lowercase trimmed)
  displayAnswer: string;
  explanation: string;
  distraction?: string;
  advice?: string;
  quote: string;
  paragraphRef: 'A' | 'B' | 'C' | 'D' | 'E' | 'F';
  tips?: QuestionTip[];
}

export interface StatementOption {
  id: 'A' | 'B' | 'C' | 'D' | 'E';
  label: string;
  statement: string;
}

export interface PersonItem {
  id: number;
  name: string;
}

export interface Paragraph {
  id: 'A' | 'B' | 'C' | 'D' | 'E' | 'F';
  text: string;
}

export interface HighlightRange {
  id: string;
  paragraphId?: string;
  target?: 'passage' | 'questions';
  text: string;
  color: 'yellow' | 'emerald' | 'sky' | 'rose' | 'purple';
  createdAt: number;
}

export interface TestResult {
  score: number;
  total: number;
  timeSpentSeconds: number;
  bandScore: string;
  submittedAt: string;
  breakdown: {
    questionId: number;
    userAnswer: string;
    isCorrect: boolean;
    correctDisplay: string;
    explanation: string;
    paragraphRef: string;
  }[];
}

export type ConsolidationLang = 'en' | 'vi';

// Consolidation Language Input & Reading Skill Activities Types
export interface VocabItem {
  id: string;
  term: string;
  phonetic: string;
  partOfSpeech: string;
  partOfSpeechVi?: string;
  definition: string;
  definitionVi?: string;
  passageQuote: string;
  passageQuoteVi?: string;
  paragraphRef: 'A' | 'B' | 'C' | 'D' | 'E' | 'F';
  collocations: string[];
  collocationsVi?: string[];
  synonyms: string[];
  ieltsBand: 'Band 7' | 'Band 8' | 'Band 9';
  category: 'Metaphors & Idioms' | 'Academic Verbs' | 'Artificial Intelligence & Tech' | 'Formal Collocations';
  categoryVi?: string;
  writingSpeakingTip: string;
  writingSpeakingTipVi?: string;
}

export interface AcademicStructure {
  id: string;
  title: string;
  titleVi?: string;
  category: string;
  categoryVi?: string;
  pattern: string;
  passageExample: string;
  passageExampleVi?: string;
  paragraphRef: 'A' | 'B' | 'C' | 'D' | 'E' | 'F';
  explanation: string;
  explanationVi?: string;
  ieltsApplication: string;
  ieltsApplicationVi?: string;
  templateExercise: {
    scaffold: string;
    sampleCompletion: string;
    scaffoldVi?: string;
    sampleCompletionVi?: string;
  };
}

export interface SynonymMatchTask {
  id: string;
  passageWord: string;
  paragraphRef: 'A' | 'B' | 'C' | 'D' | 'E' | 'F';
  passageContext: string;
  passageContextVi?: string;
  correctSynonym: string;
  distractors: string[];
  ieltsTrapNote: string;
  ieltsTrapNoteVi?: string;
}

export interface CollocationGapTask {
  id: string;
  sentence: string;
  sentenceVi?: string;
  missingWord: string;
  options: string[];
  passageRef: 'A' | 'B' | 'C' | 'D' | 'E' | 'F';
  explanation: string;
  explanationVi?: string;
  collocationRule: string;
  collocationRuleVi?: string;
}

export interface DiscourseAnalysisTask {
  id: string;
  connector: string;
  sentenceContext: string;
  sentenceContextVi?: string;
  paragraphRef: 'A' | 'B' | 'C' | 'D' | 'E' | 'F';
  functionType: 'Cause & Effect' | 'Concession & Counter-argument' | 'Comparative Contrast' | 'Hedging & Evaluation' | 'Exemplification';
  functionTypeVi?: string;
  options: string[];
  optionsVi?: string[];
  explanation: string;
  explanationVi?: string;
}

export interface SpeedEvidenceTask {
  id: string;
  prompt: string;
  promptVi?: string;
  correctParagraph: 'A' | 'B' | 'C' | 'D' | 'E' | 'F';
  keyEvidenceQuote: string;
  keyEvidenceQuoteVi?: string;
  scanningClue: string;
  scanningClueVi?: string;
}

export interface ParaphrasePair {
  id: string;
  original: string;
  originalVi?: string;
  paraphrase: string;
  paraphraseVi?: string;
  context: string;
  contextVi?: string;
  questionType: string;
  questionTypeVi?: string;
}


