import { Paragraph, Question, QuestionTip, StatementOption, PersonItem } from '../types';

export const PASSAGE_TITLE = "The robots are coming – or are they?";
export const PASSAGE_SUBTITLE = "What is the current state of play in Artificial Intelligence?";

export const GENERAL_TEST_TIP: QuestionTip = {
  type: 'test',
  title: 'What is Reading Passage 2?',
  content: '• A text of up to 900 words.\n• Two or three different tasks, with a total of 13 or 14 questions (Questions 14–26).\n• Tasks tested here: Locating information (14–20), Matching names (21–23), and Summary completion (24–26).'
};

export const LOCATING_INFO_ACTION_PLAN: QuestionTip = {
  type: 'action-plan',
  title: 'Action plan for Locating information (Questions 14–20)',
  content: '1. Look at the title and subtitle and decide who or what the text is about.\n2. Read the questions quickly and see what else you can predict about the text.\n3. Read the text very quickly to get a general idea of what it is about.\n4. Read each question carefully and find the part of the text which contains the same information as the question.\n• Tip: Some paragraphs may contain the answers to more than one question and some paragraphs may not contain any answers.\n5. Check that the paragraph you choose as the answer has exactly the same information as the question.'
};

export const MATCHING_NAMES_ACTION_PLAN: QuestionTip = {
  type: 'action-plan',
  title: 'Action plan for Matching names (Questions 21–23)',
  content: '1. Look at the list of names. Find them in the text and underline them.\n• Tip: Sometimes the names are in more than one place.\n2. For each name, read all the things that person says.\n3. For each name, choose the statement which matches one of the things they say. Each name can be matched with only one statement.\n• Tip: There are two statements which don\'t match any of the names.\n• Tip! Write the letter of the correct statement, not the paragraph where you find the answer.'
};

export const SUMMARY_COMPLETION_ACTION_PLAN: QuestionTip = {
  type: 'action-plan',
  title: 'Action plan for Summary completion (Questions 24–26)',
  content: '1. Read the instructions and check how many words you have to write (ONE WORD ONLY).\n2. Locate the part(s) of the text you need by reading the summary and underlining important words. The title of the summary may help you.\n• Tip: The information you need may be in one paragraph or it may be spread over a longer part of the text.\n3. Look at each numbered gap and decide what kind of word(s) you need (e.g. noun, verb, adjective).\n4. Read the relevant part(s) of the text and underline the word(s) which you think fit(s) in each gap.\n5. Write the words in the gaps and then read the summary again. It should make sense and summarise exactly what the text says.\n• Tip! Write each word exactly as it appears in the text. Check if it is singular or plural.'
};

export const LIST_OF_STATEMENTS: StatementOption[] = [
  {
    id: 'A',
    label: 'A',
    statement: 'Artificial Intelligence may require something equivalent to feelings in order to succeed.'
  },
  {
    id: 'B',
    label: 'B',
    statement: 'Different kinds of people use different parts of the brain.'
  },
  {
    id: 'C',
    label: 'C',
    statement: 'Tests involving fiction have defeated Artificial Intelligence so far.'
  },
  {
    id: 'D',
    label: 'D',
    statement: 'People have intellectual capacities which do not exist in computers.'
  },
  {
    id: 'E',
    label: 'E',
    statement: 'People have no reason to be frightened of robots.'
  }
];

export const LIST_OF_PEOPLE: PersonItem[] = [
  { id: 21, name: 'Colin McGinn' },
  { id: 22, name: 'Marvin Minsky' },
  { id: 23, name: 'Hans Moravec' }
];

