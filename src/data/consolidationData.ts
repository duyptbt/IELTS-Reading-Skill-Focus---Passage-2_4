import {
  VocabItem,
  AcademicStructure,
  SynonymMatchTask,
  CollocationGapTask,
  DiscourseAnalysisTask,
  SpeedEvidenceTask
} from '../types';

export const VOCABULARY_ITEMS: VocabItem[] = [
  {
    id: 'v1',
    term: 'unorthodox',
    phonetic: '/ʌnˈɔːθədɒks/',
    partOfSpeech: 'adjective',
    definition: 'Contrary to what is usual, traditional, or accepted; unconventional.',
    passageQuote: 'He changed the course of research when he explored the unorthodox idea of tiny "insectoid" robots that learned to walk by bumping into things...',
    paragraphRef: 'D',
    collocations: ['unorthodox approach', 'unorthodox methods', 'unorthodox views'],
    synonyms: ['unconventional', 'non-traditional', 'radical', 'innovative', 'heretical'],
    ieltsBand: 'Band 8',
    category: 'Artificial Intelligence & Tech',
    writingSpeakingTip: 'Great for Task 2 essays discussing creative solutions or scientific breakthroughs (e.g. "Tackling climate change requires unorthodox engineering interventions rather than incremental adjustments").'
  },
  {
    id: 'v2',
    term: 'shortcomings',
    phonetic: '/ˈʃɔːtˌkʌmɪŋz/',
    partOfSpeech: 'noun (plural)',
    definition: 'Faults, defects, or failures to meet a certain standard or requirement.',
    passageQuote: 'In the 1950s and 1960s great progress was made, but the shortcomings of these prototype robots soon became clear.',
    paragraphRef: 'C',
    collocations: ['highlight shortcomings', 'overcome shortcomings', 'inherent shortcomings', 'glaring shortcomings'],
    synonyms: ['flaws', 'deficiencies', 'weaknesses', 'limitations', 'drawbacks'],
    ieltsBand: 'Band 7',
    category: 'Academic Verbs',
    writingSpeakingTip: 'A sophisticated academic substitute for "bad things" or "problems" when critiquing systems, policies, or experimental models.'
  },
  {
    id: 'v3',
    term: 'impeded',
    phonetic: '/ɪmˈpiːdɪd/',
    partOfSpeech: 'verb (past tense)',
    definition: 'Hindered, obstructed, or slowed down the progress or development of something.',
    passageQuote: 'Over the years, various problems have impeded all efforts to create robots.',
    paragraphRef: 'B',
    collocations: ['impede progress', 'impede development', 'severely impeded'],
    synonyms: ['hindered', 'hampered', 'obstructed', 'thwarted', 'stymied'],
    ieltsBand: 'Band 8',
    category: 'Academic Verbs',
    writingSpeakingTip: 'Use in cause-and-effect discussions: "Economic recessions have repeatedly impeded governmental investment in renewable infrastructure."'
  },
  {
    id: 'v4',
    term: 'paralysed with indecision',
    phonetic: '/ˈpærəlaɪzd wɪð ˌɪndɪˈsɪʒn/',
    partOfSpeech: 'idiomatic collocation',
    definition: 'Completely unable to make a choice or take action due to uncertainty, fear, or endless deliberation.',
    passageQuote: '...as robots become more intelligent and are able to make choices, they could likewise become paralysed with indecision.',
    paragraphRef: 'E',
    collocations: ['paralysed with indecision', 'crippled by doubt', '陷入绝境/左右为难'],
    synonyms: ['immobilised by choice', 'debilitated by overthinking', 'deadlocked'],
    ieltsBand: 'Band 9',
    category: 'Metaphors & Idioms',
    writingSpeakingTip: 'Expressive phrase for psychology or management topics when discussing decision fatigue or cognitive overload.'
  },
  {
    id: 'v5',
    term: 'universal consensus',
    phonetic: '/ˌjuːnɪˈvɜːsl kənˈsensəs/',
    partOfSpeech: 'noun phrase',
    definition: 'Widespread, unanimous agreement among all members of a group or academic community.',
    passageQuote: 'There is no universal consensus as to whether machines can be conscious, or even, in human terms, what consciousness means.',
    paragraphRef: 'F',
    collocations: ['reach a universal consensus', 'lack of universal consensus', 'scientific consensus'],
    synonyms: ['unanimous agreement', 'general accord', 'collective concurrence'],
    ieltsBand: 'Band 8',
    category: 'Formal Collocations',
    writingSpeakingTip: 'Standard academic phrasing for controversial topics: "Although debate persists, there is a growing universal consensus regarding the urgency of AI regulation."'
  },
  {
    id: 'v6',
    term: 'conceptual equipment',
    phonetic: '/kənˈseptʃuəl ɪˈkwɪpmənt/',
    partOfSpeech: 'noun phrase',
    definition: 'The intellectual faculties, cognitive categories, or mental architecture necessary to process and understand complex ideas.',
    passageQuote: 'They just don\'t have the conceptual equipment they need in their limited brains.',
    paragraphRef: 'A',
    collocations: ['lack conceptual equipment', 'possess conceptual equipment', 'cognitive apparatus'],
    synonyms: ['cognitive framework', 'intellectual faculties', 'mental capacity'],
    ieltsBand: 'Band 9',
    category: 'Artificial Intelligence & Tech',
    writingSpeakingTip: 'Band 9 phrase for epistemological topics. Distinguishes raw computational brute force from human qualitative understanding.'
  },
  {
    id: 'v7',
    term: 'hardwired',
    phonetic: '/ˌhɑːdˈwaɪəd/',
    partOfSpeech: 'adjective',
    definition: 'Inherent, genetically determined, or permanently built into a system or organism.',
    passageQuote: 'To aid them, robots of the future might need to have emotions hardwired into their brains.',
    paragraphRef: 'E',
    collocations: ['hardwired into the brain', 'biologically hardwired', 'hardwired behavior'],
    synonyms: ['innate', 'inbuilt', 'intrinsic', 'ingrained', 'instinctive'],
    ieltsBand: 'Band 8',
    category: 'Artificial Intelligence & Tech',
    writingSpeakingTip: 'Use when debating nature versus nurture: "Certain social reflexes appear to be hardwired into human psychology rather than acquired purely through culture."'
  },
  {
    id: 'v8',
    term: 'mastery of syntax',
    phonetic: '/ˈmɑːstəri əv ˈsɪntæks/',
    partOfSpeech: 'noun phrase',
    definition: 'Complete, flawless command over grammatical structures and sentence organization.',
    passageQuote: 'A robot that has perfect mastery of syntax, for all practical purposes, understands what is being said.',
    paragraphRef: 'F',
    collocations: ['mastery of syntax', 'syntactic fluency', 'grammatical competence'],
    synonyms: ['grammatical proficiency', 'structural fluency'],
    ieltsBand: 'Band 9',
    category: 'Formal Collocations',
    writingSpeakingTip: 'Often contrasted with "semantics" (meaning) in philosophy of language and linguistics.'
  },
  {
    id: 'v9',
    term: 'lumbering',
    phonetic: '/ˈlʌmbərɪŋ/',
    partOfSpeech: 'adjective',
    definition: 'Moving in a slow, heavy, clumsy, and awkward manner.',
    passageQuote: '...director of MIT\'s Artificial Intelligence laboratory, famous for its lumbering \'top-down\' walking robots.',
    paragraphRef: 'D',
    collocations: ['lumbering gait', 'lumbering machine', 'lumbering bureaucracy'],
    synonyms: ['clumsy', 'ponderous', 'ungainly', 'unwieldy'],
    ieltsBand: 'Band 8',
    category: 'Metaphors & Idioms',
    writingSpeakingTip: 'Can be used metaphorically to describe slow, inefficient government bodies or legacy corporations.'
  }
];

