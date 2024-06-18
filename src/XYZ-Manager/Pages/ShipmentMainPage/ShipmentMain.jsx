import React, { useState } from "react";
import "./ShipmentMain.scss";
import SideBar from "../../Components/sidebar/SideBarManager.jsx";
import Navbar from "../../Components/Navbar/NavbarManager.jsx";
import Table from "../../Components/Table/TableManager.jsx"; // Adjust the import path as needed
import PageButtonsShipment from "../../Components/PageButtonsShipment/PageButtonsShipment.jsx";

const sampleShipmentData = [
  {
    batchId: "001",
    shippingId: "2602177051",
    trackingLocation: "New York, NY",
    shippingAddress: "123 Main St, NY 10001",
    status: "Delivered",
    estimatedArrival: "15/06/2024",
  },
  {
    batchId: "002",
    shippingId: "2602177052",
    trackingLocation: "Los Angeles, CA",
    shippingAddress: "456 Maple Ave, CA 90001",
    status: "Delivered",
    estimatedArrival: "16/06/2024",
  },
  {
    batchId: "003",
    shippingId: "2602177053",
    trackingLocation: "Chicago, IL",
    shippingAddress: "789 Oak St, IL 60601",
    status: "Shipping",
    estimatedArrival: "17/06/2024",
  },
  {
    batchId: "004",
    shippingId: "2602177054",
    trackingLocation: "Houston, TX",
    shippingAddress: "321 Pine Rd, TX 77001",
    status: "Waiting Pickup",
    estimatedArrival: "18/06/2024",
  },
  {
    batchId: "005",
    shippingId: "2602177055",
    trackingLocation: "Phoenix, AZ",
    shippingAddress: "654 Cedar Ln, AZ 85001",
    status: "Waiting Pickup",
    estimatedArrival: "19/06/2024",
  },
  {
    batchId: "006",
    shippingId: "2602177056",
    trackingLocation: "Philadelphia, PA",
    shippingAddress: "987 Birch Blvd, PA 19101",
    status: "Cancelled",
    estimatedArrival: "20/06/2024",
  },
  {
    batchId: "007",
    shippingId: "2602177057",
    trackingLocation: "San Antonio, TX",
    shippingAddress: "123 Elm St, TX 78201",
    status: "Cancelled",
    estimatedArrival: "21/06/2024",
  },
  {
    batchId: "008",
    shippingId: "2602177058",
    trackingLocation: "San Diego, CA",
    shippingAddress: "456 Palm Dr, CA 92101",
    status: "Shipping",
    estimatedArrival: "22/06/2024",
  },
  {
    batchId: "009",
    shippingId: "2602177059",
    trackingLocation: "New York, NY",
    shippingAddress: "678 Main St, NY 10001",
    status: "Shipping",
    estimatedArrival: "23/06/2024",
  },
  {
    batchId: "010",
    shippingId: "2602177060",
    trackingLocation: "Los Angeles, CA",
    shippingAddress: "901 Maple Ave, CA 90001",
    status: "Shipping",
    estimatedArrival: "24/06/2024",
  },
  {
    batchId: "011",
    shippingId: "2602177061",
    trackingLocation: "Chicago, IL",
    shippingAddress: "786 Oak St, IL 60601",
    status: "Cancelled",
    estimatedArrival: "25/06/2024",
  },
  {
    batchId: "012",
    shippingId: "2602177062",
    trackingLocation: "Houston, TX",
    shippingAddress: "421 Pine Rd, TX 77001",
    status: "Cancelled",
    estimatedArrival: "26/06/2024",
  },
  {
    batchId: "013",
    shippingId: "2602177063",
    trackingLocation: "Phoenix, AZ",
    shippingAddress: "531 Cedar Ln, AZ 85001",
    status: "Delivered",
    estimatedArrival: "27/06/2024",
  },
  {
    batchId: "014",
    shippingId: "2602177064",
    trackingLocation: "Philadelphia, PA",
    shippingAddress: "699 Birch Blvd, PA 19101",
    status: "Delivered",
    estimatedArrival: "28/06/2024",
  },
  {
    batchId: "015",
    shippingId: "2602177065",
    trackingLocation: "San Antonio, TX",
    shippingAddress: "701 Elm St, TX 78201",
    status: "Cancelled",
    estimatedArrival: "29/06/2024",
  },
  {
    batchId: "016",
    shippingId: "2602177066",
    trackingLocation: "San Diego, CA",
    shippingAddress: "105 Palm Dr, CA 92101",
    status: "Shipping",
    estimatedArrival: "01/07/2024",
  },
  {
    batchId: "017",
    shippingId: "2602177067",
    trackingLocation: "New York, NY",
    shippingAddress: "888 Main St, NY 10001",
    status: "Waiting Pickup",
    estimatedArrival: "02/07/2024",
  },
  {
    batchId: "018",
    shippingId: "2602177068",
    trackingLocation: "Los Angeles, CA",
    shippingAddress: "698 Maple Ave, CA 90001",
    status: "Waiting Pickup",
    estimatedArrival: "03/07/2024",
  },
  {
    batchId: "019",
    shippingId: "2602177069",
    trackingLocation: "Chicago, IL",
    shippingAddress: "565 Oak St, IL 60601",
    status: "Cancelled",
    estimatedArrival: "04/07/2024",
  },
  {
    batchId: "020",
    shippingId: "2602177070",
    trackingLocation: "Houston, TX",
    shippingAddress: "430 Pine Rd, TX 77001",
    status: "Waiting Pickup",
    estimatedArrival: "05/07/2024",
  },
  {
    batchId: "021",
    shippingId: "2602177071",
    trackingLocation: "Phoenix, AZ",
    shippingAddress: "971 Cedar Ln, AZ 85001",
    status: "Waiting Pickup",
    estimatedArrival: "06/07/2024",
  },
  {
    batchId: "022",
    shippingId: "2602177072",
    trackingLocation: "Philadelphia, PA",
    shippingAddress: "808 Birch Blvd, PA 19101",
    status: "Cancelled",
    estimatedArrival: "07/07/2024",
  },
  {
    batchId: "023",
    shippingId: "2602177073",
    trackingLocation: "San Antonio, TX",
    shippingAddress: "787 Elm St, TX 78201",
    status: "Waiting Pickup",
    estimatedArrival: "08/07/2024",
  },
  {
    batchId: "024",
    shippingId: "2602177074",
    trackingLocation: "San Diego, CA",
    shippingAddress: "011 Palm Dr, CA 92101",
    status: "Cancelled",
    estimatedArrival: "09/07/2024",
  },
];

