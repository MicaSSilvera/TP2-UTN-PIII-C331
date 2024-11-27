-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: localhost    Database: gestion_libros
-- ------------------------------------------------------
-- Server version	8.0.39

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `authors`
--

DROP TABLE IF EXISTS `authors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `authors` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `surname` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `sexo` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `authors`
--

LOCK TABLES `authors` WRITE;
/*!40000 ALTER TABLE `authors` DISABLE KEYS */;
INSERT INTO `authors` VALUES (1,'Gabriel','Garcia Marquez','2024-11-21 16:00:59','2024-11-22 19:31:44','masculino'),(2,'J.K.','Rowling','2024-11-21 16:00:59','2024-11-21 16:00:59','femenino'),(3,'George','Orwell','2024-11-21 16:00:59','2024-11-21 16:00:59','masculino'),(4,'Nicolas','Baduel','2024-11-21 19:55:29','2024-11-22 19:36:07','masculino'),(5,'Micaela','Silvera','2024-11-22 15:16:34','2024-11-22 15:16:34','femenino'),(6,'George R.R.','Martin','2024-11-22 16:19:31','2024-11-22 19:09:39','masculino'),(7,'Edgar Allan','Poe','2024-11-22 20:07:04','2024-11-22 20:08:02','masculino'),(8,'Agatha','Christie','2024-11-22 20:09:40','2024-11-22 20:09:40','femenino');
/*!40000 ALTER TABLE `authors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `books`
--

DROP TABLE IF EXISTS `books`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `books` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `status` enum('active','inactive') DEFAULT 'active',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `author` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `publishedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `books`
--

LOCK TABLES `books` WRITE;
/*!40000 ALTER TABLE `books` DISABLE KEYS */;
INSERT INTO `books` VALUES (1,'Cien años de soledad','active','2024-11-21 16:01:00','2024-11-22 18:35:09','Gabriel Garcia Marquez','Fantasia','1967-05-05 00:00:00'),(2,'Harry Potter y la piedra filosofal','active','2024-11-21 16:01:00','2024-11-22 18:36:01','JK Rowling','Fantasia','1997-06-26 00:00:00'),(3,'1984','inactive','2024-11-21 16:01:00','2024-11-22 18:36:29','George Orwell','Ciencia Ficcion','1947-06-08 00:00:00'),(4,'Harry Potter y la camara secreta','active','2024-11-21 19:01:38','2024-11-22 18:37:20','JK Rowling','Fantasia','1998-07-02 00:00:00'),(6,'Harry Potter y el caliz de fuego','active','2024-11-22 19:43:29','2024-11-22 19:44:20','JK Rowling','Fantasia','2000-07-08 00:00:00'),(7,'Harry Potter y las reliquias de la muerte','active','2024-11-22 20:11:32','2024-11-22 20:12:44','JK Rowling','Fantasia','2007-07-21 00:00:00');
/*!40000 ALTER TABLE `books` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-27 15:38:18
