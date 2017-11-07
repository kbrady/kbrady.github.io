I am a graduate student at Vanderbilt University studying how electronic tools can be used in education.

<ul>
{% for post in site.posts %}
	<li>
		<time class="time">
			{% assign date_format = site.date_format | default: "%b %-d, %Y" %}
			{{ post.date | date: date_format }}
		</time>
		<h2>
			<a class="link" href="{{ post.url | relative_url }}" role="link">{{ post.title | escape }}</a>
		</h2>
	</li>
{% endfor %}
</ul>