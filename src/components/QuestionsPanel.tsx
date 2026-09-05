import React, { useState, useRef } from 'react';
import { Question, HighlightRange, StatementOption } from '../types';
import {
  LOCATING_INFO_ACTION_PLAN,
  MATCHING_NAMES_ACTION_PLAN,
  SUMMARY_COMPLETION_ACTION_PLAN,
  LIST_OF_STATEMENTS,
} from '../data/ieltsData';
import { CollapsibleNotes } from './CollapsibleNotes';
import { HighlighterToolbar, HighlightColor } from './HighlighterToolbar';
import { HighlightableText } from './HighlightableText';
import {
  CheckCircle2,
  XCircle,
  HelpCircle,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Bookmark,
  Lightbulb,
  Sparkles,
} from 'lucide-react';

interface QuestionsPanelProps {
  questions: Question[];
  userAnswers: Record<number, string>;
  onAnswerChange: (questionId: number, answer: string) => void;
  isPracticeMode: boolean;
  showPracticeAnswers: boolean;
  onLocateParagraph: (paragraphId: string, quote?: string) => void;
  notes: string;
  onNotesChange: (val: string) => void;
  isNotesOpen: boolean;
  onToggleNotes: () => void;
  flaggedQuestions: Set<number>;
  onToggleFlag: (questionId: number) => void;
  onSubmitTest?: () => void;
  onGoToConsolidation?: () => void;
  isConsolidationUnlocked?: boolean;
  highlightColor?: HighlightColor;
  onSelectHighlightColor?: (color: HighlightColor) => void;
  isHighlighterActive?: boolean;
  onToggleHighlighter?: () => void;
  highlights?: HighlightRange[];
  onAddHighlight?: (text: string, color: HighlightColor) => void;
  onRemoveHighlight?: (id: string) => void;
  onClearAllHighlights?: () => void;
}

