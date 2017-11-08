---
layout: stimuli
---

## Select Statement

The first thing we will do in SQL is look at all the participant ids to see how many data points we have. In the SQL interpreter type:

`SELECT id FROM participants;`

Hit <b>Run Command</b> when you are done typing.

You should see a list of 40 ids which looks like this in the beginning:

<table class="table table-bordered table-sm table-striped">
	<thead>
		<tr><th>id</th></tr>
	</thead>
	<tbody>
		<tr><td>20</td></tr>
		<tr><td>22</td></tr>
		<tr><td>36</td></tr>
		<tr><td>31</td></tr>
	</tbody>
</table>

If you get a yellow warning message instead, it is because you have a typo in your command. The message should have specific instructions on how to fix the command so that it runs.

Now let us break down what is going on in the command you just ran. The first word `SELECT` tells SQL that you want it to give you some values. In addition to selecting data, SQL allows users to insert information into the table, delete information from the table and create and delete entire tables. This tutorial is focused on viewing data which is in the database, so we won't worry about those other commands.

The second part of the phrase, `id`, tells SQL what column in the table you want to select. In this case we wanted to view only the participant ID column.

The third word, `FROM`, tells SQL that we are done listing columns to select and now want to tell it which table we are selecting these columns from.

The final word in our statement, `participants`, is the name of the table we would like to select from.

The semicolon at the end of the statement is very important. If you run the statement without it, you will get a message telling you to add it so the computer knows you the command is finished. Longer SQL commands can take up multiple lines, and the interpreter accepts the enter key as a method of telling it to run a command in addition to hitting the <b>Run Command</b> button. You can see this in action by typing the same command you just did, but giving each word it's own line like this:

`SELECT
id
FROM
participants;`

When you are done typing, try hitting the <b>enter</b> key instead of clicking <b>Run Command</b>. You will find that even though you hit enter while writing the command, it is not until the computer sees a semicolon at the end of the line that it knows you are done typing and runs the command.

Now that we know how to select one column, let us write a statement to select more than one. We can do this by listing the columns we want with commas between each column name. For instance if we would like to get all four columns instead of just paricipant ids, we can do this by running:
	
`SELECT id, maximum_shock, age, experimenter FROM participants;`

The order of the list determines the order of the columns in the output. Thus if we want the columns in reversed order, we use the command:
	
`SELECT experimenter, age, maximum_shock, id FROM participants;`

There are a few aggregation functions built into the SQL framework for calculating statistics on attributes. For instance, if we want to know the smallest number of volts that a participant ended the experiment on, we can run the following command:
	
`SELECT MIN(maximum_shock) FROM participants;`

The result should be a single row like this:

<table class="table table-bordered table-sm table-striped"><thead><tr><th>min(maximum_shock)</th></tr></thead><tbody><tr><td>300</td></tr></tbody></table>

SQL knows that we are trying to run an aggregation function called `MIN` over the column `maximum_shock` since after writing `MIN` we put parentheses around the column name `maximum_shock`. If we don't include the parentheses it will try to interpret `MIN` as a column name or simply get confused if you only use one parenthesis. You can try this out in the interpreter to see the error messages which will be generated.

If we would like to know the largest maximum shock, we can run the command:
	
`SELECT MAX(maximum_shock) FROM participants;`

This should return 450 volts as expected.

When using aggregation functions, we must be careful to remember that each column is being aggregated separately. As an example, compare the outputs of the following commands:
	
`SELECT MIN(maximum_shock), MIN(id) FROM participants;`
	
`SELECT MIN(maximum_shock), MAX(id) FROM participants;`

The participants with ids 1 and 40 both administered a shock of 450 volts during the experiment. You can verify this for yourself by running the command to select all the data again. When we selected the minimum value for `maximum_shock`, the computer is calculating the minimum across the whole table, not just the rows whose `id` is equal to the minimum id. Similarly, when we selected the minimum `id`, the computer calculated that over the whole table, not just the rows where `maximum_shock` is equal to 300.

Other functions you might find useful are `COUNT`, which counts the number of rows in the results and `AVG` which gives the average value of a column. You can try these out by running:
	
`SELECT COUNT(maximum_shock) FROM participants;`
	
`SELECT AVG(maximum_shock) FROM participants;`

We will use `COUNT` later in this lesson to answer some questions about the data. In the next section we will discuss how to select a subset of the data.

<div class="container">
	<a href="quiz-1.html">
		<button class="btn btn-success">Section Quiz</button>
	</a>
</div>
