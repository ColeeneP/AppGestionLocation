FROM openjdk:17-jdk-slim-buster
RUN java -jar target/location-0.0.1-SNAPSHOT.jar
WORKDIR /app
ENV PORT=8080
EXPOSE 8080

ENTRYPOINT ["java","-jar","location-0.0.1-SNAPSHOT.jar"]