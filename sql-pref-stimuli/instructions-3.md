---
layout: stimuli
---

## Combining Select and Where

The main question of the Milgram Experiment was how many participants will administer the maximum shock. We know from the previous section on the basic select statement that the maximum shock was 450 volts. To see how many participants administered this shock we can use the command:

`SELECT COUNT(id) FROM participants WHERE maximum_shock = 450;`

This statement just puts together the two previous sections into a single statement. We see that of the 40 participants 17 or 42% administered the maximum shock.

Now suppose we want to know how many participants who were in the lab coat condition administered the maximum shock. Recall that the condition to get participants whose experimenter wore a lab coat is `experimenter = "Lab Coat"`. Since we want to know how many people administered the maximum shock <b>AND</b> were in the lab coat condition, we use the `AND` operator to add it to our command:

`SELECT COUNT(id) FROM participants WHERE maximum_shock = 450 AND experimenter = "Lab Coat";`

What we really want to know is whether participants in the lab coat condition were more likely to administer the maximum shock than participants in the overall sample group. To figure this out we need to know how many people are in the lab coat condition. This is done by simply removing the maximum shock part from the where clause so we can get a count of everyone in the lab coat condition:

`SELECT COUNT(id) FROM participants WHERE experimenter = "Lab Coat";`

These results tell us that there were 20 people in the lab coat condition and 13 or 65% of them administered the maximum shock.

Another way to look at the different shock levels which were administered by participants in each condition is to take the average of the maximum shocks administered by the participants. To get this information we just switch out `COUNT` for `AVG`:

`SELECT AVG(maximum_shock) FROM participants WHERE experimenter = "Lab Coat";`

`SELECT AVG(maximum_shock) FROM participants WHERE experimenter = "Ordinary Clothes";`

Now suppose we want to know the minimum shock that was administered by anyone in this age group, we can do this by using another one of the aggregation functions we learned about in the Select section, in this case the `MIN` function. We no longer want to have the maximum shock as part of our condition, so we will take that part out of the WHERE clause and end up with the command:

`SELECT MIN(maximum_shock) FROM participants WHERE experimenter = "Lab Coat";`

Note that we switched out `id` for `maximum_shock` as the column in the `MIN` function since we want to take the minimum of the maximum shock not the participant id.

<div class="container">
	<a href="/sql-pref-stimuli/instructions-2.html">
		<button class="btn btn-secondary">Back</button>
	</a>
	<a href="/">
		<button class="btn btn-dark">Back to Main Page</button>
	</a>
</div>