export const ACADEMIC_STRUCTURES: AcademicStructure[] = [
  {
    id: 'struct-1',
    title: 'Simile for Incommensurable Cognitive Disparity',
    category: 'Rhetorical Framing & Analogies',
    pattern: '[Phenomenon A] is like [humble entity] trying to do [advanced pursuit]. They just don\'t have the [conceptual equipment]...',
    passageExample: 'Colin McGinn backs this up when he says that Artificial Intelligence \'is like sheep trying to do complicated psychoanalysis. They just don\'t have the conceptual equipment they need in their limited brains\'.',
    paragraphRef: 'A',
    explanation: 'Academic writers use stark, provocative similes to demonstrate that a technological or philosophical obstacle is not simply a matter of speed or quantity, but a categorical impossibility due to missing conceptual faculties.',
    ieltsApplication: 'Use in IELTS Task 2 discussion essays to critique over-optimistic claims: "Expecting automated algorithms to resolve moral ethical dilemmas is like sheep trying to do complicated jurisprudence."',
    templateExercise: {
      scaffold: 'Believing that [Simplistic tool] can resolve [Complex human challenge] is like [Vivid animal analogy] trying to do [High-level discipline]; it simply lacks the requisite [Qualitative faculty].',
      sampleCompletion: 'Believing that social media algorithms can cultivate genuine community is like toddlers trying to negotiate international diplomacy; they simply lack the requisite emotional empathy.'
    }
  },
  {
    id: 'struct-2',
    title: 'Concessive Contrast of Scale & Asymmetric Performance',
    category: 'Concessive Evaluation & Complex Contrast',
    pattern: 'For all their successes in [Domain A], however, [Subject] has performed [adverb: miserably/poorly] when [Attempting Domain B]...',
    passageExample: 'For all their successes in mimicking the behaviour of insects, however, robots using neural networks have performed miserably when their programmers have tried to duplicate in them the behaviour of higher organisms such as mammals.',
    paragraphRef: 'D',
    explanation: 'The phrase "For all their successes in X, however, Y performed miserably" establishes a dramatic, nuanced contrast between lower-level mechanical feats and higher-order cognitive complexities.',
    ieltsApplication: 'Essential for balanced IELTS Task 2 essays evaluating technological or economic reforms: "For all its success in boosting GDP, however, the industrial expansion performed miserably in addressing regional inequality."',
    templateExercise: {
      scaffold: 'For all their successes in [Primary achievement], however, [Systems/Organisations] have performed miserably when [Challenging follow-up scenario].',
      sampleCompletion: 'For all their successes in accelerating communications, however, modern smartphones have performed miserably when evaluated on their impact on adolescent attention spans.'
    }
  },
  {
    id: 'struct-3',
    title: 'Counterfactual Consequence of Missing Attributes',
    category: 'Logical Causality & Biological Prerequisites',
    pattern: 'Without [Crucial Guide/Faculty] to guide them, [Subject] [undesirable paralysis/outcome]... To aid them, [Subject] of the future might need to have [Feature] hardwired into...',
    passageExample: 'Without emotions to guide them, they debate endlessly over their options... as robots become more intelligent and are able to make choices, they could likewise become paralysed with indecision. To aid them, robots of the future might need to have emotions hardwired into their brains.',
    paragraphRef: 'E',
    explanation: 'Demonstrates how a seemingly non-rational faculty (emotions) is logically essential to prevent cognitive paralysis during open-ended decision-making.',
    ieltsApplication: 'Use to argue for holistic education or leadership skills: "Without philosophical ethics to guide them, policymakers debate endlessly over bureaucratic metrics. To aid them, humanistic values must be integrated into core governance."',
    templateExercise: {
      scaffold: 'Without [Intrinsic guiding principle] to guide them, [Leaders/Systems] risk becoming paralysed with [Negative state]. To aid them, [Remedy] must be hardwired into [Core institutional architecture].',
      sampleCompletion: 'Without clear moral convictions to guide them, executive boards risk becoming paralysed with indecision during public crises. To aid them, ethical accountability must be hardwired into corporate governance.'
    }
  },
  {
    id: 'struct-4',
    title: 'Epistemic Relativism and Functional Equivalence',
    category: 'Academic Caution & Operational Definitions',
    pattern: 'If that happens, the question of whether [Entities] really [internal state] becomes largely irrelevant. An [Agent] that has [observable mastery], for all practical purposes, [satisfies the criterion].',
    passageExample: 'If that happens, the question of whether they really \'understand\' becomes largely irrelevant. A robot that has perfect mastery of syntax, for all practical purposes, understands what is being said.',
    paragraphRef: 'F',
    explanation: 'The idiom "for all practical purposes" bypasses insoluble metaphysical debates (like the nature of machine consciousness) by asserting functional equivalence.',
    ieltsApplication: 'Great for pragmatist conclusions in Task 2 essays: "Whether virtual reality recreates authentic travel is arguable, but a simulation with total sensory fidelity, for all practical purposes, delivers equivalent cultural enrichment."',
    templateExercise: {
      scaffold: 'If [Technological threshold] is crossed, the debate over whether [System] genuinely possesses [Human trait] becomes irrelevant; any system displaying [Observable competency], for all practical purposes, achieves [Outcome].',
      sampleCompletion: 'If automated diagnostic accuracy surpasses clinical averages, the debate over whether machines genuinely understand pathology becomes irrelevant; any model displaying 99% accuracy, for all practical purposes, performs the duty of a medical consultant.'
    }
  },
  {
    id: 'struct-5',
    title: 'Non-Localised Systems Architecture',
    category: 'Systemic Organization & Neurological Models',
    pattern: 'The [Central Process] is not localised but spread out, with [different centres] competing with one another at any given time.',
    passageExample: 'Minsky suggests the thinking process in our brain is not localised but spread out, with different centres competing with one another at any given time.',
    paragraphRef: 'F',
    explanation: 'Contrasts centralized, top-down structures with decentralized, competitive network architectures.',
    ieltsApplication: 'Ideal for describing modern decentralised networks, smart grids, or modular organizations.',
    templateExercise: {
      scaffold: 'The decision-making mechanism in [Contemporary framework] is not centralised but spread out, with [Diverse stakeholder nodes] competing with one another [Operational context].',
      sampleCompletion: 'The decision-making mechanism in open-source software development is not centralised but spread out, with independent programmer collectives competing and collaborating at any given time.'
    }
  }
];

