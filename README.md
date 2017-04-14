# Phava

<h2>Phava</h2>

<div class="container">
<div class="row">
<h2>PhavaJS</h2>
<p>PhavaJS provides a quick and dirty solution for accessing MYSQL databases directly from HTML pages using JavaScript, AJAX and PHP. </p>
<p>To see the examples create a table and insert some players.</p>

<pre>

-- Table structure for table `players`

 CREATE TABLE `players` (
`plyr_id` int(11) NOT NULL,
`plyr_uname` varchar(30) NOT NULL,
`plyr_count` int(11) NOT NULL,
`plyr_created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)

</pre>

<p>PhavaJS consists of a mysqli/oop PHP database class and a set of JavaScript/AJAX functions for doing the following.</p>


<p>You can start by doing one of these things.</p>
<p>Get a single item from the table and display it from an HTML page.</p>
<p>Get all or some columns from the table as a JavaScript array of arrays.</p>


<p>Once you have your array(result) there are a set of example functions to do the following.</p>
<p>Show a single item by id.</p>
<p>Show a list of items.</p>
<p>Show a select list of items.</p>
<p>Show an HTML table of all items.</p>
<p>Show an HTML insert/update form.</p>
<p>You can also do things like:</p>  
<p>Insert data from an HTML form.</p>
<p>Update a table from an HTML form.</p>
<p>and basically any other CRUD functions but you should consider why you are doing this from the client side in JS and understand the security implications.</p>
<hr/>
<h3>Here are some examples using the table players.</h3>    
<a href="showUser.html" class="btn btn-success">Single Player</a>
<a href="showUsers.html" class="btn btn-success">List of Users</a>
<a href="showUsersSelect.html" class="btn btn-success">Select List of Users</a>
<a href="showUserTable.html" class="btn btn-success">Users info table</a>
</div>
</div>
