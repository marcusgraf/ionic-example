export interface EmployeeItem {
  skills: SkillItem[],
  repos_url: string,
  employeeRepos: ReposItem[],
  url: string,
  employeeDetails: EmployeeDetails
}

export interface ReposItem {
  language: string,
}

export interface SkillItem {
  programmLanguage: string,
  skill: number,
}

export interface EmployeeDetails {
  name: string,
}
