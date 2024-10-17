---
description: Self-host Architecture
since: 2.0
---

## Site Architecture on deco.cx

<img width="640" alt="Deployment Architecture" src="/docs/self-host/architecture.png">

The high-level architecture of deco integrates different roles (User, Business
User, Developer), a website web server, a content delivery network (CDN),
administrative functionalities, and external systems (databases, e-commerce,
SaaS). The focus is on content management and development/configuration
environments, with interaction between various stakeholders and components.

### Architecture Overview

1. **Users:**
   - **End User:** Accesses the site via the deco CDN.
   - **Business User:** Interacts with the system via the web environment to
     view and edit content in the "Admin."
   - **Developer (Dev):** Works locally, sends changes via Git, and deploys
     through CI/CD pipelines.

2. **System Components:**
   - **CDN:** Delivers the site to end users.
   - **Site:** The web server accessed by users via the CDN.
   - **Web Environment (Web Env):** Where developers and business users view
     changes that are saved in the environment.
   - **Admin Panel (Admin):** Centralizes control of changes, saving them to Git
     and reflecting updates in web and local environments.
   - **Git:** Version control system integrating changes from Admin and
     developers, with deployment via CI/CD.
   - **External Systems (Database, E-commerce, SaaS):** Provide data and
     services consumed by the site.

### Components and Process Flows

1. **Content Delivery:**
   - **Users:** Interact with the live site via the CDN, with content optimized
     for fast delivery.

2. **Business User Workflow:**
   - **View/Edit:** Business users edit content in Admin and preview changes in
     the web environment.
   - **Publish:** Changes are saved to Git and propagated to the site via the
     CI/CD pipeline.

3. **Developer Workflow:**
   - **Local Environment:** Developers make local changes, sync with Admin, and
     send to Git.
   - **CI/CD:** After changes are pushed to Git, they are automatically deployed
     via CI/CD.

## deco.cx Architecture with Self-hosted Site

<img width="640" alt="Self-host Site Architecture" src="/docs/self-host/self-host-site.png">

### Changes in Architecture with Self-hosted Site

With self-hosting, the site is hosted on the organization's own infrastructure.
Here are the main changes and impacts:

### Main Changes

1. **Self-hosted Site and Internal Systems:**
   - The **Site** is hosted locally or on the organization's infrastructure,
     outside deco.cx's direct control.
   - **Internal Systems** (databases and custom software) integrate directly
     with the self-hosted site.

2. **Tunnel to Access the Site:**
   - deco.cx users and systems access the self-hosted site via a tunnel or
     public access, under the organization’s control.

3. **CI/CD and Git Manage the Site:**
   - Even with self-hosting, **CI/CD** is still required to publish code and
     content changes to the site, now under the organization's responsibility.

4. **Continuity of deco.cx Infrastructure:**
   - The **Web Env** and **Admin** remain within deco.cx infrastructure. If
     necessary, the organization must configure access from the web environment
     to internal systems via a tunnel (or public access).

### Impact of the Change

- **Greater Control:** The organization gains more control over the site and
  internal systems.
- **Additional Complexity:** Managing the tunnel and CI/CD adds maintenance
  responsibilities.
- **No deco.cx Resources:** The site loses access to deco.cx's CDN and other
  services responsible for security and performance optimization.
- **Local Customization:** Greater flexibility in integrating with internal
  systems.

## deco.cx Architecture with Self-hosted Site and Environments

<img width="640" alt="Self-host Site and Envs Architecture" src="/docs/self-host/self-host-envs.png">

### Changes in Architecture with Self-hosted Site and Environments (Envs)

With this change, both the **Site** and **Web Environments** are self-hosted.
This gives the organization full control over development, production, and
integration with internal systems.

### Main Changes

1. **Self-hosted Site and Environments (Envs):**
   - Both the **Site** and **Web Env** are hosted on the organization’s own
     infrastructure.

2. **Tunnel to Access the Web Environment:**
   - Interaction with the self-hosted web environment occurs via a tunnel,
     maintaining connectivity with deco.cx. deco.cx intervention is needed if
     the tunnel is not publicly accessible.

3. **CI/CD and Git:**
   - **CI/CD** manages changes locally, with automatic deployment to the
     self-hosted site, but under the organization’s responsibility.

4. **Continuity of deco.cx Infrastructure:**
   - The **Admin** remains connected to deco.cx, but relies on the tunnel to
     interact with the self-hosted environment.

### Impact of the Change

- **Complete Control:** Full control over the site and environments, offering
  greater flexibility.
- **Independence from deco.cx:** Reduced dependency on external services for
  development.
- **Maintenance Complexity:** Greater responsibility for security and
  performance.
- **Local CI/CD Pipelines:** Custom CI/CD pipelines are required for local
  deployments.

### Conclusion

With self-hosted site and environments, the organization gains more control and
flexibility but takes on greater responsibility for security, maintenance, and
system connectivity.
