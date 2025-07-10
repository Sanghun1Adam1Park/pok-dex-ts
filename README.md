# Pokedex CLI Application

A command-line interface application for exploring the Pokémon world, catching Pokémon, and managing your Pokedex.

## Table of Contents

* [About The Project](#about-the-project)
* [Key Features](#key-features)
* [Built With](#built-with)
* [Getting Started](#getting-started)
    * [Prerequisites](#prerequisites)
    * [Installation](#installation)
    * [How to Use](#how-to-use)
    * [Example](#example)
* [Roadmap](#roadmap)
* [Acknowledgments](#acknowledgments)

## About The Project

This project is a custom-built command-line Pokedex application written in TypeScript. It allows users to interact with the Pokémon world by fetching data from the PokeAPI, exploring different locations, attempting to catch Pokémon, and managing their collection. The application features an interactive Read-Eval-Print Loop (REPL) for command input and an in-memory caching system to optimize API requests.

## Key Features

* **Interactive CLI:** Provides a user-friendly command-line interface for interacting with the application.
* **Location Exploration:** Displays lists of Pokémon location areas and details about Pokémon found in specific areas.
* **Pokémon Catching:** Allows users to attempt to catch Pokémon, adding successfully caught ones to their Pokedex.
* **Pokedex Management:** Enables viewing detailed information about caught Pokémon and listing all Pokémon in the user's Pokedex.
* **API Caching:** Implements a time-based in-memory cache to reduce redundant API calls to the PokeAPI.
* **Navigation:** Commands to paginate through location areas (forward and backward).

## Built With

* TypeScript
* Node.js
* PokeAPI

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

* Node.js (LTS version recommended)
* npm or yarn

### Installation

1.  Clone this repository:
    ```zsh
    git clone https://github.com/Sanghun1Adam1Park/pok-dex-ts
    ```
2.  Navigate to the project directory:
    ```zsh
    cd <project_directory>
    ```
    (Note: Replace `<project_directory>` with the name of the cloned directory)
3.  Install dependencies:
    ```zsh
    npm install
    ```
4.  Compile the TypeScript code:
    ```zsh
    npm run build
    ```

### How to Use

The application can be run by executing the compiled JavaScript file.

1.  From the project root, start the Pokedex CLI:
    ```zsh
    npm start
    # or
    yarn start
    ```

2.  The Pokedex prompt will appear:
    ```
    Pokedex >
    ```

### Example

Here are some example commands you can use in the Pokedex CLI:

* **Display help:**
    ```
    Pokedex > help
    ```
* **Display new locations:**
    ```
    Pokedex > map
    ```
* **Display previous locations:**
    ```
    Pokedex > mapb
    ```
* **Explore a specific location (e.g., 'canalave-city-area'):**
    ```
    Pokedex > explore canalave-city-area
    ```
* **Attempt to catch a Pokémon (e.g., 'pikachu'):**
    ```
    Pokedex > catch pikachu
    ```
* **View your Pokedex:**
    ```
    Pokedex > pokedax
    ```
* **Inspect a caught Pokémon (e.g., 'pikachu'):**
    ```
    Pokedex > inspect pikachu
    ```
* **Exit the application:**
    ```
    Pokedex > exit
    ```

## Roadmap

* Implement more robust error handling for API interactions.
* Add persistence for the Pokedex data (e.g., saving to a file).
* Introduce new commands for battling, evolving, or releasing Pokémon.
* Improve user input validation and provide clearer feedback for invalid commands.
* Add more detailed information for `inspect` command, perhaps showing all possible abilities or moves.

## Acknowledgments

Boot.dev - Backend dev Tutorial