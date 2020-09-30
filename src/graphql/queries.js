/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getClub = /* GraphQL */ `
  query GetClub($id: ID!) {
    getClub(id: $id) {
      id
      clubName
      type
      student {
        items {
          id
          clubID
          studentID
          student {
            studentName
          }
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
export const listClubs = /* GraphQL */ `
  query ListClubs(
    $filter: ModelClubFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClubs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        clubName
        type
        student {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getStudent = /* GraphQL */ `
  query GetStudent($id: ID!) {
    getStudent(id: $id) {
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
export const listStudents = /* GraphQL */ `
  query ListStudents(
    $filter: ModelStudentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        studentName
        club {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getStudentClubJoin = /* GraphQL */ `
  query GetStudentClubJoin($id: ID!) {
    getStudentClubJoin(id: $id) {
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
export const listStudentClubJoins = /* GraphQL */ `
  query ListStudentClubJoins(
    $filter: ModelStudentClubJoinFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudentClubJoins(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        clubID
        studentID
        club {
          id
          clubName
          type
          createdAt
          updatedAt
        }
        student {
          id
          studentName
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const sortByType = /* GraphQL */ `
  query SortByType(
    $type: String
    $sortDirection: ModelSortDirection
    $filter: ModelClubFilterInput
    $limit: Int
    $nextToken: String
  ) {
    SortByType(
      type: $type
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        clubName
        type
        student {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
