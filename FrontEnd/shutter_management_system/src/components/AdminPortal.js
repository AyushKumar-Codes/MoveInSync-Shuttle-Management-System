import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import userImage from '../assets/img/user2.png';

const AdminPortal = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [newRoute, setNewRoute] = useState({
        startLocation: '',
        destination: ''
    });
    const [searchBooking, setSearchBooking] = useState('');
    const [selectedDriver, setSelectedDriver] = useState(null);
const [showDutyOptions, setShowDutyOptions] = useState(false);

const DutyOptionsPopup = ({ driver, onClose, onSelectOption }) => (
    <div className="duty-options-popup">
        <div className="duty-options-content">
            <h6>{driver}'s Duty Options</h6>
            <div className="duty-buttons">
                <button className="btn btn-success btn-sm" onClick={() => onSelectOption('start')}>
                    Start Duty
                </button>
                <button className="btn btn-warning btn-sm" onClick={() => onSelectOption('break')}>
                    Take Break
                </button>
                <button className="btn btn-danger btn-sm" onClick={() => onSelectOption('end')}>
                    End Duty
                </button>
            </div>
            <button className="close-btn" onClick={onClose}>×</button>
        </div>
    </div>
);


    const [driverDuties, setDriverDuties] = useState([
        {
            driverId: 1,
            name: 'Jay Prakash',
            duties: [
                { type: 'start', time: '06:00', position: 25 },
                { 
                    type: 'pickup', 
                    time: '08:00', 
                    position: 33.33,
                    location: 'BH3 → Main Gate'
                },
                { type: 'break', time: '11:00', position: 45.83 },
                { 
                    type: 'pickup', 
                    time: '12:00', 
                    position: 50,
                    location: 'Main Gate → BH5'
                },
                { type: 'end', time: '16:00', position: 66.66 }
            ]
        },
        {
            driverId: 2,
            name: 'Rahul Kumar',
            duties: [
                { type: 'start', time: '07:00', position: 29.16 },
                { 
                    type: 'pickup', 
                    time: '09:00', 
                    position: 37.5,
                    location: 'BH5 → Academic Block'
                },
                { type: 'break', time: '12:00', position: 50 },
                { 
                    type: 'pickup', 
                    time: '13:00', 
                    position: 54.16,
                    location: 'Academic Block → BH3'
                },
                { type: 'end', time: '17:00', position: 70.83 }
            ]
        }
    ]);

    const handleViewBooking = (booking) => {
        setSelectedBooking(booking);
        setIsModalOpen(true);
    };

    const [selectedBooking, setSelectedBooking] = useState(null);
