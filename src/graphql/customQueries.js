export const customListStudents = /* GraphQL */ `
  query ListStudents(
    $filter: ModelStudentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        studentName
        department {
          id
          departmentName
          createdAt
          updatedAt
        }
        club {
            items{
                club{
                    id
                    clubName
                }
            }
           
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;