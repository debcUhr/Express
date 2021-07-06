export class ErrorHandler extends Error {
    constructor(statusCode, message) {
        super();
        this.statusCode = statusCode;
        this.message = message;
    }
}

export const handleError = (err, res) => {
    const { statusCode, errorMessage } = err;
    const message = setErrorMessage(statusCode, errorMessage)

    res.status(statusCode).json({
        status: "error",
        statusCode,
        message
    });
};

const setErrorMessage = (status, defaultErr) => {
    switch (status) {
        case 400:
            return 'Invalid user details.'
        case 404:
            return 'User does not exists.'
        case 409:
            return 'User already exists.'
        default:
            return defaultErr
    }
}