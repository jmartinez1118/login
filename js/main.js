// array of objects to store existing user data 

var existingUsers = [
	{
		user: "chrisbrody",
		pass: "password1"
	},
	{
		user: "mattbrody",
		pass: "password2"
	},
	{
		user: "sambrody",
		pass:"password3"
	},
	{
		user:"brianjenney",
		pass:"password4"
	},
	{
		user:"joshuamartinez",
		pass:"password5"
	}
]

// function to determine if the user exists and the password matches that user, function fires on user clicking button line 28 index.html

function login() {
	// trying to debug uncaught referrenceError: login is not defined at --- login = funtion(){};
	// store the tag with id="sign" in var username
	var username = document.getElementById("username")
	// store the tag with  id="sign" in var password
	var password = document.getElementById("password")
	// store the tag with id="results" in var results 
	var results = document.getElementById("results")

	// confirm the element exists and then what value the user submits 
	console.log (username, password, results)
	console.log ("username value is: " + username.value)
	console.log ("password value is: " + password.value)

	// loop through existing users array one item at a time 
	for(i = 0; i < existingUsers.length; i = i + 1) {
		// check each user as you loop through the array of objects
		console.log(existingUsers[i])
		if(username.value === existingUsers[i].user && password.value === existingUsers[i].pass) {
			// check to see if the IF statement code block executed 
			console.log("if statement ran, so we have a match!!")
			// change class of results to let the user know it worked 
			results.className = "success"
			// update the text of the results element to display a success message
			results.textContent = "welcome to codify academy " + username.value + "!!"
			// stop the function from running any further cause we got a match!!
			return
		}
	}

	// run failure if username and password didnt match 
	console.log("no match was found ://")
	// change the class of results to let the user know it failed 
	results.className = "failure"
	// update the text of the results element to display a failure message 
	results.textContent = "!! username or password did not match !!"
}