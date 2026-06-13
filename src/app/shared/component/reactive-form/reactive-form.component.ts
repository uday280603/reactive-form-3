import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomRegex } from '../../validations/customValidations';
import { SnackbarService } from '../../service/snackbar.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  jobApplicationForm!: FormGroup;
  gendersArr = ['Male', 'Female', 'Others'];
  defultDender = 'Male';
  userDetails = {
  fullName: 'Ronak',
  email: 'ronakindrawar123@gmail.com',
  mobileNumber: '7875990589',
  dateOfBirth: '2026-06-18',
  gender: 'Male',
  currentLocation: 'Udgir',
  desireJobRole: 'Angular Developer',
  preferredLocation: 'Pune',
  employementType: 'Full Time',
  expectedSalary: '1000000',
  declaration: true,

  educationDetails: [
    {
      degree: 'B.Sc',
      collage: 'Deogiri College',
      passingYear: '2022',
      perecntage: 85
    },
    {
      degree: 'MCA',
      collage: 'MIT College Pune',
      passingYear: '2025',
      perecntage: 88
    }
  ],

  skills: [
    {
      skillName: 'Angular'
    },
    {
      skillName: 'TypeScript'
    },
    {
      skillName: 'Java'
    },
    {
      skillName: 'Spring Boot'
    }
  ],

  certifications: [
    {
      certificateName: 'Java Full Stack Developer',
      issuingCertificate: 'Code with Success'
    }
  ],

  projects: [
    {
      projectName: 'Employee Management System',
      technologiesUsed: 'Angular, Spring Boot, MySQL',
      projectDescription:
        'Developed employee management application with CRUD operations.'
    }
  ],

  links: [
    {
      githubUrl: 'https://github.com/ronakdev',
      linkdinUrl: 'https://linkedin.com/in/ronakdev',
      portfolioLink: 'https://ronak-portfolio.com',
      aboutYourself:
        'Passionate Full Stack Developer with Angular and Spring Boot experience.'
    }
  ]
}
  desiredJobRolesArr: string[] = [
    'Java Developer',
    'Frontend Developer',
    'Full Stack Developer',
    'Angular Developer',
    'Spring Boot Developer',
    'Backend Developer',
    'Software Engineer',
    'UI/UX Designer',
    'QA Engineer',
    'DevOps Engineer',
  ];
  preferredLocationsArr: string[] = [
    'Mumbai',
    'Pune',
    'Bangalore',
    'Hyderabad',
    'Chennai',
    'Delhi',
    'Noida',
    'Gurgaon',
    'Kolkata',
    'Ahmedabad',
    'Jaipur',
    'Indore',
    'Bhopal',
    'Lucknow',
    'Nagpur',
    'Surat',
    'Vadodara',
    'Coimbatore',
    'Kochi',
    'Visakhapatnam',
    'Chandigarh',
    'Mysore',
    'Nashik',
    'Patna',
    'Bhubaneswar',
    'Trivandrum',
    'Goa',
    'Remote',
  ];
  employmentTypesArr: string[] = [
    'Full Time',
    'Part Time',
    'Contract',
    'Internship',
    'Temporary',
    'Freelance',
    'Remote',
    'Hybrid',
    'Work From Office',
  ];
  degreesArr: string[] = [
    'B.Tech',
    'B.E',
    'B.Sc',
    'BCA',
    'B.Com',
    'BA',
    'BBA',
    'B.Arch',
    'B.Pharm',
    'MBBS',
    'M.Tech',
    'M.E',
    'M.Sc',
    'MCA',
    'M.Com',
    'MA',
    'MBA',
    'M.Pharm',
    'PhD',
    'Diploma',
  ];

  constructor(private _snackbar : SnackbarService) {}

  ngOnInit(): void {
    this.createJobApplicationform();
    this.onAddQualification();
    this.onAddskills();
    this.onAddProjects();
    this.onAddCertification();
    this.onAddLinks();
    this.onDeclerations();


  
  }

  onDeclerations(){
      this.jobApplicationForm.statusChanges.subscribe((status) => {
      if (status === 'VALID') {
        this.f['declaration'].enable({
          emitEvent: false,
        });
      } else {
        this.f['declaration'].disable({
          emitEvent: false,
        });
      }
    });
  }

  onJobFormSubmit() {
    console.log(this.jobApplicationForm);
    console.log(this.jobApplicationForm.getRawValue());
    if(this.jobApplicationForm.invalid){
      this.jobApplicationForm.markAllAsTouched()
      return
    }
    else{
      this._snackbar.openSnackbar(`APPLIED FOR JOB..!`);
      this.jobApplicationForm.reset()
    }
    
  }

  createJobApplicationform() {
    this.jobApplicationForm = new FormGroup({
      fullName: new FormControl(null, [
        Validators.required,
        Validators.pattern(CustomRegex.onlyText),
        Validators.minLength(5),
        Validators.maxLength(30),
      ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern(CustomRegex.email),
      ]),
      mobileNumber: new FormControl(null, [
        Validators.required,
        Validators.pattern(CustomRegex.onlyNums),
        Validators.minLength(10),
        Validators.maxLength(10),
      ]),
      dateOfBirth: new FormControl(null, [Validators.required]),
      gender: new FormControl(this.defultDender, [Validators.required]),
      currentLocation: new FormControl(null, [Validators.required]),
      desireJobRole: new FormControl(null, [Validators.required]),
      preferredLocation: new FormControl(null, [Validators.required]),
      employementType: new FormControl(null, [Validators.required]),
      expectedSalary: new FormControl(null, [
        Validators.required,
        Validators.pattern(CustomRegex.onlyNums),
      ]),
      educationDetails: new FormArray([]),
      skills: new FormArray([]),
      projects: new FormArray([]),
      certifications: new FormArray([]),
      links: new FormArray([]),
      declaration: new FormControl({ value: false, disabled: true }),
    });
  }

  get f() {
    return this.jobApplicationForm.controls;
  }

  get educationDetailsArr() {
    return this.jobApplicationForm.get('educationDetails') as FormArray;
  }

  get onSkillsArr() {
    return this.jobApplicationForm.get('skills') as FormArray;
  }
  get projectsArr() {
    return this.jobApplicationForm.get('projects') as FormArray;
  }
  get certificationsArr() {
    return this.jobApplicationForm.get('certifications') as FormArray;
  }
  get linksArr() {
    return this.jobApplicationForm.get('links') as FormArray;
  }

  onAddQualification() {
    let qualification = new FormGroup({
      degree: new FormControl(null, [Validators.required]),
      collage: new FormControl(null, [Validators.required]),
      passingYear: new FormControl(null, [Validators.required]),
      perecntage: new FormControl(null, [Validators.required]),
    });
    this.educationDetailsArr.push(qualification);
  }

  onAddskills() {
    let skillGroup = new FormGroup({
      skillName: new FormControl(null, [Validators.required]),
      experience: new FormControl(null, [Validators.required]),
    });
    this.onSkillsArr.push(skillGroup);
  }

  onAddProjects() {
    let projectGroup = new FormGroup({
      projectName: new FormControl(null, [Validators.required]),
      technologiesUsed: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
    });
    this.projectsArr.push(projectGroup);
  }

  onAddCertification() {
    let certificateGroup = new FormGroup({
      certificateName: new FormControl(null, [Validators.required]),
      issuingCertificate: new FormControl(null, [Validators.required]),
    });
    this.certificationsArr.push(certificateGroup);
  }

  onAddLinks() {
    let linksGroup = new FormGroup({
      githubUrl: new FormControl(null, [Validators.required]),
      linkdinUrl: new FormControl(null, [Validators.required]),
      portfolioLink: new FormControl(null, [Validators.required]),
      aboutYourself: new FormControl(null, [Validators.required]),
    });

    this.linksArr.push(linksGroup);
  }

  onRemoveQualification(i: number) {
    this.educationDetailsArr.removeAt(i);
  }
  onRemoveskills(i: number) {
    this.onSkillsArr.removeAt(i);
  }
  onRemoveProject(i: number) {
    this.projectsArr.removeAt(i);
  }

  onEditForm(){
    this.jobApplicationForm.patchValue(this.userDetails)
  }
}
