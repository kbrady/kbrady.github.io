---
layout: stimuli
---

## Where Clause

Selecting all this data can be a bit overwhelming. Often we want to see only part of the dataset so we can observe how the outcomes change conditional on some variable. For instance, maybe we think younger people are more susceptible to authority and we would like to know whether younger people always administered 450 volts.

To answer this question we can select the maximum shock of participants who were under 35 years old using the following statement:

`SELECT id, maximum_shock, age FROM participants WHERE age < 35;`

As you can see, most of the command looks the same as it did in the previous section, we are selecting the maximum_shock and age columns, but now we have added a clause to the end. The WHERE at the beginning of this clause tells SQL that we are going to add a condition which the selected data must meet. The next part of this statement tells SQL which column we are conditioning on (age) and what condition each value in that column must meet to be selected (it must be less than 35). If you look at the age column in the output, you will see that every participant has an age less than 35.

It is not necessary to select the column we condition on as one of the fields in the output. For example, we can run the same query again without listing age as an output column:

`SELECT id, maximum_shock FROM participants WHERE age < 35;`

If you check the returned values you will see that the values for id and maximum_shock are the same, and we have the same number of participants in the output, we just don't see their age values. Thus we are trusting SQL to correctly select the values which meet the condition without checking the output ourselves.

Now suppose we want to select a range of values. For instance we want all the participants whose age is between 35 and 45. Put another way, their age should be greater than or equal to 35 <b>AND</b> their age should be less than or equal to 45. To do this we can use the following command:

`SELECT id, maximum_shock FROM participants WHERE age >= 35 AND age <= 45;`

This command uses the `AND` operator to indicate that both the first condition `(age >= 35)` and the second condition `(age <= 45)` must be true of every participant selected. The `OR` operator lets us select participants who are outside of this range. Those participants will have ages which are less than 35 <b>OR</b> greater than 45. To select the maximum shock from these participants we use the command:

`SELECT id, maximum_shock FROM participants WHERE age < 35 OR age > 45;`

These two operators can be combined to make more complex selection statements. For instance, suppose we want participants whose age was outside the range 35-45 and the experimenter wore a lab coat. To make this selection we use the command:

`SELECT id, maximum_shock FROM participants WHERE (age < 35 OR age > 45) AND experimenter = "Lab Coat";`

We put parenthesis around the or statement to indicate that the computer should evaluate the `OR` part of the statement before the `AND` part. If we didn't put these parenthesis, then the computer might evaluate the `AND` part first. This would lead to it selecting everyone whose age was under 35 and only applying the condition that the experimenter wear a lab coat to participants whose age was over 45. You can see the difference yourself by running the command:

`SELECT id, maximum_shock FROM participants WHERE age < 35 OR (age > 45 AND experimenter = "Lab Coat");`

In the next section we will discuss how to combine the functions we learned about in the previous section with the `WHERE` clause.


<div class="container">
	<a href="/sql-pref-stimuli/instructions-1.html">
		<button class="btn btn-secondary">Back</button>
	</a>
	<a href="/sql-pref-stimuli/instructions-3.html">
		<button class="btn btn-success">Next Section</button>
	</a>
</div>
