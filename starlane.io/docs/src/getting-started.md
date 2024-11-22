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

```bash
starlane install
```
Follow the instructions to create a local postgres registry for starlane.

Congrats! You now have Starlane installed on your machine!



### START A STARLANE SERVER INSTANCE

Open a terminal and run the following command to start a server instance of Starlane:

```bash
starlane run
```


### ACCESS THE STARLANE TERMINAL

with `starlane run` executing... start a new terminal and execute:

```bash
starlane term
```

It should bring up a Command Line Interface for the running Starlane instance.
