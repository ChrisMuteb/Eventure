FROM openjdk:17-jdk-alpine AS builder

# Build the application
WORKDIR /app
COPY pom.xml ./
RUN mvn clean package

# Create a slim runtime image
FROM openjdk:17-jdk-alpine

# Copy the generated JAR
COPY --from=builder /app/target/*.jar app.jar

# Expose port
EXPOSE 8080

# Set working directory
WORKDIR /app

# Entry point command
CMD ["java", "-jar", "app.jar"]

# Environment variables for MongoDB connection (replace with your values)
ENV MONGO_HOST=localhost
ENV MONGO_PORT=27017
ENV MONGO_DATABASE=eventure

# Health check (optional)
HEALTHCHECK CMD ["curl", "-f", "http://localhost:8080/health"]

