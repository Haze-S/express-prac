export function logTime(req, res, next) {
    console.log(new Date());
    next();
}