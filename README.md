<img src="https://github.com/SergioGordillo/FormsAppAngular/blob/master/basics-reactive-form.png" alt="Image of a form of the app"/>

# Can I try this web app? :open_mouth:

You can download the project, install the `node_modules` with the command `npm install` and later you will need to use a `JSON Server` and mock some data with the following structure:

`{
    "users": [
        {
            "id": 1,
            "email": "test1@test.com",
            "username": "test1"
        },
        {
            "id": 2,
            "email": "test2@test.com",
            "username": "test2"
        },
        {
            "id": 3,
            "email": "test3@test.com",
            "username": "test3"
        }
    ]
}`

You can use this, for instance. Later, you will start your JSON Server with the following command `json-server --watch db.json` and you will start this application (front-end part) with the command `ng -o serve`. I haven't deployed it because this app does not have interesting functionalities for the users, it has just been done for learning purposes.

# What can you do with this web app? :thinking:

Basically add information from a form and manage this information with template driven forms and reactive forms Angular approach. The purpose of this app has just been learning how to work with forms in Angular, so it is an app which is not useful for end users.

# Which technologies did I use to develop this app? :thinking:

It is a web app made with Angular 12 + TypeScript + Bootstrap 5. <br>
I used Angular-CLI to create my Angular App. <br>

# Which is the purpose of this web app? :thinking:

It is a web app I made based on Fernando Herrera Angular course 🧐. I havent made barely changes compared to the project that Fernando Herrera made on the course, but just because I want to learn and adquire the Angular knowledge 🤓. I know the styles are very basic, but I just focused on Angular stuff. I learnt with this project about:

❤️ Good practices about making reusable components in Angular. <br>
❤️ Good practices about Angular folder structure. <br>
:heart: Using Router Module.<br>
:heart: Using children routes.  <br>
:heart: About Lazy Load. <br>
:heart: Template Driven Forms with Angular Forms. <br>
:heart: Reactive Forms. <br>
:heart: Customized Directives. <br>
:heart: Form Fields Validations with Regular Expressions. <br>
:heart: Async Validations with Reactive Forms. <br>
:heart: Customized error messages. <br>
:blue_heart: TypeScript. <br>
:art: Bootstrap 5. <br>


# FormsApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
