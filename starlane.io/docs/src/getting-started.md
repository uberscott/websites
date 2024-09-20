# **ALERT!**
*The Starlane crates and github repository are * **NOT** *currently in a working state!*  

A new update is coming soon at which time the docs and tutorials will be updated.



# DOCUMENTATION

## GETTING STARTED

### INSTALL RUST

To build Starlane you will need to have **rust** installed. Follow the official Rust instructions to [install Rust](https://www.rust-lang.org/tools/install).

### NIGHTLY TOOLCHAIN

Starlane requires the `nightly` toolchain for compilation. To switch to the `nightly` toolchain:

```bash
rustup toolchain install nightly
rustup default nightly
```

### BUILD AND INSTALL STARLANE

```bash
cargo install starlane
```

Congrats! You now have Starlane installed on your machine!

### START A STARLANE SERVER INSTANCE

Open a terminal and run the following command to start a server instance of Starlane:

```bash
starlane 
```

At this point starlane should be serving a Http Server on port 8080. Open a browser and point it to [http://localhost:8080/](http://localhost:8080/). You should see a "404" page (since there isn't a localhost space or routing bind.)


### COSMIC CLI
You need to have the cosmic-cli installed in order to access your starlane instance:

```bash
cargo install cosmic-cli
```
