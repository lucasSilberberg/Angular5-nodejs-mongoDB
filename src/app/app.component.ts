import { Component } from '@angular/core';
import { PostService } from './posts.service';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PostService]
})
export class AppComponent {
  title: string;
  subtitle: string;
  name: string;
  hobbies: string[];
  showHobbies: boolean;
  posts: IPost[];

  constructor(private postService: PostService) {
    this.title = 'Angular app';
    this.subtitle = "Testeo de Angular";
    this.hobbies = ["nadar", "música", "comer", "dormir"];
    this.showHobbies = true;
    this.postService.getPosts().subscribe(posts => {
      console.log(posts);
      this.posts = posts;
    })
  }

  functionShowHobbies() {
    console.log(this.showHobbies);
    this.showHobbies = !this.showHobbies;
  }

  addHobbie(hobby) {

    let text = hobby.value;
    hobby.classList.remove("is-invalid");
    if (text) {
      this.hobbies.push(text);
    } else {
      hobby.classList.add("is-invalid");
    }
    hobby.value = "";
    return false;
  }

  clearHobbie() {
    this.hobbies = [];
  }

  addUser() {


  }

}

interface IPost {
  id: number;
  name: string;
  phone: number;
  website: string;
  address: string;
}