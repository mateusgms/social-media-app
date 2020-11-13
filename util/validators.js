module.exports.validateRegisterInput = (
    username,
    email,
    password,
    confirmPassord
) => {
    const errors = {};
    if (username === '') {
        errors = 'Username must not be empty';
    }
    if (username.trim() === '') {
        errors = 'username must not be empty';
    }
    if (email.trim() === '') {
        errors = 'email must not be empty';
    } else {
        const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
        if (!email.match(regEx)) {
            errors.email = 'Email must be a valid email address';
        }
    }
    if (password === '') {
        errors.password = 'Password must not empty';
    } else if (password !== confirmPassord) {
        errors.confirmPassord = 'Password must match';
    }

    return {
        errors,
        valid: Object.keys(errors).length < 1
    };
};
module.exports.validateLoginInput = (username, password) => {
    const errors = {};
    if (username === '') {
        errors = 'Username must not be empty';
    }
    if (username.trim() === '') {
        errors = 'Username must not be empty';
    }
    if (password.trim() === '') {
        errors = 'Password must not be empty';
    }
    return {
        errors,
        valid: Object.keys(errors).length < 1
    };
};