---
title: Contacts
layout: layouts/base.njk
---

# We had some form submissions

<ul>
{%- for contact in contacts %}
  <li>{{ contact.data.name }}</li>
{%- endfor %}
</ul>

