-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 23, 2021 at 10:10 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `project`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `shop_id` varchar(255) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `price` int(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `product_id` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`shop_id`, `product_name`, `price`, `description`, `product_id`) VALUES
('aa1', 'product1', 200, 'abcxyz', 1),
('aa1', 'product2', 10900, '---', 2),
('aa1', 'product3', 234, '---', 3),
('aa1', 'product4', 100, '---', 4),
('aa1', 'product5', 200, '---', 5),
('aa1', 'product6', 300, '---', 6),
('aa1', 'product7', 400, '---', 7),
('s1', 'product1', 500, '---', 8),
('s1', 'product2', 1002, '---', 9);

-- --------------------------------------------------------

--
-- Table structure for table `shoplist`
--

CREATE TABLE `shoplist` (
  `shop` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `shopid` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `shoplist`
--

INSERT INTO `shoplist` (`shop`, `location`, `shopid`, `category`) VALUES
('a', 'a', 'a', ''),
('agora', 'Dhanmondi', 'aa1', 'supershop'),
('Aarong', 'Dhanmondi', 'aarong01', 'Fasion'),
('bbb', 'Dhanmondi', 'bbb01', 'Fasion'),
('lazz-pharma', 'Dhanmondi', 'lazz01', 'Fasion'),
('meena', 'Dhanmondi', 'meena01', 'Fasion'),
('Shajgoj', 'Mohammadpur', 's1', 'lifestyle'),
('Shajgoj', 'Dhanmondi', 's2', 'lifestyle'),
('Shadakalo', 'Badda', 'shada01', 'Fasion');

-- --------------------------------------------------------

--
-- Table structure for table `shoplogin`
--

CREATE TABLE `shoplogin` (
  `id` int(11) NOT NULL,
  `shopname` int(11) NOT NULL,
  `shoplocation` int(11) NOT NULL,
  `mail` int(11) NOT NULL,
  `pass` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `temporaryaddeddproduct`
--

CREATE TABLE `temporaryaddeddproduct` (
  `id` int(11) NOT NULL,
  `product` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `test`
--

CREATE TABLE `test` (
  `Name` varchar(255) NOT NULL,
  `mobile` int(20) NOT NULL,
  `id` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `test`
--

INSERT INTO `test` (`Name`, `mobile`, `id`) VALUES
('Neetu', 123, 1),
('Neetu1', 456, 2),
('Neetu2', 1122, 3);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`);

--
-- Indexes for table `shoplist`
--
ALTER TABLE `shoplist`
  ADD PRIMARY KEY (`shopid`);

--
-- Indexes for table `shoplogin`
--
ALTER TABLE `shoplogin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `test`
--
ALTER TABLE `test`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `product_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `test`
--
ALTER TABLE `test`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
