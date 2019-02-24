import {Injectable} from '@angular/core';

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

  public projects = [
    new Project('dcut', 'doc'),
    new Project('Serabass', 'ts'),
    new Project('Serabass', 'nasa-graphql'),
  ];

  constructor() {
  }

  public find({user, name}) {
    return this.projects.find(project => project.user === user && project.name === name);
  }
}
