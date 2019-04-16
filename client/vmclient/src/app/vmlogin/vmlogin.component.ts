import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, FormBuilder,FormGroupDirective, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-vmlogin',
  templateUrl: './vmlogin.component.html',
  styleUrls: ['./vmlogin.component.css']
})
export class VmloginComponent implements OnInit {
  checked = false;
  vmlogin: any = {};
  remember = false;
   username = new FormControl('', [
    Validators.required
  ]);
  password = new FormControl('', [
    Validators.required
  ]);
  constructor( private _fb: FormBuilder) { }

  ngOnInit() {
    this.vmlogin= this._fb.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

}
