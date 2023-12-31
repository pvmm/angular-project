# AngularProject

Simple Angular project using nodeenv and direnv for easy management.

# Requirements

* Install nodeenv;
* Install direnv;
* put direnv in your shell initialization, for instance:
  * in `.bashrc` put `eval "$(direnv hook bash)"` at the end;
  * And run `dirent allow` inside the project's root directory;

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