export const PARAGRAPHS: Paragraph[] = [
  {
    id: 'A',
    text: "Can robots advance so far that they become the ultimate threat to our existence? Some scientists say no, and dismiss the very idea of Artificial Intelligence. The human brain, they argue, is the most complicated system ever created, and any machine designed to reproduce human thought is bound to fail. Physicist Roger Penrose of Oxford University and others believe that machines are physically incapable of human thought. Colin McGinn of Rutgers University backs this up when he says that Artificial Intelligence 'is like sheep trying to do complicated psychoanalysis. They just don't have the conceptual equipment they need in their limited brains'."
  },
  {
    id: 'B',
    text: "Artificial Intelligence, or AI, is different from most technologies in that scientists still understand very little about how intelligence works. Physicists have a good understanding of Newtonian mechanics and the quantum theory of atoms and molecules, whereas the basic laws of intelligence remain a mystery. But a sizeable number of mathematicians and computer scientists, who are specialists in the area, are optimistic about the possibilities. To them it is only a matter of time before a thinking machine walks out of the laboratory. Over the years, various problems have impeded all efforts to create robots. To attack these difficulties, researchers tried to use the 'top-down approach', using a computer in an attempt to program all the essential rules onto a single disc. By inserting this into a machine, it would then become self-aware and attain human-like intelligence."
  },
  {
    id: 'C',
    text: "In the 1950s and 1960s great progress was made, but the shortcomings of these prototype robots soon became clear. They were huge and took hours to navigate across a room. Meanwhile, a fruit fly, with a brain containing only a fraction of the computing power, can effortlessly navigate in three dimensions. Our brains, like the fruit fly's, unconsciously recognise what we see by performing countless calculations. This unconscious awareness of patterns is exactly what computers are missing. The second problem is robots' lack of common sense. Humans know that water is wet and that mothers are older than their daughters. But there is no mathematics that can express these truths. Children learn the intuitive laws of biology and physics by interacting with the real world. Robots know only what has been programmed into them."
  },
  {
    id: 'D',
    text: "Because of the limitations of the top-down approach to Artificial Intelligence, attempts have been made to use a 'bottom-up' approach instead - that is, to try to imitate evolution and the way a baby learns. Rodney Brooks was the director of MIT's Artificial Intelligence laboratory, famous for its lumbering 'top-down' walking robots. He changed the course of research when he explored the unorthodox idea of tiny 'insectoid' robots that learned to walk by bumping into things instead of computing mathematically the precise position of their feet. Today many of the descendants of Brooks' insectoid robots are on Mars gathering data for NASA (The National Aeronautics and Space Administration), running across the dusty landscape of the planet. For all their successes in mimicking the behaviour of insects, however, robots using neural networks have performed miserably when their programmers have tried to duplicate in them the behaviour of higher organisms such as mammals. MIT's Marvin Minsky summarises the problems of AI: 'The history of AI is sort of funny because the first real accomplishments were beautiful things, like a machine that could do well in a maths course. But then we started to try to make machines that could answer questions about simple children's stories. There's no machine today that can do that.'"
  },
  {
    id: 'E',
    text: "There are people who believe that eventually there will be a combination between the top-down and bottom-up, which may provide the key to Artificial Intelligence. As adults, we blend the two approaches. It has been suggested that our emotions represent the quality that most distinguishes us as human, that it is impossible for machines ever to have emotions. Computer expert Hans Moravec thinks that in the future robots will be programmed with emotions such as fear to protect themselves so that they can signal to humans when their batteries are running low, for example. Emotions are vital in decision-making. People who have suffered a certain kind of brain injury lose the ability to experience emotions and become unable to make decisions. Without emotions to guide them, they debate endlessly over their options. Moravec points out that as robots become more intelligent and are able to make choices, they could likewise become paralysed with indecision. To aid them, robots of the future might need to have emotions hardwired into their brains."
  },
  {
    id: 'F',
    text: "There is no universal consensus as to whether machines can be conscious, or even, in human terms, what consciousness means. Minsky suggests the thinking process in our brain is not localised but spread out, with different centres competing with one another at any given time. Consciousness may then be viewed as a sequence of thoughts and images issuing from these different, smaller 'minds', each one competing for our attention. Robots might eventually attain a 'silicon consciousness'. Robots, in fact, might one day embody an architecture for thinking and processing information that is different from ours - but also indistinguishable. If that happens, the question of whether they really 'understand' becomes largely irrelevant. A robot that has perfect mastery of syntax, for all practical purposes, understands what is being said."
  }
];

