import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
    {id: 0, name: "Portfolio Website", pictures: ["../../assets/portfoliositepics/portfoliositepic1.JPG", "../../assets/portfoliositepics/portfoliositepic2.JPG", "../../assets/portfoliositepics/portfoliositepic3.JPG"], projectLink: "https://github.com/zachariah-spencer/AngularPortfolioWebsite", summary: "A one page dynamic webapp built using Angular and Node.JS to showcase my professional experience.", description: "This project was generated with Angular CLI version 15.2.10. A website developed using the Angular framework with Node.js. This website is intended to highlight both my web development capabilities as well as to house my portfolio of development related projects. There is a home page, a portfolio page, a resume page, and a contact page. Each is represented in a single webapp using Angular routing to display the appropriate components.", tags: [Tag.ANGULAR, Tag.BOOTSTRAP, Tag.NODEJS, Tag.TYPESCRIPT]},
    {id: 1, name: "Inventory Sales Mix Reporting", pictures: ["../../assets/salesforecastpics/salesprojectpic1.JPG", "../../assets/salesforecastpics/salesprojectpic2.JPG", "../../assets/salesforecastpics/salesprojectpic3.JPG"], projectLink: "https://github.com/zachariah-spencer/inventory-sales-mix-reporting", summary: "A lightweight C++ application designed to do basic sales mix reporting for Corner Grocery.", description: "The program begins by reading the data from a transaction history file and backing up the sales mix data. The user is then prompted to select from one of four menu options. These options include searching for the times a particular item was purchased by name, providing the user with a sales mix report in numerical list format, providing the user with a sales mix report in a histogram visual representation, and exiting the program. Each option behaves as expected and when a task is carried out, the program loops back to the main menu until the user selects the menu option to exit the program. Behind the scenes, the program tracks each unique item as an Item class object. It creates a map data structure of these Item class object’s with the item’s name as the key to each. Within the program, an Item class object contains the item’s name as well as how many times it has been purchased. Anytime the program sees a duplicate in the transaction history file it simply finds the associated Item and increments the number of times it has been purchased. This makes generating the sales mix reports in either histogram or list format a trivial task. All the program needs to do is iterate through the existing keys mapped to a value, and since each one is mapped to an Item object containing the number of times that item was purchased, we can easily access the relevant data for the user and display it. For individual searches the program simply needs to search for the map value using the user’s search inquiry as the key.", tags: [Tag.CPLUSPLUS]},
    {id: 1, name: "Metroidvania Videogame", pictures: ["../../assets/img1.png", "../../assets/img2.png", "../../assets/img3.png"], projectLink: "//www.github.com", summary: "A simple metroidvania videogame prototype developed in the Godot engine for a month long game jam.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.GDSCRIPT]},
  ];

  constructor() { }

  GetProjects() {
    return this.projects;
  }

  GetProjectByID(id: number) : Project {
    let project = this.projects.find(project => project.id ===id);

    if (project === undefined){
      throw new TypeError('There is no project that matches the id: ' + id);
    }

    return project;
  }

  GetProjectsByFilter(filterTags: Tag[]){
    let filteredProjects: Project[] = [];

    this.projects.forEach(function(project){
      let foundAll = true;

      filterTags.forEach(function(filterTag) {
        if (project.tags.includes(filterTag) == false){
          foundAll = false;
        }
      });

      if (foundAll){
        filteredProjects.push(project);
      }

    });

    return filteredProjects;
  }
}
