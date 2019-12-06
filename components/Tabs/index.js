// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

// create an entry Point where we will inject the topics
entryPoint = document.querySelector('.topics');

//first let's define the component to create the Trending Topics
function createTrends(data) {
	const tabs = document.createElement('div');
	tabs.classList.add('tab');
	tabs.textContent = data;

	return tabs;
}

// now let's grab the trending topics from the API and use the component to create a new topic for each item and inject it into the page. We'll need to convert the API response into an array to get the proper data.
axios
	.get('https://lambda-times-backend.herokuapp.com/topics')

	.then(response => {
		const entries = Object.values(response.data.topics);
		entries.forEach(item => {
			const newTopic = createTrends(item);
			entryPoint.appendChild(newTopic);
		});

		// error handling
	})
	.catch(error => {
		console.log(`Something's Wrong: ${error}`);
	});
