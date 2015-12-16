---
layout: post
date: 2012-11-01T00:00:00-0500
to-date:
org: Logi Analytics
link:
title: Music Dashboard
categories: project

slideshows:
- id: ssMusicDashboard1
  description: Balsamiq mockups
  imagefolder: /music-dashboard/
  images:
  - name: wireframe-1.png
    text: The first image
  - name: wireframe-2.png
    text: The second image
- id: ssMusicDashboard2
  description: Logi Info screenshots
  imagefolder: /music-dashboard/
  images:
  - name: screenshot-1.png
    text: The third image
  - name: screenshot-2.png
    text: Another slideshow, first image
  - name: screenshot-3.png
    text: Another slideshow, second image
  - name: screenshot-4.png
    text: Another slideshow, third image

---

I was asked to create a sample application to audition for the Web App Developer position at Logi Analytics. After considering a few ideas, I realized that I could finally put my ridiculous collection of personal music data to use... and hopefully learn a lot along the way.

Armed with a database dump of my Last.FM song play data since 2006 and a spreadsheet of every concert I've attended since before that, I figured I could correlate the two based on common artists.

I began, as usual, by whiteboarding ideas and quickly creating a series of Balsamiq wireframes to sketch out the concepts I had in mind. The goal was to combine these data sources and use a single control area to analyze the results.

{% capture includeSlideshow %}
{% include slideshow.html id="ssMusicDashboard1" %}
{% endcapture %}
{{ includeSlideshow | replace: '    ', ''}}
{% comment %}http://stackoverflow.com/questions/24521599/can-i-turn-off-code-blocks-in-kramdown{% endcomment %}

I created a Logi Info application with custom CSS, web fonts, and graphics.

I learned .

{% capture includeSlideshow %}
{% include slideshow.html id="ssMusicDashboard2" %}
{% endcapture %}
{{ includeSlideshow | replace: '    ', ''}}
{% comment %}http://stackoverflow.com/questions/24521599/can-i-turn-off-code-blocks-in-kramdown{% endcomment %}
