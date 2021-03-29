import { Component } from '@angular/core';

@Component({
  selector: 'text-section',
  templateUrl: 'text-section.component.html',
  styleUrls: ['text-section.component.scss'],
})
export class TextSectionComponent {
  public sectionTitle = 'A little about me';
  public bodyMessage = `
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur,
    exercitationem! Nisi optio ad inventore pariatur eaque? Atque earum
    dolorum non reprehenderit esse veniam pariatur aut nisi, aperiam eaque
    odit quaerat? Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    Consectetur, exercitationem! Nisi optio ad inventore pariatur eaque? Atque
    earum dolorum non reprehenderit esse veniam pariatur aut nisi, aperiam
    eaque odit quaerat?
  `;
  public resumeFile = 'assets/files/Resume--Fermin-Casillas.pdf';
  public profileImage = 'assets/images/road@2x.jpg';
  public age = 28;
  public location = 'Tepic, NAY. Mexico';
  public ctaText = 'Download Resume';
}
