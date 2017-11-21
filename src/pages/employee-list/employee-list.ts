import { Component } from '@angular/core';
import { EmployeeProvider } from '../../providers/employee-provider';
import { EmployeeItem } from '../../models/employee';

@Component({
  selector: 'employee-list',
  templateUrl: 'employee-list.html',
  providers: [EmployeeProvider],
})
export class EmployeeList {

  public searchTerm: string = '';
  public employeeList: EmployeeItem[] = [];
  public filteredEmployeeList: EmployeeItem[] = [];

  constructor(private employeeProvider: EmployeeProvider) {
    this.getEmployeeList();
  }

  async getEmployeeList() {
    const returnVal = await this.employeeProvider.getEmployeeList();
    this.employeeList = returnVal;
    this.filteredEmployeeList = returnVal;
  }

  setFilteredItems(searchTerm) {
    if (searchTerm === '') {
      this.filteredEmployeeList = this.employeeList;
    } else {
      this.filteredEmployeeList = this.employeeList.filter((employee:EmployeeItem) => {
        if (employee.skills !== undefined) {
          console.log(JSON.stringify(employee.skills));
          return JSON.stringify(employee.skills).toLowerCase().includes(searchTerm.toLowerCase());
        }
      });
    }
  }
}
