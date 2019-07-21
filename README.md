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

The default template contains the navigation bar and a banner.

It defines the following variables:

| Variable name | Use                      | Default value                           |
| ------------- | ------------------------ | --------------------------------------- |
| `banner`      | A image to use as banner | `/assets/images/banner-placeholder.jpg` |

### Facetcheck

A completely blank template, allowing a FacetCheck browser to take up
the entire browser pane.

### Page

Imports from the [default template](###Default).

### Presentation

Imports presentation dependencies.

### Story

Extends the [default template](###Default) and imports the Data
Stories dependency.

It defines the following variables:

| Variable name | Use                                                                    | Default value                       |
| ------------- | ---------------------------------------------------------------------- | ----------------------------------- |
| `basemap`     | The default background map for the 2D geospatial visualization plugin. | `nlmaps`                            |
| `endpoint`    | The default endpoint for queries.                                      | `https://data.labs.pdok.nl/sparql/` |
| `output`      | The default result set visualization for queries.                      | `table`                             |

## Content requirements

### Tiles

The description field of tiles (HTML class name `card-description`)
must not contain more than 130 characters (including whitespace).
Longer texts may be used as introductory text on the page that the
tile links to.

## Tips & tricks

### Refer to Figures

```
Within text you can refer to [Figure 1](#figure-1).

<figure id="figure-1">
  <img src="{{URL}}">
  <figcaption>{{TEXT}}</figcaption>
</figure>
```

### Use of Markdown within an HTML tag

```
<div markdown="1">
  You can **use** Markdown here.
</div>
```

### Definition list in Markdown

```md
Enterprise Knowledge Graphs
: Wat is de toegevoegde waarde van de Knowledge Graphs voor Kadaster?

Gamification and Linked Data
: Hoe kunnen we met gamifiction principes volledigheid en/of kwaliteit van Kadaster data verbeteren?
```

The above Markdown is translated into the following HTML:

```html
<dl>
  <dt>Enterprise Knowledge Graphs</dd>
  <dt>Wat is de toegevoegde waarde van de Knowledge Graphs voor Kadaster?</dt>
  <dd>Gamification and Linked Data</dd>
  <dt>Hoe kunnen we met gamifiction principes volledigheid en/of kwaliteit van Kadaster data verbeteren?</dt>
</dl>
```
