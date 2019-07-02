# Local installation

## Prerequisites

- [Git](https://git-scm.com/)
- [Docker](https://docs.docker.com/)
- [Docker-compose](https://docs.docker.com/compose/install/)

1. Clone this Git repositoy:

   ```bash
   git clone https://github.com/kadaster/labs.kadaster.nl
   ```

2. Run the container in the directory of the repository

   ```bash
   docker-compose up
   ```

3. The site now run on <http://localhost:4000>.

## Templates

Labs uses templates to generate the site and their elements. Below is a list of which templates are available

### Default

The default template contains the navigation bar and a banner, and imports the default style

Variables:

| Variable name | Use                      | default value                           |
| ------------- | ------------------------ | --------------------------------------- |
| banner        | A image to use as banner | `/assets/images/banner-placeholder.jpg` |

### Case

Imports from the [default](###Default) template

### Facetcheck

Completely blank template

### Presentation

Imports presentation dependencies

### Story

Extends from the [default](###Default) template and imports the YASGUI stories dependency

| Variable name | Use                                          | default value                       |
| ------------- | -------------------------------------------- | ----------------------------------- |
| endpoint      | An endpoint to refer to                      | `https://data.labs.pdok.nl/sparql/` |
| output        | Output of story                              | `table`                             |
| basemap       | The type of chart to use for the geo plugins | `nlmaps`                            |

## Content requirements

### Tiles

The description field of tiles (HTML class name `card-description`)
must not contain more than 130 characters (including whitespace).
Longer texts may be used as introductory text on the page that the
tile links to.
