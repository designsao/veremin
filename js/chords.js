/**
 * Chord Scale - these are the MIDI notes to select from based on the wrist position.
 * New Chord Scales can be added and they should show up in the control panel (after
 * redeployment), but remember acceptable MIDI values are between 0 and 127
 */
export const chords = {
  major: [
    [0, 4], [2, 5], [4, 7], [5, 9], [7, 11], [9, 12], [11, 14], [12, 16], [14, 17], [16, 19],
    [17, 21], [19, 23], [21, 24], [23, 26], [24, 28], [26, 29], [28, 31], [29, 33], [31, 35], [33, 36],
    [35, 38], [36, 40], [38, 41], [40, 43], [41, 45], [43, 47], [45, 48], [47, 50], [48, 52], [50, 53],
    [52, 55], [53, 57], [55, 59], [57, 60], [59, 62], [60, 64], [62, 65], [64, 67], [65, 69], [67, 71],
    [69, 72], [71, 74], [72, 76], [74, 77], [76, 79], [77, 81], [79, 81], [81, 84], [83, 86], [84, 88],
    [86, 89], [88, 91], [89, 93], [91, 95], [93, 96], [95, 98], [96, 100], [98, 101], [100, 103], [101, 105],
    [103, 107], [105, 108], [107, 110], [108, 112], [110, 113], [112, 115], [113, 117], [115, 119], [117, 120], [119, 122],
    [120, 124], [122, 125], [124, 127]
  ],
  minor: [
    [4, 11], [7, 14], [9, 16], [10, 17], [11, 18], [14, 21], [16, 23], [19, 26], [21, 28], [22, 29],
    [23, 30], [26, 33], [28, 35], [31, 38], [33, 40], [34, 41], [35, 42], [38, 45], [40, 47], [43, 50],
    [45, 52], [46, 53], [47, 54], [50, 57], [52, 59], [55, 62], [57, 64], [58, 65], [59, 66], [62, 69],
    [64, 71], [67, 74], [69, 76], [70, 77], [71, 78], [74, 81], [76, 83], [79, 86], [81, 88], [82, 89],
    [83, 90], [86, 93], [88, 95], [91, 98], [93, 100], [94, 101], [95, 102], [98, 105], [100, 107], [103, 110],
    [105, 112], [106, 113], [107, 114], [110, 117], [112, 119], [115, 122], [117, 124], [118, 125], [119, 126]
  ]
}
