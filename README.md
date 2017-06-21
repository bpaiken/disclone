# Disclone

[Heroku Live Demo][heroku]

[Trello][trello]

[heroku]: placeholder
[trello]: placeholder


## Minimum Viable Produce

Disclone is a web application based off Discord. Disclone is built using Ruby on Rails and React w/ Redux. Following week 9 (30 June 2017), this application will satisfy the following criteria with bug-free navigation, adequate seed data and sleek CSS styling:

- New account creation/login, guest/demo login
- Production README
- Hosting on Heroku
- Live Chat 
- Servers w/ multiple chat channels
- Direct messaging
- Multi-person direct messaging

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API Endpoints][api-endpoints]
* [DB Schema][schema]
* [Sample State][sample-state]

[wireframes]: docs/wireframes
[components]: docs/component-hierarchy.md
[sample-state]: docs/sample-state.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and front end user auth (2 day)

**Objective:** Functioning back end along with front end auth components.

### Phase 2: Messages and Channel model, API, and Messages index component (2 days)

**Objective:** Messages can be created and read through the api.  Integrate pusher websocket for message update.

### Phase 3: Server Model, API, Index.  User and Channel Index.  Add Style to home view. (2 days)

**Objective:** Several functioning components of the home component - server index, channel index, message index, user index.

### Phase 4:  Header component and message Search Logic (1 day)

**Objective:** Add header, with functioning messages search bar to home compoment.

### Phase 5: Direct Messages functionality (2 days)

**Objective:** Add user detail component, direct messages component, along with their supporting routes.

### Phase 6: Complete Styling, fix bugs, Seed database (1 day)

**Objective:** Clean up styling, Fix bugs, seed database for presentation.

### Bonus Features
- Live voice channels
- Search Messages
