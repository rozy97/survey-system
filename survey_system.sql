-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 29, 2019 at 07:23 AM
-- Server version: 10.4.6-MariaDB
-- PHP Version: 7.1.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `survey_system`
--

-- --------------------------------------------------------

--
-- Table structure for table `surveys`
--

CREATE TABLE `surveys` (
  `id` int(11) NOT NULL,
  `question` varchar(1000) NOT NULL,
  `answer` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `surveys`
--

INSERT INTO `surveys` (`id`, `question`, `answer`) VALUES
(1, 'what is the capital of indonesia', 'jakarta'),
(2, 'what is the capital of france', 'paris'),
(3, 'what is the capital of germany', 'berlin'),
(4, 'what is the capital of thailand', 'bangkok'),
(5, 'what is the capital of usa', 'washington'),
(6, 'biggest country in the world', 'rusia'),
(7, 'president of united state', 'donald trump'),
(8, 'what is the capital of japan', 'tokyo'),
(9, 'what is the capital of rusia', 'moscow'),
(10, 'what is the capital of norway', 'oslo');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(1000) NOT NULL,
  `level` varchar(255) NOT NULL DEFAULT 'user',
  `participated` varchar(255) NOT NULL DEFAULT 'no',
  `answers` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `score` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `level`, `participated`, `answers`, `score`) VALUES
(1, 'admin', 'admin@mail.com', 'admin', 'administrator', 'no', NULL, 0),
(2, 'andi', 'andi@gmail.com', '123456', 'user', 'yes', 'jakarta,paris,berlin,bangkok,washington,rusia,jakarta,tokyo,moscow,oslo', 9),
(3, 'firmansyah', 'firmansyah@gmail.com', 'asd123', 'user', 'yes', 'jakarta,paris,berlin,bangkok,wrong,wrong,jakarta,wrong,moscow,oslo', 6),
(4, 'admintwo', 'admintwo@mail.com', 'admin2', 'administrator', 'no', NULL, 0),
(6, 'rozy', 'rozy@gmail.com', '1234', 'user', 'yes', 'jakarta,paris,berlin,bangkok,wrong,wrong,jakarta,wrong,moscow,osloww', 5);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `surveys`
--
ALTER TABLE `surveys`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `surveys`
--
ALTER TABLE `surveys`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1008;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
