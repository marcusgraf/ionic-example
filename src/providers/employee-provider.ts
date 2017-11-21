import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeItem, ReposItem, EmployeeDetails } from '../models/employee';
import { Config } from '../config'

@Injectable()
export class EmployeeProvider {
  private accessTokenString: string = '?access_token=' + Config.gitHubPersonalAccessToken;
  private githubURL: string = 'https://api.github.com/orgs/codecentric/members';
  private requestURL: string = this.githubURL + this.accessTokenString;

  constructor(private httpClient: HttpClient) {
  }

  getEmployeeList(): Promise<any> {
    return new Promise((resolve) => {
      this.httpClient.get(this.requestURL).subscribe((employeeList: EmployeeItem[]) => {
        employeeList.map((employee: EmployeeItem) => {
          this.httpClient.get(employee.url + this.accessTokenString)
            .subscribe((employeeDetails: EmployeeDetails) => {
              employee.employeeDetails = employeeDetails;
            });

          this.httpClient.get(employee.repos_url + this.accessTokenString)
            .subscribe((employeeRepos: ReposItem[]) => {
              employee.employeeRepos = employeeRepos;
              employee.skills = this.getEmployeeSkills(employeeRepos);
            });
        });
        resolve(employeeList);
      });
    });
  }

  getEmployeeSkills(employeeRepos) {
    return employeeRepos.reduce((arr, curr) => {
      if (curr.language !== null) {
        const skillIndex = this.findSkillIndex(curr.language, arr);
        if (skillIndex > -1) {
          arr[skillIndex].skill = arr[skillIndex].skill + 1;
        } else {
          arr.push({
            programmLanguage: curr.language,
            skill: 1,
          });
        }
      }
      return arr;
    }, []);
  }

  findSkillIndex(skillName: string, arr: Array<any>) {
    return arr.findIndex((el) => {
      return el.programmLanguage === skillName;
    });
  }
}
