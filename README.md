# Planner App

## How to Use Locally

Follow these steps to run the calculator application on your local machine:

1. **Clone the Repository**
   ```
   git clone https://github.com/mohitahlawat2001/calculator-app.git
   ```
2. **Navigate to the Project Directory**
   ```
   cd calculator-app
   ```
3. **Install Dependencies**
   ```
   npm install
   ```
4. **Start the Application**
   ```
   npm start
   ```
5. **Open in Browser**
   - Open your web browser and go to [http://localhost:3000](http://localhost:3000)
   - You should now see the calculator application running locally on your machine.

## Project Setup
3 folders widgets, styles and modals. As the names suggest, 
- we will place all the JavaScript files we create for the widgets into the widgets folder
- all the modals into the modals folder
- a particular CSS file from one of the components into the styles folder. Essentially, we will copy the styles that comes built into one of the packages we have installed in Step 1 Node Package Manager (NPM). This is so that we can customise the styles of the packages instead of being limited to the default style.


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


## WhiteBoardWidget

The WhiteBoardWidget is a custom-made widget that provides a whiteboard functionality within the planner app. It allows users to draw and sketch their ideas directly on the screen. The main functionality of the widget includes handling mouse events to track drawing actions, such as mouse down, mouse move, and mouse up. It utilizes HTML5 canvas and the 2D drawing context to create a drawing area. The widget provides a responsive and interactive drawing experience, allowing users to freely express their thoughts and visualize their plans. Additionally, it offers a reset button to clear the canvas and start a new drawing session. The WhiteBoardWidget is a valuable addition to the planner app as it enhances creativity, facilitates visual thinking, and provides a convenient platform for brainstorming and organizing ideas.


## NewsWidget


The `NewsWidget` component is an appropriate widget to have in the planner app because it provides users with quick access to top headlines from various news sources. It keeps users informed and updated without leaving the planner app interface. The widget fetches news data using the NewsAPI, specifically retrieving top headlines from the US.

To use the `NewsWidget`, simply add it to the planner app's interface. Once rendered, it will display a list of top headlines along with their descriptions and images. The component makes use of React's `useState` and `useEffect` hooks to fetch the news data asynchronously. While the data is being fetched, a loading message is displayed. Once the data is retrieved, it is mapped over to generate the list of news items with clickable links to the full articles.

The `NewsWidget` is designed with a clean and organized layout. The headlines are displayed as clickable links, allowing users to open the articles in a new tab. Each news item also includes a brief description and an image, providing a visual context to the headlines. The component's CSS file ensures proper styling, including a specific class for the image container to maintain consistent dimensions.

Overall, the `NewsWidget` enhances the planner app's functionality by integrating relevant news updates, making it convenient for users to stay informed while managing their schedules and tasks.


## QuoteWidget


The `QuoteWidget` component is a valuable addition to the planner app as it offers users a source of inspiration and motivation through random quotes. By integrating this widget, users can receive a new quote with a click of a button, enhancing their planning experience with meaningful and uplifting content. The widget fetches quotes from the Quotable API, presenting them in a visually appealing layout with clear separation between the quote content and author. The widget's design is complemented by the provided CSS file, ensuring proper styling and a consistent look. By incorporating the `QuoteWidget`, users can access daily doses of inspiration, empowering them to stay focused and positive throughout their planning endeavors.



## Contributing

If you'd like to contribute, please fork the repository and create a pull request. You can also open an issue for any bug reports or feature requests.

---

Feel free to reach out with any questions or feedback. Happy calculating! 🧮

