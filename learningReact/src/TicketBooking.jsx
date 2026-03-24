import React, { useReducer } from "react";

// Seat data with name and price
const seatsData = [
  { name: "A1", price: 100 }, { name: "A2", price: 100 }, { name: "A3", price: 100 },
  { name: "A4", price: 100 }, { name: "A5", price: 100 },
  { name: "B1", price: 150 }, { name: "B2", price: 150 }, { name: "B3", price: 150 },
  { name: "B4", price: 150 }, { name: "B5", price: 150 },
  { name: "C1", price: 200 }, { name: "C2", price: 200 }, { name: "C3", price: 200 },
  { name: "C4", price: 200 }, { name: "C5", price: 200 },
  { name: "D1", price: 250 }, { name: "D2", price: 250 }, { name: "D3", price: 250 },
  { name: "D4", price: 250 }, { name: "D5", price: 250 },
];

// Initial state
const initialState = {
  seats: Array(seatsData.length).fill(false), // false = available
  bookedSeats: [],
  totalPrice: 0
};

// Reducer function
function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_SEAT":
      const index = action.payload;
      const seatsCopy = [...state.seats];
      seatsCopy[index] = !seatsCopy[index];

      // Get booked seat names and calculate total price
      const bookedSeats = seatsCopy
        .map((selected, i) => (selected ? seatsData[i].name : null))
        .filter(Boolean);

      const totalPrice = seatsCopy
        .map((selected, i) => (selected ? seatsData[i].price : 0))
        .reduce((a, b) => a + b, 0);

      return { seats: seatsCopy, bookedSeats, totalPrice };

    case "RESET":
      return { seats: Array(seatsData.length).fill(false), bookedSeats: [], totalPrice: 0 };

    default:
      return state;
  }
}

function TicketBooking() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>🎬 Movie Ticket Booking</h1>
      <h3>Booked Seats: {state.bookedSeats.join(", ") || "None"}</h3>
      <h3>Total Price: ₹{state.totalPrice}</h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 60px)",
          gap: "10px",
          marginTop: "20px"
        }}
      >
        {seatsData.map((seat, index) => (
          <button
            key={seat.name}
            onClick={() => dispatch({ type: "TOGGLE_SEAT", payload: index })}
            style={{
              width: "60px",
              height: "60px",
              backgroundColor: state.seats[index]
                ? "green"
                : seat.price === 100
                ? "lightgray"
                : seat.price === 150
                ? "orange"
                : seat.price === 200
                ? "gold"
                : "red",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: "bold"
            }}
            title={`Seat: ${seat.name}, Price: ₹${seat.price}`}
          >
            {seat.name}
          </button>
        ))}
      </div>

      <button
        onClick={() => dispatch({ type: "RESET" })}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer"
        }}
      >
        Reset Seats
      </button>
    </div>
  );
}

export default TicketBooking;