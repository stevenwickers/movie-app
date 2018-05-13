export default function autoBind(source, target){

    const keys = Object.getOwnPropertyNames(source.prototype);

    keys.map(key => {
        const item = source.prototype[key];
        const type = typeof item;

        if('function' === type && 'constructor' !== key){
            target[key] = item.bind(target);
        }

    })
}