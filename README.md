# ☁️ Weather App -- React Weather Dashboard
**Student:** NISHI MEHTA
**ID:** 101514172 
**Course:** COMP 3123 - Full Stack Development I

## 🚀 Deployment
**Live App:** 🔗 **https://comp-3123-lab-test02.vercel.app/**

## 📝 Project Overview
Weather App is a responsive weather dashboard developed as part of Lab Test 2. It leverages React hooks (`useState`, `useEffect`) to fetch real-time meteorological data and future forecasts. The application features a modern, card-based UI with dynamic background integration and a built-in digital clock.

### Key Features
*   **Global Search:** Instant weather lookups for any city worldwide.
*   **Real-Time Metrics:** Displays temperature, wind velocity, humidity, and atmospheric pressure.
*   **5-Day Outlook:** Horizontal scrollable list showing future weather trends.
*   **Smart UI:**
    *   **Welcome Screen:** Clean initial state prompting user interaction.
    *   **Local Time:** Auto-detects and displays the current time on the weather card.
    *   **Dynamic Backgrounds:** Background visuals that enhance the user experience.

## 🔧 Technical Stack
*   **Frontend:** React.js (Functional Components)
*   **Styling:** CSS3 (Flexbox, Glassmorphism effects)
*   **HTTP Client:** Axios
*   **Data Source:** OpenWeatherMap API

## ⚙️ Installation & Setup

1.  **Get the Code:**
    ```
    git clone https://github.com/inishimehta/COMP3123LabTest02.git
    ```

2.  **Install Dependencies:**
    ```
    npm install
    ```

3.  **Launch Application:**
    ```
    npm start
    ```
    The app will initialize at `http://localhost:3000`.

## 📡 API Integration Details
This project consumes two primary endpoints from OpenWeatherMap. The specific fields displayed in the UI are mapped as follows:

| UI Label | API Field Path | Example Value |
| :--- | :--- | :--- |
| **Humidity** | `main.humidity` | `81%` |
| **Wind** | `wind.speed` | `15.2 km/h` |
| **Air Pressure** | `main.pressure` | `1009 mb` |
| **Max Temp** | `main.temp_max` | `1°C` |
| **Min Temp** | `main.temp_min` | `0°C` |
| **Forecast** | `list.dt_txt` & `weather.icon` | *Daily 12:00 PM data* |
| **Predictability** | *Static/Calculated* | `71%` |

## 📸 Screen Previews


---
**Assignment Submission for COMP 3123**
