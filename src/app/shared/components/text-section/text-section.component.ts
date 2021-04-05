import { Component } from '@angular/core';

@Component({
  selector: 'text-section',
  templateUrl: 'text-section.component.html',
  styleUrls: ['text-section.component.scss'],
})
export class TextSectionComponent {
  public location = 'Tepic, NAY. México.';
  public resumeFile = '';
  public profileImage = 'assets/images/road@2x.jpg';
  public age = 28;
  public bodyMessage = `
    <h2 id="about" class="section-title"> A little about me </h2>

    <p>
      Software Developer with focus on Web develpmen. Experience programming in
      frameworks such as Angular,
      NestJS, and developing RESTful API services and GraphqQL.
    </p>

    <p>
      As a person, I'm always trying to find the way to be a btter Software
      Developer and improve my programming skills and learn new software trends.
      Another thought that i have is working as a team is one of the best things
      that people can do, becaouse there are things that you don;t learn by your
      self and the support as team mates is worth.
    </p>

    <a target="_blank" class="btn btn-primary" href="assets/files/Resume--Fermin-Casillas.pdf">
      Download Resume
    </a>
  `;
}
