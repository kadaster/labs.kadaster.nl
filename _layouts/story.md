---
layout: default
---

<link href="/assets/css/stories.min.css" rel="stylesheet" type="text/css">
<div
{% if page.endpoint %}
     data-endpoint="{{ page.endpoint }}"
{% endif %}
{% if page.output %}
     data-output="{{ page.output }}"
{% endif %}
     class="story flex">
     <div class="flex-content">
  {{ content }}
  </div>
</div>
<script src="/assets/js/stories.min.js"></script>
<script src="/assets/js/yasgui.polyfill.min.js"></script>
<script type="text/javascript">
  window.onload = function () {
    {% if page.basemap %}
    window.Yasgui.Yasr.Instance.plugins.geo.defaults.defaults.map = "{{ page.basemap }}";
    window.Yasgui.Yasr.Instance.plugins.geo3d.defaults.map = "{{ page.basemap }}";
    {% else %}
    window.Yasgui.Yasr.Instance.plugins.geo.defaults.defaults.map = "nlmaps";
    window.Yasgui.Yasr.Instance.plugins.geo3d.defaults.map = "nlmaps";
    {% endif %}
    window.stories()
  };
</script>
