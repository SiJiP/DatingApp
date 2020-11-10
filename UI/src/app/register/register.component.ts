import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();

  model: any = {};

  constructor(private accountService: AccountService) { }

  ngOnInit() {
  }

  register(): void {
    this.accountService.register(this.model).subscribe(res => {
      this.cancel();
    }, err => {
      console.log(err);
    });
  }

  cancel(): void {
    this.cancelRegister.emit(false);
  }



}
