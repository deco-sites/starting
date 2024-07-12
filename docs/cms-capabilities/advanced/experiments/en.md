---
description: |
   Home: team management, sites, and user profile
---

The `home` represents the user's initial space. From this screen, it is possible to access sites, teams, as well as the deco documentation itself.

<img width="640" alt="Home" src="/docs/cms-capabilities/home/home1.png">

## Command Bar

On the home screen, and throughout the use of the admin, a `command bar` will always be available in the top bar of the screen. The command bar operates according to the open context. On the `home` screen, it allows searching for and opening user sites and teams.

<img width="480" alt="Command Bar" src="/docs/cms-capabilities/home/home3.png">

In addition, it is possible to perform specific commands. The following commands are available on the `home` screen:

- **/open**: to open sites or teams (default command when selecting a team or site from the search)
- **/delete**: to delete sites or teams

## Profile

In addition to the `command bar`, it is always possible to access your user profile from any space in the admin. To do this, access your user's photo in the upper right corner.

<img width="320" alt="Access Profile" src="/docs/cms-capabilities/home/home2.png">

In it, it is possible to define settings regarding your profile (including your photo), payment details (for users who perform tasks), and an API key for admin use.

<img width="640" alt="User Profile" src="/docs/cms-capabilities/home/home5.png">

### API Key (Dev)

The API Key allows you to perform operations in the admin (loaders and actions), with the permissions of your user. In the request for admin loaders/actions, define the `x-api-key` header that is provided on this screen.

<img width="320" alt="API Key" src="/docs/cms-capabilities/home/home6.png">

## Teams

Team management allows configuration of:

- **Sites**: Listing of team sites, as well as the ability to move, delete, and open sites
- **Members**: Listing of team members, allowing role management and member invitation
- **Billing**: Allows hiring and management of the account type for the team
- **Settings**: Changes the team name or deletes the team itself

<img width="480" alt="Home" src="/docs/cms-capabilities/home/home4.png">