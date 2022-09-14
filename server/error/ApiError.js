class ApiError extends Error {
    constructor(status, message) {
        super();
        this.status = status;
        this.message = message;
    }

    static badRequest(message) {
        return new ApiError(404, message) // Ошибка в запросе
    }

    static internal(message) {
        return new ApiError(500, message) // Внутренняя ошибка
    }

    static forbidden(message) {
        return new ApiError(403, message) // Нет доступа
    }

}

module.exports = ApiError