# Project1BISWD622_24A

# Description:
This software product offers a comprehensive catalog of video games, allowing customers to browse and select their favorite ones. It features a shopping cart for easy management of selected games and ensures secure payment processing for a safe and convenient purchasing experience.

# Elaborated by:
- Jorman Chuquer            (@JorMath)
- Jean Cotera             (@jeanpcot)
- Carla Ruiz            (@charlie-rzu)
- Cristian Zambrano   (@Cristian-Zambrano)
- Cristian Sangucho (@cristian-sangucho-a)

# Dependencies:

``
JDK 21.0.1
``

``
mockito 2.23.4
``

``
tomcat:10-jdk17-temurin-jammy
``

``
maven 3.8.5 
``

``
JUnit 4.13.2
``

``
MariaDB 10.4
``

## TO RUN:
First, create a docker-compose.yml file:
````
services:
  webapp:
    container_name: webapp
    image: cristhtsirc/gr01_1bproject1_622_24a-webapp
    ports:
      - 8080:8080
  database:
    container_name: database
    image: cristhtsirc/gr01_1bproject1_622_24a-database
    ports:
      - 3306:3306
````

Then, in the same directory:

``
docker compose up
``

Finally, go to browser and search:

``
localhost:8080/tienda/
``

## Package:
If you make a change:

1.- execute iniciar-docker.bat

- to execute clean, test, package, and docker compose up
- visit localhost:8080/tienda/

2.- upload the containers to dockerhub.

  
## To upload the containers to DockerHub:
````
docker-compose build

docker tag gr01_1bproject1_622_24a-webapp:latest cristhtsirc/gr01_1bproject1_622_24a-webapp:latest
docker tag gr01_1bproject1_622_24a-database:latest cristhtsirc/gr01_1bproject1_622_24a-database:latest

docker push cristhtsirc/gr01_1bproject1_622_24a-webapp:latest
docker push cristhtsirc/gr01_1bproject1_622_24a-database:latest   
````

Naming variables: camelCase
