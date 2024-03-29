export type AllConfigType = {
    app: AppConfig;
    database: DatabaseConfig;
    auth: AuthConfig;
    mail: MailConfig;
};

export type AppConfig = {
    nodeEnv: string;
    name: string;
    port: number;
    apiPrefix: string;
    frontendDomain?: string;
    workingDirectory: string;
    fallbackLanguage: string;
    headerLanguage: string;
};

export type DatabaseConfig = {
    url?: string;
    type?: string;
    host?: string;
    port?: number;
    password?: string;
    name?: string;
    username?: string;
    synchronize?: boolean;
    maxConnections: number;
    sslEnabled?: boolean;
    rejectUnauthorized?: boolean;
    ca?: string;
    key?: string;
    cert?: string;
};

export type AuthConfig = {
    secret?: string;
    expires?: string;
    refreshSecret?: string;
    refreshExpires?: string;
};

export type MailConfig = {
    port: number;
    host?: string;
    user?: string;
    password?: string;
    defaultEmail?: string;
    defaultName?: string;
    ignoreTLS: boolean;
    secure: boolean;
    requireTLS: boolean;
};