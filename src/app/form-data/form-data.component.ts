import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray, Form } from '@angular/forms';
import { ServicesService } from '../service/services.service';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.css']
})
export class FormDataComponent {
  constructor(private services: ServicesService, private fb : FormBuilder) { }



  title = 'profile'
  hobbies: String[] = ['Music','Dancing','Travelling'] 
  stateInfo: any[] = [
    { id: 1, StateName: "Gujarat" },
    { id: 2, StateName: "Maharashtra" },
    { id: 3, StateName: "West Bengal" }
  ];

  cityInfo: any[][] = [
      [
        { id: 0, name: "Select City"},
      ],
    [
      { id: 1, name: "Ahmedabad" },
      { id: 2, name: "Jamnagar" }
    ],
    [
      { id: 1, name: "Mumbai" },
      { id: 2, name: "Pune" }
    ],
    [
      { id: 1, name: "Kolkata" },
      { id: 2, name: "Howrah" }
    ]
  ];

  profileInfo =  this.fb.group({
    name: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]),
    email: new FormControl('',[Validators.required, Validators.pattern(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/)]),
    password: new FormControl('',[Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)]),
    dob: new FormControl('',[Validators.required]),
    gender: new FormControl('',[Validators.required]),
    phone: new FormControl('',[Validators.required,Validators.pattern(/^[0-9]{10}/)]),
    city : new FormControl('',[Validators.required]),
    state : new FormControl('',[Validators.required]),
    hobbies : new FormArray([],[Validators.required])
  });

  selectedStateIndex: number = 0;
  selectedCityIndex: number = 0;

  onChangeState(event: any) {
    this.selectedStateIndex = event.target.value;
    this.selectedCityIndex = 0; // Reset city selection when state changes
  }  
  onChange(e :any){
    const checked = e.target.checked;
    const value = e.target.value;
    const hobby = this.profileInfo.get('hobbies') as FormArray

    if(checked){
      hobby.push(new FormControl(value))
    }
    else{
      let i:number = 0;
      hobby.controls.forEach((item)=>{
        if(item.value == value){
          hobby.removeAt(i)
        }
        i++;
      })
    }
    
  }
   handle(){
    console.log(this.profileInfo.get('hobbies') as FormArray)
     console.log(this.profileInfo.value)
    this.services.postData(this.profileInfo.value).subscribe(
      response => {
        console.log('Server response:', response);
        this.profileInfo.reset();
      },
      error => {
        console.error('Error occurred:', error);
      })
      
  }

  get profile(){
    return this.profileInfo.controls;
  }
}
