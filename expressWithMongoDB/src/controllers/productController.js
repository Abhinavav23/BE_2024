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
  Product.find({ price: { $lte: 15000 } })
    // .countDocuments()
    // .select(["-name", "-price"])
    .select({ name: 1, price: 1 })
    .then((data) => {
      res.send({ total: data.length, status: "success", data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ message: err.message });
    });
};

const updateExistingProduct = (req, res) => {
  const { productId } = req.params;
  const dataToBeUpdated = req.body;
  // Product.updateOne({category: "Appliances})
  // Product.updateMany({category: "Appliances"})
  Product.findByIdAndUpdate(productId, { $set: dataToBeUpdated }, { new: true })
    .then((data) => {
      console.log("data", data);
      res.send({ message: "update successful" });
    })
    .catch((err) => {
      console.log("data", data);
      res.status(400).send({ message: err.message });
    });
};

const updateOrCreateProduct = (req, res) => {
  // find by Id --> yes --> update | No --> create
  Product.updateOne({ price: 15670 }, req.body, { upsert: true })
    .then((data) => {
      console.log("data", data);
      res.send("updation successful");
    })
    .catch((err) => {
      console.log("data", data);
      res.status(400).send({ message: err.message });
    });
};

const deleteProduct = (req, res) => {
  const { productId } = req.params;
  Product.findByIdAndDelete(productId)
  .then((data) => {
    console.log("data", data);
    res.send({message: "deleted successfully"})
  })
  .catch((err) => {
    console.log(err);
    res.status(400).send({ message: err.message });
  })

//   Product.deleteOne({Filter logic})
//   Product.deleteMany({Filter logic})
};

const getPaginatedData = (req, res) => {
    const {pageNo, size} = req.query;
    // Product.find()
    // .skip((pageNo-1)*5)
    // .limit(size)
    // .then((data) => {
    //     console.log("data", data);
    //     res.send({total: data.length, records: data});
    // })
    // .catch((err) => {
    //     console.log("data", data);
    //     res.status(400).send({ message: err.message });
    // });

    Product.paginate({category: "Appliances"}, {page: pageNo, limit: size})
    .then((data) => {
        console.log("data", data);
        res.send({total: data.length, records: data});
    })
    .catch((err) => {
        console.log("data", data);
        res.status(400).send({ message: err.message });
    });
}

module.exports = {
  getAllProducts,
  createProduct,
  getOneProduct,
  getFilteredProducts,
  updateExistingProduct,
  updateOrCreateProduct,
  deleteProduct,
  getPaginatedData
};
