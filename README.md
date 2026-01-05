# Sales Dashboard – Next.js 15

## Overview
This project is a frontend sales dashboard developed as part of a Front-End Software Development assessment.  
It is built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**, and follows the **Atomic Design principle** to ensure clean structure and reusability.

The application displays sales data for the years **2022, 2023, and 2024**, using mock data inspired by real-world datasets (such as those found on Kaggle). The main focus of the project is to demonstrate frontend architecture, component organization, and data visualization.

---

## Technologies Used
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Recharts for data visualization
- Atomic Design architecture

---

## Application Features
- A dedicated dashboard page for sales visualization
- Interactive chart displaying sales by year
- Ability to switch between different chart types (Bar and Line)
- Clean and responsive user interface
- Modular and maintainable component structure

---

## Project Structure
The project is organized using Atomic Design principles:

- **atoms**: basic UI elements
- **molecules**: small reusable combinations of components (such as chart controls)
- **organisms**: complex components that combine multiple UI elements (SalesChart)
- **templates**: layout components used by pages (DashboardLayout)
- **pages**: application routes (Dashboard page)

This structure improves readability, scalability, and long-term maintainability.

---

## Getting Started

### Clone the repository
```bash
git clone https://github.com/imaneayyadi6/sales-dashboard.git
