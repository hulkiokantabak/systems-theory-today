// facts.js — the project's own content-level facts, from the repo's real records
// (docs/METRICS.md, GOALS.md, outputs/CANDIDATE_THEORIES.md, panel/PANEL_ROSTER.md).
// Every number here traces to a source file; the Facts & Figures page links each to it.
// Version: 1.0 · Last updated: Session 4b
export default {
  // headline stat-cards
  cards: [
    { n: '4', label: 'working sessions', src: 'docs/METRICS.md' },
    { n: '~47k', label: 'words of content', src: 'docs/METRICS.md' },
    { n: '13', label: 'pressure-tests, in 4 layers', src: 'docs/GOALS.md' },
    { n: '3', label: 'candidate theories — all operationalized', src: 'outputs/CANDIDATE_THEORIES.md' },
    { n: '10 + 20', label: 'core panel + advisory bench', src: 'panel/PANEL_ROSTER.md' },
    { n: '6', label: 'standing disagreements preserved', src: 'logs/OPEN_QUESTIONS.md' },
  ],

  // Round-7 theory strength ratings (median /10, with the highest and lowest voter)
  theories: [
    { key: 'A', name: 'Adaptation Gap', kind: 'diagnosis', median: 7, high: ['Meadows', 9], low: ['Turchin', 4] },
    { key: 'B', name: 'Optimization Ecology', kind: 'mechanism', median: 7, high: ['Zuboff', 9], low: ['Kant', 5] },
    { key: 'C', name: 'Distributed Coherence', kind: 'response', median: 6, high: ['Ostrom', 9], low: ['Nietzsche', 3] },
  ],

  // pressure-test coverage (docs/METRICS.md §4). falsifiable: yes | partial | drafted | no
  coverage: [
    { id: 'M', name: 'Coherence vacuum', layer: 'Master', firstPass: 'Yes', home: 'A / C', falsifiable: 'no', contested: true },
    { id: 'D1', name: 'Acceleration', layer: 'Drivers', firstPass: 'Yes', home: 'A', falsifiable: 'drafted' },
    { id: 'D2', name: 'Optimization', layer: 'Drivers', firstPass: 'Yes', home: 'B', falsifiable: 'partial' },
    { id: 'D3', name: 'Wealth pump', layer: 'Drivers', firstPass: 'Yes', home: 'A · Turchin', falsifiable: 'yes' },
    { id: 'D4', name: 'Machine intelligence', layer: 'Drivers', firstPass: 'Partial', home: 'B / A', falsifiable: 'no' },
    { id: 'Y1', name: 'Epistemic breakdown', layer: 'Dynamics', firstPass: 'Yes', home: 'B + A', falsifiable: 'no' },
    { id: 'Y2', name: 'Coordination failure', layer: 'Dynamics', firstPass: 'Yes', home: 'A + C', falsifiable: 'partial' },
    { id: 'Y3', name: 'Institutional decay', layer: 'Dynamics', firstPass: 'Yes', home: 'A · Ibn Khaldun', falsifiable: 'yes' },
    { id: 'Y4', name: 'Ecological overshoot', layer: 'Dynamics', firstPass: 'Yes', home: 'A + B', falsifiable: 'partial' },
    { id: 'S1', name: 'Fertility collapse', layer: 'Symptoms', firstPass: 'Yes', home: 'A / B', falsifiable: 'no' },
    { id: 'S2', name: 'Attention economy', layer: 'Symptoms', firstPass: 'Yes', home: 'B', falsifiable: 'partial' },
    { id: 'S3', name: 'Populism', layer: 'Symptoms', firstPass: 'Yes', home: 'A + B · Turchin', falsifiable: 'yes' },
    { id: 'S4', name: 'Anomie / loneliness', layer: 'Symptoms', firstPass: 'Partial', home: 'C · Han', falsifiable: 'no' },
  ],

  // per-session trajectory (docs/METRICS.md snapshots)
  trajectory: {
    sessions: [1, 2, 3, 4],
    files: [21, 27, 29, 34],
    words: [19, 32, 37, 47], // thousands
    dissents: [6, 10, 10, 10],
    catches: [6, 11, 11, 12],
    learnings: [3, 7, 8, 9],
  },

  // the learning loop counters (logs/)
  loop: [
    { n: 12, label: 'catches logged', src: 'logs/CATCHES.md' },
    { n: 9, label: 'learnings distilled', src: 'logs/LEARNINGS.md' },
    { n: 12, label: 'open questions', src: 'logs/OPEN_QUESTIONS.md' },
    { n: 23, label: 'ground rules', src: 'docs/GROUND_RULES.md' },
    { n: 9, label: 'diagrams authored', src: 'docs/DIAGRAMS.md' },
  ],
};
