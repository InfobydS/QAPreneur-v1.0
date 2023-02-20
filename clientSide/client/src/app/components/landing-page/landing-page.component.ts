import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { CoreService } from 'src/app/services/core.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})

export class LandingPageComponent implements OnInit {
  email!: string;
  password!: string;
  token!: string;
  formData: FormGroup;
  isNotAnUser: boolean = true;
  isStudent: boolean = false;
  roles: any[] = [];
  institutes: any[] = [];
  siteKey : string = "6LfReYgkAAAAAMT7IQnfz90Dpbrwrs6MhRXe6cNW";

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private router: Router, private coreServices: CoreService) {

    this.formData = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  ngOnInit() {
    this.getUserRole();
    this.getInstituteList();
  }

  addUserData = new FormGroup(({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    mobile: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    Role_Id: new FormControl(),
    Institute_Id: new FormControl(''),
    recaptcha: new FormControl('', Validators.required),
    password: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(30)
    ])),
    confirmPassword: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(30)
    ])),
  }))


  createAccount() {
    this.isNotAnUser = false;
  }

  signIn() {
    this.isNotAnUser = true;
  }

  // Login User Form Call
  onClickSubmit() {
    const val = this.formData.value;

    if (val.email && val.password) {
      this.authService.login(val.email, val.password, val.token)
        .subscribe(
          (data: any) => {
            if (data) {
              this.email = data.email;
              this.password = data.password;
              this.token = data.token;
              // this.router.navigate(['/WelcomeTest']);
              this.router.navigate(['/Dashboard']);
            }
            else {
              this.simpleAlert();
            }
          }
        );
    }
    if (val.email == '' || val.password == '') {
      this.simpleAlert();
    }
  }

  simpleAlert() {
    console.log("entered simple alert");
    console.log("entered condition simple alert");
  }

  // Method for Add User
  onAddUser(value: any) {
    this.coreServices.addUser(value).subscribe((result: any) => {
      console.log(result);
    });
    this.isNotAnUser = true;
    this.addUserData.reset();
  }

  // Method to Get Role Dropdown List
  getUserRole() {
    this.coreServices.getRoleList().subscribe((result: any) => {
      this.roles = result.role;
      console.log(result);
    });
  }

  // Method to Get Institute List
  getInstituteList() {
    this.coreServices.getInstituteList().subscribe((response: any) => {
      this.institutes = response.institute;
      console.log(response);
    })
  }

  // Institute Dropdown By Role Selection
  onRoleChange(value: any) {
    if (value == 3 || value == 4) {
      this.isStudent = true;
    }
    else {
      this.isStudent = false;
    }
  }
}