function ShipmentMain({togglePage, pages}) {
  const [activeButton, setActiveButton] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); // State to manage current page
  const itemsPerPage = 8; // Number of items per page
  const totalPages = Math.ceil(sampleShipmentData.length / itemsPerPage); // Calculate total pages

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="home-manager">
      <SideBar togglePage={togglePage} pages={pages}/>
      <div className="homeContainer-manager">
        <Navbar togglePage={togglePage} pages={pages}/>
        <div className="shipment-manager">Shipments</div>
        <div className="buttonsContainer-manager">
          <button
            className={`button-manager ${activeButton === "viewAll" ? "active" : ""}`}
            onClick={() => handleButtonClick("viewAll")}
          >
            View All
          </button>
          <button
            className={`button-manager ${activeButton === "inProgress" ? "active" : ""}`}
            onClick={() => handleButtonClick("inProgress")}
          >
            In Progress
          </button>
          <button
            className={`button-manager ${activeButton === "completed" ? "active" : ""}`}
            onClick={() => handleButtonClick("completed")}
          >
            Completed
          </button>
          <button
            className={`button-manager ${activeButton === "cancelled" ? "active" : ""}`}
            onClick={() => handleButtonClick("cancelled")}
          >
            Cancelled
          </button>
          <PageButtonsShipment
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
        
        <div className="shipment-container-manager">
          <div id="shipment" className="shipment-fields-manager">
            <div className="field-manager" >Batch ID</div>
            <div className="field-manager">Shipping ID</div>
            <div className="field-manager">Tracking Location</div>
            <div className="field-manager">Shipping Address</div>
            <div className="field-manager">Status Approval</div>
            <div className="field-manager">Estimated Arrival</div>
          </div>
        </div>
        <Table togglePage={togglePage} pages={pages}
          shipmentData={sampleShipmentData.slice(
            (currentPage - 1) * itemsPerPage,
            currentPage * itemsPerPage
          )}
        />
      </div>
    </div>
  );
}

export default ShipmentMain;