import React, { useState } from "react";
import "../styles/Students.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";

const Students = () => {
  // State for form fields
  const [fullName, setFullName] = useState("");
  const [purpose, setPurpose] = useState("");
  const [outDate, setOutDate] = useState("");
  const [outTime, setOutTime] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Do something with the form data, e.g., send it to the server
    console.log("Form submitted:", {
      fullName,
      purpose,
      outDate,
      outTime,
    });

    // Reset form fields after submission
    setFullName("");
    setPurpose("");
    setOutDate("");
    setOutTime("");
  };

  const [modalVisible, setModalVisible] = useState(false);
  const [time, setTime] = useState("10:00");

  const openModal = () => {
    console.log("Opening modal");
    setModalVisible((currentModalVisible) => !currentModalVisible);
    console.log("modalVisible:", modalVisible);
  };

  const closeModal = () => {
    console.log("Close modal");
    setModalVisible(false);
  };

  const [selectedDate, setSelectedDate] = useState("");
  const [date, setDate] = useState(new Date());

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Selected Date:", selectedDate);
  // };

  return (
    <div className="main-std-div">
      {/* WHICH HOSTEL? */}
      <div className="hostel-div">
        <p>Which hostel are you from?</p>
        <select name="" id="">
          <option value="select">Select</option>
          <option value="Kumardhara">Kumardhara</option>
          <option value="Nethravathy">Nethravathy</option>
          <option value="Souparnika">Souparnika</option>
          <option value="Nandini">Nandini</option>
        </select>
      </div>

      <div className="students-div">
        {/* Modal */}
        {modalVisible && (
          <div
            className={`stud-modal ${modalVisible ? "active" : ""}`}
            onClick={closeModal}
          >
            <div
              className="stud-modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              {/* close button */}
              <span className="close" onClick={closeModal}>
                &times;
              </span>

              {/* FORM FILLING */}
              <div>
                <h2 className="outpass-modal">College Outpass Form</h2>
                <form className="form-modal" onSubmit={handleSubmit}>
                  {/* FULL NAME */}
                  <div className="fullname-div">
                    <label>
                      Full Name:
                      <input
                        className="fullname-input"
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                      />
                    </label>
                  </div>
                  <br />

                  {/* PURPOSE */}
                  <div className="purpose-div">
                    <label>
                      Purpose:
                      <input
                        className="purpose-input"
                        type="text"
                        value={purpose}
                        onChange={(e) => setPurpose(e.target.value)}
                      />
                    </label>
                  </div>
                  <br />

                  {/* OUT DATE */}
                  <div className="outdate-div">
                    <label>
                      Out Date:
                      <input
                        className="outdate-input"
                        type="date"
                        value={outDate}
                        onChange={(e) => setOutDate(e.target.value)}
                      />
                    </label>
                  </div>
                  <br />

                  <div className="outtime-div">
                    <label>
                      Out Time:
                      <input
                        className="outtime-input"
                        type="time"
                        value={outTime}
                        onChange={(e) => setOutTime(e.target.value)}
                      />
                    </label>
                  </div>

                  <br />

                  <button className="outpass-submit-btn" type="submit">Submit</button>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* Add this log to check the state */}
        {console.log("modalVisible state:", modalVisible)}

        {/* Apply links with onClick event */}
        <div className="card" style={{ width: "18rem", marginTop: "5%" }}>
          <div className="card-body">
            <h5 className="card-title">Outing</h5>
            <p className="card-text">Apply for Outing</p>
            <span className="card-link" onClick={openModal}>
              Apply!
            </span>
          </div>
        </div>

        <div className="card" style={{ width: "18rem", marginTop: "5%" }}>
          <div className="card-body">
            <h5 className="card-title">Leave</h5>
            <p className="card-text">Apply for Leave</p>
            <span className="card-link" onClick={openModal}>
              Apply!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Students;
