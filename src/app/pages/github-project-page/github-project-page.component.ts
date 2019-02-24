import {Component, Input, OnInit} from '@angular/core';
import {Project, ProjectsService} from '../../services/projects.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-github-project-page',
  templateUrl: './github-project-page.component.html',
  styleUrls: ['./github-project-page.component.scss']
})
export class GithubProjectPageComponent implements OnInit {

  @Input()
  public project: Project;

  constructor(public projectService: ProjectsService,
              public route: ActivatedRoute) {
  }

  async ngOnInit() {
    await this.route.params.subscribe(params => {
      this.project = this.projectService.find(params as any);
    });
  }
}