export const SYNONYM_MATCH_TASKS: SynonymMatchTask[] = [
  {
    id: 'syn-1',
    passageWord: 'shortcomings',
    paragraphRef: 'C',
    passageContext: '...great progress was made, but the shortcomings of these prototype robots soon became clear.',
    correctSynonym: 'weaknesses / defects',
    distractors: ['achievements', 'innovations', 'abbreviations'],
    ieltsTrapNote: 'In Question 24–26 Summary Completion, "weaknesses" in the summary directly paraphrases "shortcomings" in Paragraph C.'
  },
  {
    id: 'syn-2',
    passageWord: 'unorthodox',
    paragraphRef: 'D',
    passageContext: 'He changed the course of research when he explored the unorthodox idea of tiny "insectoid" robots...',
    correctSynonym: 'unconventional / innovative',
    distractors: ['customary', 'formulaic', 'conservative'],
    ieltsTrapNote: 'Questions frequently test "unorthodox" as a marker of innovative or non-standard scientific methods.'
  },
  {
    id: 'syn-3',
    passageWord: 'impeded',
    paragraphRef: 'B',
    passageContext: 'Over the years, various problems have impeded all efforts to create robots.',
    correctSynonym: 'hindered / obstructed',
    distractors: ['facilitated', 'accelerated', 'subsidised'],
    ieltsTrapNote: '"Impede" means to obstruct or slow down, opposite to "expedite" or "enable".'
  },
  {
    id: 'syn-4',
    passageWord: 'universal consensus',
    paragraphRef: 'F',
    passageContext: 'There is no universal consensus as to whether machines can be conscious...',
    correctSynonym: 'generally accepted agreement',
    distractors: ['prevalent controversy', 'unverified hypothesis', 'individual hesitation'],
    ieltsTrapNote: 'Directly tested in Question 19: "no generally accepted agreement" in the question matches "no universal consensus" in Paragraph F.'
  },
  {
    id: 'syn-5',
    passageWord: 'indistinguishable',
    paragraphRef: 'F',
    passageContext: 'Robots, in fact, might one day embody an architecture for thinking... that is different from ours - but also indistinguishable.',
    correctSynonym: 'imperceptibly different / identical in effect',
    distractors: ['strikingly dissimilar', 'partially incomplete', 'easily recognizable'],
    ieltsTrapNote: 'Prefix "in-" indicates negation: unable to be distinguished or told apart.'
  },
  {
    id: 'syn-6',
    passageWord: 'lumbering',
    paragraphRef: 'D',
    passageContext: '...famous for its lumbering "top-down" walking robots.',
    correctSynonym: 'clumsy / slow and heavy',
    distractors: ['nimble', 'sleek', 'aerial'],
    ieltsTrapNote: 'Contrasts with the agile, tiny insectoid robots that Brooks subsequently developed.'
  }
];

