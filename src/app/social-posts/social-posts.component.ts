import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css'],
})
export class SocialPostsComponent implements OnInit {
  posts: Post[] = [
    {
      title: 'Rainbows',
      thought: 'Why are there so many songs about rainbows',
    },
    {
      title: 'Jenny',
      thought: 'her number is 867-5309',
    },
    {
      title: 'Pirates',
      thought:
        'Pirates consipicuously dissapeared the same time the planets carbon emissions skyrocketed. Do you think that pirates were really guardians of the planet?',
    },
  ];

  constructor() {}

  onSubmit(post: Post) {
    this.posts.unshift(post);
  }

  onDelete(index: number) {
    this.posts.splice(index, 1);
  }

  ngOnInit(): void {}
}
