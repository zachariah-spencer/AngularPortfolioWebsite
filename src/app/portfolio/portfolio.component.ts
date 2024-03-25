import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser'
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit{

  projects = {} as Project[];

  isCollapsed: boolean = true;
  typescript: boolean = false;
  angular: boolean = false;
  python: boolean = false;
  gdscript: boolean = false;
  cplusplus: boolean = false;
  java: boolean = false;
  nodejs: boolean = false;
  bootstrap: boolean = false;
  filtering: boolean = false;

  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle('Portfolio - Zachariah Spencer');
  }
  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }


  Filter() {
    let filterTags: Tag[] = [];

    if (this.typescript){
      filterTags.push(Tag.TYPESCRIPT);
    }

    if (this.angular){
      filterTags.push(Tag.ANGULAR);
    }
    
    if (this.python){
      filterTags.push(Tag.PYTHON);
    }

    if (this.gdscript){
      filterTags.push(Tag.GDSCRIPT);
    }

    if (this.cplusplus){
      filterTags.push(Tag.CPLUSPLUS);
    }

    if (this.java){
      filterTags.push(Tag.JAVA);
    }

    if (this.nodejs){
      filterTags.push(Tag.NODEJS);
    }

    if (this.bootstrap){
      filterTags.push(Tag.BOOTSTRAP);
    }


    if(this.python || this.angular || this.gdscript || this.typescript || this.cplusplus || this.java || this.nodejs || this.bootstrap){
      this.filtering = true;
    }
    else {
      this.filtering = false;
    }


    this.projects = this.projectService.GetProjectsByFilter(filterTags);
  }

  ResetFilters(){
    this.typescript = false;
    this.angular = false;
    this.python = false;
    this.gdscript = false;
    this.cplusplus = false;
    this.java = false;
    this.nodejs = false;
    this.bootstrap = false;
    this.filtering = false;

    this.projects = this.projectService.GetProjects();
  }

}
