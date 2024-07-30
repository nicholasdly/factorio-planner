# Factorio Planner

> Factorio Planner is a web-based factory planner for Factorio, inspired by the Factory Planner mod.

## Development

**Factorio Planner** is built with the following tools:

- **Web Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Deployment**: [Vercel](https://vercel.com/)

### Installation

1. Fork and clone this repository using `git clone`.

2. Install npm packages:

```zsh
npm i
```

3. Run the following command to start a local development server.

```zsh
npm run dev
```

### Contributing

1. Create a new branch.

```zsh
# Creates a new feature branch off of the current branch
git checkout -b feature/<issue#>-<description>

# Creates a new bug fix branch off of the current branch
git checkout -b bugfix/<issue#>-<description>
```

2. Run the Prettier formatting script, and resolve any major issues caught by the linter. Commit those changes as well.

```zsh
npm run lint  # Alerts you of issues, but does not fix them for you
npm run format:write  # Applies Prettier formatting to the entire repo.
```

3. Stage and commit your changes.

```zsh
git add .
git commit -m <message>
git push origin <branch_name>
```

1. Push your changes and make a pull request.

```zsh
git push origin <branch_name>
```

## License

Licensed under the MIT License, Copyright © 2024