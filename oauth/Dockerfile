FROM openjdk:19-jdk

ARG SERVICE_NAME

ARG JAR_FILE=./${SERVICE_NAME}/target/oath-0.0.1-SNAPSHOT.jar

COPY ${JAR_FILE} oath-0.0.1-SNAPSHOT.jar

ENTRYPOINT [ "java", "-jar", "/oath-0.0.1-SNAPSHOT.jar", "--spring.profiles.active=docker" ]