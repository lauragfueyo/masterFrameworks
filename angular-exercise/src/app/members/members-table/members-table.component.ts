import { Component, OnInit } from '@angular/core';
import { MemberEntity } from '../models/member.model';
import { MembersApiService } from '../members-api.service';

@Component({
  selector: 'app-members-table',
  templateUrl: './members-table.component.html',
  styles: []
})
export class MembersTableComponent {
  members: MemberEntity[];

  constructor(private membersApi: MembersApiService) { }

  loadMembers(formFieldValues: any): void{
    const OrganizationName = (formFieldValues.name === '') ? "Lemoncode" : formFieldValues.name;
    
    console.log(OrganizationName);
    
    this.membersApi.getAllMembers(OrganizationName)
    .subscribe((ms) => this.members = ms); 
  }
}
