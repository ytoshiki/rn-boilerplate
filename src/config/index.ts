const config = () => ({
  API_URL: process.env.EXPO_PUBLIC_API_URL ?? 'http://localhost:8000',
  API_KEY: process.env.EXPO_PUBLIC_API_URL ?? 'API_KEY',
});

export const consoleConfig = () => {
  if (process.env.NODE_ENV === 'development') {
    console.log('【環境変数】');
    console.log(config());
  }
};

export default config() as ReturnType<typeof config>;
