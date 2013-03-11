
# binder

high level common api for event/delegate

## Install

```sh
$ component-install stagas/binder
```

## API

### binder.on(`el`, `event`, `[selector]`, `fn`, `[capture]`)
> _returns_ el

Bind to `event` for `el` and invoke `fn(e)`.
When a `selector` is given then events are delegated.


### binder.off(`el`, `event`, `[selector]`, `fn`, `[capture]`)
> _returns_ el

Unbind to `event` for `el` and invoke `fn(e)`.
When a `selector` is given then delegated event
handlers are unbound.


### binder.once(`el`, `event`, `[selector]`, `fn`, `[capture]`)
> _returns_ el

Same as `.on` but will call `.off`
immediately after the first event.


## Credits

Used bits from [component/dom](https://github.com/component/dom) (MIT)

## License

MIT
