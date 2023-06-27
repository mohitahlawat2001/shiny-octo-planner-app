
## Weather Widget

The custom-made **Weather Widget** is a valuable addition to the planner app as it provides users with real-time weather information for a specific location. By retrieving data from the OpenWeatherMap API, the widget allows users to plan their activities effectively by considering temperature, humidity, wind speed, and weather description.

<kbd>function fetchWeatherData()</kbd>

This function is responsible for fetching the weather data from the API based on the user's specified location. It uses an asynchronous HTTP request to retrieve the data and updates the state with the received weather information.

With its user-friendly interface and clear presentation of weather data, the Weather Widget enhances the app's functionality and provides users with the essential information they need to make informed decisions and optimize their daily schedules.


## Custom Game Widget

The custom-made **Game Widget** is an ideal addition to the planner app, providing users with an interactive and enjoyable gaming experience. 

```javascript
function handleSquareClick(position) {
  // Logic for handling square click
  // Check if square is occupied or if there is a winner
  // Update game history and determine next player's turn
}
```

The highlighted main function `handleSquareClick` is responsible for managing the logic when a user clicks on a square on the game board. It ensures that the square is not already occupied and there is no winner before updating the game history and determining the next player's turn.

Featuring an appealing design and a responsive user interface, the Game Widget enables users to play Tic Tac Toe effortlessly. It incorporates game history tracking, allowing users to undo moves and start a new game with a simple button click.

By integrating the Game Widget into the planner app, users can take a break from their tasks and engage in a fun and strategic game within the app itself. This widget offers entertainment, promotes user engagement, and enhances the overall user experience of the planner app.


**WhiteBoardWidget**

The WhiteBoardWidget is a custom-made widget that provides a whiteboard functionality within the planner app. It allows users to draw and sketch their ideas directly on the screen. The main functionality of the widget includes handling mouse events to track drawing actions, such as mouse down, mouse move, and mouse up. It utilizes HTML5 canvas and the 2D drawing context to create a drawing area. The widget provides a responsive and interactive drawing experience, allowing users to freely express their thoughts and visualize their plans. Additionally, it offers a reset button to clear the canvas and start a new drawing session. The WhiteBoardWidget is a valuable addition to the planner app as it enhances creativity, facilitates visual thinking, and provides a convenient platform for brainstorming and organizing ideas.
