---
layout: post
title: "Vanderbilt Visualization Challenge Submission"
date: 2017-03-01
---

<div class="card-header">
*A Year of Events at Vanderbilt*: a visualization of 9,619 events which took place between January 1, 2016 and May 31, 2017 at Vanderbilt University.
</div>
<div id="accordion" role="tablist" aria-multiselectable="true">
  <div class="card">
		<a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
    <div class="card-header" role="tab" id="headingOne">
      <b>Map</b>
			: The map and bar chart on the left show the <b>number of events</b> at each location and the <b>percentage which were public</b>.
    </div>
		</a>

    <div id="collapseOne" class="collapse" role="tabpanel" aria-labelledby="headingOne">
      <div class="card-block">

				<div id="map-accordion" role="tablist" aria-multiselectable="true">
				  <div class="card">
						<a data-toggle="collapse" data-parent="#map-accordion" href="#map-collapseOne" aria-expanded="true" aria-controls="map-collapseOne">
				    <div class="card-header" role="tab" id="map-headingOne">
				      <b>
				        Map
				      </b>
				    </div>
				    </a>

				    <div id="map-collapseOne" class="collapse show" role="tabpanel" aria-labelledby="map-headingOne">
				      <div class="card-block">
				      	<p>Each square on the map represents a building.</p>
				        <p>The <b>size</b> of the square represents the <b>number of unique</b> events which happened at that building.
				        <br/>
				        <small>Two events are considered the same if they have the same title. Art exhibitions are often repeated for each day they are open. Most talks include the speaker in the title even if they are part of a series. Thus talks are usually counted as distinct events.
				        </small>
				        </p>
				        <p>
				        The <b>color</b> of the square represents the percent of unique events which were <b>open to the public</b>. Darker buildings predominantly host public events while lighter buildings cater to just the Vanderbilt Community
				        </p>
				        <p>
				        On campus outdoor events are assigned to the closest building.
				        </p>
				        <p>
				        <b>Hovering</b> over a square will bring up a <b>menu</b> with information like the name of the <b>building</b>, the <b>number of unique events</b> and the <b>percentage which were open to the public</b>.
				        </p>
				        <p>
				        <b>Clicking</b> on a square will <b>filter</b> the visualization to only show information on events in that building. To <b>undo</b> filtering, click the undo or reset buttons at the bottom of the visualization.
				        </p>
				        <p>
				        You can click and drag on the map to select multiple buildings. To filter by off campus locations, click on the title or bar associated with the desired locaiton.
				        </p>
				      </div>
				    </div>
				  </div>
				  <div class="card">
						<a data-toggle="collapse" data-parent="#map-accordion" href="#map-collapseTwo" aria-expanded="false" aria-controls="map-collapseTwo">
				    <div class="card-header" role="tab" id="map-headingTwo">
				      <b>Bar Chart</b>
				    </div>
						</a>

				    <div id="map-collapseTwo" class="collapse" role="tabpanel" aria-labelledby="map-headingTwo	">
				      <div class="card-block">
				        <p>
				        Events which are <b>not associated with an on campus building</b> are shown in the bar chart labeled <b>Other Locations</b>.
				        </p>
				        <p>Each bar represents a building.</p>
				        <p>The <b>length</b> of the bar represents the <b>number of unique</b> events which happened at that building.
				        <br/>
				        <small>Two events are considered the same if they have the same title. Art exhibitions are often repeated for each day they are open. Most talks include the speaker in the title even if they are part of a series. Thus talks are usually counted as distinct events.
				        </small>
				        </p>
				        <p>
				        The <b>color</b> of the bar represents the percent of unique events which were <b>open to the public</b>. Darker locations predominantly host public events while lighter locations cater to just the Vanderbilt Community
				        </p>
				        <b>Hovering</b> over a bar will bring up a <b>menu</b> with information like the name of the <b>location</b>, the <b>number of unique events</b> and the <b>percentage which were open to the public</b>.
				        </p>
				        <p>
				        <b>Clicking</b> on a bar will <b>filter</b> the visualization to only show information on events at that location. You can select multiple bars to see the events at multiple locations. To <b>undo</b> filtering, click the undo or reset buttons at the bottom of the visualization.
				        </p>
				      </div>
				    </div>
				  </div>
				</div>
			</div>
    </div>
  </div>
  <div class="card">
		<a data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
    <div class="card-header" role="tab" id="headingFour">
      <b>Dropdown Filters</b>
			: The dropdown lists in the center <b>filter</b> the data.
    </div>
		</a>

    <div id="collapseFour" class="collapse" role="tabpanel" aria-labelledby="headingFour">
      <div class="card-block">
      	<p>
      	The drop down menu with the label <b>Type of Event</b> allows you to look at all events, public events only or community events only.
      	</p>
      	<p>
      	The drop down menu with the label <b>Location</b> allows you to select <b>specific locations to look at</b>. To select or unselect all locations click on the "All" option at the top of the list. You can choose multiple locaitons from the list and search for specific locations using the textbox at the top.
        <p>
        To <b>undo</b> filtering, click the undo or reset buttons at the bottom of the visualization.
        </p>
      </div>
    </div>
  </div>
  <div class="card">
  	<a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
    <div class="card-header" role="tab" id="headingTwo">
      <b>Charts on Right</b>
      	: The charts on the right show the <b>time</b> of day, <b>day</b> of the week and <b>week</b> in a timeline when events occurred.
    </div>
    </a>
    <div id="collapseTwo" class="collapse" role="tabpanel" aria-labelledby="headingTwo">
      <div class="card-block">
      	<div id="chart-accordion" role="tablist" aria-multiselectable="true">
				  <div class="card">
				    <a data-toggle="collapse" data-parent="#chart-accordion" href="#chart-collapseOne" aria-expanded="true" aria-controls="collapseOne">
				    <div class="card-header" role="tab" id="headingOne">
				      <b>
				        Time of Day
				      </b>
				    </div>
				    </a>

				    <div id="chart-collapseOne" class="collapse show" role="tabpanel" aria-labelledby="headingOne">
				      <div class="card-block">
			      		<p>Each <b>dot</b> represents an <b>hour</b>. The hours are positioned according to where they would be drawn on a 24 hour clock.
			        	</p>
			        	<p>
			        	The <b>color</b> of a dot represents the <b>number of unique</b> events which started at that hour.
			        	<br/>
				        <small>Two events are considered the same if they have the same title. Art exhibitions are often repeated for each day they are open. Most talks include the speaker in the title even if they are part of a series. Thus talks are usually counted as distinct events.
				        </small>
			        	</p>
			        	<p>
			        	The dot in the <b>center</b> of the graph represents all day events and events with no set start time.
			        	</p>
			        	<p>
				        <b>Hovering</b> over a dot will bring up a <b>menu</b> with information like the <b>hour</b> and the <b>number of unique events</b> which started at that hour.
				        </p>
				        <p>
				        <b>Clicking</b> on a dot will <b>filter</b> the visualization to only show information on events which began at that hour. To undo filtering, click the undo or reset buttons at the bottom of the visualization.
				        </p>
				      </div>
				    </div>
				  </div>
				  <div class="card">
				  	<a class="collapsed" data-toggle="collapse" data-parent="#chart-accordion" href="#chart-collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
				    <div class="card-header" role="tab" id="headingTwo">
				      <b>
				      	Weekday
				      </b>
				    </div>
				    </a>
				    <div id="chart-collapseTwo" class="collapse" role="tabpanel" aria-labelledby="headingTwo">
				      <div class="card-block">
				      	<p>
				      	Each <b>row</b> represents a <b>day of the week</b>.
			        	</p>
			        	<p>
			        	The <b>length</b> of a bar represents the <b>number of unique</b> events which happened on that weekday.
			        	<br/>
				        <small>Two events are considered the same if they have the same title. Art exhibitions are often repeated for each day they are open. Most talks include the speaker in the title even if they are part of a series. Thus talks are usually counted as distinct events.
				        </small>
			        	</p>
			        	<p>
				        <b>Hovering</b> over a bar will bring up a <b>menu</b> with information like the <b>weekday</b> and the <b>number of unique events</b> which happened on that day.
				        </p>
				        <p>
				        <b>Clicking</b> on a bar will <b>filter</b> the visualization to only show information on events which happened on that weekday. To undo filtering, click the undo or reset buttons at the bottom of the visualization.
				        </p>
				      </div>
				    </div>
				  </div>
				  <div class="card">
				    <a class="collapsed" data-toggle="collapse" data-parent="#chart-accordion" href="#chart-collapseThree" aria-expanded="false" aria-controls="collapseThree">
				    <div class="card-header" role="tab" id="headingThree">
				      <b>
				        Timeline
				      </b>
				    </div>
				    </a>
				    <div id="chart-collapseThree" class="collapse" role="tabpanel" aria-labelledby="headingThree">
				      <div class="card-block">
				      	<p>
				      	Each data point along the line represents a <b>week</b>.
			        	</p>
			        	<p>
			        	The <b>height</b> of the line represents the <b>number of unique</b> events which happened in that week.
			        	<br/>
				        <small>Two events are considered the same if they have the same title. Art exhibitions are often repeated for each day they are open. Most talks include the speaker in the title even if they are part of a series. Thus talks are usually counted as distinct events.
				        </small>
			        	</p>
			        	<p>
				        <b>Hovering</b> over a point will bring up a <b>menu</b> with information like the <b>date</b> that week started and the <b>number of unique events</b> which happened in that week.
				        </p>
				        <p>
				        <b>Annotations</b>	 along the line are meant to provide context. The <b>white vertical line shows</b> when the data was collected. There are fewer events after this time since some organizers have not posted them yet.
				        </p>
				        <p>
				        To <b>filter</b> the visualization by the time of year, adjust the <b>slider</b> underneath the timeline. To undo filtering, click the undo or reset buttons at the bottom of the visualization.
				        </p>
				      </div>
				    </div>
				  </div>
				</div>
      </div>
    </div>
  </div>
  <div class="card">
  	<a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
    <div class="card-header" role="tab" id="headingThree">
      <b>Bottom Table</b>
      : The table at the bottom shows the <b>title</b>, <b>location</b> and <b>number</b> of records for each event.
    </div>
    </a>
    <div id="collapseThree" class="collapse" role="tabpanel" aria-labelledby="headingThree">
      <div class="card-block">
        <p>
        Each <b>row</b> represents a <b>unique event</b>.
        <br/>
        <small>Two events are considered the same if they have the same title. Art exhibitions are often repeated for each day they are open. Most talks include the speaker in the title even if they are part of a series. Thus talks are usually counted as distinct events.
				</small>
        </p>
        <p>
        The first column gives the event <b>title</b>.
        </p>
        <p>
      	The second column gives the <b>building</b> where the event took place.
      	</p>
      	<p>
      	The final column gives the <b>number of records</b> which exist for that event. These records will be for events at different times which all had the same title.
        </p>
        <p>
        To see more events, <b>scroll</b> over the table.
        </p>
        <p>
        To go to the webpage for an event:
        <ul>
        <li>Click on the row representing that event.</li>
        <li>A menu should appear with a link which says "Go to event page"</li>
        <li>Click on that link</li>
        </ul>
        </p>
      </div>
    </div>
  </div>
</div>

</div>


<div class='tableauPlaceholder' id='viz1486765639656' style='position: relative'><noscript><a href='#'><img alt='Dashboard 1 ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Pl&#47;PlacesandSpacesforVanderbilt&#47;Dashboard1&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='site_root' value='' /><param name='name' value='PlacesandSpacesforVanderbilt&#47;Dashboard1' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Pl&#47;PlacesandSpacesforVanderbilt&#47;Dashboard1&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /></object></div>                <script type='text/javascript'>                    var divElement = document.getElementById('viz1486765639656');                    var vizElement = divElement.getElementsByTagName('object')[0];                    vizElement.style.width='1204px';vizElement.style.height='869px';                    var scriptElement = document.createElement('script');                    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    vizElement.parentNode.insertBefore(scriptElement, vizElement);                </script>