export const COLLOCATION_GAP_TASKS: CollocationGapTask[] = [
  {
    id: 'gap-1',
    sentence: 'Researchers attempted to program all the fundamental computational rules onto a single __________.',
    missingWord: 'disc',
    options: ['disc', 'cable', 'antenna', 'transistor'],
    passageRef: 'B',
    collocationRule: 'The text specifies copying rules "onto a single disc" in the top-down approach.',
    explanation: 'Paragraph B explicitly states: "program all the essential rules onto a single disc. By inserting this into a machine, it would then become self-aware...".'
  },
  {
    id: 'gap-2',
    sentence: 'The human brain possesses an unconscious awareness of __________ that contemporary computers lack.',
    missingWord: 'patterns',
    options: ['patterns', 'programs', 'passwords', 'pixels'],
    passageRef: 'C',
    collocationRule: 'The collocation tested in Summary Question 25: "recognise patterns" / "awareness of patterns".',
    explanation: 'Paragraph C states: "This unconscious awareness of patterns is exactly what computers are missing."'
  },
  {
    id: 'gap-3',
    sentence: 'Without internal emotional feedback, intelligent agents may become completely paralysed with __________.',
    missingWord: 'indecision',
    options: ['indecision', 'indifference', 'injustice', 'indiscretion'],
    passageRef: 'E',
    collocationRule: 'Fixed psychological collocation: "paralysed with indecision".',
    explanation: 'Paragraph E notes: "as robots become more intelligent and are able to make choices, they could likewise become paralysed with indecision."'
  },
  {
    id: 'gap-4',
    sentence: 'Currently, there exists no universal __________ concerning whether synthetic minds can experience genuine consciousness.',
    missingWord: 'consensus',
    options: ['consensus', 'confusion', 'concession', 'collision'],
    passageRef: 'F',
    collocationRule: '"Universal consensus" denotes collective agreement across the discipline.',
    explanation: 'Paragraph F opens: "There is no universal consensus as to whether machines can be conscious, or even, in human terms, what consciousness means."'
  },
  {
    id: 'gap-5',
    sentence: 'Tiny mobile devices are currently deployed on Mars gathering __________ for NASA expeditions.',
    missingWord: 'data',
    options: ['data', 'dust', 'debris', 'donations'],
    passageRef: 'D',
    collocationRule: '"Gather data" is the academic standard for empirical information collection.',
    explanation: 'Paragraph D points out: "many of the descendants of Brooks\' insectoid robots are on Mars gathering data for NASA...".'
  },
  {
    id: 'gap-6',
    sentence: 'A machine with comprehensive mastery of __________ can be considered, for all practical purposes, to comprehend language.',
    missingWord: 'syntax',
    options: ['syntax', 'silicon', 'sensors', 'spelling'],
    passageRef: 'F',
    collocationRule: '"Mastery of syntax" refers to structural grammatical command in linguistic computing.',
    explanation: 'Paragraph F concludes: "A robot that has perfect mastery of syntax, for all practical purposes, understands what is being said."'
  }
];

