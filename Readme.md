# frontend-starter

A frontend starter with:

- An `editorconfig` file
- A `gitignore` file
- A `nvmrc` file to set the current node version to use
- A `Changelog.md` file
- A `Readme.md` file (this one)
- A `License.md` file with the MIT license
- [ESLint][eslint] configuration based on [eslint-config-frontwerk][eslint-config-frontwerk]
- [Prettier][prettier] to format your code together with a `prettierrc` config
- [Husky][huskyjs] git hooks for `post-checkout`, `post-merge`, `post-rebase`, `pre-commit` and `pre-push`.
- [lint-staged][lint-staged] to run ESLint on git staged files
- [precise-commits][precise-commits] to run Prettier only on lines you modified
- A `package.json` file to bring it all together. The file lists all the required dependencies and will install them
- A ready to go `src` folder

## Usage

```sh
npx degit tricinel/frontend-starter my-project
cd my-project
yarn # or npm install
```

## Contributing

- Run tests with `npm run test` or `yarn test`.
- Run the lint with `npm run lint` or `yarn lint`.

For details, check out the [Contributing][contributing] guide.

# LICENSE

MIT

[eslint]: https://eslint.org
[eslint-config-frontwerk]: https://github.com/tricinel/eslint-config-frontwerk
[prettier]: https://prettier.io/
[huskyjs]: https://github.com/typicode/husky
[lint-staged]: https://github.com/okonet/lint-staged
[precise-commits]: https://github.com/nrwl/precise-commits
[contributing]: ./Contributing.md
