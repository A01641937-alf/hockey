-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 10-06-2023 a las 07:06:47
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `hockey-data`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `jugadores`
--

CREATE TABLE `jugadores` (
  `ID` int(11) NOT NULL,
  `Nombre` varchar(20) NOT NULL,
  `Ult-equipo` varchar(20) NOT NULL,
  `dorsal` varchar(3) NOT NULL,
  `imagen` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `jugadores`
--

INSERT INTO `jugadores` (`ID`, `Nombre`, `Ult-equipo`, `dorsal`, `imagen`) VALUES
(1, 'Wayne Gretzky', 'New York Rangers', '99', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn1.gstatic.com%2Flicensed-image%3Fq%3Dtbn%3AANd9GcSbSWY_cRvPBXxI4j88LosREocE1qkCRN9nSu_awlpg0BBDrxS6FlnC5dQMhV_bxBO8q7dnieRkN4qCcIg&psig=AOvVaw2jcyImrqt06nC05SKYQyH4&ust=1686415405907000&source'),
(2, 'Mario Lemieux', 'Pittsburgh Penguins', '66', 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSicZ9ZWR5PwpK55jcgCvKHY2l9sPok-ojrH4gfJmOeFqoQetw-0Cypl1DqJxrD2d11DC60972MEIhn17s'),
(3, 'Bobby Orr', 'Chicago Blackhawks', '4', 'https://cms.nhl.bamgrid.com/images/photos/316233360/1024x576/cut.jpg'),
(4, 'Guy Lafleur', 'Nordiques de Québec', '10', 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcS26UIA0ICHn8B8SQEOzbTHc3XqEF5DEOUHUp8jiLIlA32y4TK8h7KYYgNwt_4e2k5QaK88KrNES2UsH_0'),
(5, 'Maurice Richard', 'Montreal Canadiens', '9', 'https://media1.ledevoir.com/images_galerie/nwd_968037_780273/image.jpg');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `jugadores`
--
ALTER TABLE `jugadores`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `jugadores`
--
ALTER TABLE `jugadores`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