export const DISCOURSE_ANALYSIS_TASKS: DiscourseAnalysisTask[] = [
  {
    id: 'disc-1',
    connector: 'Meanwhile, a fruit fly...',
    sentenceContext: 'Meanwhile, a fruit fly, with a brain containing only a fraction of the computing power, can effortlessly navigate in three dimensions.',
    paragraphRef: 'C',
    functionType: 'Comparative Contrast',
    options: ['Comparative Contrast', 'Cause & Effect', 'Exemplification', 'Concession & Counter-argument'],
    explanation: '"Meanwhile" introduces a striking biological contrast: comparing the huge, clumsy prototype robots with the tiny fruit fly possessing superior 3D navigation abilities.'
  },
  {
    id: 'disc-2',
    connector: 'Because of the limitations of the top-down approach...',
    sentenceContext: 'Because of the limitations of the top-down approach to Artificial Intelligence, attempts have been made to use a \'bottom-up\' approach instead...',
    paragraphRef: 'D',
    functionType: 'Cause & Effect',
    options: ['Cause & Effect', 'Concession & Counter-argument', 'Hedging & Evaluation', 'Exemplification'],
    explanation: '"Because of" establishes the causal motivation that triggered the paradigm shift from top-down to bottom-up robotics.'
  },
  {
    id: 'disc-3',
    connector: 'For all their successes in mimicking... however, robots have performed miserably...',
    sentenceContext: 'For all their successes in mimicking the behaviour of insects, however, robots using neural networks have performed miserably when their programmers have tried to duplicate in them the behaviour of higher organisms...',
    paragraphRef: 'D',
    functionType: 'Concession & Counter-argument',
    options: ['Concession & Counter-argument', 'Cause & Effect', 'Comparative Contrast', 'Hedging & Evaluation'],
    explanation: '"For all their successes..., however" marks a strong concessive counter-argument: acknowledging robotic triumph at insect level while exposing failure at mammalian level.'
  },
  {
    id: 'disc-4',
    connector: 'If that happens, the question of whether they really \'understand\' becomes largely irrelevant.',
    sentenceContext: 'If that happens, the question of whether they really \'understand\' becomes largely irrelevant. A robot that has perfect mastery of syntax, for all practical purposes, understands what is being said.',
    paragraphRef: 'F',
    functionType: 'Hedging & Evaluation',
    options: ['Hedging & Evaluation', 'Exemplification', 'Cause & Effect', 'Comparative Contrast'],
    explanation: 'This conditional evaluation dismisses abstract metaphysical hairsplitting in favour of operational linguistic competence.'
  },
  {
    id: 'disc-5',
    connector: '...so that they can signal to humans when their batteries are running low, for example.',
    sentenceContext: '...robots will be programmed with emotions such as fear to protect themselves so that they can signal to humans when their batteries are running low, for example.',
    paragraphRef: 'E',
    functionType: 'Exemplification',
    options: ['Exemplification', 'Concession & Counter-argument', 'Comparative Contrast', 'Hedging & Evaluation'],
    explanation: '"For example" provides a concrete practical scenario illustrating how emotional programming (fear) would manifest functionally in robot battery management.'
  }
];

