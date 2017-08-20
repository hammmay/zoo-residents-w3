# Life Is A Zoo - Object Creation & Organizer

#### By Laura Hamilton

## Description

This application is an object creator and manipulator, demonstrating Angular Javascript through TypeScript. A user can create an animal with attributes, update an animal's attributes, and sort the animals by the age attribute.

## Setup

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation
|Enter these commands in your console|
|---|
|`git clone <repository-url>` this repository|
|`cd zoo-residents-w3`|
|`npm install`|
|`bower install`|

## Running / Development
|Enter this command in your console|
|---|
|`gulp serve`|
|Visit the app at [http://localhost:3000](http://localhost:3000)|

### Building
|Enter this command in your console|
|---|
|`gulp build`|

## Technologies Used

* JavaScript
* TypeScript
* Node
* Phantom

## Specs

|Behavior - Plain English|Input|Output|
|---|---|---|
|User fills out all fields on the "Add A New Resident" form and clicks the "Add This Resident" button to see the new resident appended to the list of residents|User fills out the form and presses the "Add This Resident" button|The new resident appears at the bottom of the list of animals|
|User clicks on the edit button below an animal and an edit form appears for the animal that was clicked upon|User clicks on "Edit Ed's Details" on the list|Edit field form appears for Ed|
|User clicks the "Done" button after making edits to any field on the edit form, and the changes are saved for the resident|User changes resident's location to "Safari" on the edit form and clicks the "Done" button|Resident's location is saved as "Safari"|
|User selects the "Young", "Older", or "All" option from the drop down age filter and the residents list change to only the resident's that qualify under the filter selected|User selects the "Young" filter|Residents under the age of 2 years old are displayed|

### Legal

Copyright (c) 2017 Laura Hamilton laurahamilton9@gmail.com

This software is licensed under the MIT license.
