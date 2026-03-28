# url-switcher

An extension that allows user to quickly switch between Google accounts for Gmail, Drive, Calendar etc. with a single click.

## Supported Domains

via path params (loops accounts):

- `calendar.google.com`
- `drive.google.com`
- `mail.google.com`
- `docs.google.com/document`
- `docs.google.com/spreadsheets`
- `docs.google.com/presentation`
- `docs.google.com/videos`
- `docs.google.com/forms`

via query params (doesn't loop accounts):

- `meet.google.com`

## Available Scripts

In the project directory, you can run the following scripts:

### npm run dev

**Development Mode**: This command runs your extension in development mode. It will launch a new browser instance with your extension loaded. The page will automatically reload whenever you make changes to your code, allowing for a smooth development experience.

```bash
npm run dev
```

### npm run start

**Production Preview**: This command runs your extension in production mode. It will launch a new browser instance with your extension loaded, simulating the environment and behavior of your extension as it will appear once published.

```bash
npm run start
```

### npm run build

**Build for Production**: This command builds your extension for production. It optimizes and bundles your extension, preparing it for deployment to the target browser's store.

```bash
npm run build
```

## Learn More

To learn more about creating cross-browser extensions with Extension.js, visit the [official documentation](https://extension.js.org).
