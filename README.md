# 🚀 MoveInSync: Campus Shuttle Management System

## 🌟 Overview
MoveInSync is a comprehensive shuttle management system designed for campus transportation. It streamlines the process of booking shuttles, managing drivers, and optimizing routes in real-time.

## ✨ Features

### User Portal
- 🎯 Real-time shuttle booking
- 📍 Pre-defined route selection
- 🕒 Flexible pickup time scheduling
- 📱 Booking status tracking
- 📜 Booking history view

### Admin Portal
- 👨‍💼 Driver management and assignment
- 🛣️ Route management
- 📊 Real-time booking requests
- 🚦 Trip status monitoring
- 📈 Dashboard analytics
- ⏰ Driver duty management

### Driver Features
- 📱 Duty status updates
- 🗺️ Route assignments
- 🕒 Break management
- 📊 Trip history

## 🛠️ Technology Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **State Management**: Con  API
- **Styling**: Bootstrap, Custom CSS
- **Icons**: Icomoon

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Backend Setup
Navigate to backend directory
cd moveinsync-backend

Install dependencies
npm install

Start MongoDB (if not running)
mongod

Start the server
npm start

or
node server.js


### Frontend Setup
Navigate to frontend directory
cd moveinsync-frontend

Install dependencies
npm install

Start the development server
npm start


The application will be available at http://localhost:3000

## 📸 Screenshots
| Feature | Screenshot |
| ------------- | ----------- |
| Booking Interface | ![Image](https://github.com/user-attachments/assets/86569f51-d42f-4dfa-8aff-2abdd006c7cc) |
| Admin Dashboard | ![Image](https://github.com/user-attachments/assets/322e632f-1812-476a-89b9-8747e70b8486) |
| Driver Management | ![Image](https://github.com/user-attachments/assets/c72a0016-0911-4e36-ba6a-b1ea045c5e18)  ![Image](https://github.com/user-attachments/assets/51177000-4275-42b9-9d40-ca4da7820ddb)|
| Route Management | ![Image](https://github.com/user-attachments/assets/081f4ef9-925a-4875-bc65-a718e28f1447) |
| Booking Details | ![Image](https://github.com/user-attachments/assets/a6f1d010-3438-48e3-b868-f1632dfebe6e) |

## 🎥 Demo

Watch the Demo Video: [MoveInSync Demo](https://drive.google.com/file/d/18UUhdq0XYUIAqaNHHXDM_5KmmEfBfjuF/view?usp=drive_link)


## 📱 API Endpoints

### Routes API
GET /api/routes - Get all routes
POST /api/routes - Add new route

 
### Bookings API
POST /api/bookings - Create new booking
GET /api/bookings/pending - Get pending bookings
PUT /api/bookings/:id/accept - Accept booking
PUT /api/bookings/:id/decline - Decline booking

 
### Drivers API
GET /api/drivers/available - Get available drivers
PUT /api/drivers/:id/status - Update driver status
 

## 🛠️ Development
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## 🙏 Acknowledgments
- Bootstrap for the UI components
- MongoDB for the database
- React community for awesome tools
