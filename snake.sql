-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 29 Lis 2022, 23:31
-- Wersja serwera: 10.4.10-MariaDB
-- Wersja PHP: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `snake`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `scores`
--

CREATE TABLE `scores` (
  `id` int(11) NOT NULL,
  `nick` text DEFAULT NULL,
  `score` int(11) DEFAULT NULL,
  `level` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `scores`
--

INSERT INTO `scores` (`id`, `nick`, `score`, `level`) VALUES
(1, 'adolf', 5, 'hard'),
(2, 'adolf', 5, 'hard'),
(3, 'adolf', 5, 'hard'),
(4, 'michu', 2, 'hard'),
(5, 'dzony dzony', 5, 'hard'),
(6, 'dzoszua', 3, 'hard'),
(7, 'vixa do krucyfiksa', 10, 'hard'),
(8, 'major', 4, 'hard'),
(9, 'ANALny rafal', 13, 'hard'),
(10, 'asd', 1, ''),
(11, 'zxc', 1, 'easy'),
(12, 'dzony rozpierdolony', 1, 'hard'),
(13, 'ess', 9, ''),
(14, 'ups', 1, 'hard'),
(15, 'jebacspis', 2, 'hard'),
(16, 'asdasdasd', 5, 'hard'),
(17, 'asdasd', 7, 'hard'),
(18, 'chujciwdupe', 2, 'hard'),
(19, 'asdasd', 2, '');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `scores`
--
ALTER TABLE `scores`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT dla tabel zrzutów
--

--
-- AUTO_INCREMENT dla tabeli `scores`
--
ALTER TABLE `scores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
