# Personal Portfolio

My personal portfolio website, built as a responsive static site with React, TypeScript, and Vite.

## Local development

You will need a current LTS release of [Node.js](https://nodejs.org/) and npm.

```bash
npm install
npm run dev
```

Vite will print the local URL (usually `http://localhost:5173`). Other available commands:

```bash
npm run lint     # Run ESLint
npm run build    # Type-check and create the production build in dist/
npm run preview  # Preview the production build locally
```

### Updating the resume

The Resume link always points to `public/Sravya-Aravapalli-Resume.pdf`. Replace it safely with:

```bash
npm run update-resume -- "/absolute/path/to/your-new-resume.pdf"
```

The command validates the PDF and copies it to the stable public filename. Commit the updated PDF and deploy normally; no React code or links need to change.

## Customizing the portfolio

The page content and project list live in `src/App.tsx`. Global styles, colors, typography, and responsive rules live in `src/styles.css`. Static files such as the favicon belong in `public/` and can be referenced from the site root (for example, `/favicon.svg`).

Portfolio content is sourced from Sravya's resume and public GitHub repositories. Update `src/App.tsx` when experience, projects, or links change.

## Deploying to Vercel

1. Push this repository to GitHub, GitLab, or Bitbucket.
2. In [Vercel](https://vercel.com/new), import the repository.
3. Vercel will detect Vite and use `npm run build` with `dist` as the output directory.
4. Select **Deploy**. No environment variables or secrets are required.

Future pushes to the production branch will trigger automatic deployments. Pull requests receive preview deployments when supported by the connected Git provider.
