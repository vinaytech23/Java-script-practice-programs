import { Component, OnInit } from '@angular/core';
import {  NgForm, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-file-size-one',
  templateUrl: './file-size-one.component.html',
  styleUrls: ['./file-size-one.component.css']
})

export class FileSizeOneComponent implements OnInit {

  file_status;
  file;
  fGroup = this.fb.group({
    file1: [null, Validators.required]
  });

  readFile(fileEvent: any) {
     this.file = fileEvent.target.files[0];
    // console.log('size', file.size);
    // console.log('type', file.type);
     return this.file_status = this.file.size >= 1024000 ? false : true;

 }

  constructor(private fb: FormBuilder) {}
  ngOnInit() {
  }


}
