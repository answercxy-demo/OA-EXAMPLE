import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';
import { Router } from '@angular/router';

import { StaticVar } from '../../common/static-var';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup;

  title: String = this.staticVar.TITLE;

  submitForm(): void {
    let params = {};

    // 客户端校验
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
      params[i] = this.validateForm.controls[i].value;
    }

    if (this.validateForm.status === 'VALID') {
      // 服务端校验
      this.checkUser(params);
    }
  }

  checkUser(params): void {
    if (params.userName === 'test' && params.password === '123456') {
      sessionStorage.setItem('user', 'test');
      this.router.navigateByUrl('/home');
    } else {
      this.message.error('账号或密码错误');
    }
  }

  constructor(private fb: FormBuilder, private message: NzMessageService, private router: Router, private staticVar: StaticVar) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }
}
