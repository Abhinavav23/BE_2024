const Product = require("../models/productModel");

const getAllProducts = (req, res) => {
  // read from DB
  Product.find()
    .then((data) => {
      console.log("data", data);
      res.json({ status: "success", total: data.length, records: data });
    })
    .catch((err) => {
      res.send({ status: "failed", err: err.message });
    });
};

const createProduct = (req, res) => {
  console.log("body", req.body);
  const { totalQuantity, ...restFields } = req.body;
  const newProduct = { ...restFields, quantity: totalQuantity };
  console.log("newProduct", newProduct);

  Product.create(newProduct)
    .then((data) => {
      console.log("created data", data);
    })
    .catch((err) => {
      console.log("Error:", err.message);
    });
  res.send("created");

  //   insertMany --> list of data
};

const getOneProduct = (req, res) => {
  const { productId } = req.params;
  console.log("productId", productId);
  Product.findById(productId)
    .then((data) => {
      res.send({ status: "success", data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ message: err.message });
    });
};

const getFilteredProducts = (req, res) => {
//   Product.find({ category: "Appliances" })
//   Product.find({ price: 180000 })
//     .then((data) => {
//       res.send({ total: data.length, status: "success", data });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.send({ message: err.message });
//     });

    // Product.findOne({ price: 15000 })
    // .then((data) => {
    //   res.send({ total: data.length, status: "success", data });
    // })
    // .catch((err) => {
    //   console.log(err);
    //   res.send({ message: err.message });
    // });

    // Product.find({ rating: 4 }).limit(2)
    // .then((data) => {
    //   res.send({ total: data.length, status: "success", data });
    // })
    // .catch((err) => {
    //   console.log(err);
    //   res.send({ message: err.message });
    // });

    // Product.find({ rating: 4 })
    // // .select(["-name", "-price"])
    // .select({name: 1, price: 1})
    // .then((data) => {
    //   res.send({ total: data.length, status: "success", data });
    // })
    // .catch((err) => {
    //   console.log(err);
    //   res.send({ message: err.message });
    // });

    // operators: >, <, >=, <=, !==  ---> gt, lt, gte, lte, ne
    Product.find({ price: {$lte: 15000} })
    // .countDocuments()
    // .select(["-name", "-price"])
    .select({name: 1, price: 1})
    .then((data) => {
      res.send({ total: data.length, status: "success", data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ message: err.message });
    });

};

module.exports = {
  getAllProducts,
  createProduct,
  getOneProduct,
  getFilteredProducts,
};
