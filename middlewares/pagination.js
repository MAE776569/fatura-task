const { query, validationResult } = require("express-validator")

const paginationMiddleware = [
  // Validate query string
  query("page").isInt({ min: 1 }).toInt(),
  query("limit").isInt({ min: 1 }).toInt(),

  // Check for query string values
  (req, res, next) => {
    const errors = validationResult(req).mapped()
    const { page: pageQuery, limit: limitQuery } = req.query
    const page = errors.page ? 1 : pageQuery
    const limit = errors.limit ? 25 : limitQuery

    // Set pagination as req object
    req.pagination = { page, limit }
    next()
  },
]

module.exports = paginationMiddleware
