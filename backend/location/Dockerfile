FROM openjdk:17-jdk-slim-buster

# Define environment variables
ENV SPRING_OUTPUT_ANSI_ENABLED=ALWAYS \JAVA_OPTS=""
# Set the working directory to /app
WORKDIR /app
EXPOSE 8080
ENTRYPOINT [ "java", "-jar", "/app/app.jar" ]