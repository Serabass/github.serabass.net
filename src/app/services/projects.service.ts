import {Injectable} from '@angular/core';

export class ProjectGroup {
  public constructor(public url: string,
                     public title: string,
                     public projects: Project[] = []) {
  }
}

export class Project {
  public constructor(public user: string,
                     public name: string) {

  }

  public get url() {
    return `${this.user}/${this.name}`;
  }

  public get githubUrl() {
    return `https://github.com/${this.user}/${this.name}`;
  }

  public get readme() {
    return `https://raw.githubusercontent.com/${this.user}/${this.name}/master/README.md`;
  }
}

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  public groups = [
    [
      'Serabass', 'Own projects', [
      'parserbin',
      'ts',
      'nasa-graphql',
      'github.serabass.net',
      'createremotethread',
      'bsime.net',
      'pageparser',
      'yaroute',
      'gp5-parser',
    ],
    ],
    [
      'dcut', 'DCut', ['doc']
    ]
  ] as any;

  constructor() {
    this.groups = this.groups.map(group => {
      let [url, title, projects] = group;
      projects = projects.map(project => new Project(url, project));
      return new ProjectGroup(url, title, projects);
    });
  }

  public find({user, name}) {
    return this.groups.find(group => group.url === user)
      .projects.find(project => project.name === name);
  }
}
