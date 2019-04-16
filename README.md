# Local installation

## Prerequisites

- [Git](https://git-scm.com/)
- [Docker](https://docs.docker.com/)
- [Docker-compose](https://docs.docker.com/compose/install/)

1. Clone this Git repositoy:

   ```bash
   git clone https://github.com/PDOK/data.labs.pdok.nl
   ```

2. Run the container in the directory of the repository

   ```bash
   docker-compose up
   ```

3. The site now run on <http://localhost:4000>.

# Issues

## Seemingly random card order on overview pages

While it is nice to generate overview pages automatically, it is
currently not possible to determine the order in which cards appear in
the overview, which is very undesirable.  The code that produces these
seemingly random orders looks like this:

```html
{% for page in site.pages %}
  {% if page.layout == "story" %}
    <a href="{{page.url}}">
      <div class="card">
        <img class="card-image" alt="{{page.title}}" src="{{page.logo}}">
        <div class="card-title">{{page.title}}</div>
        <div class="card-description">{{page.description}}</div>
      </div>
    </a>
  {% endif %}
{% endfor %}
```
