#
# Build stage
#
FROM maven AS build
COPY src /home/app/src
COPY pom.xml /home/app
RUN mvn -f /home/app/pom.xml clean package

#
# Package stage
#
FROM openjdk:17-jdk-slim-buster
COPY --from=build /home/app/src /location/out/artifacts/location_jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/usr/local/lib/location.jar"]