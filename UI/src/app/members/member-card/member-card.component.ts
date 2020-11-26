import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Member } from 'src/app/_models/member';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.scss'],
})
export class MemberCardComponent implements OnInit {
  @Input() member: Member;

  constructor(
      private router: Router,
      private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
  }

  navigateToDetail(username: string): void {
    this.router.navigate([`${username}`], { relativeTo: this.route });
  }

}
