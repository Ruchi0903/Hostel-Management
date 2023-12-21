import React, { useState } from "react";
import "../styles/Students.css";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from "react-time-picker";
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';

const Students = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [time, setTime] = useState('10:00');

  const openModal = () => {
    console.log("Opening modal");
    setModalVisible((currentModalVisible) => !currentModalVisible);
    console.log("modalVisible:", modalVisible);
  };

  const closeModal = () => {
    console.log("Close modal");
    setModalVisible(false);
  };

  const [selectedDate, setSelectedDate] = useState('');
  const [date, setDate] = useState(new Date());

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Selected Date:', selectedDate);
  }

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
          <div className={`stud-modal ${modalVisible ? "active" : ""}`} onClick={closeModal}>
            <div className="stud-modal-content" onClick={(e) => e.stopPropagation()}>
              {/* close button */}
              <span className="close" onClick={closeModal}>&times;</span>

              {/* FORM FILLING */}
              <form onSubmit={handleSubmit}>
              <h3>Fill The Form</h3>

              {/* DATE */}
              <label>
                Date of Outing:
              </label>
                <DatePicker selected={date} onChange={(date) => setDate(date)} />
                <br />

                {/* TIME OF DEPARTURE */}
                <label>
                  Time of Departure:
                </label>
                <TimePicker onChange={setTime} value={time} />
                <br />

                {/* TIME OF ARRIVAL */}
                <label>
                  Time of Arrival:
                </label>
                <TimePicker onChange={setTime} value={time} />
                <br />

              </form>

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
