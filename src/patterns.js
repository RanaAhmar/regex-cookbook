/**
 * Regex Cookbook Patterns
 * Developed by Ahmar Hussain (Stackaura)
 * https://www.stackaura.com/
 */

const patterns = {
    USER_DATA: {
        EMAIL: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
        USERNAME: /^[a-z0-9_-]{3,16}$/,
        PASSWORD_STRONG: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, // Min 8 chars, 1 upper, 1 lower, 1 number, 1 special
        PHONE_US: /^\+?1?[-. ]?\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
    },
    WEB: {
        URL: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/,
        SLUG: /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
        IPV4: /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
        YOUTUBE_ID: /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/
    },
    SECURITY: {
        CREDIT_CARD_VISA: /^4[0-9]{12}(?:[0-9]{3})?$/,
        CREDIT_CARD_MASTERCARD: /^5[1-5][0-9]{14}$|^2(?:22[1-9]|2[3-9][0-9]|[3-6][0-9]{2}|7[01][0-9]|720)[0-9]{12}$/,
        JWT: /^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/
    }
};

module.exports = patterns;
