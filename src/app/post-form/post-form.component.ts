import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from '../interfaces/post';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
})
export class PostFormComponent implements OnInit {
  @Output() submitted = new EventEmitter<Post>();

  inputValue: boolean = false;

  constructor() {}

  onSubmit(form: NgForm) {
    this.submitted.emit(form.value);
    form.reset();
  }

  // let newSubmission: Post = {
  //   title: form.value.title,
  //   thought: form.value.thought,
  // };
  // this.submitted.emit(newSubmission);

  setValueToFalse() {
    this.inputValue = false;
  }

  setValueToTrue() {
    this.inputValue = true;
  }

  // toggleForm() {
  // this.inputValue = !this.inputValue;
  // }

  ngOnInit(): void {}
}
