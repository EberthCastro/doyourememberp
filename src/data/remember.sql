-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-02-2023 a las 19:25:22
-- Versión del servidor: 10.4.25-MariaDB
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `remember`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `remember`
--

CREATE TABLE `remember` (
  `title` text NOT NULL,
  `description` text NOT NULL,
  `link` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `remember`
--

INSERT INTO `remember` (`title`, `description`, `link`) VALUES
('Cascade in a montain', 'Experience a bath in a waterfall in the mountains, feeling how the water falls on your shoulders and takes away all the suffering of winter.', 'https://images.unsplash.com/photo-1543342140-668798b54578?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'),
('Sunrise in the desert', 'Wake up in a distant desert and start a day full of adventures among the dunes.', 'https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80'),
('Walking on the beach', 'Imagine that time does not exist and that you are walking quietly on a lonely beach... far from everything.', 'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'),
('Swiming under water', 'You are no longer human, you are a fish and you swim in the middle of the ocean, floating and looking for Nemo and Dory.', 'https://images.unsplash.com/photo-1596999936777-36fa2adc6f58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80'),
('Darth Vader versus Aliens', 'You are in the middle of a battle for your survival, who do you choose as a partner? Your life depends on your choice.', 'https://i.blogs.es/02be64/501-st-legion-vader-s-fist-vs-space-cockroaches/1366_2000.jpg'),
('Experience in the outer space', '“I've seen things you people wouldn't believe. Attack ships on fire off the shoulder of Orion. I watched C-beams glitter in the dark near the Tannhäuser Gate. All those moments will be lost in time, like tears in rain. Time to die.”', 'https://fotografias.lasexta.com/clipping/cmsimages01/2019/06/04/811CEC82-7812-4781-ADCE-32F28BD3EF68/58.jpg'),
('Playing with dinosars', 'You are sleeping and a strange noise wakes you up...you slightly open your eyes and there is a carnivorous dinosaur looking at you.....', 'https://img2.rtve.es/im/6250166/?w=900'),
('Discovering Petra for the first time', 'You are walking through the El Siq gorge, you have been told that at the end there is something wonderful, little by little you get closer and suddenly, it appears......', 'https://viajes.nationalgeographic.com.es/medio/2013/10/18/zon-2301388_1333x2000.jpg'),
('Northern Lights in Iceland', 'You no longer have to go to the Arctic to see the Northern Lights; you can live that experience here and now.....enjoy it!!!!!!', 'https://images.unsplash.com/photo-1504858700536-882c978a3464?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'),
('Flying with dragons', 'Have you ever wondered what Daenerys Targaryen would feel like riding on the back of a dragon, approaching King's Landing to face Cersei Lannister?', 'https://revistamutaciones.com/wp-content/uploads/2019/06/juego-de-tronos-dragones.jpg');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
