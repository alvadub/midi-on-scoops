# defaults
src := build
target := gh-pages
message := Release: $(shell date)

.PHONY: pages deploy

dist:
	@npm run dist

pages:
	@(git worktree remove $(src) --force > /dev/null 2>&1) || true
	@git worktree add $(src) $(target)
	@cd $(src) && rm -rf *
	@make -s dist
	@cp -r public/* $(src)

deploy:
	@cd $(src) && git add . && git commit -m "$(message)"
	@git push origin $(target) -f
