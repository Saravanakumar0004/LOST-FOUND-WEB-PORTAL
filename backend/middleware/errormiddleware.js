const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500 // Set default status code to 500 if not set

    res.status(statusCode);

    // Log the error for debugging purposes

    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack // Hide stack trace in production
    });
}

module.exports = { errorHandler };