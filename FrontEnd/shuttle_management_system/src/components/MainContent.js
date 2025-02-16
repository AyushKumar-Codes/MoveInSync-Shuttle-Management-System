import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useSidebar } from '../context/SidebarContext';

function MainContent() {
    const { isSidebarOpen } = useSidebar();
    const [startDate, setStartDate] = useState(new Date());
    const [tripDetails, setTripDetails] = useState({
        startLocation: '',
        destination: '',
        pickupTime: ''
    });


    const [selectedBooking, setSelectedBooking] = useState(null);
const [isModalOpen, setIsModalOpen] = useState(false);

const handleViewBooking = (booking) => {
    setSelectedBooking(booking);
    setIsModalOpen(true);
};

const handleSignInRider = (bookingId) => {
    console.log('Signing in rider for booking:', bookingId);
    // Implement sign-in logic
};

const handleNoShow = (bookingId) => {
    console.log('Marking no-show for booking:', bookingId);
    // Implement no-show logic
};

const handleEditBooking = (booking) => {
    console.log('Editing booking:', booking);
    // Implement edit logic
};

const handleCancelBooking = (bookingId) => {
    console.log('Canceling booking:', bookingId);
    // Implement cancel logic
};

    // Sample booking history data
    const bookingHistory = [
        {
            bookingId: '1242',
            driver: 'Jay Prakash',
            driverPhone: '8304728752',
            status: 'Accepted',
            from: 'Boys Hostel 3',
            to: 'Main Gate',
            vehicle: 'PN23423',
            requestedPickup: '10:00 AM',
            pickupTime: '10:00 AM',
            plannedDrop: '10:15 AM',
            actualDrop: '10:15 AM'
        }
        // Add more booking history items as needed
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTripDetails(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFindDriver = (e) => {
        e.preventDefault();
        console.log('Finding driver...', tripDetails);
    };

    return (
        <>
            <header className="main-heading">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div className="page-icon">
                                <i className="icon-border_outer"></i>
                            </div>
                            <div className="page-title">
                                <h3>Schedule A Trip</h3>
                                <h6 className="sub-heading">Welcome to MoveInSync Shutter Management System</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="main-content">
                <div className="row gutters">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        {/* Plan Journey Section */}
                        <div className="card">
                            <div className="card-header d-flex align-items-center gap-3">
                                <span>Plan Your Journey</span>
                                <input
                                    type="text"
                                    className="form-control form-control-sm ml-auto"
                                    placeholder="Search Routes"
                                    style={{ width: '200px' }}
                                />
                                <DatePicker
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    className="form-control form-control-sm"
                                />
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table m-0">
                                        <thead>
                                            <tr>
                                                <th>Start Location</th>
                                                <th>Destination</th>
                                                <th>Pickup Time</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <input
                                                        type="text"
                                                        name="startLocation"
                                                        className="form-control form-control-sm"
                                                        placeholder="Start Location"
                                                        value={tripDetails.startLocation}
                                                        onChange={handleInputChange}
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        name="destination"
                                                        className="form-control form-control-sm"
                                                        placeholder="Destination"
                                                        value={tripDetails.destination}
                                                        onChange={handleInputChange}
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        type="time"
                                                        name="pickupTime"
                                                        className="form-control form-control-sm"
                                                        value={tripDetails.pickupTime}
                                                        onChange={handleInputChange}
                                                    />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="text-center mt-3">
                                        <button onClick={handleFindDriver} className="btn btn-info">
                                            Find Driver
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Booking History Section */}
                        <div className="card">
                            <div className="card-header d-flex align-items-center gap-3">
                                <span>Booking History</span>
                                <input 
                                    type="text" 
                                    className="form-control form-control-sm ml-auto"
                                    placeholder="Search Booking"
                                    style={{width: '200px'}}
                                />
                                <DatePicker
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    className="form-control form-control-sm"
                                />
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table m-0">
                                        <thead>
                                            <tr>
                                                <th>Booking ID</th>
                                                <th>Driver</th>
                                                <th>Driver Ph. Number</th>
                                                <th>Status</th>
                                                <th>From</th>
                                                <th>To</th>
                                                <th>Vehicle</th>
                                                <th>Requested Pickup</th>
                                                <th>Pickup Time</th>
                                                <th>Planned Drop</th>
                                                <th>Actual Drop</th>
                                                <th>Details</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {bookingHistory.map((booking, index) => (
                                                <tr key={index}>
                                                    <td className="text-info">{booking.bookingId}</td>
                                                    <td>{booking.driver}</td>
                                                    <td>
                                                        <i className="text-success icon-phone"></i> (+91){booking.driverPhone}
                                                    </td>
                                                    <td>
                                                        <span className="badge badge-success">{booking.status}</span>
                                                    </td>
                                                    <td>{booking.from}</td>
                                                    <td>{booking.to}</td>
                                                    <td>{booking.vehicle}</td>
                                                    <td>{booking.requestedPickup}</td>
                                                    <td>{booking.pickupTime}</td>
                                                    <td>{booking.plannedDrop}</td>
                                                    <td>{booking.actualDrop}</td>
                                                    <td>
                                                    <button 
    className="btn btn-info btn-sm"
    onClick={() => handleViewBooking({
        bookingId: '1242',
        driver: 'Jay Prakash',
        driverPhone: '8304728752',
        status: 'Accepted',
        from: 'Boys Hostel 3',
        to: 'Main Gate',
        vehicle: 'PN23423',
        requestedPickup: '10:00 AM',
        pickupTime: '10:00 AM',
        plannedDrop: '10:15 AM',
        actualDrop: '10:15 AM'
    })}
>
    View
</button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {isModalOpen && selectedBooking && (
    <div className="modal-overlay">
        <div className="modal-content">
            <div className="modal-header">
                <h5>Booking Details - #{selectedBooking.bookingId}</h5>
                <button 
                    className="close-btn"
                    onClick={() => setIsModalOpen(false)}
                >
                    ×
                </button>
            </div>
            <div className="modal-body">
                <div className="booking-summary">
                    <div className="summary-section">
                        <h6>Driver Information</h6>
                        <div className="info-grid">
                            <div className="info-item">
                                <label>Driver Name:</label>
                                <span>{selectedBooking.driver}</span>
                            </div>
                            <div className="info-item">
                                <label>Phone Number:</label>
                                <span>
                                    <i className="text-success icon-phone"></i> 
                                    (+91){selectedBooking.driverPhone}
                                </span>
                            </div>
                            <div className="info-item">
                                <label>Vehicle Number:</label>
                                <span>{selectedBooking.vehicle}</span>
                            </div>
                        </div>
                    </div>

                    <div className="summary-section">
                        <h6>Trip Information</h6>
                        <div className="info-grid">
                            <div className="info-item">
                                <label>From:</label>
                                <span>{selectedBooking.from}</span>
                            </div>
                            <div className="info-item">
                                <label>To:</label>
                                <span>{selectedBooking.to}</span>
                            </div>
                            <div className="info-item">
                                <label>Status:</label>
                                <span className="badge badge-pill badge-success">
                                    {selectedBooking.status}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="summary-section">
                        <h6>Timing Details</h6>
                        <div className="info-grid">
                            <div className="info-item">
                                <label>Requested Pickup:</label>
                                <span>{selectedBooking.requestedPickup}</span>
                            </div>
                            <div className="info-item">
                                <label>Actual Pickup:</label>
                                <span>{selectedBooking.pickupTime}</span>
                            </div>
                            <div className="info-item">
                                <label>Planned Drop:</label>
                                <span>{selectedBooking.plannedDrop}</span>
                            </div>
                            <div className="info-item">
                                <label>Actual Drop:</label>
                                <span>{selectedBooking.actualDrop}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <div className="action-buttons">
                    
                    <button 
                        className="btn btn-danger btn-sm"
                        onClick={() => handleCancelBooking(selectedBooking.bookingId)}
                    >
                        <i className="icon-trash"></i> Cancel Booking
                    </button>
                </div>
            </div>
        </div>
    </div>
)}
            </div>

            <style>
                {`
                    .main-heading {
                        background: #fff;
                        padding: 20px 0;
                        margin-bottom: 20px;
                        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                    }

                    .card {
                        background: #fff;
                        border-radius: 4px;
                        margin-bottom: 20px;
                        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                    }

                    .card-header {
                        padding: 1rem;
                        background: #fff;
                        border-bottom: 1px solid rgba(0,0,0,0.125);
                    }

                    .card-body {
                        padding: 1rem;
                    }

                    .table th {
                        background: #f8f9fa;
                        font-weight: 500;
                    }

                    .badge {
                        padding: 6px 12px;
                        border-radius: 20px;
                    }

                    .badge-success {
                        background: #28a745;
                        color: #fff;
                    }

                    .d-flex {
                        display: flex !important;
                    }

                    .align-items-center {
                        align-items: center !important;
                    }

                    .gap-3 {
                        gap: 1rem !important;
                    }

                    .ml-auto {
                        margin-left: auto !important;
                    }

                    .mt-3 {
                        margin-top: 1rem !important;
                    }

                    .text-center {
                        text-align: center !important;
                    }

                    .btn-info {
                        color: #fff;
                        background-color: #17a2b8;
                        border-color: #17a2b8;
                    }

                    .form-control-sm {
                        height: calc(1.5em + 0.5rem + 2px);
                        padding: 0.25rem 0.5rem;
                        font-size: 0.875rem;
                        line-height: 1.5;
                        border-radius: 0.2rem;
                    }


                    .modal-overlay {
    position: fixed;
    top:100;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    backdrop-filter: blur(5px);
}

.modal-content {
    background: white;
    border-radius: 8px;
    width: 90%;
    max-width: 800px;
    max-height: 90vh;
    overflow-y: auto;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    animation: modalFadeIn 0.3s ease-out;
}

@keyframes modalFadeIn {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.modal-header {
    padding: 1rem;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.modal-header h5 {
    margin: 0;
    font-weight: 500;
}

.close-btn {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    padding: 0;
    color: #666;
}

.modal-body {
    padding: 1.5rem;
}

.booking-summary {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.summary-section {
    border: 1px solid #eee;
    border-radius: 4px;
    padding: 1rem;
}

.summary-section h6 {
    margin-bottom: 1rem;
    color: #333;
    font-weight: 500;
}

.info-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
}

.info-item {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.info-item label {
    font-size: 0.875rem;
    color: #666;
}

.info-item span {
    font-weight: 500;
}

.modal-footer {
    padding: 1rem;
    border-top: 1px solid #eee;
}

.action-buttons {
    display: flex;
    justify-content: flex-end;
    gap: 0.5rem;
    flex-wrap: wrap;
}

.btn i {
    margin-right: 0.5rem;
}


                `}
            </style>
        </>
    );
}

export default MainContent;