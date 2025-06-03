build:
	$(MAKE) -C uberscott.com all
	$(MAKE) -C starlane.io all
	$(MAKE) -C astrobattle.com all

deploy: build
	skaffold run

all: build 


clean:
	$(MAKE) -C uberscott.com clean
	$(MAKE) -C starlane.io clean
	$(MAKE) -C astrobattle.com clean





