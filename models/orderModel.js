const Order = require('../schemas/orderSchema')
const Product = require('../schemas/productSchema')
const User = require('../schemas/userSchema')




exports.createNewOrder = async (req, res) => {
    
    try {
        

        const orderRows = req.body.orderRows;
        let totalPrice = 0;
        for (const orderRow of orderRows) {
            const product = await Product.findById(orderRow.productId);
            totalPrice += orderRow.quantity * product.price;
        }

      
  
      const order = new Order({
          user: req.userId, 
          orderRows: orderRows,
          totalPrice: totalPrice
      })
  
      const savedOrder = await order.save();
      res.status(201).json(savedOrder);

 
    } catch (error) {
      console.error(error);
      res.status(400).json({ message: 'Could not save order' })
    }
  }

  exports.getOrders = async (req, res) => {
    const orders = await Order.find({ user: req.userId })

    res.status(200).json(orders)
  }


