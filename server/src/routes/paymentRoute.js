const Razorpay = require("razorpay");
const crypto = require("crypto");

const checkout = async (req, res) => {
  let instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_API_SECRET,
  });

  let options = {
    amount: Number(req.body.amount * 100), // amount in the smallest currency unit
    currency: "INR",
  };

  instance.orders.create(options, function (err, order) {
    if (err) {
      console.log(err);
      return res.send({ code: 500, message: "Internal Server Error..!" });
    }
    return res.send({ code: 200, message: "Order Created", data: order });
  });
};

const paymentVarification = async (req, res) => {
  // console.log(req.body);
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body.response;
  // console.log(req.body, "BODY");
  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_API_SECRET)
    .update(body.toString())
    .digest("hex");

  const isAuthentic = expectedSignature === razorpay_signature;
  // console.log(isAuthentic, "Authentic");

  if (isAuthentic) {
    // Database Comes Here

    res.send({ code: 200, message: "Payment Varified" });
  } else {
    res.send({ code: 500, message: "Invalid Payment Signature" });
  }
};

module.exports = { checkout, paymentVarification };
