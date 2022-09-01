export const handleError = (err, req, res, next) => {
    console.error(err.stack);
    const error = JSON.parse(err.message);
    res.status(error.statusCode).send(error.message);
}

