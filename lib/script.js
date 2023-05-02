
angular.module('myApplication', []).controller('myController', function ($scope, $http) {

/////////////////////////////////////////////
// ************ pages ******************** //
/////////////////////////////////////////////
  $scope.loginPage = true;

  $scope.lecturerAssignmentDirectory = false;
  $scope.addAssignmentPage = false;
  
  $scope.studentDashboard = false;
  $scope.navBar = false;

  $scope.addCoursePage = false;
  $scope.selectedAssignmentPage = false;
  $scope.studentAssignmentDirectory = false;
  $scope.studentAssociationPage = false;
  $scope.addAssociationPage = false;

  $scope.lecturerDashboard = false;
  $scope.navBarLecturer = false;
  $scope.lecturerAssignmentDirectory = false;
  $scope.addAssignmentPage = false;
  $scope.selectedCoursePage = false;

  
// ******** variables ********** //
  $scope.username = "";
  $scope.password = "";
  $scope.userType = "";

  var userType = "";


//////////////////////////////////////////////////////////
// *********** LOGIN VALIDATION FUNCTION *************** //
//////////////////////////////////////////////////////////
  const login_url = 'https://caab.sim.vuw.ac.nz/api/villalkary/user_list.json';

  $scope.validateLogin = async function () {
    const userResponse = await fetch(login_url);
    const userData = await userResponse.json();

    for(i = 0; i < userData.users.length; i++) {
      if($scope.username == userData.users[i].LoginName && $scope.password == userData.users[i].Password){

        userType = userData.users[i].UserType;
        console.log("User is a: " + userType);

        if(userType == "lecturer"){
          $scope.loginPage = false;
          $scope.studentDashboard = false;
          $scope.navBarLecturer = true;
          $scope.lecturerDashboard = true;
          return true;
        } 

        if(userType == "student") {
          $scope.loginPage = false;
          $scope.studentDashboard = true;
          $scope.navBar = true;
          $scope.navBarLecturer = false;
          $scope.lecturerDashboard = false;
          return true;
        }
      } 
    }
    alert("Invalid, try again!");
    $scope.loginPage = true;
    $scope.studentDashboard = false;
    $scope.lecturerDashboard = false;
    return false;
  }
  



////////////////////////////////////////////////////
//*********** FUNCTIONS TO SHOW PAGES*************//
////////////////////////////////////////////////////

//function that will log user out and show login page
$scope.logOut = function () {
  $scope.loginPage = true;

  $scope.studentDashboard = false;
  $scope.lecturerDashboard = false;
  $scope.navBar = false;
  $scope.navBarLecturer = false;
  $scope.addCoursePage = false;
  $scope.selectedAssignmentPage = false;
  $scope.studentAssignmentDirectory = false;
  $scope.lecturerAssignmentDirectory = false;
  $scope.addAssignmentPage = false;
  $scope.studentAssociationPage = false;
  $scope.selectedCoursePage = false;
}


//function that will show add course page
$scope.showStudentAddCoursePage = function () {
  $scope.addCoursePage = true;
  $scope.navBar = true;

  $scope.navBarLecturer = false;
  $scope.loginPage = false;
  $scope.studentDashboard = false;
  $scope.lecturerDashboard = false;
  $scope.selectedAssignmentPage = false;
  $scope.studentAssignmentDirectory = false;
  $scope.lecturerAssignmentDirectory = false;
  $scope.addAssignmentPage = false;
  $scope.studentAssociationPage = false;
  $scope.selectedCoursePage = false;

}

//function that will show add course page
$scope.showLecturerAddCoursePage = function () {
  $scope.navBarLecturer = true;
  $scope.addCoursePage = true;

  $scope.navBar = false;
  $scope.loginPage = false;
  $scope.studentDashboard = false;
  $scope.lecturerDashboard = false;
  $scope.selectedAssignmentPage = false;
  $scope.studentAssignmentDirectory = false;
  $scope.lecturerAssignmentDirectory = false;
  $scope.addAssignmentPage = false;
  $scope.studentAssociationPage = false;
  $scope.selectedCoursePage = false;

}

//function that will show student dashboard
$scope.showStudentDashboard = function () {
  $scope.navBar = true;
  $scope.studentDashboard = true;

  $scope.addCoursePage = false;
  $scope.loginPage = false;
  $scope.selectedAssignmentPage = false;
  $scope.studentAssignmentDirectory = false;
  $scope.lecturerDashboard = false;
  $scope.navBarLecturer = false;
  $scope.lecturerAssignmentDirectory = false;
  $scope.addAssignmentPage = false;
  $scope.studentAssociationPage = false;
  $scope.selectedCoursePage = false;

}


//function that will show lecturer dashboard
$scope.showLecturerDashboard = function () {
  $scope.navBarLecturer = true;
  $scope.lecturerDashboard = true;

  $scope.navBar = false;
  $scope.studentDashboard = false;
  $scope.addCoursePage = false;
  $scope.loginPage = false;
  $scope.selectedAssignmentPage = false;
  $scope.studentAssignmentDirectory = false;
  $scope.lecturerAssignmentDirectory = false;
  $scope.addAssignmentPage = false;
  $scope.studentAssociationPage = false;
  $scope.selectedCoursePage = false;

}


//function that will show student assignment page
$scope.showStudentAssignmentPage = function () {
  $scope.navBar = true;
  $scope.studentAssignmentDirectory = true;

  $scope.lecturerDashboard = false;
  $scope.navBarLecturer = false;
  $scope.studentDashboard = false;
  $scope.addCoursePage = false;
  $scope.loginPage = false;
  $scope.selectedAssignmentPage = false;
  $scope.lecturerAssignmentDirectory = false;
  $scope.addAssignmentPage = false;
  $scope.studentAssociationPage = false;
  $scope.selectedCoursePage = false;

}


//function that will show lecturer assignment page
$scope.showLecturerAssignmentDirectory = function () {
  $scope.navBarLecturer = true;
  $scope.lecturerAssignmentDirectory = true;

  $scope.studentAssignmentDirectory = false;
  $scope.navBar = false;
  $scope.lecturerDashboard = false;
  $scope.studentDashboard = false;
  $scope.addCoursePage = false;
  $scope.loginPage = false;
  $scope.selectedAssignmentPage = false;
  $scope.addAssignmentPage = false;
  $scope.studentAssociationPage = false;
  $scope.selectedCoursePage = false;

}


//function that will show add assignment page
$scope.showAddAssignmentPage = function () {
  $scope.navBarLecturer = true;
  $scope.addAssignmentPage = true;

  $scope.lecturerAssignmentDirectory = false;
  $scope.studentAssignmentDirectory = false;
  $scope.navBar = false;
  $scope.lecturerDashboard = false;
  $scope.studentDashboard = false;
  $scope.addCoursePage = false;
  $scope.loginPage = false;
  $scope.selectedAssignmentPage = false;
  $scope.studentAssociationPage = false;
  $scope.selectedCoursePage = false;

}

//function that will show course association page
$scope.showCourseAssociation = function () {
  $scope.studentAssociationPage = true;
  $scope.navBarLecturer = true;

  $scope.addAssignmentPage = false;
  $scope.lecturerAssignmentDirectory = false;
  $scope.studentAssignmentDirectory = false;
  $scope.navBar = false;
  $scope.lecturerDashboard = false;
  $scope.studentDashboard = false;
  $scope.addCoursePage = false;
  $scope.loginPage = false;
  $scope.selectedAssignmentPage = false;
  $scope.selectedCoursePage = false;

}



////////////////////////////////////////////////////
////////////////////////////////////////////////////
//*************** FUNCTIONS **************************//
////////////////////////////////////////////////////
////////////////////////////////////////////////////

//******************** FETCH Course INFO ************ */
$scope.getCourseData = function () {
  const courseDirectoryURL = 'https://caab.sim.vuw.ac.nz/api/jogakavill/course_directory.json';  
  $http({ method: 'GET', url: courseDirectoryURL
  })
    .then(function success(response) {
      $scope.courseDirectoryData = response.data;
    },
    function error(response) {});
}
$scope.getCourseData();



//************** FETCH Assig INFO ***************** */
$scope.fetchAssigDirectory = function () {
  const assigDirectoryURL = 'https://caab.sim.vuw.ac.nz/api/jogakavill/assignment_directory.json';

  $http({ method: 'GET', url: assigDirectoryURL
  })
    .then(function success(response) {
      $scope.assigDirectoryData = response.data;
    },
    function error(response) {});
} 
$scope.fetchAssigDirectory(); 


//******************** DELETE Course FUNCTION ************ */
$scope.deleteCourse = function(x) {
  $http({
    method: 'DELETE',
    url: 'https://caab.sim.vuw.ac.nz/api/jogakavill/delete.course.' + x + '.json'

  }).then(function success(response) {
    $scope.data = response.data;
    alert("Success!");
    fetchAssigDirectory(); 
    
  }, function errorCallback(response) {
    alert("Please attempt again, thank you!")
  });
};


//******************** ADD Course Function ************ */
  $scope.ID = 420;
  $scope.Name = 'INFO789';
  $scope.Overview = 'Course Introduces...';
  $scope.Year = '2025';
  $scope.Trimester = '3';
  $scope.LectureTimes = 'Saturday 10:00PM';
  $scope.LecturerID = '987';

  var coursePostURL =
    'https://caab.sim.vuw.ac.nz/api/jogakavill/update.course_directory.json';

  $scope.listOfCourses = [];

  leng = 20;
  

  $scope.postCourse = function () {
    var course = {
      Name: $scope.Name,
      ID: $scope.ID,
      Overview: $scope.Overview,
      Year: $scope.Year,
      Trimester: $scope.Trimester,
      LectureTimes: $scope.LectureTimes,
      LecturerID: $scope.LecturerID,
    };
    $http.post(coursePostURL, course).then(
      function success(obj) {
        alert("Success!"); // Successful post
        $scope.listOfCourses.push(course);
        
      },
      function error() {
        alert("Please attempt again, thank you!");
      }
    );
  };

//******************** MODIFY Course FUNCTION ************ */
$scope.modifyCourse = function(x) {
  $scope.deleteCourse(x);
  $scope.lecturerDashboard = false;
  $scope.addCoursePage = true;
  
}


//********************Student Association FETCH FUNCTION ************ */
$scope.fetchStudentAssociation = function () {
  const studentAssociationDirectoryURL = 'https://caab.sim.vuw.ac.nz/api/jogakavill/course_association_directory.json';

  $http({ method: 'GET', url: studentAssociationDirectoryURL
  })
    .then(function success(response) {
      $scope.studentAssociationData = response.data;
    },
    function error(response) {});
} 
$scope.fetchStudentAssociation(); 

//******************** Delete Student Association Function ************ */
$scope.deleteAssociation = function(x) {
  $http({
    method: 'DELETE',
    url: 'https://caab.sim.vuw.ac.nz/api/jogakavill/delete.course_association.' + x + '.json'

  }).then(function success(response) {
    $scope.data = response.data;
    alert("Association deleted");
    
  }, function errorCallback(response) {
    alert("Encountered a bit of an... error")
  });
};

//******************** ADD Student Association Function ************ */
  $scope.ID = 4;
  $scope.StudentID = 300500200;
  $scope.CourseID = 'INFO226';

  var associationPostURL =
    'https://caab.sim.vuw.ac.nz/api/jogakavill/update.course_association_directory.json';

  $scope.postAssociation = function () {
    var association = {
      ID: $scope.ID,
      StudentID: $scope.StudentID,
      CourseID: $scope.CourseID,
    };
    $http.post(associationPostURL, association).then(
      function success(obj) {
        alert("Association Successfull!");
        
      },
      function error() {
        alert("Please attempt again, thank you!");
      }
    );
  };





////////////////////////////
//THE ASSIGNMENT FUNCTIONS //
////////////////////////////

//******************** DELETE Assignment FUNCTION ************ */
$scope.deleteAssignment = function(x) {
  $http({
    method: 'DELETE',
    url: 'https://caab.sim.vuw.ac.nz/api/jogakavill/delete.assignment.' + x + '.json'

  }).then(function success(response) {
    $scope.data = response.data;
    alert("Success!");
    
  }, function errorCallback(response) {
    alert("Encountered a bit of an... error")
  });
};


//******************** ADD Assignment Function ************ */
  $scope.ID = 3;
  $scope.Name = 'Assignment 3';
  $scope.Overview = 'Learn the FUNdamentals of Angular';
  $scope.CourseID = 'INFO226';
  $scope.DueDate = '2018-08-01T00:00:00';

  var assignmentPostURL =
    'https://caab.sim.vuw.ac.nz/api/jogakavill/update.assignment_directory.json';

  $scope.postAssignment = function () {
    var assignment = {
      ID: $scope.ID,
      Name: $scope.Name,
      Overview: $scope.Overview,
      CourseID: $scope.CourseID,
      DueDate: $scope.DueDate,
    };
    $http.post(assignmentPostURL, assignment).then(
      function success(obj) {
        alert("Success!"); // Successful post
        
      },
      function error() {
        alert("Please attempt again, thank you!");
      }
    );
  };

  //******************** MODIFY Assignment FUNCTION ************ */
$scope.modifyAssignment = function(x) {
  $scope.deleteAssignment(x);
  $scope.lecturerAssignmentDirectory = false;
  $scope.addAssignmentPage = true;
  
}


//********************Display specific assignment FUNCTION ************ */
//assignment information
$scope.specificAssignmentCourseID = "";
$scope.specificAssignmentName = "";
$scope.specificAssignmentOverview = "";
$scope.specificAssignmentDuedate = "";
//FUNCTION//
$scope.assignmentDisplay = function(courseID, name, overview, duedate) {
  $http({
    method: 'GET', url: 'https://caab.sim.vuw.ac.nz/api/jogakavill/assignment_directory.json'

  }).then(function success(response) {

    $scope.selectedAssignmentPage = true;
    $scope.studentDashboard = false;
    $scope.studentAssignmentDirectory = false;
    $scope.lecturerAssignmentDirectory = false;

    $scope.data = response.data;
    
    $scope.specificAssignmentCourseID = courseID;
    $scope.specificAssignmentName = name;
    $scope.specificAssignmentOverview = overview;
    $scope.specificAssignmentDuedate = duedate;


  }, function errorCallback(response) {alert("Please wait for data to load and then try again.")});
};



//********************Display specific Course FUNCTION ************ */
//Course information
$scope.specificCourseID = "";
$scope.specificCourseName = "";
$scope.specificCourseOverview = "";
$scope.specificCourseYear = "";
$scope.specificTrimester = "";
$scope.specificCourseLectureTimes = "";
//FUNCTION//
$scope.courseDisplay = function(courseID, name, overview, year, trimester, lectureTimes) {
  $http({
    method: 'GET', url: 'https://caab.sim.vuw.ac.nz/api/jogakavill/course_directory.json'

  }).then(function success(response) {

    $scope.selectedCoursePage = true;
    $scope.studentDashboard = false;
    $scope.studentAssignmentDirectory = false;
    $scope.lecturerAssignmentDirectory = false;

    $scope.data = response.data;
    
    $scope.specificCourseID = courseID;
    $scope.specificCourseName = name;
    $scope.specificCourseOverview = overview;
    $scope.specificCourseYear = year;
    $scope.specificTrimester = trimester;
    $scope.specificCourseLectureTimes = lectureTimes;


  }, function errorCallback(response) {alert("Please wait for data to load and then try again.")});
};




});

