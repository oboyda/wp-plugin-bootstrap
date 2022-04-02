
class Utils {

    static isSet(val, key=null)
    {
        return (key ? (typeof val[key] !== 'undefined' && val[key] !== null) : (typeof val !== 'undefined' && val !== null));
    }

    static parseArgs(args={}, argsDefault={}, defaultRestricted=false, mergeArrays=false)
    {
        if(!this.isSet(args)) return argsDefault;
        if(!this.isSet(argsDefault)) return args;

        let _args = {};

        for(const key in argsDefault)
        {
            // if(typeof args[key] !== 'undefined')
            if(this.isSet(args, key))
            {
                // _args[key] = args[key];
                _args[key] = (Array.isArray(args[key]) && mergeArrays) ? (this.arrUnique(Array.isArray(argsDefault[key]) ? args[key].concat(argsDefault[key]) : args[key].concat([argsDefault[key]]))) : args[key];
            }
            else{
                _args[key] = argsDefault[key];
            }
        }
        if(!defaultRestricted)
        {
            for(const key in args)
            {
                // if(typeof _args[key] === 'undefined')
                if(!this.isSet(_args, key))
                {
                    _args[key] = args[key];                    
                }
            }
        }

        return _args;
    }

    static arrUnique(a)
    {
        const _a = [];
        a.forEach(ai => {
            if(_a.indexOf(ai) < 0) _a.push(ai);
        });
        return _a;
    }

    static cloneObject(obj)
    {
        let b = (Array.isArray(obj) ? [] : {});
        return Object.assign(b, obj);
    }

    static genRandomString(l=16)
    {
        return Math.random().toString(16).substr(2, l);
    }

    static subscribeToEvent(name, handler)
    {
        const _name = (name.indexOf('tilec__') === 0) ? name : 'tilec__' + name;
        document.body.addEventListener(_name, handler, false);
    }

    static unsubscribeFromEvent(name, handler)
    {
        const _name = (name.indexOf('tilec__') === 0) ? name : 'tilec__' + name;
        document.body.removeEventListener(_name, handler);
    }

    static dispatchEvent(name, data)
    {
        let args = {};

        if(this.isSet(data))
        {
            args.detail = data;
        }
        
        const _name = (name.indexOf('tilec__') === 0) ? name : 'tilec__' + name;
        const event = new CustomEvent(_name, args);
        
        document.body.dispatchEvent(event);
    }
}


export default Utils;
