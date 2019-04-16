import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, FormBuilder,FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { VmregformService } from './vmregform.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-vmregform',
  templateUrl: './vmregform.component.html',
  styleUrls: ['./vmregform.component.css']
})
export class VmregformComponent implements OnInit {
  checked = false;
  vmregform: any = {};
  
  submitted = false;
  middlename = new FormControl('', [
    Validators.required
  ]);
  lastname = new FormControl('', [
    Validators.required
  ]);
  firstname = new FormControl('', [
    Validators.required
  ]);
  password = new FormControl('', [
    Validators.required
  ]);
  confirmation = new FormControl('', [
    Validators.required
  ]);
  email = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
 
  constructor( private _fb: FormBuilder,private vmregformService: VmregformService,private router:Router) { }

  ngOnInit() {
    this.vmregform= this._fb.group({
      firstname: ['', [Validators.required, Validators.minLength(5)]],
      lastname: ['', [Validators.required, Validators.minLength(5)]],
    });
  }
  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
  navigate(){
    this.router.navigateByUrl('/dashboard');
  }
  save(form: NgForm) {
    console.log('Saving Form successfull::');

    this.vmregformService.save(form).subscribe(result => {
      console.log('Form saved successfull::' +result);
       this.navigate();
        }, error => console.error(error));
  }
}
