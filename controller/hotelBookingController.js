const hotelBookingModel = require("../models/hotelBookingModel");

exports.getAllBookedHotel = async (req, res) => {
  const response = await hotelBookingModel.getAllBookedHotelModel();
  res.send(response);
};

exports.getUserBookedHotel = async (req, res) => {
  const userEmail = req.query.email;

  const response = await hotelBookingModel.getUserBookedHotelModel(userEmail);
  res.send(response);
};

exports.getSingleBookHotel = async (req, res) => {
  const bookedId = req.query.id;
  const response = await hotelBookingModel.getUserBookedSingleHotelModel(
    bookedId
  );
  res.send(response);
};

exports.postHotelBookings = async (req, res) => {
  const bookedHotel = req.body;

  const response = await hotelBookingModel.postHotelBookingModel(bookedHotel);
  res.send(response);
};

exports.deleteHotelBookings = async (req, res) => {
  const id = req.query.id;
  const response = await hotelBookingModel.deleteHotelBookingModel(id);
  res.send(response);
};

exports.updateBookedHotelPaymentInfo = async (req, res) => {
  const id = req.query.id;
  const transactionID = req.body.transactionID;
  const response = await hotelBookingModel.updateBookedHotelPaymentModel(
    id,
    transactionID
  );
  res.send(response);
};
