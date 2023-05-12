#
# Build stage
#
FROM maven:4.0.0-openjdk-17 AS build
COPY src /home/app/src
COPY pom.xml /home/app
RUN mvn -f /home/app/pom.xml clean package

#
# Package stage
#
FROM openjdk:17-jdk-slim-buster
COPY --from=build /home/app/target/location-0.0.1.jar /usr/local/lib/location.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/usr/local/lib/location.jar"]