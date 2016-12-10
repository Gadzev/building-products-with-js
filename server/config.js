exports.db = {
    host: process.env.EXPERTS_DB_URL || 'localhost',
    port: process.env.EXPERTS_DB_PORT || 28015,
    db: 'expertsdb',
};

exports.auth = {
    passwordSalt: process.env.EXPERTS_AUTH_PASSALT ||
        'Gq0twQYeoP6YWZY7iBc!NyhVavauPHB5Q6jPU$LMzcxw@SM&y$udLVnmF0qu!%XR',
    sessionSecret: process.env.EXPERTS_AUTH_SESSECRET ||
        'zXqGQtHii2r4CUtYrO4F7lb5xHpNlYvBhb4nQ87bDdSvxigNWtGtzxxdDtwM3pZl',
    jwtSecret: process.env.EXPERTS_AUTH_JWTSECRET ||
        'kjgHeIWRY1nCu30LX4wf7bwBvsE2jgm6bSxImVg5d9UsVfNHifBy2pnWyEJyQZtT',
};
