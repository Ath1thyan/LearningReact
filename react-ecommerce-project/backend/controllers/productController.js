

exports.getProducts = (req, res, next) => {
    res.json({
        success : true,
        message: 'Get products is  working! '
    })
}


exports.getSingleProduct = (req, res, next) => {
    res.json({
        success : true,
        message: 'Get single product is  working! '
    })
}