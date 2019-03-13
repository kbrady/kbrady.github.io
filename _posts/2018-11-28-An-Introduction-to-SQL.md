---
layout: stimuli
---

## Introduction to SQL

In this lesson we will be teaching you about the SQL database management system. This system stores data and allows users to manipulate it in different ways. For example, if you wanted to store information from a study like this one, SQL would be one way of doing that.

What distinguishes SQL from other methods of storing data, such as just keeping your data in a text document, is that SQL makes it easy for users to access and edit data very quickly, even when the total amount of data is very large. For instance if I have a list of participants in a text document and I want to know who the youngest female participant was, I must read through the whole document, note if each participant is female, and compare their age against the smallest age I've seen so far. SQL makes calculations like this very easy and we will go over how to write an SQL command that calculates this for you in this lesson.

Data in SQL is stored in structures called **tables**. Tables are made up of rows and columns similar to the spreadsheets you might have seen in Microsoft Excel or Apple Numbers. In an SQL table, each row represents one data point (for example one person in a class) and each column represents one attribute (for example the person's name or grade might be columns).

Here is an example of what an SQL table with three students and three columns might look like:

{:.table.table-bordered.table-sm.table-striped}
first_name | last_name | grade
--- | --- | ---
Alice | Brown | 90
Bob | Jones | 100
Charlie | Smith | 95

A **database** in SQL is a system which can contain multiple tables that interact with each other. For instance, the grade column in the example student table above might be calculated from several quiz scores which are stored in a separate table. In this lesson we will concentrate on things that can be done in a single table.

In this lesson, all the examples will be based on the Milgram Obedience Experiments. In these experiments, each participant was told to administer a shock to motivate another participant to answer questions correctly. The other participant was actually an actor pretending to receive a shock, and the goal of the experiment was to test whether participants would obey the experimenter and administer the maximum shock of 450 volts. In one condition, the experimenter wore a lab coat, so participants perceived them as an authority figure. In another condition, the lab coat wearing "experimenter" was called away and replaced by someone wearing ordinary clothes, whom the participants would perceive as having less authority.

We will use a table called **participants** to store information on each participant. As mentioned above, each participant will 
Each participant corresponds to a row in the participants table. The attributes of the participants correspond to columns in the table. Each participant has attributes:

- **id** - the number used to identify them in the study
- **maximum_shock** - the maximum number of volts the participant thought they had administered to the actor by the end of the experiment
- **age** - the age of the participant when the study was conducted
- **experimenter** - "Lab Coat" if the experimenter was wearing a lab coat the whole time and "Ordinary Clothes" if they were not

Here are the first few rows of the participants table:

{:.table.table-bordered.table-sm.table-striped}
id | maximum_shock | age | experimenter
--- | --- |--- | ---
20 | 450 | 30 | Lab Coat
22 | 345 | 38 | Ordinary Clothes
36 | 450 | 23 | Lab Coat

SQL databases are used around the world for everything from tracking credit card transactions to storing medical records. They can be used at a small scale for storing the data in psychological studies, as we will discuss here, and at a massive scale to store and retrieve posts on social networks.

<div class="container">
	<a href="/sql-pref-stimuli/instructions-1.html">
		<button class="btn btn-success">Next Section</button>
	</a>
</div>