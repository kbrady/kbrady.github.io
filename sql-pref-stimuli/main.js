//Create the database
var db = new SQL.Database();

function LoadFile() {
  // get the create statement
  var dataFrame = document.getElementById("db_create_statement");
  var create_statement = dataFrame.contentWindow.document.body.childNodes[0].innerHTML;
  // Run a query without reading the results
  db.run(create_statement);
  // add an event listener for enter
  document.querySelector('#query').addEventListener('keypress', function (e) {
      var key = e.which || e.keyCode;
      if (key === 13) { // 13 is enter
        EnterToQuery();
      }
  });
}

function QueryException(message) {
  this.message = message;
  this.name = 'QueryException';
}

function EnterToQuery() {
  // get query
  var query = document.getElementById('query').value;
  query = query.trim()
  if (query[query.length-1] == ';') {
    RunQuery();
  }
}

function RunQuery() {
  // get query
  var query = document.getElementById('query').value;
  // clear previous results
  var container = document.getElementById('results');
  while(container.childNodes.length > 0) {
    container.removeChild(container.childNodes[0]);
  }
  // return results
  try {
    query = query.trim()
    if (query[query.length-1] != ';') {
      throw new QueryException('You need to end your command with a semicolon (;) so the computer knows it is over.');
    }
    var results = db.exec(query);
    results.forEach(buildTable);
  } catch (e) {
    showWarning(e);
  }
}

function showWarning(error) {
  var err_text = improveMessage(error.message);
  // get the element we will put the results in
  var container = document.getElementById('results');
  // make an object to put the error message in
  var div = document.createElement('div');
  div.className = "alert alert-warning"
  div.appendChild(document.createTextNode(err_text));
  container.appendChild(div);
}

function improveMessage(err_text) {
  if (err_text.indexOf(": syntax error") != -1) {
    var query = err_text.substring("near ".length, err_text.indexOf(": syntax error"));
    return "There is an error in your SQL query near " + query + ".";
  }
  if (err_text.indexOf("no such table: ") != -1) {
    var table_name = err_text.substring("no such table: ".length, err_text.length);
    return "You have mistyped the name of the table as '" + table_name + "'. It should be 'participants'";
  }
  if (err_text.indexOf("no such column: ") != -1) {
    var col_name = err_text.substring("no such column: ".length, err_text.length);
    return "You have mistyped a column name as '" + col_name + "'. Did you mean id, maximum_shock, age or experimenter?";
  }
  if (err_text.indexOf("no such function: ") != -1) {
    var fun_name = err_text.substring("no such function: ".length, err_text.length);
    return fun_name + " is not a valid SQL aggregation function. Did you mean COUNT, MAX, MIN or AVG?";
  }
  return err_text;
}

function buildTable(result) {
  // get the element we will put the results in
  var container = document.getElementById('results');
  // make an object to built the table
  var table = document.createElement('table');
  table.className = "table table-bordered table-sm table-striped";
  var thead = document.createElement('thead');
  var tbody = document.createElement('tbody');
  // get the values from the result
  columns = result['columns'];
  values = result['values'];
  // add the columns to the table
  var header_row = document.createElement('tr');
  columns.forEach(
    function(c) {
      var th = document.createElement('th');
      th.appendChild(document.createTextNode(c));
      header_row.appendChild(th);
    }
  );
  thead.appendChild(header_row);
  table.appendChild(thead);
  // add the data one row at a time
  values.forEach(
    function(row) {
      var tr = document.createElement('tr');
      row.forEach(
        function(v) {
          var td = document.createElement('td');
          td.appendChild(document.createTextNode(v));
          tr.appendChild(td);
        }
      );
      tbody.appendChild(tr);
    }
  );
  table.appendChild(tbody);
  container.appendChild(table);
}

// make the quiz form half the width of the screen
function setFormDim() {
  console.log('testing1');
  // show feedback
  // moveToScore();
  // get the iframe
  var quiz = document.getElementById("quiz");
  quiz.width = (window.innerWidth * .48);
  quiz.height = (window.innerHeight - 48);
}

// show student scores
function moveToScore() {
  console.log('testing');
  var quiz_frame = document.getElementById("quiz");
  var quiz_document = quiz_frame.contentDocument;
  var feedback_links = 
    Array.from(document.getElementsByTagName('a'))
      .filter(
        function(e) { return e.textContent == 'View your score'; });
  console.log(feedback_links);
  if (feedback_links.length == 1) {
    quiz_frame.src = feedback_links[0].href;
  }
}