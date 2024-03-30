const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript"
};

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
      const assignment = ag.assignments.find(a => a.id = submission.assignment_id)
      if(assignment && new Date(submission.submission.submitted_at) <= new Date (assignment. due_at))
      const pointsPossible = assignment.points_possible === 0 ? 1 : assignment.points_Possible;
      const score = lateSubmission ? Math.max(0,submission.submission.score-(0.1*pointsPossible)) : submission.submission.score;
      totalPoints += pointsPossible;
      weightedSum += (score/pointsPossible)*pointsPossible;
    });
    return totalPoints === 0 ? 0 : weightedSum / totalPoints;
  }
  const result = [];
  const submissionsByLearner = submissions.reduce((acc,submission) => {
    acc[submission.learner_id] = acc[submission.learner_id] || [];
    acc[submission.learner_id].push(submission);
    return acc;
  },{});
