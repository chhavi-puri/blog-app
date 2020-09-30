/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateClub = /* GraphQL */ `
  subscription OnCreateClub {
    onCreateClub {
      id
      clubName
      type
      student {
        items {
          id
          clubID
          studentID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateClub = /* GraphQL */ `
  subscription OnUpdateClub {
    onUpdateClub {
      id
      clubName
      type
      student {
        items {
          id
          clubID
          studentID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteClub = /* GraphQL */ `
  subscription OnDeleteClub {
    onDeleteClub {
      id
      clubName
      type
      student {
        items {
          id
          clubID
          studentID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateStudent = /* GraphQL */ `
  subscription OnCreateStudent {
    onCreateStudent {
      id
      studentName
      club {
        items {
          id
          clubID
          studentID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateStudent = /* GraphQL */ `
  subscription OnUpdateStudent {
    onUpdateStudent {
      id
      studentName
      club {
        items {
          id
          clubID
          studentID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteStudent = /* GraphQL */ `
  subscription OnDeleteStudent {
    onDeleteStudent {
      id
      studentName
      club {
        items {
          id
          clubID
          studentID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateStudentClubJoin = /* GraphQL */ `
  subscription OnCreateStudentClubJoin {
    onCreateStudentClubJoin {
      id
      clubID
      studentID
      club {
        id
        clubName
        type
        student {
          nextToken
        }
        createdAt
        updatedAt
      }
      student {
        id
        studentName
        club {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateStudentClubJoin = /* GraphQL */ `
  subscription OnUpdateStudentClubJoin {
    onUpdateStudentClubJoin {
      id
      clubID
      studentID
      club {
        id
        clubName
        type
        student {
          nextToken
        }
        createdAt
        updatedAt
      }
      student {
        id
        studentName
        club {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteStudentClubJoin = /* GraphQL */ `
  subscription OnDeleteStudentClubJoin {
    onDeleteStudentClubJoin {
      id
      clubID
      studentID
      club {
        id
        clubName
        type
        student {
          nextToken
        }
        createdAt
        updatedAt
      }
      student {
        id
        studentName
        club {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
