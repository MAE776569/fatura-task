const router = require("express").Router()
const { query, validationResult } = require("express-validator")
const paginationMiddleware = require("../middlewares/pagination")

router.get(
  "/",
  paginationMiddleware,
  [query("category").isInt({ min: 1 }).toInt()],
  (req, res, next) => {
    const errors = validationResult(req).mapped()
    const { page, limit } = req.pagination
    const { category: categoryQuery } = req.query
    const category = errors.category ? undefined : categoryQuery

    const sql = category
      ? `SELECT min(price),
    product_id,
    provider_id,
    available,
    products.name name,
    products.image_uri image,
    categories.id category,
    providers.name provider
  FROM product_providers
    JOIN products ON product_id = products.id
    JOIN categories ON products.category_id = categories.id
    JOIN providers ON providers.id = provider_id
  WHERE products.category_id = ?
  GROUP BY product_id
  LIMIT ? OFFSET ?;`
      : `SELECT min(price),
      product_id,
      provider_id,
      available,
      products.name name,
      products.image_uri image,
      categories.id category,
      providers.name provider
    FROM product_providers
      JOIN products ON product_id = products.id
      JOIN categories ON products.category_id = categories.id
      JOIN providers ON providers.id = provider_id
    GROUP BY product_id
    LIMIT ? OFFSET ?;`

    const params = [limit, (page - 1) * limit]
    if (category) params.unshift(category)

    db.query(sql, params, (err, data) => {
      if (err) return next(err)
      return res.json({ data })
    })
  }
)

module.exports = router
