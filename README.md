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
| User Dashboard | User Dashboard |
| Booking Interface | Booking Interface |
| Admin Dashboard | Admin Dashboard |
| Driver Management | Driver Management |
| Route Management | Route Management |
| Booking History | Booking History |

## 🎥 Demo
Watch the Demo Video

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

## 📝 Future Enhancements
- Real-time location tracking
- Mobile app development
- Payment integration
- Advanced analytics dashboard
- Push notifications

## 👥 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## 🙏 Acknowledgments
- Bootstrap for the UI components
- MongoDB for the database
- React community for awesome tools
