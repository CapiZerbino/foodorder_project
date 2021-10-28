## Architectural Design

**Contain:**
* [The Architectural Design Used In The Project](#the-architectural-design-used-in-the-project)
* [Implementation Diagram (Deployment Diagram)](#implementation-diagram)

### The Architectural Design Used In The Project

In this project, we chose the MVC model as the backbone architecture for the system. 
In which **MVC** stands for **Model-View-Controller**:
* **Model**: The central component of the pattern. It directly manages the data, logic and rules of the application.
* **View**: Any representation of information such as a chart, diagram or table. 
* **Controller**: Accepts input and converts it to commands for the model or view.
The sequence of activities on website is following:
* Firstly, users make requests in the UI.
* The controller handles the requests and connects with the relevant models and database tables to retrieve wanted information.
* Then the controller renders a view with retrieved data inside.

### Implementation Diagram

The deployment diagram for major functional requirements of the whole system:

<p align="center">
    <img src="Diagrams/Deployment Diagram.png" alt="Whole System Deployment Diagram">
    <br />
    Deployment diagram for major functional requirements of the whole system
</p>
