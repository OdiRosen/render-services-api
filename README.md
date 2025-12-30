# Render Services API
This project is a sophisticated management system designed to interact with the Render Cloud Platform API.
It demonstrates advanced backend capabilities in cloud resource orchestration, focusing on automated service
monitoring, secure configuration, and efficient data mapping.

Core Features
- Dynamic Service Management: Automatically retrieves and lists all cloud services associated with a Render account,
providing real-time data on service status, deployment types, and environment variables.
- Deployment Automation (The Challenge): Implemented a specialized trigger system that allows for manual or automated
deployment refreshes. The system ensures that deployments are only initiated when the service state is "Ready,"
preventing overlapping build conflicts.
- Status Monitoring: A centralized dashboard-like logic that aggregates status updates across multiple services
(Web Services, Static Sites, Databases) into a unified, clean response.
- Secure Configuration: Fully implemented the Options Pattern with User Secrets. This ensures that sensitive
Render API Tokens and Account IDs are never hardcoded, maintaining high-level security standards during development.

Tech Stack
- Backend: .NET 8 Web API, C#.
- API Client: HttpClient with IHttpClientFactory for optimized connection pooling and resilient API communication.
- Architecture: Clean Architecture with a strict separation between the API Layer (Controllers) and the Service Layer(Business Logic).
- Documentation: Swagger UI (OpenAPI) for interactive API testing and documentation.

How it Works
1. Authentication: The service authenticates with Render's REST API using a Bearer Token stored
securely in the environment's secrets, injected via the IOptions interface.
2. Data Transformation (DTO): Complex and nested JSON responses from Render are transformed into specialized
ServiceDto and DeploymentDto objects, stripping away unnecessary metadata to provide a clean and relevant
response to the client.
3. Error Handling: Implemented a robust error-handling wrapper that interprets Render’s API status codes
(like 429 Rate Limiting or 401 Unauthorized) and provides meaningful feedback to the end-user.

Setup
To run this project locally:
1. Clone the repository.
2. Add your Render credentials to your User Secrets:
   JSON
{
  "RenderSettings": {
    "ApiKey": "YOUR_RENDER_API_KEY",
    "OwnerId": "YOUR_OWNER_ID"
  }
}
3. Launch the application and use the Swagger UI to interact with the service endpoints.
