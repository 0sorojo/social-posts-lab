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
    let newSubmission: Post = {
      title: form.value.title,
      thought: form.value.thought,
    };
    this.submitted.emit(newSubmission);
    form.reset();
  }

  setValueToFalse() {
    this.inputValue = false;
  }

  setValueToTrue() {
    this.inputValue = true;
  }

  ngOnInit(): void {}
}
