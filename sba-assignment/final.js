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
function getLearnerData(course, ag, submissions){
let result = [];



 submissions.forEach((learnerObj) =>{
 let assignment_id = learnerObj.assignment_id;
 let score = learnerObj.submission.score;
    let found;
    for (const iterator of AssignmentGroup["assignments"]) {
      if (iterator.id === assignment_id) found = iterator;
    }
 let dueDate = Date.parse(found.due_at)
 let submission_date = Date.parse(learnerObj.submission.submitted_at);
 if( submission_date > dueDate){
  score = score - found.points_possible * 0.1;
}
else{ 
  score = score;     
}
})


// This is to check if the assignment group id doesnt match the course info id
if (AssignmentGroup.course_id !== CourseInfo.id) {
  throw new Error('AssignmentGroup does not belong to its course');
}
// this is to get the lerner id
// total sum of all score of student
const sumOfscores = LearnerSubmissions.submission.reduce((acc,item)=>{
   acc += item.score;
   return acc;
},0)
// this is the total sum of the point-possible
const sumOfpoint = AssignmentGroup.assignments.reduce((acc, item) => {
  acc = item.points_possible;
      return acc;
},0)
const assignmentId = AssignmentGroup.assignments.forEach((item) =>{
  return item.id;
})
const avgOfgruopweight = (sumOfscores / sumOfpoint)*100;
console.log(avgOfgruopweight);
let studentScore = LearnerSubmissions.submission.forEach((item)=>{
    return item.score;
})
let assignmentPoint = AssignmentGroup.assignments.forEach(item =>{
  return item.points_possible;
})
const averageOfstudent = (studentScore / assignmentPoint) * 100;

return result;  
}
function getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions) {
  const result = [];
  
  if (AssignmentGroup.course_id !== CourseInfo.id) {
    throw new Error('AssignmentGroup does not belong to its course');
  }

  const studentId = new Set();
  LearnerSubmissions.forEach((item) => {
    studentId.add(item.learner_id);
  });
  console.log(studentId);

  const sumOfscores = LearnerSubmissions.reduce((acc, item) => {
    acc += item.submission.score;
    return acc;
  }, 0);


  const sumOfpoint = AssignmentGroup.assignments.reduce((acc, item) => {
    acc += item.points_possible;
    return acc;
  }, 0);

  const avgOfgruopweight = (sumOfscores / sumOfpoint) * 100;

  LearnerSubmissions.forEach((submission) => {
    const studentScore = submission.submission.score;
    const assignmentPoint = AssignmentGroup.assignments.find(
      (assignment) => assignment.id === submission.assignment_id
    ).points_possible;
    const percentage = (studentScore / assignmentPoint) * 100;

    const latePenalty = new Date(submission.submission.submitted_at) > new Date(AssignmentGroup.assignments.find((assignment) => assignment.id === submission.assignment_id).due_at)
      ? percentage * 0.1
      : 0;

    result.push({
      id: submission.learner_id,
      avg: avgOfgruopweight,
      [submission.assignment_id]: percentage - latePenalty,
    });
  });

  return result;
}
// const CourseInfo = {
//   id: 451,
//   name: "Introduction to JavaScript"
// };

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

function getLearnerData(course, ag, submissions) {
//  check if the assignment group id matches the courseinfo
  function validateData(courseInfo, assignmentGroup) {
    if (assignmentGroup.course_id !== courseInfo.id) {
      throw new Error("Assignment group does not belong to the correct course.");
    }
  }
  
  // Calculate weighted average
  function calculateWeightedAverage(submissions) {
    let totalPoints = 0;
    let weightedSum = 0;

    submissions.forEach(submission => {
      const assignment = ag.assignments.find(a => a.id === submission.assignment_id);
      if (assignment && new Date(submission.submission.submitted_at) <= new Date(assignment.due_at)) {
        const lateSubmission = new Date(submission.submission.submitted_at) > new Date(assignment.due_at);
        const pointsPossible = assignment.points_possible === 0 ? 1 : assignment.points_possible;
        const score = lateSubmission ? Math.max(0, submission.submission.score - (0.1 * pointsPossible)) : submission.submission.score;
        totalPoints += pointsPossible;
        weightedSum += (score / pointsPossible) * pointsPossible;
      }
    });

    return totalPoints === 0 ? 0 : (weightedSum / totalPoints);
  }

  // Initialize result array
  const result = [];

  // Group submissions by learner_id
  const submissionsByLearner = submissions.reduce((acc, submission) => {
    acc[submission.learner_id] = acc[submission.learner_id] || [];
    acc[submission.learner_id].push(submission);
    return acc;
  }, {});

  // Iterate over learner submissions
  for (const learnerId in submissionsByLearner) {
    if (submissionsByLearner.hasOwnProperty(learnerId)) {
      const learnerSubmissions = submissionsByLearner[learnerId];
      const learnerData = {
        id: parseInt(learnerId),
        avg: calculateWeightedAverage(learnerSubmissions)
      };

      // Iterate over assignments in the group
      ag.assignments.forEach(assignment => {
        // Check if assignment is due and exists in learner submission
        const submission = learnerSubmissions.find(s => s.assignment_id === assignment.id);
        if (submission && new Date(assignment.due_at) <= new Date()) {
          const lateSubmission = new Date(submission.submission.submitted_at) > new Date(assignment.due_at);
          const pointsPossible = assignment.points_possible === 0 ? 1 : assignment.points_possible;
          const score = lateSubmission ? Math.max(0, submission.submission.score - (0.1 * pointsPossible)) : submission.submission.score;
          learnerData[assignment.id] = (score / pointsPossible);
        }
      });

      result.push(learnerData);
    }
  }

  return result;
}

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
console.log(result);