export const QUESTIONS: Question[] = [
  // Section 1: Questions 14-20 (Locating information: Paragraphs A-F)
  {
    id: 14,
    section: 'matching',
    prompt: "an insect that proves the superiority of natural intelligence over Artificial Intelligence",
    correctAnswers: ["C"],
    displayAnswer: "C",
    paragraphRef: 'C',
    quote: "Meanwhile, a fruit fly, with a brain containing only a fraction of the computing power, can effortlessly navigate in three dimensions.",
    explanation: "Paragraphs C and D mention insects. Paragraph C mentions a specific insect – fruit flies: 'Meanwhile, a fruit fly, with a brain containing only a fraction of the computing power, can effortlessly navigate in three dimensions.'",
    distraction: "Paragraph D is wrong because it talks about robots copying insects but not about a particular insect.",
    advice: "Scan the text quickly to find any paragraphs which mention insects. Read those paragraphs carefully. Which matches the information in the question? You need to find a reference to a particular insect rather than insects in general.",
    tips: [
      {
        id: 'advice-14',
        type: 'advice',
        title: 'Advice: Question 14',
        content: "Scan the text quickly to find any paragraphs which mention insects. Read those paragraphs carefully. You need to find a reference to a particular insect rather than insects in general."
      }
    ]
  },
  {
    id: 15,
    section: 'matching',
    prompt: "robots being able to benefit from their mistakes",
    correctAnswers: ["D"],
    displayAnswer: "D",
    paragraphRef: 'D',
    quote: "...the unorthodox idea of tiny 'insectoid' robots that learned to walk by bumping into things instead of computing mathematically the precise position of their feet.",
    explanation: "Paragraph D mentions robots learning from their mistakes [= bumping into things]: the text says '... the unorthodox idea of tiny \"insectoid\" robots that learned to walk by bumping into things instead of computing mathematically the precise position of their feet'.",
    distraction: "The other paragraphs all talk about robots learning things and what they can't do but they don't mention them 'learning from their mistakes'.",
    advice: "Scan the text quickly to find which paragraph talks about robots learning from their mistakes. Most of the paragraphs talk about the things robots aren't good at but only one paragraph mentions them learning from mistakes.",
    tips: [
      {
        id: 'advice-15',
        type: 'advice',
        title: 'Advice: Question 15',
        content: "Scan the text quickly to find which paragraph talks about robots learning from their mistakes. Most of the paragraphs talk about things robots aren't good at, but only one mentions learning from mistakes."
      }
    ]
  },
  {
    id: 16,
    section: 'matching',
    prompt: "many researchers not being put off believing that Artificial Intelligence will eventually be developed",
    correctAnswers: ["B"],
    displayAnswer: "B",
    paragraphRef: 'B',
    quote: "But a sizeable number of mathematicians and computer scientists, who are specialists in the area, are optimistic about the possibilities. To them it is only a matter of time before a thinking machine walks out of the laboratory.",
    explanation: "Paragraph B mentions mathematicians and computer scientists who are 'optimistic [= not put off]' about the possibilities: the text says 'But a sizeable number of mathematicians and computer scientists, who are specialists in the area, [=many researchers] are optimistic about the possibilities. To them it is only a matter of time [= will eventually] before a thinking machine [=Artificial Intelligence] walks out of the laboratory [= be developed]'.",
    distraction: "The researchers [= scientists] in Paragraph A are negative about the future. Paragraph D is about past research and Paragraph E mentions people who believe AI will be developed but they aren't 'many researchers'.",
    advice: "All the paragraphs mention researchers but which paragraph mentions some who are positive about the future of Artificial Intelligence? Which words in the text mean 'not being put off'?",
    tips: [
      {
        id: 'advice-16',
        type: 'advice',
        title: 'Advice: Question 16',
        content: "All the paragraphs mention researchers, but which paragraph mentions some who are positive about the future of Artificial Intelligence? Look for words that mean 'not being put off' ('optimistic about the possibilities')."
      }
    ]
  },
  {
    id: 17,
    section: 'matching',
    prompt: "an innovative approach that is having limited success",
    correctAnswers: ["D"],
    displayAnswer: "D",
    paragraphRef: 'D',
    quote: "He changed the course of research when he explored the unorthodox idea of tiny 'insectoid' robots... Today many of the descendants of Brooks' insectoid robots are on Mars gathering data for NASA... For all their successes in mimicking the behaviour of insects, however, robots using neural networks have performed miserably when their programmers have tried to duplicate in them the behaviour of higher organisms such as mammals.",
    explanation: "The text says 'He changed the course of research when he explored the unorthodox idea of tiny \"insectoid\" robots ... Today many of the descendants of Brooks' insectoid robots are on Mars gathering data for NASA ... For all their successes in mimicking the behaviour of insects, however ...'.",
    distraction: "In Paragraph C, robots are mentioned which had 'limited' success but the reference is to the past (whereas the approach in Paragraph D is still having some success on Mars).",
    advice: "Check the tense in this question. Find a paragraph in the text which mentions an innovative approach. Is it having limited success now?",
    tips: [
      {
        id: 'advice-17',
        type: 'advice',
        title: 'Advice: Question 17',
        content: "Check the present tense ('is having limited success'). Find a paragraph that mentions an innovative approach that is still having some success right now (Brooks' insectoid descendants on Mars)."
      }
    ]
  },
  {
    id: 18,
    section: 'matching',
    prompt: "the possibility of creating Artificial Intelligence being doubted by some academics",
    correctAnswers: ["A"],
    displayAnswer: "A",
    paragraphRef: 'A',
    quote: "Physicist Roger Penrose of Oxford University and others believe that machines are physically incapable of human thought.",
    explanation: "Paragraph A says 'Physicist Roger Penrose of Oxford University and others [= some academics] believe that machines are physically incapable of human thought [= doubt the possibility of creating Artificial Intelligence]'.",
    distraction: "Paragraphs B, E and F talk about creating Artificial Intelligence in the future as something very possible, not something that is in doubt; Paragraph D says that there are problems creating Artificial Intelligence but it talks about partial successes.",
    advice: "The important word here is 'doubted'.",
    tips: [
      {
        id: 'advice-18',
        type: 'advice',
        title: 'Advice: Question 18',
        content: "The key keyword is 'doubted'. Look in Paragraph A where Oxford physicist Roger Penrose and Colin McGinn dismiss AI and declare machines physically incapable of human thought."
      }
    ]
  },
  {
    id: 19,
    section: 'matching',
    prompt: "no generally accepted agreement of what our brains do",
    correctAnswers: ["F"],
    displayAnswer: "F",
    paragraphRef: 'F',
    quote: "There is no universal consensus as to whether machines can be conscious, or even, in human terms, what consciousness means.",
    explanation: "Paragraph F says 'There is no universal consensus [= generally accepted agreement] as to ... , in human terms, what consciousness means [= what our brains do]'.",
    distraction: "Paragraph B says 'the basic laws of intelligence remain a mystery' (there is no mention of a lack of agreement).",
    advice: "Find a phrase which means 'generally accepted agreement'. An idea in the text will probably be expressed in the question with different words.",
    tips: [
      {
        id: 'advice-19',
        type: 'advice',
        title: 'Advice: Question 19',
        content: "Find a synonym phrase for 'generally accepted agreement' ('universal consensus') in Paragraph F."
      }
    ]
  },
  {
    id: 20,
    section: 'matching',
    prompt: "robots not being able to extend their intelligence in the same way as humans",
    correctAnswers: ["C"],
    displayAnswer: "C",
    paragraphRef: 'C',
    quote: "Children learn the intuitive laws of biology and physics by interacting with the real world. Robots know only what has been programmed into them.",
    explanation: "The text says that humans learn by extending what we already know through interacting with the real world, but 'Robots know only what has been programmed into them'.",
    distraction: "Paragraph D is about robots being unable to copy the behaviour patterns of higher mammals [= humans] rather than about them extending their own intelligence.",
    advice: "Check how the paragraph contrasts the way human children learn intuitive laws with how robots operate.",
    tips: [
      {
        id: 'advice-20',
        type: 'advice',
        title: 'Advice: Question 20',
        content: "Look at how Paragraph C contrasts how children extend their intelligence ('learn the intuitive laws of biology and physics by interacting with the real world') with robots ('know only what has been programmed into them')."
      }
    ]
  },

  // Section 2: Questions 21-23 (Matching names: Colin McGinn, Marvin Minsky, Hans Moravec to Statements A-E)
  {
    id: 21,
    section: 'name-matching',
    prompt: "Colin McGinn",
    correctAnswers: ["D"],
    displayAnswer: "D",
    paragraphRef: 'A',
    quote: "Colin McGinn of Rutgers University backs this up when he says that Artificial Intelligence 'is like sheep trying to do complicated psychoanalysis. They just don't have the conceptual equipment they need in their limited brains'.",
    explanation: "Colin McGinn says Artificial Intelligence 'is like sheep trying to do complicated psychoanalysis. They just don't have the conceptual equipment ...' meaning people have intellectual capacities which do not exist in computers.",
    distraction: "Statement A is wrong because although McGinn mentions psychoanalysis, he is using it as an example of how intelligent humans are compared to machines (he is not referring to feelings).",
    advice: "Read what Colin McGinn says and match it to one of the statements. Notice why A is wrong.",
    tips: [
      {
        id: 'advice-21',
        type: 'advice',
        title: 'Advice: Question 21 (Colin McGinn)',
        content: "Read what Colin McGinn says in Paragraph A. His analogy of 'sheep trying to do complicated psychoanalysis' shows machines lack the mental faculties humans possess (Statement D)."
      }
    ]
  },
  {
    id: 22,
    section: 'name-matching',
    prompt: "Marvin Minsky",
    correctAnswers: ["C"],
    displayAnswer: "C",
    paragraphRef: 'D',
    quote: "MIT's Marvin Minsky summarises the problems of AI: 'The history of AI is sort of funny because the first real accomplishments were beautiful things, like a machine that could do well in a maths course. But then we started to try to make machines that could answer questions about simple children's stories. There's no machine today that can do that.'",
    explanation: "Marvin Minsky says 'But then we started to try to make machines that could answer questions about simple children's stories. There's no machine today that can do that' – tests involving fiction (children's stories) have defeated AI so far.",
    distraction: "Statement B is wrong because although Minsky talks about different parts of the brain in Paragraph F, he doesn't say that different kinds of people use different parts.",
    advice: "Marvin Minsky is quoted in two different paragraphs (D and F). Read what he says in both places and match one of the statements to what he says.",
    tips: [
      {
        id: 'advice-22',
        type: 'advice',
        title: 'Advice: Question 22 (Marvin Minsky)',
        content: "Minsky is cited in Paragraph D and Paragraph F. In Paragraph D, he points out that AI failed at answering questions about 'simple children's stories' (fiction, matching Statement C)."
      }
    ]
  },
  {
    id: 23,
    section: 'name-matching',
    prompt: "Hans Moravec",
    correctAnswers: ["A"],
    displayAnswer: "A",
    paragraphRef: 'E',
    quote: "Without emotions to guide them, [brain-damaged people] debate endlessly over their options ... as robots become more intelligent and are able to make choices, they could likewise become paralysed with indecision. To aid them, robots of the future might need to have emotions hardwired into their brains.",
    explanation: "Hans Moravec says 'Without emotions to guide them, [brain-damaged people] debate endlessly over their options ... as robots become more intelligent and are able to make choices, they could likewise become paralysed with indecision. To aid them, robots of the future might need to have emotions hardwired into their brains' – Artificial Intelligence may require something equivalent to feelings in order to succeed.",
    distraction: "Statement E is wrong because Moravec says robots will be programmed to feel fear to protect themselves, but doesn't mention whether people should be frightened of them or not.",
    advice: "Read what Hans Moravec says in Paragraph E and match it to one of the statements.",
    tips: [
      {
        id: 'advice-23',
        type: 'advice',
        title: 'Advice: Question 23 (Hans Moravec)',
        content: "Read Paragraph E. Moravec argues that without emotions, robots could become paralysed with indecision, so future robots might need emotions hardwired in (Statement A)."
      }
    ]
  },

  // Section 3: Questions 24-26 (Summary completion: ONE WORD ONLY)
  {
    id: 24,
    section: 'summary',
    prompt: "They were given the information they needed on a 24 [.......].",
    preText: "Despite some advances, the early robots had certain weaknesses. They were given the information they needed on a",
    postText: ". This was known as the 'top-down' approach and enabled them to do certain tasks",
    correctAnswers: ["disc", "disk"],
    displayAnswer: "disc",
    paragraphRef: 'B',
    quote: "...researchers tried to use the 'top-down approach', using a computer in an attempt to program all the essential rules onto a single disc. By inserting this into a machine, it would then become self-aware and attain human-like intelligence.",
    explanation: "'top-down approach' is at the end of Paragraph B so that is where the answer is (the instructions allow only one word per gap, so 'single disc' is not correct).",
    distraction: "'computer' is wrong because the disc is put into the robot. The computer is used to program the disc.",
    advice: "Find the sentence about how robots were given information. The instructions allow only ONE WORD ONLY, so write 'disc' ('single disc' is disallowed).",
    tips: [
      {
        id: 'advice-24',
        type: 'advice',
        title: 'Advice: Question 24',
        content: "Locate 'top-down approach' in Paragraph B. Notice the phrase 'onto a single disc'. The instruction specifies ONE WORD ONLY, so write 'disc'."
      }
    ]
  },
  {
    id: 25,
    section: 'summary',
    prompt: "...and enabled them to do certain tasks but they were unable to recognise 25 [.......].",
    preText: "and enabled them to do certain tasks but they were unable to recognise",
    postText: ". Nor did they have any intuition or ability to make decisions based on experience.",
    correctAnswers: ["patterns", "pattern"],
    displayAnswer: "patterns",
    paragraphRef: 'C',
    quote: "Our brains, like the fruit fly's, unconsciously recognise what we see by performing countless calculations. This unconscious awareness of patterns is exactly what computers are missing.",
    explanation: "Paragraph C says 'Our brains, like the fruit fly's, unconsciously recognise what we see by performing countless calculations. This unconscious awareness of patterns is exactly what computers are missing.'",
    distraction: "'what we see' doesn't make sense and is more than one word; 'common sense' is wrong because you can't 'recognise' common sense; it is also two words.",
    advice: "Find the part of Paragraph C about what robots/computers cannot recognise. You need ONE WORD ONLY ('patterns').",
    tips: [
      {
        id: 'advice-25',
        type: 'advice',
        title: 'Advice: Question 25',
        content: "In Paragraph C, computers lack 'unconscious awareness of patterns' and cannot unconsciously recognise what we see through countless calculations."
      }
    ]
  },
  {
    id: 26,
    section: 'summary',
    prompt: "Robots similar to those invented by Brooks are to be found on 26 [.......] where they are collecting information.",
    preText: "Rodney Brooks tried a different approach. Robots similar to those invented by Brooks are to be found on",
    postText: "where they are collecting information.",
    correctAnswers: ["mars"],
    displayAnswer: "Mars",
    paragraphRef: 'D',
    quote: "Today many of the descendants of Brooks' insectoid robots are on Mars gathering data for NASA (The National Aeronautics and Space Administration), running across the dusty landscape of the planet.",
    explanation: "Paragraph D says 'Today many of the descendants of Brooks' insectoid robots [= robots similar to those invented by Brooks] are on Mars gathering data [= collecting information] for NASA'.",
    distraction: "'NASA' is wrong because that is where the information is sent, not where the robots are.",
    advice: "Find the part of Paragraph D about Rodney Brooks and where the robots are located. They are on 'Mars' ('NASA' is the organisation they collect data for).",
    tips: [
      {
        id: 'advice-26',
        type: 'advice',
        title: 'Advice: Question 26',
        content: "Scan Paragraph D for Rodney Brooks. Notice 'on Mars gathering data for NASA'. The location is 'Mars'."
      }
    ]
  }
];

export const calculateBandScore = (correctCount: number): string => {
  if (correctCount >= 13) return 'Band 9.0';
  if (correctCount === 12) return 'Band 8.5';
  if (correctCount === 11) return 'Band 8.0';
  if (correctCount === 10) return 'Band 7.5';
  if (correctCount >= 8) return 'Band 7.0';
  if (correctCount === 7) return 'Band 6.5';
  if (correctCount >= 5) return 'Band 6.0';
  if (correctCount === 4) return 'Band 5.5';
  if (correctCount === 3) return 'Band 5.0';
  if (correctCount >= 1) return 'Band 4.0';
  return 'Band 0.0';
};
