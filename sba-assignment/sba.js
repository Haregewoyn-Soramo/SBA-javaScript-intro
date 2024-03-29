// // The provided course information.
// const CourseInfo = {
//   id: 451,
//   name: "Introduction to JavaScript"
// };

// // The provided assignment group.
// const AssignmentGroup = {
//   id: 12345,
//   name: "Fundamentals of JavaScript",
//   course_id: 451,
//   group_weight: 25,
//   assignments: [
//     {
//       id: 1,
//       name: "Declare a Variable",
//       due_at: "2023-01-25",
//       points_possible: 50
//     },
//     {
//       id: 2,
//       name: "Write a Function",
//       due_at: "2023-02-27",
//       points_possible: 150
//     },
//     {
//       id: 3,
//       name: "Code the World",
//       due_at: "3156-11-15",
//       points_possible: 500
//     }
//   ]
// };

// // The provided learner submission data.
// const LearnerSubmissions = [
//   {
//     learner_id: 125,
//     assignment_id: 1,
//     submission: {
//       submitted_at: "2023-01-25",
//       score: 47
//     }
//   },
//   {
//     learner_id: 125,
//     assignment_id: 2,
//     submission: {
//       submitted_at: "2023-02-12",
//       score: 150
//     }
//   },
//   {
//     learner_id: 125,
//     assignment_id: 3,
//     submission: {
//       submitted_at: "2023-01-25",
//       score: 400
//     }
//   },
//   {
//     learner_id: 132,
//     assignment_id: 1,
//     submission: {
//       submitted_at: "2023-01-24",
//       score: 39
//     }
//   },
//   {
//     learner_id: 132,
//     assignment_id: 2,
//     submission: {
//       submitted_at: "2023-03-07",
//       score: 140
//     }
//   }
// ];

// function getLearnerData(course, ag, submissions) {
  // here, we would process this data to achieve the desired result.
//   const result = [
//     {
//       id: 125,
//       avg: 0.985, // (47 + 150) / (50 + 150)
//       1: 0.94, // 47 / 50
//       2: 1.0 // 150 / 150
//     },
//     {
//       id: 132,
//       avg: 0.82, // (39 + 125) / (50 + 150)
//       1: 0.78, // 39 / 50
//       2: 0.833 // late: (140 - 15) / 150
//     }
//   ];

//   return result;
// }

// const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

// console.log(result);

// here is my function
// function getLearnerData(CourseInfo, AssignmentGroup, [LearnerSubmissions]);
//   const newArray = [];
//   const studentData = {};
//   const getAssignmentById = AssignmentGroup.forEach(item =>{
//    return item.assignments.assignment_id
//  })
//  const getSubmissionScoreByAssignment = LearnerSubmissions.forEach(item =>{
//   return LearnerSubmissions.submission.score;
//  })
//  const getWeightedScore;
//  const getDueDate;

  
// this is the id of each student
// for (const learnerSubmission of LearnerSubmissions) {
//   const learnerData = {};
// let studentInfo ={};
// const studentId = LearnerSubmissions.forEach(item =>{
//     console.log(item.learner_id);
// })
//   console.log(LearnerSubmissions)
//   console.log(studentId)
//   let DueDate = LearnerSubmissions.filter(item =>{
//       if (AssignmentGroup.assignments.due_at === LearnerSubmissions.submission.submitted_at){
//         return LearnerSubmissions.submission.score
//      }
//      else if(AssignmentGroup.assignments.due_at > LearnerSubmissions.submission.submitted_at){
//       console.log('we dont need this');
      
//      }
//      else{
//       let scoreofstudent =LearnerSubmissions.submission.score - (LearnerSubmissions.submission.score * 0.1)
//       return scoreofstudent;
//      }
//      })
// // this is to check if the date of submision is passed or not
//
// console.log(studentId);
// const AssignmentById = AssignmentGroup.forEach(item =>{
//   return item.assignments.id;
// })
// console.log(subjectId);
// // this is the total point of the student in every assignment
// let SubmissionScoreByAssignment = LearnerSubmissions.reduce((acc,item) =>{
//   acc += item.submission.score;
//   return acc;
// })
// console.log(totalOfscore);
// // this is the total of the possible point in every assignment
// let = totalOfpossible.reduce((acc, item) =>{
//   acc += item.assignments.points_possible;
// })
// const WeightedScore = totalOfscore/totalOfpossible;
// // all the points possible
// let pointsOfpossible = AssignmentGroup.forEach(item => {
//   return item.assignments.points_possible;
// })
// //all the score student got
// let studentScore = LearnerSubmissions.forEach(item =>{
//  return item.submission.score;
// })
// // this is the average of student per one assignment
// let averageOfassignment = studentScore /pointsOfpossible;
// The provided course information.
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript"
};

// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500
    }
  ]
};

// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47
    }
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150
    }
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400
    }
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39
    }
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140
    }
  }
];
function validateData(courseInfo, assignmentGroup) {
  if (assignmentGroup.course_id !== courseInfo.id) {
    throw new Error("Assignment group does not belong to the correct course.");
  }
}

function getScorePercentage(score, points_possible) {
  if (points_possible=== 0) {
    throw new Error("Division by zero error.");
  }

  if (typeof score !== "number" || typeof points_possible !== "number") {
    throw new Error("One of the values is not a number.");
  }

  return (score / points_possible) * 100;
}

function getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions) {
  validateData(CourseInfo, AssignmentGroup);

  const results = [];
  let totalWeightedScore = 0;

  for (const LearnerSubmission of LearnerSubmissions) {
    const learnerId = LearnerSubmissions.learner_id;
    const learnerSubmissionObj = LearnerSubmissions.submission;

    let weightedScore = 0;
    let scoresByAssignmentId = {};

    for (const assignment of AssignmentGroup.assignments) {
      if (new Date(assignments.due_at) > new Date()) {
        // If the assignment is not yet due, continue to the next assignment.
        continue;
      }

      const score = learnerSubmissionObj.score;
      if (score === undefined) {
        // If the learner did not submit a score, continue to the next assignment.
        continue;
      }

      const pointsPossible = assignment.points_possible;
      const isLate = new Date(learnerSubmissionObj.submitted_at) > new Date(assignments.due_at);
      const scorePercentage = getScorePercentage(score, pointsPossible);

      if (isLate) {
        // If the submission is late, deduct 10 percent of the total points possible.
        const latePenalty = pointsPossible * 0.1;
        weightedScore += (scorePercentage - latePenalty) * (assignment.group_weight / 100);
      } else {
        weightedScore += scorePercentage * (assignment.group_weight / 100);
      }

      scoresByAssignmentId[assignment.id] = scorePercentage;
    }

    totalWeightedScore += weightedScore;

    results.push({
      id: learnerId,
      avg: totalWeightedScore,
      ...scoresByAssignmentId
    });
  }

  return results;
}
console.log(results);