export const SPEED_EVIDENCE_TASKS: SpeedEvidenceTask[] = [
  {
    id: 'speed-1',
    prompt: 'Where does the text explain that insectoid robots learned to walk by bumping into things rather than through mathematical calculations?',
    correctParagraph: 'D',
    keyEvidenceQuote: '...the unorthodox idea of tiny \'insectoid\' robots that learned to walk by bumping into things instead of computing mathematically the precise position of their feet.',
    scanningClue: 'Scan for the verb phrase "learned to walk by bumping into things" or "precise position of their feet".'
  },
  {
    id: 'speed-2',
    prompt: 'Where are emotions identified as biologically vital for human decision-making based on observations of brain-damaged patients?',
    correctParagraph: 'E',
    keyEvidenceQuote: 'People who have suffered a certain kind of brain injury lose the ability to experience emotions and become unable to make decisions. Without emotions to guide them, they debate endlessly over their options.',
    scanningClue: 'Scan for medical keywords like "brain injury", "experience emotions", and "unable to make decisions".'
  },
  {
    id: 'speed-3',
    prompt: 'Where is an insect contrasted with prototype robots to illustrate superior three-dimensional navigation?',
    correctParagraph: 'C',
    keyEvidenceQuote: 'Meanwhile, a fruit fly, with a brain containing only a fraction of the computing power, can effortlessly navigate in three dimensions.',
    scanningClue: 'Scan for the specific biological noun "fruit fly" and "three dimensions".'
  },
  {
    id: 'speed-4',
    prompt: 'Where are mathematicians and computer scientists described as being confident and optimistic about thinking machines emerging?',
    correctParagraph: 'B',
    keyEvidenceQuote: 'But a sizeable number of mathematicians and computer scientists, who are specialists in the area, are optimistic about the possibilities. To them it is only a matter of time before a thinking machine walks out of the laboratory.',
    scanningClue: 'Scan for "mathematicians", "computer scientists", and "optimistic about the possibilities".'
  },
  {
    id: 'speed-5',
    prompt: 'Where does a philosopher compare AI to sheep trying to carry out complicated psychoanalysis?',
    correctParagraph: 'A',
    keyEvidenceQuote: 'Colin McGinn of Rutgers University backs this up when he says that Artificial Intelligence \'is like sheep trying to do complicated psychoanalysis. They just don\'t have the conceptual equipment they need in their limited brains\'.',
    scanningClue: 'Scan for the proper name "Colin McGinn" or the vivid animal noun "sheep".'
  }
];

