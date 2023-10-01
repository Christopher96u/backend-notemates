export type AllConfigType = {
    app: AppConfig;
};
export type AppConfig = {
    nodeEnv: string;
    name: string;
    port: number;
    apiPrefix: string;
};