export const QuestionsPanel: React.FC<QuestionsPanelProps> = ({
  questions,
  userAnswers,
  onAnswerChange,
  isPracticeMode,
  showPracticeAnswers,
  onLocateParagraph,
  notes,
  onNotesChange,
  isNotesOpen,
  onToggleNotes,
  flaggedQuestions,
  onToggleFlag,
  onSubmitTest,
  onGoToConsolidation,
  isConsolidationUnlocked = false,
  highlightColor: currentHighlightColor = 'yellow' as HighlightColor,
  onSelectHighlightColor = (_color: HighlightColor) => {},
  isHighlighterActive = false,
  onToggleHighlighter = () => {},
  highlights = [],
  onAddHighlight = (_text: string, _color: HighlightColor) => {},
  onRemoveHighlight = (_id: string) => {},
  onClearAllHighlights = () => {},
}) => {
  const [expandedExplanations, setExpandedExplanations] = useState<Record<number, boolean>>({});
  const [expandedTips, setExpandedTips] = useState<Record<string, boolean>>({
    locating: true,
    names: true,
    summary: true,
  });

  // Floating selection highlight popup
  const [selectionPopup, setSelectionPopup] = useState<{
    text: string;
    x: number;
    y: number;
  } | null>(null);

  const toggleExplanation = (id: number) => {
    setExpandedExplanations(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleTipSection = (section: string) => {
    setExpandedTips(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const matchingQuestions = questions.filter(q => q.section === 'matching');
  const nameQuestions = questions.filter(q => q.section === 'name-matching');
  const summaryQuestions = questions.filter(q => q.section === 'summary');

  // Check correctness helper
  const isQuestionCorrect = (q: Question) => {
    const rawAnswer = (userAnswers[q.id] || '').trim().toLowerCase().replace(/^[."']+|[."']+$/g, '').replace(/\s+/g, ' ');
    if (!rawAnswer) return false;
    return q.correctAnswers.some(ans => {
      const cleanExpected = ans.trim().toLowerCase().replace(/^[."']+|[."']+$/g, '').replace(/\s+/g, ' ');
      return rawAnswer === cleanExpected;
    });
  };

  const paragraphOptions = ['A', 'B', 'C', 'D', 'E', 'F'];

  const questionsScrollRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    questionsScrollRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    if (questionsScrollRef.current) {
      questionsScrollRef.current.scrollTo({ top: questionsScrollRef.current.scrollHeight, behavior: 'smooth' });
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Handle text selection in questions
  const handleMouseUp = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest('input') || target.closest('select') || target.closest('button')) {
      setSelectionPopup(null);
      return;
    }

    const selection = window.getSelection();
    if (!selection || selection.isCollapsed) {
      setSelectionPopup(null);
      return;
    }

    const selectedText = selection.toString().trim();
    if (selectedText.length < 2) {
      setSelectionPopup(null);
      return;
    }

    if (!questionsScrollRef.current || !questionsScrollRef.current.contains(selection.anchorNode)) {
      setSelectionPopup(null);
      return;
    }

    if (isHighlighterActive) {
      onAddHighlight(selectedText, currentHighlightColor);
      selection.removeAllRanges();
      setSelectionPopup(null);
      return;
    }

    const range = selection.getRangeAt(0);
    const rect = range.getBoundingClientRect();
    setSelectionPopup({
      text: selectedText,
      x: Math.min(window.innerWidth - 180, Math.max(10, rect.left + rect.width / 2 - 80)),
      y: Math.max(10, rect.top - 42),
    });
  };

  const applyHighlightFromPopup = (color: HighlightColor) => {
    if (selectionPopup) {
      onAddHighlight(selectionPopup.text, color);
      window.getSelection()?.removeAllRanges();
      setSelectionPopup(null);
    }
  };

  return (
    <div className="h-full flex flex-col bg-slate-100 overflow-hidden select-text relative">
      {/* Question Header Status Bar */}
      <div className="h-12 bg-white border-b border-slate-200 px-4 flex items-center justify-between gap-2 shrink-0">
        <div className="flex items-center gap-2">
          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-700">
            Questions 14–26
          </h3>
          <span className="text-xs text-slate-300">|</span>
          <span className="text-xs font-semibold text-slate-600">
            Answered {Object.values(userAnswers).filter((v): v is string => typeof v === 'string' && v.trim().length > 0).length} / 13
          </span>
        </div>

        {/* Jump to Question Sections */}
        <div className="hidden lg:flex items-center gap-1 text-xs">
          <span className="text-[11px] text-slate-400 font-medium mr-1">Section:</span>
          <button
            onClick={() => scrollToSection('section-locating')}
            className="px-2 py-0.5 rounded text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-slate-200 border border-slate-200 transition cursor-pointer"
            title="Jump to Questions 14–20 (Locating Information)"
          >
            14–20
          </button>
          <button
            onClick={() => scrollToSection('section-names')}
            className="px-2 py-0.5 rounded text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-slate-200 border border-slate-200 transition cursor-pointer"
            title="Jump to Questions 21–23 (Matching Names)"
          >
            21–23
          </button>
          <button
            onClick={() => scrollToSection('section-summary')}
            className="px-2 py-0.5 rounded text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-slate-200 border border-slate-200 transition cursor-pointer"
            title="Jump to Questions 24–26 (Summary Completion)"
          >
            24–26
          </button>
        </div>

        <div className="flex items-center gap-2">
          {/* Quick Scroll Up/Down Buttons */}
          <div className="flex items-center border border-slate-200 rounded bg-white overflow-hidden text-xs">
            <button
              id="questions-scroll-top"
              onClick={scrollToTop}
              className="px-2 py-1 text-slate-600 hover:bg-slate-100 hover:text-slate-900 flex items-center gap-0.5 transition cursor-pointer"
              title="Scroll to Top of Questions"
            >
              <ChevronUp className="w-3.5 h-3.5" />
              <span className="text-[11px] hidden xl:inline">Top</span>
            </button>
            <button
              id="questions-scroll-bottom"
              onClick={scrollToBottom}
              className="px-2 py-1 border-l border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900 flex items-center gap-0.5 transition cursor-pointer"
              title="Scroll to Bottom of Questions"
            >
              <ChevronDown className="w-3.5 h-3.5" />
              <span className="text-[11px] hidden xl:inline">Bottom</span>
            </button>
          </div>
        </div>
      </div>

      {/* Highlighter and notes sub-toolbar matching Passage Panel */}
      <div className="px-4 py-2 bg-slate-50/50 border-b border-slate-200 flex items-center justify-between gap-3 shrink-0">
        <HighlighterToolbar
          isActive={isHighlighterActive}
          onToggleActive={onToggleHighlighter}
          currentColor={currentHighlightColor}
          onSelectColor={onSelectHighlightColor}
          onClearAll={onClearAllHighlights}
          highlightCount={highlights.length}
        />

        <div className="flex items-center gap-2">
          <button
            onClick={onToggleNotes}
            className={`text-xs font-semibold px-2.5 py-1 rounded border transition flex items-center gap-1.5 cursor-pointer ${
              isNotesOpen
                ? 'bg-amber-100 text-amber-900 border-amber-300'
                : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
            }`}
          >
            <span>{isNotesOpen ? 'Hide Notes' : 'Scratchpad'}</span>
            {notes.trim().length > 0 && (
              <span className="w-2 h-2 rounded-full bg-amber-500" />
            )}
          </button>
        </div>
      </div>

      {/* Floating Mini Highlight Popup for Selection in Questions */}
      {selectionPopup && (
        <div
          className="fixed z-50 bg-white border border-slate-300 rounded-lg shadow-xl px-2 py-1.5 flex items-center gap-1.5 animate-in fade-in zoom-in-95 duration-100"
          style={{ top: `${selectionPopup.y}px`, left: `${selectionPopup.x}px` }}
        >
          <span className="text-[10px] uppercase font-bold text-slate-400 mr-1">Highlight:</span>
          {(['yellow', 'emerald', 'sky', 'rose', 'purple'] as HighlightColor[]).map((c) => {
            const bgClass =
              c === 'yellow'
                ? 'bg-amber-300'
                : c === 'emerald'
                ? 'bg-emerald-400'
                : c === 'sky'
                ? 'bg-sky-400'
                : c === 'rose'
                ? 'bg-rose-400'
                : 'bg-purple-400';
            return (
              <button
                key={c}
                onClick={() => applyHighlightFromPopup(c)}
                className={`w-4 h-4 rounded-full ${bgClass} hover:scale-125 transition-transform border border-black/10 cursor-pointer`}
                title={`Highlight with ${c}`}
              />
            );
          })}
        </div>
      )}

      {/* Collapsible Scratchpad Notes Drawer */}
      <CollapsibleNotes
        isOpen={isNotesOpen}
        onClose={onToggleNotes}
        notes={notes}
        onNotesChange={onNotesChange}
        title="Questions Scratchpad"
      />

      {/* Scrollable Questions Content */}
      <div
        ref={questionsScrollRef}
        onMouseUp={handleMouseUp}
        className="flex-1 overflow-y-auto p-4 md:p-6 space-y-8 custom-passage-scroll"
      >
        {/* ========================================================================= */}
        {/* SECTION 1: QUESTIONS 14-20 LOCATING INFORMATION (PARAGRAPHS A-F) */}
        {/* ========================================================================= */}
        <div id="section-locating" className="bg-white rounded border border-slate-200 p-5 sm:p-6 shadow-xs">
          <div className="flex items-start justify-between gap-3 border-b border-slate-100 pb-3 mb-4">
            <div>
              <h2 className="text-base font-bold text-slate-900">
                Questions 14–20
              </h2>
              <div className="text-xs text-slate-600 mt-0.5">
                <HighlightableText text="Reading Passage 2 has six paragraphs, A–F." highlights={highlights} onRemoveHighlight={onRemoveHighlight} />
              </div>
              <div className="text-xs font-semibold text-slate-800 mt-1">
                <HighlightableText text="Which paragraph contains the following information?" highlights={highlights} onRemoveHighlight={onRemoveHighlight} />
              </div>
              <div className="text-xs text-slate-500 italic mt-0.5">
                <HighlightableText text="Write the correct letter, A–F, in boxes 14–20 on your answer sheet." highlights={highlights} onRemoveHighlight={onRemoveHighlight} />
              </div>
              <div className="text-[11px] font-bold text-blue-900 bg-blue-50 inline-block px-2 py-0.5 rounded mt-1.5 border border-blue-200">
                <HighlightableText text="NB You may use any letter more than once." highlights={highlights} onRemoveHighlight={onRemoveHighlight} />
              </div>
            </div>

            {isPracticeMode && (
              <button
                onClick={() => toggleTipSection('locating')}
                className="flex items-center gap-1 text-xs font-medium text-blue-700 bg-blue-50 px-2.5 py-1.5 rounded border border-blue-200 hover:bg-blue-100 transition shrink-0 cursor-pointer"
              >
                <Lightbulb className="w-3.5 h-3.5 text-blue-600" />
                <span>{expandedTips.locating ? 'Hide Action Plan' : 'Show Action Plan'}</span>
              </button>
            )}
          </div>

          {/* Action Plan Callout for Locating Information */}
          {isPracticeMode && expandedTips.locating && (
            <div className="mb-4 bg-blue-50 border border-blue-100 rounded p-3 text-xs text-blue-900">
              <div className="flex items-center gap-1.5 font-bold text-blue-800 mb-1">
                <span className="px-1.5 py-0.5 bg-blue-600 text-white rounded text-[10px] uppercase font-bold tracking-wider">
                  Action plan
                </span>
                <span><HighlightableText text={LOCATING_INFO_ACTION_PLAN.title} highlights={highlights} onRemoveHighlight={onRemoveHighlight} /></span>
              </div>
              <div className="leading-relaxed text-blue-800 text-xs whitespace-pre-line">
                <HighlightableText text={LOCATING_INFO_ACTION_PLAN.content} highlights={highlights} onRemoveHighlight={onRemoveHighlight} />
              </div>
            </div>
          )}

          {/* Questions 14-20 Items */}
          <div className="space-y-4">
            {matchingQuestions.map((q) => {
              const currentVal = userAnswers[q.id] || '';
              const isFlagged = flaggedQuestions.has(q.id);
              const isCorrect = isQuestionCorrect(q);
              const isExplanationOpen = expandedExplanations[q.id] ?? false;

              return (
                <div
                  key={q.id}
                  id={`question-card-${q.id}`}
                  className={`p-4 rounded border transition-all ${
                    showPracticeAnswers
                      ? isCorrect
                        ? 'border-emerald-200 bg-emerald-50/40'
                        : 'border-rose-200 bg-rose-50/40'
                      : 'border-slate-200 bg-white hover:border-slate-300 shadow-xs'
                  }`}
                >
                  {/* Advice/Tip Box for Question */}
                  {isPracticeMode && q.advice && (
                    <div className="mb-3 p-2.5 bg-amber-50/80 border border-amber-200 rounded text-xs text-amber-900 flex items-start gap-1.5">
                      <span className="px-1 py-0.5 bg-amber-600 text-white rounded text-[9.5px] uppercase font-bold tracking-wider shrink-0 mt-0.5">
                        Advice
                      </span>
                      <div className="flex-1 leading-relaxed">
                        <HighlightableText text={q.advice} highlights={highlights} onRemoveHighlight={onRemoveHighlight} />
                      </div>
                    </div>
                  )}

                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-2.5 flex-1">
                      <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 border border-slate-200">
                        {q.id}
                      </span>
                      <div className="text-sm text-slate-800 font-normal leading-snug flex-1">
                        <HighlightableText text={q.prompt} highlights={highlights} onRemoveHighlight={onRemoveHighlight} />
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      {/* Flag button */}
                      <button
                        onClick={() => onToggleFlag(q.id)}
                        className={`p-1.5 rounded transition cursor-pointer ${
                          isFlagged
                            ? 'text-amber-600 bg-amber-50 hover:bg-amber-100'
                            : 'text-slate-300 hover:text-slate-500 hover:bg-slate-100'
                        }`}
                        title={isFlagged ? 'Remove flag' : 'Flag question for review'}
                      >
                        <Bookmark className={`w-3.5 h-3.5 ${isFlagged ? 'fill-amber-500' : ''}`} />
                      </button>

                      {/* Dropdown Selector */}
                      <div className="relative">
                        <select
                          id={`question-input-${q.id}`}
                          value={currentVal}
                          onChange={(e) => onAnswerChange(q.id, e.target.value)}
                          className={`px-3 py-1.5 text-xs font-semibold rounded border appearance-none pr-7 transition-all cursor-pointer ${
                            showPracticeAnswers
                              ? isCorrect
                                ? 'bg-emerald-50 border-emerald-400 text-emerald-900 font-bold'
                                : 'bg-rose-50 border-rose-400 text-rose-900 font-bold'
                              : currentVal
                              ? 'bg-blue-50 border-blue-300 text-blue-900 font-bold'
                              : 'bg-white border-slate-300 text-slate-700 hover:border-slate-400'
                          }`}
                        >
                          <option value="">Choose</option>
                          {paragraphOptions.map(opt => (
                            <option key={opt} value={opt}>
                              Paragraph {opt}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2 top-2.5 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Practice Mode Explanations & Evidence */}
                  {isPracticeMode && (
                    <div className="mt-3 pt-2.5 border-t border-slate-100">
                      <div className="flex items-center justify-between">
                        <button
                          id={`btn-explanation-${q.id}`}
                          onClick={() => toggleExplanation(q.id)}
                          className="flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
                        >
                          <HelpCircle className="w-3.5 h-3.5 text-slate-400" />
                          <span>{isExplanationOpen ? 'Hide Explanation & Key' : 'View Explanation & Key'}</span>
                          {isExplanationOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                        </button>

                        {showPracticeAnswers && (
                          <div className="flex items-center gap-1.5 text-xs font-semibold">
                            {isCorrect ? (
                              <span className="text-emerald-700 flex items-center gap-1">
                                <CheckCircle2 className="w-4 h-4" /> Correct
                              </span>
                            ) : (
                              <span className="text-rose-700 flex items-center gap-1">
                                <XCircle className="w-4 h-4" /> Expected: <span className="underline font-bold">Paragraph {q.displayAnswer}</span>
                              </span>
                            )}
                          </div>
                        )}
                      </div>

                      {isExplanationOpen && (
                        <div className="mt-2.5 p-4 rounded border border-yellow-200 bg-yellow-50 shadow-inner text-xs text-yellow-950 space-y-2">
                          <div className="flex items-center justify-between">
                            <h4 className="text-xs font-bold text-yellow-800 flex items-center gap-1.5 uppercase">
                              <HelpCircle className="w-3.5 h-3.5 text-yellow-700" />
                              <span>Explanation & Quote</span>
                            </h4>
                            <button
                              onClick={() => onLocateParagraph(q.paragraphRef, q.quote)}
                              className="flex items-center gap-1 text-[11px] font-semibold text-yellow-900 hover:text-yellow-950 bg-yellow-100 px-2 py-0.5 rounded border border-yellow-300 transition cursor-pointer"
                            >
                              <span>Locate Paragraph {q.paragraphRef}</span>
                              <ExternalLink className="w-3 h-3" />
                            </button>
                          </div>
                          <div>
                            <span className="font-bold text-yellow-950">Correct Answer: </span>
                            <span className="font-extrabold text-blue-900 bg-white px-2 py-0.5 rounded border border-yellow-200">Paragraph {q.displayAnswer}</span>
                          </div>
                          <div>
                            <span className="font-semibold text-yellow-900">Passage Quote: </span>
                            <span className="italic text-yellow-800 font-serif">
                              "<HighlightableText text={q.quote} highlights={highlights} onRemoveHighlight={onRemoveHighlight} />"
                            </span>
                          </div>
                          <div className="leading-relaxed text-yellow-900 text-[11.5px]">
                            <span className="font-semibold">Analysis: </span>
                            <HighlightableText text={q.explanation} highlights={highlights} onRemoveHighlight={onRemoveHighlight} />
                          </div>
                          {q.distraction && (
                            <div className="leading-relaxed text-amber-900 bg-amber-100/60 p-2 rounded border border-amber-200 text-[11.5px]">
                              <span className="font-bold text-amber-950">Distraction analysis: </span>
                              <HighlightableText text={q.distraction} highlights={highlights} onRemoveHighlight={onRemoveHighlight} />
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 2: QUESTIONS 21-23 MATCHING NAMES (STATEMENTS A-E TO PEOPLE) */}
        {/* ========================================================================= */}
        <div id="section-names" className="bg-white rounded border border-slate-200 p-5 sm:p-6 shadow-xs">
          <div className="flex items-start justify-between gap-3 border-b border-slate-100 pb-3 mb-4">
            <div>
              <h2 className="text-base font-bold text-slate-900">
                Questions 21–23
              </h2>
              <div className="text-xs text-slate-600 mt-0.5">
                <HighlightableText text="Look at the following people (Questions 21–23) and the list of statements below." highlights={highlights} onRemoveHighlight={onRemoveHighlight} />
              </div>
              <div className="text-xs font-semibold text-slate-800 mt-1">
                <HighlightableText text="Match each person with the correct statement, A–E." highlights={highlights} onRemoveHighlight={onRemoveHighlight} />
              </div>
              <div className="text-xs text-slate-500 italic mt-0.5">
                <HighlightableText text="Write the correct letter, A–E, in boxes 21–23 on your answer sheet." highlights={highlights} onRemoveHighlight={onRemoveHighlight} />
              </div>
              <div className="text-[11px] font-bold text-amber-800 bg-amber-50 inline-block px-2 py-0.5 rounded mt-1.5 border border-amber-200">
                <HighlightableText text="Tip: Write the letter of the correct statement, not the paragraph where you find the answer." highlights={highlights} onRemoveHighlight={onRemoveHighlight} />
              </div>
            </div>

            {isPracticeMode && (
              <button
                onClick={() => toggleTipSection('names')}
                className="flex items-center gap-1 text-xs font-medium text-blue-700 bg-blue-50 px-2.5 py-1.5 rounded border border-blue-200 hover:bg-blue-100 transition shrink-0 cursor-pointer"
              >
                <Lightbulb className="w-3.5 h-3.5 text-blue-600" />
                <span>{expandedTips.names ? 'Hide Action Plan' : 'Show Action Plan'}</span>
              </button>
            )}
          </div>

          {/* List of Statements Reference Box */}
          <div className="my-3 p-4 bg-slate-50 border border-slate-300 rounded-md">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-2.5">
              List of Statements
            </h3>
            <div className="space-y-2">
              {LIST_OF_STATEMENTS.map(item => (
                <div key={item.id} className="flex items-start gap-2.5 p-2 bg-white rounded border border-slate-200 shadow-2xs">
                  <span className="w-6 h-6 rounded bg-blue-100 text-blue-900 font-bold text-xs flex items-center justify-center shrink-0 border border-blue-200 mt-0.5">
                    {item.id}
                  </span>
                  <span className="text-xs font-medium text-slate-800 leading-snug">
                    <HighlightableText text={item.statement} highlights={highlights} onRemoveHighlight={onRemoveHighlight} />
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-2 text-[11px] text-slate-500 italic">
              Note: There are two statements which do not match any of the names.
            </div>
          </div>

          {/* Matching Names Action Plan */}
          {isPracticeMode && expandedTips.names && (
            <div className="mb-4 bg-blue-50 border border-blue-100 rounded p-3 text-xs text-blue-900">
              <div className="flex items-center gap-1.5 font-bold text-blue-800 mb-1">
                <span className="px-1.5 py-0.5 bg-blue-600 text-white rounded text-[10px] uppercase font-bold tracking-wider">
                  Action plan
                </span>
                <span><HighlightableText text={MATCHING_NAMES_ACTION_PLAN.title} highlights={highlights} onRemoveHighlight={onRemoveHighlight} /></span>
              </div>
              <div className="leading-relaxed text-blue-800 text-xs whitespace-pre-line">
                <HighlightableText text={MATCHING_NAMES_ACTION_PLAN.content} highlights={highlights} onRemoveHighlight={onRemoveHighlight} />
              </div>
            </div>
          )}

          {/* Names Questions List */}
          <div className="space-y-4">
            {nameQuestions.map((q) => {
              const currentVal = userAnswers[q.id] || '';
              const isFlagged = flaggedQuestions.has(q.id);
              const isCorrect = isQuestionCorrect(q);
              const isExplanationOpen = expandedExplanations[q.id] ?? false;

              return (
                <div
                  key={q.id}
                  id={`question-card-${q.id}`}
                  className={`p-4 rounded border transition-all ${
                    showPracticeAnswers
                      ? isCorrect
                        ? 'border-emerald-200 bg-emerald-50/40'
                        : 'border-rose-200 bg-rose-50/40'
                      : 'border-slate-200 bg-white hover:border-slate-300 shadow-xs'
                  }`}
                >
                  {/* Advice Tip */}
                  {isPracticeMode && q.advice && (
                    <div className="mb-3 p-2 bg-amber-50/80 border border-amber-200 rounded text-xs text-amber-900 flex items-start gap-1.5">
                      <span className="px-1 py-0.5 bg-amber-600 text-white rounded text-[9.5px] uppercase font-bold tracking-wider shrink-0 mt-0.5">
                        Advice
                      </span>
                      <div className="flex-1 leading-relaxed">
                        <HighlightableText text={q.advice} highlights={highlights} onRemoveHighlight={onRemoveHighlight} />
                      </div>
                    </div>
                  )}

                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-2.5 flex-1">
                      <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 border border-slate-200">
                        {q.id}
                      </span>
                      <div className="text-sm text-slate-900 font-bold leading-snug flex-1">
                        <HighlightableText text={q.prompt} highlights={highlights} onRemoveHighlight={onRemoveHighlight} />
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      {/* Flag button */}
                      <button
                        onClick={() => onToggleFlag(q.id)}
                        className={`p-1.5 rounded transition cursor-pointer ${
                          isFlagged
                            ? 'text-amber-600 bg-amber-50 hover:bg-amber-100'
                            : 'text-slate-300 hover:text-slate-500 hover:bg-slate-100'
                        }`}
                        title={isFlagged ? 'Remove flag' : 'Flag question for review'}
                      >
                        <Bookmark className={`w-3.5 h-3.5 ${isFlagged ? 'fill-amber-500' : ''}`} />
                      </button>

                      {/* Dropdown Selector for Statement */}
                      <div className="relative">
                        <select
                          id={`question-input-${q.id}`}
                          value={currentVal}
                          onChange={(e) => onAnswerChange(q.id, e.target.value)}
                          className={`px-3 py-1.5 text-xs font-semibold rounded border appearance-none pr-7 transition-all cursor-pointer min-w-[130px] ${
                            showPracticeAnswers
                              ? isCorrect
                                ? 'bg-emerald-50 border-emerald-400 text-emerald-900 font-bold'
                                : 'bg-rose-50 border-rose-400 text-rose-900 font-bold'
                              : currentVal
                              ? 'bg-blue-50 border-blue-300 text-blue-900 font-bold'
                              : 'bg-white border-slate-300 text-slate-700 hover:border-slate-400'
                          }`}
                        >
                          <option value="">Choose Statement</option>
                          {LIST_OF_STATEMENTS.map(st => (
                            <option key={st.id} value={st.id}>
                              Statement {st.id}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2 top-2.5 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Practice Mode Explanations & Evidence */}
                  {isPracticeMode && (
                    <div className="mt-3 pt-2.5 border-t border-slate-100">
                      <div className="flex items-center justify-between">
                        <button
                          id={`btn-explanation-${q.id}`}
                          onClick={() => toggleExplanation(q.id)}
                          className="flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
                        >
                          <HelpCircle className="w-3.5 h-3.5 text-slate-400" />
                          <span>{isExplanationOpen ? 'Hide Explanation & Key' : 'View Explanation & Key'}</span>
                          {isExplanationOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                        </button>

                        {showPracticeAnswers && (
                          <div className="flex items-center gap-1.5 text-xs font-semibold">
                            {isCorrect ? (
                              <span className="text-emerald-700 flex items-center gap-1">
                                <CheckCircle2 className="w-4 h-4" /> Correct
                              </span>
                            ) : (
                              <span className="text-rose-700 flex items-center gap-1">
                                <XCircle className="w-4 h-4" /> Expected: <span className="underline font-bold">Statement {q.displayAnswer}</span>
                              </span>
                            )}
                          </div>
                        )}
                      </div>

                      {isExplanationOpen && (
                        <div className="mt-2.5 p-4 rounded border border-yellow-200 bg-yellow-50 shadow-inner text-xs text-yellow-950 space-y-2">
                          <div className="flex items-center justify-between">
                            <h4 className="text-xs font-bold text-yellow-800 flex items-center gap-1.5 uppercase">
                              <HelpCircle className="w-3.5 h-3.5 text-yellow-700" />
                              <span>Explanation & Quote</span>
                            </h4>
                            <button
                              onClick={() => onLocateParagraph(q.paragraphRef, q.quote)}
                              className="flex items-center gap-1 text-[11px] font-semibold text-yellow-900 hover:text-yellow-950 bg-yellow-100 px-2 py-0.5 rounded border border-yellow-300 transition cursor-pointer"
                            >
                              <span>Locate in Paragraph {q.paragraphRef}</span>
                              <ExternalLink className="w-3 h-3" />
                            </button>
                          </div>
                          <div>
                            <span className="font-bold text-yellow-950">Matched Statement: </span>
                            <span className="font-extrabold text-blue-900 bg-white px-2 py-0.5 rounded border border-yellow-200">
                              {q.displayAnswer} – {LIST_OF_STATEMENTS.find(s => s.id === q.displayAnswer)?.statement}
                            </span>
                          </div>
                          <div>
                            <span className="font-semibold text-yellow-900">Passage Quote: </span>
                            <span className="italic text-yellow-800 font-serif">
                              "<HighlightableText text={q.quote} highlights={highlights} onRemoveHighlight={onRemoveHighlight} />"
                            </span>
                          </div>
                          <div className="leading-relaxed text-yellow-900 text-[11.5px]">
                            <span className="font-semibold">Analysis: </span>
                            <HighlightableText text={q.explanation} highlights={highlights} onRemoveHighlight={onRemoveHighlight} />
                          </div>
                          {q.distraction && (
                            <div className="leading-relaxed text-amber-900 bg-amber-100/60 p-2 rounded border border-amber-200 text-[11.5px]">
                              <span className="font-bold text-amber-950">Distraction analysis: </span>
                              <HighlightableText text={q.distraction} highlights={highlights} onRemoveHighlight={onRemoveHighlight} />
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 3: QUESTIONS 24-26 SUMMARY COMPLETION (ONE WORD ONLY) */}
        {/* ========================================================================= */}
        <div id="section-summary" className="bg-white rounded border border-slate-200 p-5 sm:p-6 shadow-xs">
          <div className="flex items-start justify-between gap-3 border-b border-slate-100 pb-3 mb-4">
            <div>
              <h2 className="text-base font-bold text-slate-900">
                Questions 24–26
              </h2>
              <div className="text-xs text-slate-600 mt-0.5">
                <HighlightableText text="Complete the summary below." highlights={highlights} onRemoveHighlight={onRemoveHighlight} />
              </div>
              <div className="text-xs font-semibold text-slate-800 mt-1">
                <HighlightableText text="Choose ONE WORD ONLY from the passage for each answer." highlights={highlights} onRemoveHighlight={onRemoveHighlight} />
              </div>
              <div className="text-xs text-slate-500 italic mt-0.5">
                <HighlightableText text="Write your answers in boxes 24–26 on your answer sheet." highlights={highlights} onRemoveHighlight={onRemoveHighlight} />
              </div>
            </div>

            {isPracticeMode && (
              <button
                onClick={() => toggleTipSection('summary')}
                className="flex items-center gap-1 text-xs font-medium text-blue-700 bg-blue-50 px-2.5 py-1.5 rounded border border-blue-200 hover:bg-blue-100 transition shrink-0 cursor-pointer"
              >
                <Lightbulb className="w-3.5 h-3.5 text-blue-600" />
                <span>{expandedTips.summary ? 'Hide Action Plan' : 'Show Action Plan'}</span>
              </button>
            )}
          </div>

          {/* Summary Tips Callouts in Practice Mode */}
          {isPracticeMode && expandedTips.summary && (
            <div className="space-y-3 mb-4">
              <div className="bg-blue-50 border border-blue-100 rounded p-3 text-xs text-blue-900">
                <div className="flex items-center gap-1.5 font-bold text-blue-800 mb-1">
                  <span className="px-1.5 py-0.5 bg-blue-600 text-white rounded text-[10px] uppercase font-bold tracking-wider">
                    Action plan
                  </span>
                  <span><HighlightableText text={SUMMARY_COMPLETION_ACTION_PLAN.title} highlights={highlights} onRemoveHighlight={onRemoveHighlight} /></span>
                </div>
                <div className="leading-relaxed text-blue-800 text-xs whitespace-pre-line">
                  <HighlightableText text={SUMMARY_COMPLETION_ACTION_PLAN.content} highlights={highlights} onRemoveHighlight={onRemoveHighlight} />
                </div>
              </div>
            </div>
          )}

          {/* Summary Box */}
          <div className="p-5 rounded border border-slate-200 bg-slate-50">
            <h3 className="text-center font-extrabold text-sm text-slate-900 tracking-wider mb-4">
              When will we have a thinking machine?
            </h3>

            <div className="text-sm text-slate-800 leading-loose space-y-3">
              <p>
                <HighlightableText text="Despite some advances, the early robots had certain weaknesses. They were given the information they needed on a " highlights={highlights} onRemoveHighlight={onRemoveHighlight} />
                <span className="inline-flex items-center gap-1">
                  <span className="font-bold text-xs bg-slate-200 px-1.5 py-0.5 rounded text-slate-700">24</span>
                  <input
                    id="question-input-24"
                    type="text"
                    value={userAnswers[24] || ''}
                    onChange={(e) => onAnswerChange(24, e.target.value)}
                    placeholder="answer 24"
                    className={`px-2.5 py-1 text-xs font-semibold rounded border w-32 sm:w-40 focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                      showPracticeAnswers
                        ? isQuestionCorrect(questions.find(q => q.id === 24)!)
                          ? 'bg-emerald-50 border-emerald-400 text-emerald-950 font-bold'
                          : 'bg-rose-50 border-rose-400 text-rose-950'
                        : userAnswers[24]
                        ? 'bg-blue-50 border-blue-400'
                        : 'bg-white border-slate-300'
                    }`}
                  />
                </span>
                <HighlightableText text=". This was known as the 'top-down' approach and enabled them to do certain tasks but they were unable to recognise " highlights={highlights} onRemoveHighlight={onRemoveHighlight} />
                <span className="inline-flex items-center gap-1">
                  <span className="font-bold text-xs bg-slate-200 px-1.5 py-0.5 rounded text-slate-700">25</span>
                  <input
                    id="question-input-25"
                    type="text"
                    value={userAnswers[25] || ''}
                    onChange={(e) => onAnswerChange(25, e.target.value)}
                    placeholder="answer 25"
                    className={`px-2.5 py-1 text-xs font-semibold rounded border w-28 sm:w-36 focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                      showPracticeAnswers
                        ? isQuestionCorrect(questions.find(q => q.id === 25)!)
                          ? 'bg-emerald-50 border-emerald-400 text-emerald-950 font-bold'
                          : 'bg-rose-50 border-rose-400 text-rose-950'
                        : userAnswers[25]
                        ? 'bg-blue-50 border-blue-400'
                        : 'bg-white border-slate-300'
                    }`}
                  />
                </span>
                <HighlightableText text=". Nor did they have any intuition or ability to make decisions based on experience. Rodney Brooks tried a different approach. Robots similar to those invented by Brooks are to be found on " highlights={highlights} onRemoveHighlight={onRemoveHighlight} />
                <span className="inline-flex items-center gap-1">
                  <span className="font-bold text-xs bg-slate-200 px-1.5 py-0.5 rounded text-slate-700">26</span>
                  <input
                    id="question-input-26"
                    type="text"
                    value={userAnswers[26] || ''}
                    onChange={(e) => onAnswerChange(26, e.target.value)}
                    placeholder="answer 26"
                    className={`px-2.5 py-1 text-xs font-semibold rounded border w-28 sm:w-36 focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                      showPracticeAnswers
                        ? isQuestionCorrect(questions.find(q => q.id === 26)!)
                          ? 'bg-emerald-50 border-emerald-400 text-emerald-950 font-bold'
                          : 'bg-rose-50 border-rose-400 text-rose-950'
                        : userAnswers[26]
                        ? 'bg-blue-50 border-blue-400'
                        : 'bg-white border-slate-300'
                    }`}
                  />
                </span>{' '}
                <HighlightableText text="where they are collecting information." highlights={highlights} onRemoveHighlight={onRemoveHighlight} />
              </p>
            </div>
          </div>

          {/* Practice Mode Explanations & Advice for 24-26 */}
          {isPracticeMode && (
            <div className="mt-5 space-y-4">
              <h4 className="text-xs font-bold uppercase text-slate-500 tracking-wider">
                Explanations & Advice for Questions 24–26
              </h4>

              {summaryQuestions.map(q => {
                const isCorrect = isQuestionCorrect(q);
                const isExplanationOpen = expandedExplanations[q.id] ?? false;

                return (
                  <div key={q.id} className="p-3.5 bg-white rounded border border-slate-200 text-xs shadow-2xs">
                    {/* Advice */}
                    {q.advice && (
                      <div className="mb-2 p-2.5 rounded bg-amber-50/80 border border-amber-200 text-amber-900">
                        <span className="font-bold mr-1">Advice:</span>
                        <span><HighlightableText text={q.advice} highlights={highlights} onRemoveHighlight={onRemoveHighlight} /></span>
                      </div>
                    )}

                    <div className="flex items-center justify-between">
                      <button
                        onClick={() => toggleExplanation(q.id)}
                        className="flex items-center gap-1.5 font-semibold text-slate-700 hover:text-slate-900 cursor-pointer"
                      >
                        <span className="font-bold text-slate-900">Question {q.id}:</span>
                        <span>{isExplanationOpen ? 'Hide Details' : 'View Explanation & Quote'}</span>
                        {isExplanationOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                      </button>

                      {showPracticeAnswers && (
                        <span className={`font-semibold ${isCorrect ? 'text-emerald-700' : 'text-rose-700'}`}>
                          {isCorrect ? '✓ Correct' : `Expected: ${q.displayAnswer}`}
                        </span>
                      )}
                    </div>

                    {isExplanationOpen && (
                      <div className="mt-2.5 p-4 rounded border border-yellow-200 bg-yellow-50 shadow-inner space-y-1.5 text-yellow-950">
                        <div className="flex items-center justify-between">
                          <h4 className="text-xs font-bold text-yellow-800 flex items-center gap-1 uppercase">
                            <HelpCircle className="w-3.5 h-3.5 text-yellow-700" />
                            <span>Explanation & Key</span>
                          </h4>
                          <button
                            onClick={() => onLocateParagraph(q.paragraphRef, q.quote)}
                            className="flex items-center gap-1 text-[11px] font-semibold text-yellow-900 hover:text-yellow-950 bg-yellow-100 px-2 py-0.5 rounded border border-yellow-300 transition cursor-pointer"
                          >
                            <span>Locate in Paragraph {q.paragraphRef}</span>
                            <ExternalLink className="w-3 h-3" />
                          </button>
                        </div>
                        <div>
                          <span className="font-bold text-yellow-950">Expected Key: </span>
                          <span className="font-extrabold text-blue-900 bg-white px-2 py-0.5 rounded border border-yellow-200">{q.displayAnswer}</span>
                        </div>
                        <div>
                          <span className="font-semibold text-yellow-900">Passage Quote: </span>
                          <span className="italic text-yellow-800 font-serif">
                            "<HighlightableText text={q.quote} highlights={highlights} onRemoveHighlight={onRemoveHighlight} />"
                          </span>
                        </div>
                        <div className="text-yellow-900 leading-relaxed text-[11.5px]">
                          <span className="font-semibold">Analysis: </span>
                          <HighlightableText text={q.explanation} highlights={highlights} onRemoveHighlight={onRemoveHighlight} />
                        </div>
                        {q.distraction && (
                          <div className="leading-relaxed text-amber-900 bg-amber-100/60 p-2 rounded border border-amber-200 text-[11.5px]">
                            <span className="font-bold text-amber-950">Distraction analysis: </span>
                            <HighlightableText text={q.distraction} highlights={highlights} onRemoveHighlight={onRemoveHighlight} />
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Bottom Action Bar */}
      {onSubmitTest && (
        <div className="p-4 bg-white border-t border-slate-200 shrink-0 space-y-2.5">
          {isPracticeMode && showPracticeAnswers && onGoToConsolidation && (
            <div className="p-3 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg flex items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-indigo-600 shrink-0" />
                <div>
                  <span className="font-bold text-slate-900">Consolidation Unlocked: </span>
                  <span className="text-slate-600">Review key language input, collocations & skills practice.</span>
                </div>
              </div>
              <button
                onClick={onGoToConsolidation}
                className="px-3.5 py-1.5 rounded bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs whitespace-nowrap transition shadow-xs cursor-pointer"
              >
                Study Language →
              </button>
            </div>
          )}

          <button
            id="submit-answers-bottom-btn"
            onClick={onSubmitTest}
            className="w-full bg-[#1E293B] text-white py-2.5 rounded font-bold text-sm tracking-widest hover:bg-slate-800 uppercase shadow-xs transition cursor-pointer"
          >
            {isPracticeMode ? (showPracticeAnswers ? 'Review All Results' : 'Check Answers') : 'Submit Answers'}
          </button>
        </div>
      )}
    </div>
  );
};