export const PARAPHRASE_MASTERY_PAIRS = [
  {
    id: 'p1',
    original: 'machines are physically incapable of human thought',
    paraphrase: 'the possibility of creating Artificial Intelligence being doubted by some academics',
    context: 'Paragraph A: Physicist Roger Penrose of Oxford University and others believe...',
    questionType: 'Locating Information (Question 18)'
  },
  {
    id: 'p2',
    original: 'tiny \'insectoid\' robots that learned to walk by bumping into things',
    paraphrase: 'robots being able to benefit from their mistakes',
    context: 'Paragraph D: Brooks\' unorthodox bottom-up approach...',
    questionType: 'Locating Information (Question 15)'
  },
  {
    id: 'p3',
    original: 'a sizeable number of specialists... are optimistic about the possibilities... it is only a matter of time',
    paraphrase: 'many researchers not being put off believing that Artificial Intelligence will eventually be developed',
    context: 'Paragraph B: Mathematicians and computer scientists...',
    questionType: 'Locating Information (Question 16)'
  },
  {
    id: 'p4',
    original: 'unorthodox idea of tiny insectoid robots... on Mars gathering data... performed miserably duplicated in higher organisms',
    paraphrase: 'an innovative approach that is having limited success',
    context: 'Paragraph D: Rodney Brooks\' MIT laboratory...',
    questionType: 'Locating Information (Question 17)'
  },
  {
    id: 'p5',
    original: 'no universal consensus as to whether machines can be conscious, or even, in human terms, what consciousness means',
    paraphrase: 'no generally accepted agreement of what our brains do',
    context: 'Paragraph F: The nature of consciousness and cognition...',
    questionType: 'Locating Information (Question 19)'
  },
  {
    id: 'p6',
    original: 'Children learn the intuitive laws of biology and physics by interacting with the real world. Robots know only what has been programmed into them.',
    paraphrase: 'robots not being able to extend their intelligence in the same way as humans',
    context: 'Paragraph C: Lack of common sense and real-world interaction...',
    questionType: 'Locating Information (Question 20)'
  }
];
