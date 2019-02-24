import {Component, Input, OnInit} from '@angular/core';
import {Project} from '../../services/projects.service';

@Component({
  selector: 'app-github-project',
  templateUrl: './github-project.component.html',
  styleUrls: ['./github-project.component.scss']
})
export class GithubProjectComponent implements OnInit {

  @Input()
  public project: Project;

  constructor() {
  }

  ngOnInit() {
  }

  public get url() {
    return `https://github.com/${this.project.user}/${this.project.name}`;
  }
}
