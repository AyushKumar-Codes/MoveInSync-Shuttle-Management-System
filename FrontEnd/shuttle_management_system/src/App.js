import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import { SidebarProvider, useSidebar } from './context/SidebarContext';
import AdminPortal from './components/AdminPortal';

// Import CSS
import './assets/css/bootstrap.min.css';
import './assets/css/main.css';
import './assets/fonts/icomoon/icomoon.css';
import './assets/vendor/daterange/daterange.css';
import './assets/vendor/datatables/dataTables.bs4.css';

// AppContent component to use sidebar context
// ... (previous imports remain the same)

const AppContent = () => {
  const { isSidebarOpen } = useSidebar();
  const location = useLocation();
  const isAdminRoute = location.pathname === '/admin';

  return (
    <div className="app-wrap">
      <Header />
      <div className={`app-container ${isSidebarOpen ? 'sidebar-open' : ''} ${isAdminRoute ? 'admin-route' : 'user-route'}`}>
        <Sidebar />
        <div className="app-main">
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/admin" element={<AdminPortal />} />
          </Routes>
          <Footer />
        </div>
      </div>
      <style>
        {`
          .app-wrap {
            min-height: 100vh;
            padding-top: 60px;
            margin: 0;
            overflow-x: hidden;
          }

          .app-container {
            display: flex;
            min-height: calc(100vh - 60px);
            position: relative;
            margin: 0;
            padding: 0;
          }

          .app-main {
            flex: 1;
            transition: all 0.3s ease-in-out;
            width: 100%;
            background: #f5f6fa;
            margin: 0;
            padding: 0;
          }

          /* Sidebar states based on route */
          .app-container.sidebar-open.user-route .app-main {
            margin-left: 240px;
            width: calc(100% - 240px);
            
          }

          .app-container.sidebar-open.admin-route .app-main {
            margin-left: 120px;
            width: calc(100% - 120px);
            
          }

          .app-container:not(.sidebar-open) .app-main {
            margin-left: 0;
            width: 100%;
            
          }

          @media (max-width: 768px) {
            .app-container.sidebar-open .app-main {
              width: 100%;
              margin-left: 0;
            }

            .app-container.sidebar-open::after {
              content: '';
              position: fixed;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background: rgba(0,0,0,0.5);
              z-index: 999;
            }
          }

          /* Footer positioning */
          .app-main {
            display: flex;
            flex-direction: column;
          }

          .main-content {
            flex: 1;
          }

          footer {
            margin-top: auto;
          }

          /* Remove bootstrap spacing */
          .container-fluid {
            padding-left: 0;
            padding-right: 0;
          }

          .row {
            margin-left: 0;
            margin-right: 0;
          }

          [class*="col-"] {
            padding-left: 0;
            padding-right: 0;
          }
        `}
      </style>
    </div>
  );
};

function App() {
  return (
    <Router>
      <SidebarProvider>
        <AppContent />
      </SidebarProvider>
    </Router>
  );
}

export default App;