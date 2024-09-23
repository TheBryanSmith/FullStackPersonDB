# Build Stage
FROM openjdk:8-jdk-alpine as build
WORKDIR /workspace/app

# Copy Maven wrapper and project files
COPY mvnw .
COPY .mvn .mvn
COPY pom.xml .
COPY src src

# Ensure Maven wrapper has execute permission
RUN chmod +x ./mvnw

# Run Maven to build the project and skip tests
RUN ./mvnw clean package -DskipTests

# Final Stage
FROM eclipse-temurin:17-jdk-alpine

# Expose the application port
EXPOSE 8080

# Set up volumes and arguments
VOLUME /tmp

# Copy the generated JAR from the build stage
COPY --from=build /workspace/app/target/*.jar app.jar

# Entry Point for running the application
ENTRYPOINT ["java", "-jar", "/app.jar"]