const [isModalOpen, setIsModalOpen] = useState(false);

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

    const [tasks, setTasks] = useState([
        {
            id: 1,
            status: 'done',
            dotColor: '',
            title: 'Review Shuttle Bookings',
            time: '10:30am',
            description: 'Check for new bookings and cancellations.'
        },
        {
            id: 2,
            status: 'done',
            dotColor: 'orange',
            title: 'Monitor Driver Availability',
            time: '12pm',
            description: 'Ensure all scheduled drivers are available for their assigned shifts.'
        },
        {
            id: 3,
            status: 'done',
            dotColor: 'yellow',
            title: 'Verify Shuttle Routes & Stops',
            time: '3pm',
            description: 'Ensure all routes and pickup/drop-off points are up to date.'
        },
        {
            id: 4,
            status: 'done',
            dotColor: 'green',
            title: 'Assign Drivers to Routes',
            time: '9am',
            description: 'Confirm that each scheduled trip has an assigned driver.'
        },
        {
            id: 5,
            status: '',
            dotColor: 'orange',
            title: 'Check Trip History & Reports',
            time: '5pm',
            description: 'Review daily trip logs for any delays or issues.'
        },
        {
            id: 6,
            status: '',
            dotColor: 'yellow',
            title: 'System & Booking Alerts',
            time: '9pm',
            description: 'Resolve any booking conflicts or overbooked shuttles'
        }
    ]);

    const toggleTaskStatus = (taskId) => {
        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === taskId
                    ? { ...task, status: task.status === 'done' ? '' : 'done' }
                    : task
            )
        );
    };


    return (
        <div className="app-main">
            <style>
                {`
                    .app-main {
                        flex: 1;
                        transition: all 0.3s ease-in-out;
                        margin: 0;
                        padding: 0;
                        width: 100%;
                    }

                    .widgets-header {
                        padding: 20px;
                        background: #fff;
                        margin-bottom: 20px;
                        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                        width: 100%;
                    }

                    .main-content {
                        padding: 0 20px;
                        width: 100%;
                    }

                    .container-fluid {
                        padding-left: 0;
                        padding-right: 0;
                    }

                    .row {
                        margin-left: 0;
                        margin-right: 0;
                    }

                    [class*="col-"] {
                        padding-left: 10px;
                        padding-right: 10px;
                    }


                    .modal-overlay {
    position: fixed;
    top: 100px;
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


            .timeline-table-container {
                overflow-x: auto;
            }

            .timeline-table {
                margin: 0;
                border-collapse: separate;
                border-spacing: 0;
            }

            .timeline-header {
                display: flex;
                width: 100%;
                min-width: 1200px;
                background: #f8f9fa;
                border-bottom: 1px solid #dee2e6;
            }

            .time-slot {
                flex: 1;
                text-align: center;
                font-size: 12px;
                padding: 8px;
                border-right: 1px solid #dee2e6;
                font-weight: 500;
            }

            .driver-name-cell {
                font-weight: 500;
                cursor: pointer;
                transition: background-color 0.3s ease;
                padding: 15px;
                background: #fff;
            }

            .driver-name-cell:hover {
                background-color: #f8f9fa;
            }

            .timeline-cell {
                padding: 0 !important;
                position: relative;
            }

            .timeline-slots {
                position: relative;
                height: 60px;
                background: #f8f9fa;
                min-width: 1200px;
                border-left: 1px solid #dee2e6;
            }

            .duty-marker {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                width: 24px;
                height: 24px;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-size: 12px;
                transition: all 0.3s ease;
            }

            .duty-marker:hover {
                transform: translateY(-50%) scale(1.1);
                z-index: 2;
            }

            .duty-marker.start {
                background-color: #4CAF50;
            }

            .duty-marker.break {
                background-color: #FFC107;
            }

            .duty-marker.end {
                background-color: #F44336;
            }

            .duty-marker.pickup {
                background-color: #2196F3;
                width: auto;
                min-width: 24px;
                padding: 0 8px;
                border-radius: 4px;
            }

            .duty-time {
                position: absolute;
                bottom: -20px;
                left: 50%;
                transform: translateX(-50%);
                font-size: 10px;
                white-space: nowrap;
                color: #666;
            }

            .duty-location {
                position: absolute;
                top: -20px;
                left: 50%;
                transform: translateX(-50%);
                font-size: 10px;
                white-space: nowrap;
                color: #666;
                background: rgba(255,255,255,0.9);
                padding: 2px 4px;
                border-radius: 2px;
                display: none;
            }

            .duty-marker:hover .duty-location {
                display: block;
            }

            /* Grid lines */
            .timeline-slots::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-image: linear-gradient(to right, #dee2e6 1px, transparent 1px);
                background-size: calc(100% / 24) 100%;
                pointer-events: none;
            }

            /* Legend */
            .timeline-legend {
                display: flex;
                gap: 15px;
                padding: 10px;
                justify-content: center;
                margin-top: 20px;
            }

            .legend-item {
                display: flex;
                align-items: center;
                gap: 5px;
                font-size: 12px;
            }

            .legend-color {
                width: 16px;
                height: 16px;
            }

            .legend-color.start { background: #4CAF50; }
            .legend-color.break { background: #FFC107; }
            .legend-color.end { background: #F44336; }
            .legend-color.pickup { background: #2196F3; }


            .duty-options-popup {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0,0,0,0.5);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 1000;
            }

            .duty-options-content {
                background: white;
                padding: 20px;
                border-radius: 8px;
                position: relative;
                width: 300px;
            }

            .duty-buttons {
                display: flex;
                gap: 10px;
                margin-top: 15px;
            }

            .close-btn {
                position: absolute;
                top: 10px;
                right: 10px;
                background: none;
                border: none;
                font-size: 20px;
                cursor: pointer;
            }


                    /* Rest of your existing styles... */
                `}
            </style>

            <header className="widgets-header">
                <div className="container-fluid">
                    <div className="row gutters">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="welcome-msg">
                                <div className="welcome-user-thumb">
                                    <img src={userImage} alt="MoveInSync Admin" />
                                </div>
                                <div>
                                    <div className="welcome-title">
                                        Hello, <span>Ayush</span>
                                    </div>
                                    <div className="welcome-designation">
                                        Welcome to MoveInSync Admin Portal. You have 5 new tasks.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="main-content">
                <div className="row gutters">
                    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                        {/* Stats Row */}
                        <div className="row gutters">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="plain-widget">
                                    <div className="growth bg-info">12%</div>
                                    <h3>23</h3>
                                    <p>Shuttle in Queue</p>
                                    <div className="progress sm no-shadow">
                                        <div className="progress-bar bg-info" role="progressbar" style={{ width: '37%' }} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="plain-widget">
                                    <div className="growth bg-orange">19%</div>
                                    <h3>40</h3>
                                    <p>Idle Drivers</p>
                                    <div className="progress sm no-shadow">
                                        <div className="progress-bar bg-orange" role="progressbar" style={{ width: '48%' }} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Driver Management */}
                        <div className="card">
                            <div className="card-header d-flex align-items-center gap-3">
                                <span>Driver Management</span>
                                <input
                                    type="text"
                                    className="form-control form-control-sm ml-auto"
                                    placeholder="Search Driver"
                                    style={{ width: '200px' }}
                                />
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    {/* Input Form Table */}
                                    <table className="table m-0 mb-4">
                                        <thead>
                                            <tr>
                                                <th>Driver Name</th>
                                                <th>Phone Number</th>
                                                <th>Vehicle Number</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <input
                                                        type="text"
                                                        className="form-control form-control-sm"
                                                        placeholder="Enter Driver Name"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        className="form-control form-control-sm"
                                                        placeholder="Enter Phone Number"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        className="form-control form-control-sm"
                                                        placeholder="Enter Vehicle Number"
                                                    />
                                                </td>
                                                <td>
                                                    <button className="btn btn-info btn-sm">
                                                        Add Driver
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    {/* Registered Drivers Table */}
                                    <table className="table m-0">
                                        <thead>
                                            <tr>
                                                <th>Driver Name</th>
                                                <th>Phone Number</th>
                                                <th>Vehicle Number</th>
                                                <th>Status</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Jay Prakash</td>
                                                <td>
                                                    <i className="text-success icon-phone"></i> (+91) 8404728752
                                                </td>
                                                <td>PN3423</td>
                                                <td>
                                                    <span className="badge badge-success">Active</span>
                                                </td>
                                                <td>
                                                    <button className="btn btn-info btn-sm mr-2">Edit</button>
                                                    <button className="btn btn-danger btn-sm">Delete</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Rahul Kumar</td>
                                                <td>
                                                    <i className="text-success icon-phone"></i> (+91) 9876543210
                                                </td>
                                                <td>PN5678</td>
                                                <td>
                                                    <span className="badge badge-warning">On Trip</span>
                                                </td>
                                                <td>
                                                    <button className="btn btn-info btn-sm mr-2">Edit</button>
                                                    <button className="btn btn-danger btn-sm">Delete</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="card mt-4">
    <div className="card-header">
        <span>Driver Duty Timeline</span>
    </div>
    <div className="card-body">
        <div className="timeline-table-container">
            <table className="table timeline-table">
                <thead>
                    <tr>
                        <th style={{ width: '150px' }}>Driver</th>
                        <th>
                            <div className="timeline-header">
                                {Array.from({ length: 24 }, (_, i) => (
                                    <div key={i} className="time-slot">
                                        {`${i.toString().padStart(2, '0')}:00`}
                                    </div>
                                ))}
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {driverDuties.map((driver) => (
                        <tr key={driver.driverId}>
                            <td 
                                className="driver-name-cell"
                                onClick={() => {
                                    setSelectedDriver(driver.name);
                                    setShowDutyOptions(true);
                                }}
                            >
                                {driver.name}
                            </td>
                            <td className="timeline-cell">
                                <div className="timeline-slots">
                                    {driver.duties.map((duty, index) => (
                                        <div
                                            key={index}
                                            className={`duty-marker ${duty.type}`}
                                            style={{ left: `${duty.position}%` }}
                                            title={`${duty.type}: ${duty.time}${duty.location ? ` - ${duty.location}` : ''}`}
                                        >
                                            <span className="duty-time">{duty.time}</span>
                                            {duty.location && (
                                                <span className="duty-location">{duty.location}</span>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

        {showDutyOptions && selectedDriver && (
            <DutyOptionsPopup
                driver={selectedDriver}
                onClose={() => setShowDutyOptions(false)}
                onSelectOption={(option) => {
                    console.log(`${selectedDriver} - ${option}`);
                    setShowDutyOptions(false);
                }}
            />
        )}
        {/* ... DutyOptionsPopup component remains the same ... */}
    </div>
    </div>
    <div className="timeline-legend">
        <div className="legend-item">
            <div className="legend-color start"></div>
            <span>Start Duty</span>
        </div>
        <div className="legend-item">
            <div className="legend-color break"></div>
            <span>Break</span>
        </div>
        <div className="legend-item">
            <div className="legend-color end"></div>
            <span>End Duty</span>
        </div>
        <div className="legend-item">
            <div className="legend-color pickup"></div>
            <span>Pickup/Drop</span>
        </div>
    </div>
                        

                        </div>


                        {/* Pending Shuttles */}
                        <div className="card">
                            <div className="card-header d-flex align-items-center gap-3">
                                <span>Pending Shuttle Requests</span>
                                <input
                                    type="text"
                                    className="form-control form-control-sm ml-auto"
                                    placeholder="Search Pending Requests"
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
                                                <th>Booking ID</th>
                                                <th>User Name</th>
                                                <th>Start Location</th>
                                                <th>Destination</th>
                                                <th>Available Driver</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="text-info">12431</td>
                                                <td>Ayush</td>
                                                <td>Boys Hostel 5</td>
                                                <td>Main Gate</td>
                                                <td>
                                                    <select className="form-control form-control-sm">
                                                        <option>Jay Prakash</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    <button className="btn btn-info btn-sm mr-2">Accept</button>
                                                    <button className="btn btn-danger btn-sm">Decline</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        
                        {/* Manage Routes */}
                        <div className="card">
                            <div className="card-header d-flex align-items-center gap-3">
                                <span>Manage Routes</span>
                                <input
                                    type="text"
                                    className="form-control form-control-sm ml-auto"
                                    placeholder="Search Routes"
                                    style={{ width: '200px' }}
                                />
                                <button className="btn btn-info btn-sm">Add New Route</button>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table m-0">
                                        <thead>
                                            <tr>
                                                <th>Start Location</th>
                                                <th>Destination</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <input
                                                        type="text"
                                                        className="form-control form-control-sm"
                                                        placeholder="Start Location"
                                                        value={newRoute.startLocation}
                                                        onChange={(e) => setNewRoute({ ...newRoute, startLocation: e.target.value })}
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        className="form-control form-control-sm"
                                                        placeholder="Destination"
                                                        value={newRoute.destination}
                                                        onChange={(e) => setNewRoute({ ...newRoute, destination: e.target.value })}
                                                    />
                                                </td>
                                                <td>
                                                    <button className="btn btn-info btn-sm">Add</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Boys Hostel 5</td>
                                                <td>Main Gate</td>
                                                <td>
                                                    <button className="btn btn-info btn-sm mr-2">Edit</button>
                                                    <button className="btn btn-danger btn-sm">Delete</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* Booking Management */}
                        <div className="card">
                            <div className="card-header d-flex align-items-center gap-3">
                                <span>Booking Management</span>
                                <input
                                    type="text"
                                    className="form-control form-control-sm ml-auto"
                                    placeholder="Search Booking"
                                    value={searchBooking}
                                    onChange={(e) => setSearchBooking(e.target.value)}
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
                                            <tr>
                                                <td className="text-info">1242</td>
                                                <td>Jay Prakash</td>
                                                <td>
                                                    <i className="text-success icon-phone"></i> (+91)8304728752
                                                </td>
                                                <td>
                                                    <span className="badge badge-pill badge-success">Accepted</span>
                                                </td>
                                                <td>Boys Hostel 3</td>
                                                <td>Main Gate</td>
                                                <td>PN23423</td>
                                                <td>10:00 AM</td>
                                                <td>10:00 AM</td>
                                                <td>10:15 AM</td>
                                                <td>10:15 AM</td>
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
                                        </tbody>
                                    </table>
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
                                                className="btn btn-success btn-sm mr-2"
                                                onClick={() => handleSignInRider(selectedBooking.bookingId)}
                                            >
                                                <i className="icon-check"></i> Sign In Rider
                                            </button>
                                            <button
                                                className="btn btn-warning btn-sm mr-2"
                                                onClick={() => handleNoShow(selectedBooking.bookingId)}
                                            >
                                                <i className="icon-close"></i> Mark No-Show
                                            </button>
                                            <button
                                                className="btn btn-info btn-sm mr-2"
                                                onClick={() => handleEditBooking(selectedBooking)}
                                            >
                                                <i className="icon-edit"></i> Edit Booking
                                            </button>
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

                    {/* Tasks Section */}
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                        <div className="card todo-container">
                            <div className="card-header">Tasks</div>
                            <ul className="todo-body">
                                {tasks.map((task, index) => (
                                    <li key={index} className={`todo-list ${task.status}`} onClick={() => toggleTaskStatus(task.id)} >
                                        <div className="todo-info">
                                            <span className={`dot ${task.dotColor}`}></span>
                                            <p>
                                                {task.title}
                                                <span className="time">{task.time}</span>
                                            </p>
                                            <small>{task.description}</small>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminPortal;