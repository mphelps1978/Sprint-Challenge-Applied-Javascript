// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

// first, let's define our entryPoint for the component. In this case, it's the header, so we need to select the element that has the header in it. (.header-container)

const headerEntry = document.querySelector('.header-container');

function header() {
	// let's create variables for each of the elements

	const header = document.createElement('div'),
		date = document.createElement('span'),
		headerTitle = document.createElement('h1'),
		temp = document.createElement('span');

	// now style them

	header.classList.add('header');
	date.classList.add('date');
	temp.classList.add('temp');

	//this needs some text, so let's add it
	date.textContent = 'MARCH 28, 2019';
	headerTitle.textContent = 'Lambda Times';
	temp.textContent = '98°';

	// now we set up the parent/child relationships.

	header.appendChild(date);
	header.appendChild(headerTitle);
	header.appendChild(temp);
	console.log(header);
	return header;
}

// now lets get it onto the page

headerEntry.appendChild(header());
