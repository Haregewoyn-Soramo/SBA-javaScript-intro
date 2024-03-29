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
  }]
  // // to get the student or learner Id
  // const idOfstudent = LearnerSubmissions.forEach(element =>{
  //   console.log(element.learner_id);
  // })
  // console.log(idOfstudent);
  // console.log(LearnerSubmissions);
  // // to get the total sum of each student
  // const sumOfscore = LearnerSubmissions.submission.reduce((acc,element) =>{
  //   return acc += element.score;
  // })
  // console.log(sumOfscore);
  // // to get the total  sum of possible point
  // const sumOfpoint = AssignmentGroup.assignments.reduce((acc,element)=>{
  //      return acc+= element.points_possible;
  // })
  // console.log(sumOfpoint);
  // // average wait of student score
  // const averagewaitOfass = sumOfscore/sumOfpoint;
  // console.log(averagewaitOfass);
  // const assignmentId = LearnerSubmissions.forEach(item =>{
  //   return item.assignment_id;
  // })



  // function getLearnerData(courseInfo, assignmentGroup, learnerSubmissions) {
  //   if (assignmentGroup.course_id !== courseInfo.id) {
  //     throw new Error('AssignmentGroup does not belong to its course');
  //   }
  
  //   const assignmentsById = assignmentGroup.assignments.reduce((acc, cur) => {
  //     acc[cur.id] = cur.points_possible;
  //     return acc;
  //   }, {});
  //   console.log(assignmentsById);
  
  //   const submissionsByAssigmentId = learnerSubmissions.reduce((acc, cur) => {
  //     if (assignmentsById.hasOwnProperty(cur.assignment_id)) {
  //       const assignment = assignmentGroup.assignments.find(
  //         ass => ass.id === cur.assignment_id
  //       );
  
  //       const score = cur.submission.score || 0;
  
  //       if (new Date(cur.submission.submitted_at) > new Date(assignment.due_at)) {
  //         acc.total -= 0.1 * assignmentsById[cur.assignment_id];
  //       }
  
  //       acc.total += score;
  //       acc.scores[cur.assignment_id] = score / assignmentsById[cur.assignment_id];
  //     }
  
  //     return acc;
  //   }, {
  //     total: 0,
  //     scores: {},
  //   });
  
  //   const weightedAverage =
  //     submissionsByAssigmentId.total /
  //     assignmentGroup.assignments.reduce((acc, cur) => acc + cur.points_possible, 0);
  
  //   return [
  //     {
  //       id: learnerSubmissions[0].learner_id,
  //       avg: weightedAverage,
  //       ...submissionsByAssigmentId.scores,
  //     },
  //   ];
  // }
  
  // module.exports = {
  //   getLearnerData,
  // };
(function() {
  function getLearnerData(courseInfo, assignmentGroup, learnerSubmissions) {
    if (assignmentGroup.course_id !== courseInfo.id) {
      throw new Error('AssignmentGroup does not belong to its course');
    }

    const assignmentsById = assignmentGroup.assignments.reduce((acc, cur) => {
      acc[cur.id] = cur.points_possible;
      return acc;
    }, {});

    const submissionsByAssigmentId = learnerSubmissions.reduce((acc, cur) => {
      if (assignmentsById.hasOwnProperty(cur.assignment_id)) {
        const assignment = assignmentGroup.assignments.find(
          ass => ass.id === cur.assignment_id
        );

        const score = cur.submission.score || 0;

        if (new Date(cur.submission.submitted_at) > new Date(assignment.due_at)) {
          acc.total -= 0.1 * assignmentsById[cur.assignment_id];
        }

        acc.total += score;
        acc.scores[cur.assignment_id] = score / assignmentsById[cur.assignment_id];
      }

      return acc;
    }, {
      total: 0,
      scores: {},
    });

    const weightedAverage =
      submissionsByAssigmentId.total /
      assignmentGroup.assignments.reduce((acc, cur) => acc + cur.points_possible, 0);

    return [
      {
        id: learnerSubmissions[0].learner_id,
        avg: weightedAverage,
        ...submissionsByAssigmentId.scores,
      },
    ];
  }

  // Example usage
  const courseInfo = {
    id: 1,
    name: 'Course Name',
  };

  const assignmentGroup = {
    id: 1,
    name: 'Group 1',
    course_id: 1,
    group_weight: 100,
    assignments: [
      {
        id: 1,
        name: 'Assignment 1',
        due_at: '2022-01-01T00:00:00Z',
        points_possible: 50,
      },
      {
        id: 2,
        name: 'Assignment 2',
        due_at: '2022-01-02T00:00:00Z',
        points_possible: 100,
      },
    ],
  };

  const learnerSubmissions = [
    {
      learner_id: 1,
      assignment_id: 1,
      submission: {
        submitted_at: '2022-01-01T01:00:00Z',
        score: 40,
      },
    },
    {
      learner_id: 1,
      assignment_id: 2,
      submission: {
        submitted_at: '2022-01-02T01:00:00Z',
        score: 90,
      },
    },
  ];

  try {
    const result = getLearnerData(courseInfo, assignmentGroup, learnerSubmissions);
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
})();