# ☁️ Weather App -- React Weather Dashboard
**Student:** NISHI MEHTA
**ID:** 101514172 
**Course:** COMP 3123 - Full Stack Development I

## 🚀 Deployment
**Live App:** 🔗 **[VERCEL LINK]**

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
This project consumes two primary endpoints from OpenWeatherMap:

| Endpoint Type | Usage | Data Points Used |
| :--- | :--- | :--- |
| **Current Weather** | Main Card Display | `temp`, `feels_like`, `humidity`, `wind.speed`, `sys.country` |
| **5-Day Forecast** | Bottom Forecast Row | `list.dt_txt` (filtered for 12:00 PM daily), `weather.icon` |

## 📸 Screen Previews
*(Please refer to the attached DOCX submission file for high-resolution screenshots of the Welcome Screen, City Search Results, and Postman API Validation.)*

---
**Assignment Submission for COMP 3123**
