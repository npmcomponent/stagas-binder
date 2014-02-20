*This repository is a mirror of the [component](http://component.io) module [stagas/binder](http://github.com/stagas/binder). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/stagas-binder`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*

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

Unbind `event` listener `fn` for `el`.


### binder.once(`el`, `event`, `[selector]`, `fn`, `[capture]`)
> _returns_ el

Same as `.on` but will call `.off`
immediately after the first event.


## Credits

Used bits from [component/dom](https://github.com/component/dom) (MIT)

## License

MIT
