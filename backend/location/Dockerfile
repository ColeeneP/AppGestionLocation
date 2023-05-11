FROM openjdk:17-jdk-slim-buster
COPY --from=build /target/backendaccountant-0.0.1-SNAPSHOT.jar demo.jar
WORKDIR /app
ENV PORT=8087
EXPOSE 8080
ENTRYPOINT ["java","-jar","demo.jar"]