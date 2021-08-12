import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Cool Pics';
  image1 = 'https://c.tenor.com/P62Qp5f_y64AAAAj/ai-researching.gif';
  image2 = 'https://i.pinimg.com/564x/92/57/b4/9257b4b004e907c9076d0ad865097675.jpg';
  image3 = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1aff5f49-696b-4b1c-8bc4-0f88d8eaa71c/de63gui-518087d7-bb84-4da6-b56f-a0541e8c21ef.png/v1/fill/w_1109,h_721,strp/home___bug_fables__by_pink__reptile_de63gui-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODMyIiwicGF0aCI6IlwvZlwvMWFmZjVmNDktNjk2Yi00YjFjLThiYzQtMGY4OGQ4ZWFhNzFjXC9kZTYzZ3VpLTUxODA4N2Q3LWJiODQtNGRhNi1iNTZmLWEwNTQxZThjMjFlZi5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.gw3v0gWpEeZ9xo9WqbZ4RsgHNcrfYWWuDcK7gjldPqM';

  constructor() { }

  ngOnInit() {
  }

}