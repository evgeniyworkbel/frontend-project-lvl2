install:
	npm ci
publish:
	npm publish --dry-run
link:
	sudo npm link
lint:
	npx eslint .
json-diff-without-format:
	gendiff __fixtures__/file1.json __fixtures__/file2.json