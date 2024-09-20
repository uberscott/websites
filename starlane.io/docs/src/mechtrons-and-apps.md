# MECHTRONS & APPS

Mechtrons and Apps have special configurations because they reference WebAssembly binaries:

```
Mechtron(version=1.0.0) {

  Wasm {
    bin = ${bundle}/wasm/my-wasm.wasm;

    # a wasm MechtronGuest can contain many Kinds of mechtrons, so we need to tell it which one we are talking about
    mechtron = my-mechtron;
  }

}
```
