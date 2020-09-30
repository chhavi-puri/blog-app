/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createClub = /* GraphQL */ `
  mutation CreateClub(
    $input: CreateClubInput!
    $condition: ModelClubConditionInput
  ) {
    createClub(input: $input, condition: $condition) {
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
export const updateClub = /* GraphQL */ `
  mutation UpdateClub(
    $input: UpdateClubInput!
    $condition: ModelClubConditionInput
  ) {
    updateClub(input: $input, condition: $condition) {
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
export const deleteClub = /* GraphQL */ `
  mutation DeleteClub(
    $input: DeleteClubInput!
    $condition: ModelClubConditionInput
  ) {
    deleteClub(input: $input, condition: $condition) {
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
export const createStudent = /* GraphQL */ `
  mutation CreateStudent(
    $input: CreateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    createStudent(input: $input, condition: $condition) {
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
export const updateStudent = /* GraphQL */ `
  mutation UpdateStudent(
    $input: UpdateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    updateStudent(input: $input, condition: $condition) {
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
export const deleteStudent = /* GraphQL */ `
  mutation DeleteStudent(
    $input: DeleteStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    deleteStudent(input: $input, condition: $condition) {
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
export const createStudentClubJoin = /* GraphQL */ `
  mutation CreateStudentClubJoin(
    $input: CreateStudentClubJoinInput!
    $condition: ModelStudentClubJoinConditionInput
  ) {
    createStudentClubJoin(input: $input, condition: $condition) {
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
export const updateStudentClubJoin = /* GraphQL */ `
  mutation UpdateStudentClubJoin(
    $input: UpdateStudentClubJoinInput!
    $condition: ModelStudentClubJoinConditionInput
  ) {
    updateStudentClubJoin(input: $input, condition: $condition) {
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
export const deleteStudentClubJoin = /* GraphQL */ `
  mutation DeleteStudentClubJoin(
    $input: DeleteStudentClubJoinInput!
    $condition: ModelStudentClubJoinConditionInput
  ) {
    deleteStudentClubJoin(input: $input, condition: $condition) {
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
